"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { UnderlineLink } from "@/components/ui/underline-link";

export function HeroSection() {
  return (
    <section id="hero" className="section-shell pt-28 md:pt-36">
      <div className="grid gap-12 lg:grid-cols-[1.35fr_0.9fr] lg:items-start">
        <div className="space-y-10">
          <p className="kicker">SOFTWARE ENGINEER</p>
          <TextReveal
            className="font-editorial text-5xl leading-[0.92] tracking-tight text-zinc-100 sm:text-6xl md:text-8xl"
            lines={["Tanmay Sahu", "Crafting elegant,", "high-performance", "digital products with purpose."]}
          />
          <motion.p
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-balance text-lg leading-relaxed text-zinc-300 md:text-xl"
          >
            I blend design thinking with engineering to build fast, scalable, and user-first
            applications. From smooth frontend experiences to reliable backend systems, I focus
            on products that leave a lasting impression.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-6 pt-4"
          >
            <UnderlineLink href="https://github.com/tanmay-sahu17" external>
              GitHub
            </UnderlineLink>
            <UnderlineLink href="https://www.linkedin.com/in/tanmay-sahu-3400422b5/" external>
              LinkedIn
            </UnderlineLink>
            <UnderlineLink href="https://leetcode.com/u/tanmaysahu015/" external>
              LeetCode
            </UnderlineLink>
            <UnderlineLink href="mailto:tanmaysahu015@gmail.com">Email</UnderlineLink>
            <UnderlineLink href="#projects">Selected Work</UnderlineLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.15, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:ml-auto"
        >
          <div className="relative overflow-hidden rounded-full border border-zinc-700 bg-zinc-950/60 p-3">
            <div className="relative aspect-square overflow-hidden rounded-full">
              <Image
                src="/assets/profile.svg"
                alt="Tanmay Sahu profile picture"
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 30vw"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
