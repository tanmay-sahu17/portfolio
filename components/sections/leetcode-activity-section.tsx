import { FadeIn } from "@/components/ui/fade-in";
import { getLiveLeetCodeStats } from "@/lib/leetcode";
import { profile } from "@/lib/portfolio-data";

const heatmapColors = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

const buildEmptyHeatmap = (days: number) =>
  Array.from({ length: days }, (_, index) => ({
    dateKey: `empty-${index + 1}`,
    dateLabel: "No activity data",
    submissions: 0,
    intensity: 0 as const,
  }));

export async function LeetCodeActivitySection() {
  const liveStats = await getLiveLeetCodeStats(profile.leetcodeUsername);
  const heatmap = liveStats?.heatmap.length ? liveStats.heatmap : buildEmptyHeatmap(140);
  const firstDate = heatmap[0]?.dateKey ? new Date(`${heatmap[0].dateKey}T00:00:00Z`) : null;
  const leadingEmptyCells = firstDate ? firstDate.getUTCDay() : 0;
  const paddedHeatmap = [
    ...Array.from({ length: leadingEmptyCells }, (_, index) => ({
      dateKey: `pad-${index + 1}`,
      dateLabel: "No activity data",
      submissions: 0,
      intensity: 0 as const,
      isPadding: true,
    })),
    ...heatmap.map((day) => ({ ...day, isPadding: false })),
  ];

  return (
    <section id="leetcode-activity" className="section-shell border-t border-zinc-900 py-24 md:py-32">
      <FadeIn className="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <p className="kicker">LeetCode Activity</p>
          <p className="max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
            Live problem-solving snapshot sourced directly from LeetCode with consistency, progress, and
            recent submission activity.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/45 p-4 md:p-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-zinc-700 bg-zinc-900/90 px-3 py-1 text-zinc-300">
                  <span className="font-semibold text-zinc-100">{liveStats?.streak ?? 0}</span> day streak
                </span>
                <span className="rounded-full border border-zinc-700 bg-zinc-900/90 px-3 py-1 text-zinc-300">
                  <span className="font-semibold text-zinc-100">{liveStats?.totalActiveDays ?? 0}</span> active days
                </span>
                <span className="rounded-full border border-zinc-700 bg-zinc-900/90 px-3 py-1 text-zinc-300">
                  <span className="font-semibold text-zinc-100">{liveStats?.totalRecentSubmissions ?? 0}</span> submissions (140d)
                </span>
              </div>

              <a
                href={`https://leetcode.com/u/${profile.leetcodeUsername}/`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/90 px-4 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-zinc-200 uppercase transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-800"
              >
                Open LeetCode
              </a>
            </div>

            <div className="overflow-x-auto">
              <div className="grid w-max grid-flow-col grid-rows-7 gap-[4px]">
                {paddedHeatmap.map((day) => (
                  <span
                    key={day.dateKey}
                    title={
                      day.isPadding
                        ? "No activity data"
                        : `${day.dateLabel}: ${day.submissions} submission${day.submissions === 1 ? "" : "s"}`
                    }
                    className="h-[10px] w-[10px] rounded-[2px] md:h-[11px] md:w-[11px]"
                    style={{ backgroundColor: heatmapColors[day.intensity] }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-zinc-400">
              <span>Less</span>
              {heatmapColors.map((color) => (
                <span key={color} className="h-[9px] w-[9px] rounded-[2px]" style={{ backgroundColor: color }} />
              ))}
              <span>More</span>
            </div>

            {!liveStats ? (
              <p className="mt-3 text-xs text-zinc-500">
                Live LeetCode stats are temporarily unavailable. Section is showing a graceful fallback.
              </p>
            ) : null}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
