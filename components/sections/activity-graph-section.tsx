"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { profile } from "@/lib/portfolio-data";

const fallbackGraphSvg =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="240" viewBox="0 0 1280 240" fill="none">
  <rect width="1280" height="240" rx="20" fill="#09090b"/>
  <rect x="24" y="24" width="1232" height="192" rx="14" fill="#111319" stroke="#1e293b"/>
  <g opacity="0.35">
    <rect x="70" y="82" width="16" height="16" rx="3" fill="#0B2C1C"/>
    <rect x="94" y="82" width="16" height="16" rx="3" fill="#14532D"/>
    <rect x="118" y="82" width="16" height="16" rx="3" fill="#166534"/>
    <rect x="142" y="82" width="16" height="16" rx="3" fill="#1F7A3B"/>
    <rect x="166" y="82" width="16" height="16" rx="3" fill="#2A8F47"/>
    <rect x="214" y="110" width="16" height="16" rx="3" fill="#0B2C1C"/>
    <rect x="238" y="110" width="16" height="16" rx="3" fill="#14532D"/>
    <rect x="262" y="110" width="16" height="16" rx="3" fill="#166534"/>
    <rect x="286" y="110" width="16" height="16" rx="3" fill="#1F7A3B"/>
    <rect x="310" y="110" width="16" height="16" rx="3" fill="#2A8F47"/>
    <rect x="438" y="76" width="16" height="16" rx="3" fill="#0B2C1C"/>
    <rect x="462" y="76" width="16" height="16" rx="3" fill="#14532D"/>
    <rect x="486" y="76" width="16" height="16" rx="3" fill="#166534"/>
    <rect x="510" y="76" width="16" height="16" rx="3" fill="#1F7A3B"/>
    <rect x="534" y="76" width="16" height="16" rx="3" fill="#2A8F47"/>
    <rect x="702" y="116" width="16" height="16" rx="3" fill="#0B2C1C"/>
    <rect x="726" y="116" width="16" height="16" rx="3" fill="#14532D"/>
    <rect x="750" y="116" width="16" height="16" rx="3" fill="#166534"/>
    <rect x="774" y="116" width="16" height="16" rx="3" fill="#1F7A3B"/>
    <rect x="798" y="116" width="16" height="16" rx="3" fill="#2A8F47"/>
    <rect x="930" y="88" width="16" height="16" rx="3" fill="#0B2C1C"/>
    <rect x="954" y="88" width="16" height="16" rx="3" fill="#14532D"/>
    <rect x="978" y="88" width="16" height="16" rx="3" fill="#166534"/>
    <rect x="1002" y="88" width="16" height="16" rx="3" fill="#1F7A3B"/>
    <rect x="1026" y="88" width="16" height="16" rx="3" fill="#2A8F47"/>
  </g>
  <text x="50%" y="54%" text-anchor="middle" fill="#8A93A5" font-family="Arial, sans-serif" font-size="22" letter-spacing="1">Activity graph preview is temporarily unavailable</text>
</svg>
`);

export function ActivityGraphSection() {
  const [hasFallback, setHasFallback] = useState(false);

  const graphUrl = useMemo(() => `https://ghchart.rshah.org/39d353/${profile.githubUsername}`, []);

  const imageSrc = hasFallback ? fallbackGraphSvg : graphUrl;

  return (
    <section id="activity-graph" className="section-shell border-t border-slate-900 py-24 md:py-32">
      <FadeIn className="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <p className="kicker">activity graph</p>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            Live GitHub contribution activity with a production-safe fallback for rendering reliability.
          </p>
        </div>

        <div className="rounded-2xl border border-[#30363d] bg-[#0d1117] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-xs tracking-[0.18em] text-zinc-400 uppercase">GitHub Activity</p>
            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-[#30363d] bg-[#21262d] px-4 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-[#c9d1d9] uppercase transition hover:-translate-y-0.5 hover:border-[#8b949e] hover:bg-[#30363d]"
            >
              open github
            </a>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117] p-2 md:p-4">
            <img
              src={imageSrc}
              alt={`GitHub contribution graph for ${profile.githubUsername}`}
              loading="lazy"
              className="block h-auto min-h-[132px] w-full rounded-md object-contain"
              onError={() => {
                if (!hasFallback) {
                  setHasFallback(true);
                }
              }}
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}