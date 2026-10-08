"use client";

import { useState } from "react";
import { Filter, Sparkles, Brain, Cpu, ArrowRight } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";

export default function AiEraSection() {
  const [filterActive, setFilterActive] = useState(true);

  const selectedDecisions = [
    { title: "THE MESSAGE", desc: "A singular provable market wedge" },
    { title: "THE IDEA", desc: "Unforgettable cinematic metaphor" },
    { title: "THE CREATIVE", desc: "Restrained, prestigious visual direction" },
    { title: "THE CAMPAIGN", desc: "Precision algorithmic distribution" },
  ];

  return (
    <section id="the-ai-era" className="relative overflow-hidden">
      <AtmosphericBackground className="py-36 sm:py-48">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
          {/* Section Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-green/80 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>SIGNATURE 03 // THE AI FILTER</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-neutral leading-[0.92]">
              AI CAN MAKE MORE. <br />
              <span className="text-brand-green">PANKNOX DECIDES</span> <br />
              WHAT MATTERS.
            </h2>

            <p className="text-xl sm:text-2xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed pt-2">
              AI creates infinite abundance. Strategy creates intentional selection.
            </p>
          </div>

          {/* The AI Filtering Chamber */}
          <div className="p-8 sm:p-14 rounded-3xl bg-black/50 border border-white/10 space-y-12 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold">
                ABUNDANCE VS. SELECTION // INTERACTIVE FILTER
              </span>

              <button
                type="button"
                onClick={() => setFilterActive(!filterActive)}
                data-cursor="FILTER"
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  filterActive
                    ? "bg-brand-green text-brand-navy shadow-md"
                    : "bg-white/10 text-brand-neutral hover:bg-white/20"
                }`}
              >
                {filterActive ? "FILTER: ACTIVE (4 VALUABLE DECISIONS)" : "FILTER: BYPASSED (UNFILTERED NOISE)"}
              </button>
            </div>

            {/* Visual Particle / Grid Simulation */}
            <div className="relative p-8 sm:p-12 rounded-2xl bg-brand-navy/90 border border-brand-green/30 space-y-10">
              <div className="flex items-center justify-between text-xs font-mono text-brand-gray">
                <span>SIMULATION // 1,000+ GENERATED ATTEMPTS</span>
                <span className="text-brand-green font-bold">
                  {filterActive ? "REDUCED TO 4 INTENTIONAL ASSETS" : "INFINITE NOISE ACCUMULATING"}
                </span>
              </div>

              {/* The Filtered Survivors or Unfiltered Cloud */}
              {filterActive ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
                  {selectedDecisions.map((item, idx) => (
                    <div
                      key={item.title}
                      className="p-6 rounded-2xl bg-black/60 border border-brand-green/40 space-y-3 shadow-lg"
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-brand-green font-bold">SELECTION 0{idx + 1}</span>
                        <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                      </div>
                      <h4 className="text-2xl font-black uppercase tracking-tight text-brand-neutral">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-neutral/80 leading-relaxed font-mono">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center space-y-4 rounded-xl bg-white/[0.02] border border-red-500/30 text-red-300 font-mono text-xs">
                  <p className="uppercase font-bold tracking-wider">
                    UNFILTERED ARTIFICIAL INTELLIGENCE OUTPUT
                  </p>
                  <p className="text-brand-gray max-w-xl mx-auto">
                    Thousands of synthetic posts, generic Canva templates, repetitive slogans, and
                    zero commercial attribution. Noise without strategy.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFilterActive(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-green text-brand-navy font-bold text-xs uppercase"
                  >
                    <span>ENGAGE STRATEGIC SELECTION</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            <div className="pt-2 text-center text-xs font-mono text-brand-gray">
              OUTPUT IS CHEAP. JUDGEMENT IS VALUABLE.
            </div>
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}
