type LeetCodeGraphQLResponse = {
  data?: {
    userProfileUserQuestionProgressV2?: {
      numAcceptedQuestions?: Array<{
        difficulty: "EASY" | "MEDIUM" | "HARD";
        count: number;
      }>;
    };
    matchedUser?: {
      submitStatsGlobal?: {
        acSubmissionNum?: Array<{
          difficulty: "All" | "Easy" | "Medium" | "Hard";
          count: number;
          submissions: number;
        }>;
      };
      profile?: {
        ranking?: number;
      };
      userCalendar?: {
        streak?: number;
        totalActiveDays?: number;
        submissionCalendar?: string;
      };
    };
    userContestRanking?: {
      rating?: number;
      globalRanking?: number;
    } | null;
  };
};

export type LeetCodeHeatmapCell = {
  dateKey: string;
  dateLabel: string;
  submissions: number;
  intensity: 0 | 1 | 2 | 3 | 4;
};

export type LiveLeetCodeStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number | null;
  contestRating: number | null;
  ranking: number | null;
  streak: number | null;
  totalActiveDays: number;
  totalRecentSubmissions: number;
  heatmap: LeetCodeHeatmapCell[];
};

const LEETCODE_QUERY = `
  query portfolioLeetCode($username: String!) {
    userProfileUserQuestionProgressV2(userSlug: $username) {
      numAcceptedQuestions {
        difficulty
        count
      }
    }
    matchedUser(username: $username) {
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      profile {
        ranking
      }
      userCalendar {
        streak
        totalActiveDays
        submissionCalendar
      }
    }
    userContestRanking(username: $username) {
      rating
      globalRanking
    }
  }
`;

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function getIntensity(submissions: number): 0 | 1 | 2 | 3 | 4 {
  if (submissions <= 0) return 0;
  if (submissions <= 1) return 1;
  if (submissions <= 3) return 2;
  if (submissions <= 6) return 3;
  return 4;
}

function toUtcDateKey(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseCalendar(submissionCalendar: string | undefined, days: number): LeetCodeHeatmapCell[] {
  let calendarEntries: Record<string, number | string> = {};

  if (submissionCalendar) {
    try {
      calendarEntries = JSON.parse(submissionCalendar) as Record<string, number>;
    } catch {
      calendarEntries = {};
    }
  }

  const perDateSubmissions = new Map<string, number>();

  for (const [unixTimestamp, submissions] of Object.entries(calendarEntries)) {
    const timestamp = Number(unixTimestamp);
    const submissionCount = Number(submissions);

    if (!Number.isFinite(timestamp) || !Number.isFinite(submissionCount)) {
      continue;
    }

    const dateKey = toUtcDateKey(new Date(timestamp * 1000));
    perDateSubmissions.set(dateKey, submissionCount);
  }

  const now = new Date();
  const endDateUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const heatmap: LeetCodeHeatmapCell[] = [];

  for (let offset = days - 1; offset >= 0; offset -= 1) {
    const date = new Date(endDateUtc.getTime() - offset * ONE_DAY_MS);
    const dateKey = toUtcDateKey(date);
    const submissions = perDateSubmissions.get(dateKey) ?? 0;

    heatmap.push({
      dateKey,
      submissions,
      intensity: getIntensity(submissions),
      dateLabel: new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      }).format(date),
    });
  }

  return heatmap;
}

export async function getLiveLeetCodeStats(username: string): Promise<LiveLeetCodeStats | null> {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: LEETCODE_QUERY,
        variables: { username },
      }),
      next: {
        revalidate: 60 * 30,
      },
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as LeetCodeGraphQLResponse;
    const submissionStats = payload.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum ?? [];
    const solvedStats = payload.data?.userProfileUserQuestionProgressV2?.numAcceptedQuestions ?? [];

    const easySolved = solvedStats.find((item) => item.difficulty === "EASY")?.count ?? 0;
    const mediumSolved = solvedStats.find((item) => item.difficulty === "MEDIUM")?.count ?? 0;
    const hardSolved = solvedStats.find((item) => item.difficulty === "HARD")?.count ?? 0;
    const totalSolved = easySolved + mediumSolved + hardSolved;

    const acceptedSubmissions = submissionStats.find((item) => item.difficulty === "All")?.count ?? 0;
    const totalSubmissions = submissionStats.find((item) => item.difficulty === "All")?.submissions ?? 0;

    const acceptanceRate = totalSubmissions > 0 ? (acceptedSubmissions / totalSubmissions) * 100 : null;

    const calendar = payload.data?.matchedUser?.userCalendar;
    const heatmap = parseCalendar(calendar?.submissionCalendar, 140);
    const totalRecentSubmissions = heatmap.reduce((sum, day) => sum + day.submissions, 0);

    return {
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      acceptanceRate,
      contestRating: payload.data?.userContestRanking?.rating ?? null,
      ranking: payload.data?.userContestRanking?.globalRanking ?? payload.data?.matchedUser?.profile?.ranking ?? null,
      streak: calendar?.streak ?? null,
      totalActiveDays: calendar?.totalActiveDays ?? 0,
      totalRecentSubmissions,
      heatmap,
    };
  } catch {
    return null;
  }
}
