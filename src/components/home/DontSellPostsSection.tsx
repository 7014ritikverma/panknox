"use client";

import { useState } from "react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";

export default function DontSellPostsSection() {
  const [isHovered, setIsHovered] = useState(false);

  const outputs = ["Post", "Reel", "Ad", "Website", "Campaign"];
  const origins = [
    { title: "Objective", desc: "Commercial margin constraint" },
    { title: "Audience", desc: "Decision-maker psychology" },
    { title: "Message", desc: "Provable narrative wedge" },
    { title: "Idea", desc: "Unforgettable creative hook" },
  ];

  return (
    <section className="relative overflow-hidden">
      <AtmosphericBackground className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">
          {/* Calibrated Editorial Headline */}
          <div className="space-y-5 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-green/90">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>02 // The philosophical reversal</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-brand-neutral leading-[1.08]">
              We don&apos;t <br />
              <span className="text-brand-green">sell posts.</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed pt-1">
              We build the thinking behind what gets published.
            </p>
          </div>

          {/* Interactive Backward Collapse Visual Demonstration */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="p-8 sm:p-14 rounded-3xl bg-black/40 border border-white/10 space-y-12 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <span className="text-xs font-mono text-brand-neutral/60 font-semibold">
                The systemic reversal // Hover to collapse outputs into origins
              </span>

              <span className="text-xs font-mono text-brand-green font-semibold">
                {isHovered ? "Thinking revealed" : "Outputs collapsing backward"}
              </span>
            </div>

            {/* The Visual Tokens Sequence */}
            <div className="space-y-10">
              {/* Row 1: The Visible Outputs (Downstream Artifacts) */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-neutral/60 block font-medium">
                  A. The visible outputs (the commodity level)
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {outputs.map((out) => (
                    <div
                      key={out}
                      className={`px-5 py-3 rounded-xl font-mono font-semibold text-sm transition-all duration-500 ${
                        isHovered
                          ? "bg-white/5 text-brand-neutral/40 border border-white/5 opacity-40 scale-95"
                          : "bg-white/10 text-brand-neutral border border-white/20 shadow-md"
                      }`}
                    >
                      {out}
                    </div>
                  ))}
                </div>
              </div>

              {/* The Reversal Signal Vector */}
              <div className="relative py-2 flex items-center justify-center">
                <div className="w-full h-[1px] bg-white/10 overflow-hidden">
                  <div className="animate-signal-travel" />
                </div>
                <span className="absolute px-4 py-0.5 bg-brand-navy border border-white/10 rounded-full text-[11px] font-mono text-brand-green font-semibold">
                  Move backward to the root
                </span>
              </div>

              {/* Row 2: The Core Strategic Origins */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-green font-semibold block">
                  B. The prerequisite architecture (where leverage happens)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {origins.map((orig, i) => (
                    <div
                      key={orig.title}
                      className={`p-5 rounded-2xl border transition-all duration-500 space-y-1.5 ${
                        isHovered
                          ? "bg-brand-green/15 border-brand-green text-brand-neutral scale-102 shadow-[0_0_20px_rgba(48,198,130,0.25)]"
                          : "bg-white/[0.03] border-white/10 text-brand-neutral/80"
                      }`}
                    >
                      <span className="text-xs font-mono text-brand-green font-semibold block">
                        0{i + 1} // Root
                      </span>
                      <h4 className="text-lg font-bold tracking-tight">
                        {orig.title}
                      </h4>
                      <p className="text-xs text-brand-neutral/60 leading-relaxed font-mono">
                        {orig.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Summary */}
          <div className="pt-2 text-center">
            <p className="text-lg sm:text-xl font-semibold tracking-tight text-brand-neutral">
              Every piece of communication must have a strategic reason to exist.
            </p>
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}
