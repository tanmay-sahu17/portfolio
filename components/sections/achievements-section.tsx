import { FadeIn } from "@/components/ui/fade-in";
import { achievements } from "@/lib/portfolio-data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell border-t border-zinc-900 py-24 md:py-32">
      <FadeIn className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <p className="kicker">Achievements</p>
        <div className="space-y-12">
          <ul className="space-y-8">
            {achievements.map((item) => (
              <li key={item.title} className="space-y-2 border-b border-zinc-900 pb-6">
                <h3 className="text-2xl text-zinc-100">{item.title}</h3>
                <p className="max-w-2xl text-zinc-300">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
