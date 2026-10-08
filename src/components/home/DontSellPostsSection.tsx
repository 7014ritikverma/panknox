"use client";

import { useState } from "react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";

export default function DontSellPostsSection() {
  const [isHovered, setIsHovered] = useState(false);

  const outputs = ["POST", "REEL", "AD", "WEBSITE", "CAMPAIGN"];
  const origins = [
    { title: "OBJECTIVE", desc: "Commercial margin constraint" },
    { title: "AUDIENCE", desc: "Decision-maker psychology" },
    { title: "MESSAGE", desc: "Provable narrative wedge" },
    { title: "IDEA", desc: "Unforgettable creative hook" },
  ];

  return (
    <section className="relative overflow-hidden">
      <AtmosphericBackground className="py-36 sm:py-48">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
          {/* Huge Monolithic Headline */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-green/80 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>02 // THE PHILOSOPHICAL REVERSAL</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-neutral leading-[0.92]">
              WE DON&apos;T <br />
              <span className="text-brand-green">SELL POSTS.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed pt-2">
              We build the thinking behind what gets published.
            </p>
          </div>

          {/* Interactive Backward Collapse Visual Demonstration */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="p-10 sm:p-16 rounded-3xl bg-black/40 border border-white/10 space-y-16 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold">
                THE SYSTEMIC REVERSAL // HOVER TO COLLAPSE OUTPUTS INTO ORIGINS
              </span>

              <span className="text-xs font-mono text-brand-green font-bold">
                {isHovered ? "THINKING REVEALED" : "OUTPUTS COLLAPSING BACKWARD"}
              </span>
            </div>

            {/* The Visual Tokens Sequence */}
            <div className="space-y-12">
              {/* Row 1: The Visible Outputs (Downstream Artifacts) */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gray block">
                  A. THE VISIBLE OUTPUTS (THE COMMODITY LEVEL)
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {outputs.map((out) => (
                    <div
                      key={out}
                      className={`px-6 py-4 rounded-xl font-mono font-bold text-sm tracking-wider uppercase transition-all duration-500 ${
                        isHovered
                          ? "bg-white/5 text-brand-gray border border-white/5 opacity-40 scale-95"
                          : "bg-white/10 text-brand-neutral border border-white/20 shadow-lg"
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
                <span className="absolute px-4 bg-brand-navy border border-white/10 rounded-full text-[11px] font-mono text-brand-green uppercase tracking-widest font-bold">
                  MOVE BACKWARD TO THE ROOT
                </span>
              </div>

              {/* Row 2: The Core Strategic Origins */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold block">
                  B. THE PREREQUISITE ARCHITECTURE (WHERE LEVERAGE HAPPENS)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {origins.map((orig, i) => (
                    <div
                      key={orig.title}
                      className={`p-6 rounded-2xl border transition-all duration-500 space-y-2 ${
                        isHovered
                          ? "bg-brand-green/15 border-brand-green text-brand-neutral scale-105 shadow-[0_0_25px_rgba(48,198,130,0.25)]"
                          : "bg-white/[0.03] border-white/10 text-brand-neutral/80"
                      }`}
                    >
                      <span className="text-xs font-mono text-brand-green font-bold block">
                        0{i + 1} // ROOT
                      </span>
                      <h4 className="text-xl font-black uppercase tracking-tight">
                        {orig.title}
                      </h4>
                      <p className="text-xs text-brand-gray leading-relaxed font-mono">
                        {orig.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Summary */}
          <div className="pt-4 text-center">
            <p className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-brand-neutral">
              Every piece of communication must have a strategic reason to exist.
            </p>
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}
