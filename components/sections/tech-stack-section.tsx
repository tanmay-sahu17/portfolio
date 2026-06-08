import { FadeIn } from "@/components/ui/fade-in";
import { techStack } from "@/lib/portfolio-data";
import type { IconType } from "react-icons";
import {
  SiArduino,
  SiDart,
  SiExpress,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVsco,
} from "react-icons/si";
import {
  TbApi,
  TbBolt,
  TbCircuitResistor,
  TbLock,
} from "react-icons/tb";

const techIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  PHP: SiPhp,
  "REST APIs": TbApi,
  Authentication: TbLock,
  Flutter: SiFlutter,
  Dart: SiDart,
  Arduino: SiArduino,
  Sensors: TbCircuitResistor,
  "Automation Logic": TbBolt,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Postman: SiPostman,
  "VS Code": SiVsco,
};

export function TechStackSection() {
  return (
    <section id="tech-stack" className="section-shell border-t border-zinc-900 py-24 md:py-32">
      <FadeIn className="space-y-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <p className="kicker">Tech Stack</p>
          <p className="max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
            Core technologies I use to design, build, and ship reliable digital products
            across web, mobile, and backend systems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {techStack.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6 md:p-7"
            >
              <h3 className="text-sm tracking-[0.14em] text-zinc-400 uppercase">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1 text-[11px] tracking-[0.14em] text-zinc-300 uppercase"
                  >
                    {(() => {
                      const Icon = techIcons[item];

                      return Icon ? <Icon className="text-sm text-zinc-400" aria-hidden="true" /> : null;
                    })()}
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
