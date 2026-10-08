"use client";

import { useState } from "react";
import { Filter, Sparkles, Brain, Cpu, ArrowRight } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";

export default function AiEraSection() {
  const [filterActive, setFilterActive] = useState(true);

  const selectedDecisions = [
    { title: "The message", desc: "A singular provable market wedge" },
    { title: "The idea", desc: "Unforgettable cinematic metaphor" },
    { title: "The creative", desc: "Restrained, prestigious visual direction" },
    { title: "The campaign", desc: "Precision algorithmic distribution" },
  ];

  return (
    <section id="the-ai-era" className="relative overflow-hidden">
      <AtmosphericBackground className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">
          {/* Section Header */}
          <div className="space-y-5 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-green/90">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Signature 03 // The AI filter</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-brand-neutral leading-[1.08]">
              AI can make more. <br />
              <span className="text-brand-green">Panknox decides</span> <br />
              what matters.
            </h2>

            <p className="text-lg sm:text-xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed pt-1">
              AI creates infinite abundance. Strategy creates intentional selection.
            </p>
          </div>

          {/* The AI Filtering Chamber */}
          <div className="p-7 sm:p-12 rounded-3xl bg-black/50 border border-white/10 space-y-10 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <span className="text-xs font-mono text-brand-neutral/60 font-medium">
                Abundance vs. selection // Interactive filter
              </span>

              <button
                type="button"
                onClick={() => setFilterActive(!filterActive)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                  filterActive
                    ? "bg-brand-green text-brand-navy shadow-md"
                    : "bg-white/10 text-brand-neutral hover:bg-white/20"
                }`}
              >
                {filterActive ? "Filter: Active (4 calibrated decisions)" : "Filter: Bypassed (Unfiltered noise)"}
              </button>
            </div>

            {/* Visual Particle / Grid Simulation */}
            <div className="relative p-7 sm:p-10 rounded-2xl bg-brand-navy/90 border border-brand-green/30 space-y-8">
              <div className="flex items-center justify-between text-xs font-mono text-brand-neutral/60">
                <span>Simulation // 1,000+ generated attempts</span>
                <span className="text-brand-green font-semibold">
                  {filterActive ? "Reduced to 4 intentional decisions" : "Infinite noise accumulating"}
                </span>
              </div>

              {/* The Filtered Survivors or Unfiltered Cloud */}
              {filterActive ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fadeIn">
                  {selectedDecisions.map((item, idx) => (
                    <div
                      key={item.title}
                      className="p-5 rounded-2xl bg-black/60 border border-brand-green/40 space-y-2.5 shadow-lg"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-brand-green font-semibold">Selection 0{idx + 1}</span>
                        <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                      </div>
                      <h4 className="text-xl font-bold tracking-tight text-brand-neutral">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-neutral/80 leading-relaxed font-mono">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-10 text-center space-y-4 rounded-xl bg-white/[0.02] border border-red-500/30 text-red-300 font-mono text-xs">
                  <p className="font-semibold tracking-wider">
                    Unfiltered artificial intelligence output
                  </p>
                  <p className="text-brand-neutral/60 max-w-xl mx-auto">
                    Thousands of synthetic posts, generic templates, repetitive slogans, and
                    zero commercial attribution. Noise without strategy.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFilterActive(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-green text-brand-navy font-semibold text-xs"
                  >
                    <span>Engage strategic selection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            <div className="pt-2 text-center text-xs font-mono text-brand-neutral/60">
              Output is cheap. Judgement is valuable.
            </div>
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}
