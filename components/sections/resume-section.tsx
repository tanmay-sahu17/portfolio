import { FadeIn } from "@/components/ui/fade-in";
import { UnderlineLink } from "@/components/ui/underline-link";

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell border-t border-zinc-900 py-24 md:py-32">
      <FadeIn className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <p className="kicker">Resume</p>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8 md:p-12">
          <h3 className="font-editorial text-3xl text-zinc-100 md:text-4xl">Resume Snapshot</h3>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Includes industry exposure, education, core skills, certifications, and project
            execution across web, mobile, and system-driven builds.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <UnderlineLink href="/assets/tanmay-resume.pdf" external>
              View Resume
            </UnderlineLink>
            <a
              href="/assets/tanmay-resume.pdf"
              download="Tanmay-Sahu-Resume.pdf"
              className="group relative inline-flex items-center gap-2 text-sm tracking-[0.16em] uppercase text-zinc-300 transition-colors duration-300 hover:text-zinc-100"
            >
              <span>Download Resume (PDF)</span>
              <span className="relative inline-block h-px w-8 overflow-hidden bg-zinc-700">
                <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-zinc-100 transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </span>
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
