"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { UnderlineLink } from "@/components/ui/underline-link";
import { projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell border-t border-zinc-900 py-24 md:py-32">
      <FadeIn className="space-y-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <p className="kicker">Projects</p>
          <p className="max-w-3xl text-xl leading-relaxed text-zinc-200 md:text-2xl">
            A curated set of product builds where interface precision and engineering depth
            are treated with equal importance.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              projectType={project.projectType}
              summary={project.summary}
              features={project.features}
              image={project.image}
              tags={project.tags}
              caseStudy={project.caseStudy}
              github={project.github}
              live={project.live}
              delay={index * 0.08}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

type ProjectCardProps = {
  title: string;
  projectType: string;
  summary: string;
  features: string[];
  image: string;
  tags: string[];
  caseStudy: string;
  github: string;
  live: string;
  delay: number;
};

function ProjectCard({
  title,
  projectType,
  summary,
  features,
  image,
  tags,
  caseStudy,
  github,
  live,
  delay,
}: ProjectCardProps) {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        setPointer({ x, y });
      }}
      className="group overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/45 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.95)] backdrop-blur-md"
      style={{
        backgroundImage: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%)`,
      }}
    >
      <div className="grid gap-8 p-5 md:grid-cols-[1.2fr_1fr] md:p-6">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between gap-6 p-2 md:p-4">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-zinc-700/80 bg-zinc-900/70 px-3 py-1 text-[10px] tracking-[0.18em] text-zinc-300 uppercase">
                Featured Project
              </span>
              <span className="text-xs tracking-[0.15em] text-zinc-500 uppercase">{projectType}</span>
            </div>
            <h3 className="font-editorial text-3xl leading-tight text-zinc-100 md:text-4xl">{title}</h3>
            <p className="text-zinc-300">{summary}</p>
            <div className="space-y-2">
              <p className="text-[11px] tracking-[0.18em] text-zinc-500 uppercase">Key Features</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="text-sm text-zinc-300">
                    <span className="mr-2 text-zinc-500">-</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-[11px] tracking-[0.14em] text-zinc-400 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-600 bg-zinc-800/80 px-4 py-2 text-xs tracking-[0.15em] text-zinc-100 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-700"
            >
              Live Demo
            </a>
            <UnderlineLink href={github} external>
              GitHub
            </UnderlineLink>
            <UnderlineLink href={caseStudy} external>
              Case Study
            </UnderlineLink>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
