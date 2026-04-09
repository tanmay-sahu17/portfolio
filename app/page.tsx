import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { ActivityGraphSection } from "@/components/sections/activity-graph-section";
import { LeetCodeActivitySection } from "@/components/sections/leetcode-activity-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SectionNav } from "@/components/ui/section-nav";

export default function Home() {
  return (
    <div className="relative overflow-x-clip pb-14">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-900/80 bg-black/65 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
          <p className="text-xs tracking-[0.2em] text-zinc-300 uppercase">TS</p>
          <SectionNav />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ResumeSection />
        <ActivityGraphSection />
        <LeetCodeActivitySection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  );
}
