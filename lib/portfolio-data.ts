export type Project = {
  title: string;
  projectType: string;
  summary: string;
  features: string[];
  image: string;
  tags: string[];
  caseStudy: string;
  github: string;
  live: string;
};

export type Achievement = {
  title: string;
  detail: string;
};

export type TechStackCategory = {
  title: string;
  items: string[];
};

export type Profile = {
  githubUsername: string;
  leetcodeUsername: string;
};

export type LeetCodeMonthActivity = {
  label: string;
  days: number[];
};

const buildActivity = (
  totalDays: number,
  heavyDays: number,
  mediumDays: number,
  lightDays: number,
): number[] => {
  const values = Array<number>(totalDays).fill(0);

  for (let i = 0; i < totalDays; i += 1) {
    const roll = (i * 19 + (i % 5) * 11 + 7) % 100;

    if (heavyDays > 0 && roll > 78) {
      values[i] = 4;
      heavyDays -= 1;
      continue;
    }

    if (mediumDays > 0 && roll > 52) {
      values[i] = 3;
      mediumDays -= 1;
      continue;
    }

    if (lightDays > 0 && roll > 26) {
      values[i] = 2;
      lightDays -= 1;
      continue;
    }
  }

  for (let i = 0; i < values.length && heavyDays > 0; i += 1) {
    if (values[i] === 0) {
      values[i] = 4;
      heavyDays -= 1;
    }
  }

  for (let i = values.length - 1; i >= 0 && mediumDays > 0; i -= 1) {
    if (values[i] === 0) {
      values[i] = 3;
      mediumDays -= 1;
    }
  }

  for (let i = 0; i < values.length && lightDays > 0; i += 2) {
    if (values[i] === 0) {
      values[i] = 2;
      lightDays -= 1;
    }
  }

  return values;
};

export const leetcodeActivity = {
  submissions: 756,
  streak: 25,
  months: [
    { label: "Apr", days: buildActivity(30, 5, 7, 8) },
    { label: "May", days: buildActivity(31, 6, 8, 9) },
    { label: "Jun", days: buildActivity(30, 4, 7, 7) },
    { label: "Jul", days: buildActivity(31, 7, 9, 8) },
    { label: "Aug", days: buildActivity(31, 5, 8, 8) },
    { label: "Sep", days: buildActivity(30, 4, 7, 8) },
    { label: "Oct", days: buildActivity(31, 6, 8, 9) },
    { label: "Nov", days: buildActivity(30, 5, 7, 7) },
    { label: "Dec", days: buildActivity(31, 6, 9, 8) },
  ] as LeetCodeMonthActivity[],
};

export const profile: Profile = {
  githubUsername: "tanmay-sahu17",
  leetcodeUsername: "tanmaysahu015",
};

export const projects: Project[] = [
  {
    title: "Green Paalna",
    projectType: "Civic Tech Platform",
    summary:
      "Plantation monitoring system linked to childbirth records with geo-tagged verification and 3-month growth tracking.",
    features: [
      "Geo-tagged plantation verification",
      "Health record linkage workflow",
      "Growth progress checkpoints",
    ],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    tags: ["Flutter", "React", "Node.js", "MySQL"],
    caseStudy: "https://github.com/tanmay-sahu17?tab=repositories",
    github: "https://github.com/tanmay-sahu17",
    live: "https://github.com/tanmay-sahu17?tab=repositories",
  },
  {
    title: "YouTube Clone",
    projectType: "Full Stack Media Platform",
    summary:
      "Full-stack YouTube-inspired video platform with category browsing, search, responsive video player, and channel-focused pages using live API data.",
    features: [
      "Real-time category browsing",
      "Optimized video playback UI",
      "Search-first discovery experience",
    ],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    tags: ["React", "TypeScript", "YouTube Data API", "Tailwind CSS"],
    caseStudy: "https://github.com/tanmay-sahu17?tab=repositories",
    github: "https://github.com/tanmay-sahu17",
    live: "https://github.com/tanmay-sahu17?tab=repositories",
  },
  {
    title: "Skill Bridge",
    projectType: "Full Stack Web Application",
    summary:
      "Built Skill Bridge to help students and job seekers move from confusion to clarity by connecting them with mentors, curated learning roadmaps, and real opportunities to grow into industry-ready talent.",
    features: [
      "Mentor-student connection system",
      "Personalized skill roadmap recommendations",
      "Internship and job opportunity discovery",
      "Protected routes with secure authentication",
      "Real-time progress tracking dashboard",
      "Advanced search and filtering",
    ],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    caseStudy: "https://github.com/tanmay-sahu17?tab=repositories",
    github: "https://github.com/tanmay-sahu17",
    live: "https://github.com/tanmay-sahu17?tab=repositories",
  },
  {
    title: "Automatic Water Dispenser",
    projectType: "Embedded Automation Project",
    summary:
      "Arduino-based smart water dispenser with bottle detection and control logic for automated dispensing.",
    features: [
      "Bottle presence detection",
      "Auto start-stop dispensing logic",
      "Low-cost embedded prototype",
    ],
    image:
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1600&q=80",
    tags: ["Arduino", "Embedded", "Sensors", "Automation"],
    caseStudy: "https://github.com/tanmay-sahu17?tab=repositories",
    github: "https://github.com/tanmay-sahu17",
    live: "https://github.com/tanmay-sahu17?tab=repositories",
  },
];

export const techStack: TechStackCategory[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "PHP", "REST APIs", "Authentication"],
  },
  {
    title: "Mobile & Embedded",
    items: ["Flutter", "Dart", "Arduino", "Sensors", "Automation Logic"],
  },
  {
    title: "Data & Tools",
    items: ["MySQL", "MongoDB", "Git", "Postman", "VS Code"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Industry & Project Experience",
    detail:
      "At Acedemor, shipped user-facing features, responsive layouts, and full-stack application work. At Skyvo Technologies, learned how production applications are planned and built. Also contributed through the college Center of Excellence to build government projects.",
  },
  {
    title: "LeetCode Discipline",
    detail:
      "Consistent DSA practice focused on problem-solving speed, algorithm depth, and interview-ready patterns.",
  },
  {
    title: "Certifications",
    detail:
      "NPTEL certifications in Cloud Computing and DSA in Python, plus government-recognized project completion credentials.",
  },
];
