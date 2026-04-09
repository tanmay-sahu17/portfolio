"use client";

import { useEffect, useState } from "react";
import { UnderlineLink } from "@/components/ui/underline-link";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";

const sections = [
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const { scrollToId } = useSmoothScroll();

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        // Keep nav highlight aligned with the section centered in viewport.
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden gap-6 md:flex">
      {sections.map((section) => (
        <UnderlineLink
          key={section.id}
          href={`#${section.id}`}
          active={activeSection === section.id}
          onClick={(event) => {
            event.preventDefault();
            scrollToId(section.id);
            window.history.replaceState(null, "", `#${section.id}`);
          }}
        >
          {section.label}
        </UnderlineLink>
      ))}
    </nav>
  );
}
