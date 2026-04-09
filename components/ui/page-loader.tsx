"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function PageLoader() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.inOut" } })
        .to(".loader-label", { opacity: 1, duration: 0.5 })
        .to(".loader-panel", { yPercent: -100, duration: 1.1, delay: 0.25 })
        .set(".loader-root", { display: "none" });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="loader-root pointer-events-none fixed inset-0 z-[70]">
      <div className="loader-panel absolute inset-0 flex items-center justify-center bg-black">
        <p className="loader-label opacity-0 font-mono text-[10px] tracking-[0.5em] text-zinc-200 uppercase">
          Initializing Portfolio
        </p>
      </div>
    </div>
  );
}
