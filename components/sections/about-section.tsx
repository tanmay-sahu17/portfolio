import { FadeIn } from "@/components/ui/fade-in";

export function AboutSection() {
  return (
    <section id="about" className="section-shell border-t border-zinc-900 py-24 md:py-32">
      <FadeIn className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <p className="kicker">About</p>
        <div className="space-y-8 text-zinc-300">
          <p className="text-xl leading-relaxed text-zinc-100 md:text-2xl">
            I am a Computer Science student at Shri Shankaracharya Institute focused on
            full-stack product development, mobile apps, and practical problem solving.
          </p>
          <p className="max-w-3xl text-base leading-relaxed md:text-lg">
            I enjoy turning product ideas into reliable, production-ready applications.
            At Acedemor, I shipped user-facing features and responsive layouts for real users.
            At Skyvo Technologies, I learned how teams plan, design, and build scalable software.
            I also collaborated with my college Center of Excellence team to deliver
            government-focused projects with practical impact.
          </p>
          <div className="grid gap-3 text-sm tracking-[0.16em] uppercase text-zinc-400 sm:grid-cols-2">
            <p>Data Structures & Algorithms</p>
            <p>Full Stack Product Development</p>
            <p>Flutter & React Interfaces</p>
            <p>Node.js, PHP & MySQL Backends</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
