"use client";

import { Sparkles, Brain, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AiEraSection() {
  return (
    <section
      id="the-ai-era"
      className="py-28 sm:py-36 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>07 // THE INTELLIGENCE PARADOX</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-neutral leading-[0.95]">
            AI CAN MAKE MORE. <br />
            <span className="text-brand-green">PANKNOX DECIDES WHAT MATTERS.</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-3xl pt-2 font-normal">
            Neural networks have reduced the cost of producing infinite noise to zero.
            In an era where anyone can press a button to generate a thousand generic posts,
            editorial taste and commercial restraint become the only defensible assets.
          </p>
        </div>

        {/* Visually Striking Split: Output is Cheap vs Judgement is Valuable */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: OUTPUT IS CHEAP */}
          <div className="p-8 sm:p-12 rounded-2xl bg-black/40 border border-brand-neutral/15 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold">
                  THE COMMODITIZATION
                </span>
                <span className="text-xs font-mono text-red-400 font-bold">COST → ZERO</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold uppercase text-brand-neutral">
                OUTPUT IS CHEAP.
              </h3>

              <p className="text-sm sm:text-base text-brand-neutral/70 leading-relaxed">
                AI easily generates:
              </p>

              <div className="space-y-2 text-xs font-mono text-brand-gray">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-brand-neutral/10 flex items-center justify-between">
                  <span>• Generic derivative social captions</span>
                  <span className="text-red-400">0.02s</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-brand-neutral/10 flex items-center justify-between">
                  <span>• Synthetic corporate stock images</span>
                  <span className="text-red-400">1.2s</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-brand-neutral/10 flex items-center justify-between">
                  <span>• Hollow motivational reels</span>
                  <span className="text-red-400">Instant</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-brand-neutral/10 flex items-center justify-between">
                  <span>• Robotic email follow-up spam</span>
                  <span className="text-red-400">Infinite</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-neutral/10 text-xs font-mono text-brand-gray">
              RESULT: Algorithmic blindness, audience fatigue, and brand devaluation.
            </div>
          </div>

          {/* Right Column: JUDGEMENT IS VALUABLE */}
          <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy border border-brand-green/40 space-y-6 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-green/10 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  <span>THE HUMAN ADVANTAGE</span>
                </span>
                <span className="text-xs font-mono text-brand-green font-bold">HIGH LEVERAGE</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold uppercase text-brand-neutral">
                JUDGEMENT IS VALUABLE.
              </h3>

              <p className="text-sm sm:text-base text-brand-neutral/85 leading-relaxed">
                What only human directors and strategists command:
              </p>

              <div className="space-y-2 text-xs font-mono text-brand-neutral">
                <div className="p-3 rounded-lg bg-brand-green/10 border border-brand-green/30 flex items-center justify-between">
                  <span className="font-bold">• Diagnosing the client&apos;s true margin drivers</span>
                  <span className="text-brand-green">STRATEGY</span>
                </div>
                <div className="p-3 rounded-lg bg-brand-green/10 border border-brand-green/30 flex items-center justify-between">
                  <span className="font-bold">• Knowing which visual ideas to kill</span>
                  <span className="text-brand-green">RESTRAINT</span>
                </div>
                <div className="p-3 rounded-lg bg-brand-green/10 border border-brand-green/30 flex items-center justify-between">
                  <span className="font-bold">• Indian commercial context &amp; buyer skepticism</span>
                  <span className="text-brand-green">INTUITION</span>
                </div>
                <div className="p-3 rounded-lg bg-brand-green/10 border border-brand-green/30 flex items-center justify-between">
                  <span className="font-bold">• Standing behind the commercial outcome</span>
                  <span className="text-brand-green">ACCOUNTABILITY</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-neutral/10 text-xs font-mono text-brand-green font-bold">
              THE PANKNOX POSITION: We use AI to accelerate research &amp; editing, but human taste directs 100% of the strategy.
            </div>
          </div>
        </div>

        {/* The Equation Ribbon */}
        <div className="p-6 sm:p-8 rounded-xl bg-black/50 border border-brand-neutral/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-brand-green shrink-0" />
            <span className="text-sm sm:text-base font-mono font-bold text-brand-neutral uppercase">
              HUMAN STRATEGY + CREATIVE TASTE + AI-ACCELERATED PRODUCTION = GROWTH
            </span>
          </div>

          <span className="text-xs font-mono text-brand-green border border-brand-green/40 px-3 py-1 rounded">
            ZERO GENERIC AI SLOP
          </span>
        </div>
      </div>
    </section>
  );
}
