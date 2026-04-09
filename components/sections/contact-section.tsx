import { FadeIn } from "@/components/ui/fade-in";
import { UnderlineLink } from "@/components/ui/underline-link";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell border-t border-zinc-900 py-24 md:py-32">
      <FadeIn className="space-y-8">
        <p className="kicker">Contact</p>
        <h2 className="font-editorial max-w-4xl text-4xl leading-[1.05] text-zinc-100 md:text-6xl">
          Building something intentional? Let us turn it into a production-ready product.
        </h2>
        <p className="max-w-2xl text-zinc-300">
          Open to full-time roles, freelance collaborations, and high-impact product builds.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="mailto:tanmaysahu015@gmail.com?subject=Hiring%20Inquiry%20-%20Tanmay%20Sahu"
            className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-100 px-6 py-2 text-xs font-semibold tracking-[0.16em] text-zinc-950 uppercase transition hover:-translate-y-0.5 hover:bg-white"
          >
            Contact Me
          </a>
          <a
            href="/assets/tanmay-resume.pdf"
            download="Tanmay-Sahu-Resume.pdf"
            className="inline-flex items-center rounded-full border border-zinc-700 px-6 py-2 text-xs font-semibold tracking-[0.16em] text-zinc-200 uppercase transition hover:-translate-y-0.5 hover:border-zinc-500"
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/tanmay-sahu-3400422b5/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-6 py-2 text-xs font-semibold tracking-[0.16em] text-zinc-200 uppercase transition hover:-translate-y-0.5 hover:border-zinc-600"
          >
            Book a Quick Chat
          </a>
        </div>
        <div className="flex flex-wrap gap-6 pt-4">
          <UnderlineLink href="mailto:tanmaysahu015@gmail.com">tanmaysahu015@gmail.com</UnderlineLink>
          <UnderlineLink href="tel:+916261193015">+91 62611 93015</UnderlineLink>
          <UnderlineLink href="https://github.com/tanmay-sahu17" external>
            GitHub
          </UnderlineLink>
          <UnderlineLink href="https://www.linkedin.com/in/tanmay-sahu-3400422b5/" external>
            LinkedIn
          </UnderlineLink>
          <UnderlineLink href="https://leetcode.com/u/tanmaysahu015/" external>
            LeetCode
          </UnderlineLink>
        </div>
      </FadeIn>
    </section>
  );
}
