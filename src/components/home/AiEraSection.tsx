"use client";

import { Sparkles, Brain, Cpu, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { aiEraData } from "@/data/ai-era";

export default function AiEraSection() {
  return (
    <section id="the-ai-era" className="py-24 sm:py-32 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>08 // INTELLIGENCE IN THE AI ERA</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-tight">
            AI CAN PRODUCE OUTPUTS. <br />
            <span className="text-brand-green">THE HARD PART IS KNOWING</span> <br />
            WHICH OUTPUT DESERVES TO EXIST.
          </h2>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-3xl pt-2">
            AI has reduced the marginal cost of creating digital noise to zero.
            In an era where anyone can generate thousands of generic posts, human taste,
            commercial judgment, and strategic restraint become the ultimate competitive advantage.
          </p>
        </div>

        {/* The Core Formula Banner */}
        <div className="p-6 sm:p-8 rounded-xl bg-black/40 border border-brand-neutral/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-brand-green shrink-0" />
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray block">
                THE PANKNOX EQUATION
              </span>
              <span className="text-base sm:text-lg font-bold font-mono text-brand-neutral uppercase">
                {aiEraData.philosophyFormula}
              </span>
            </div>
          </div>
          <span className="text-xs font-mono text-brand-green border border-brand-green/40 px-3 py-1 rounded">
            ZERO GENERIC AI SLOP
          </span>
        </div>

        {/* Side-by-side: Machine Acceleration vs Human Judgment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: What AI Accelerates */}
          <div className="bg-brand-navy/90 border border-brand-neutral/15 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase">
                <Sparkles className="w-4 h-4" />
                <span>WHAT MACHINE INTELLIGENCE ACCELERATES</span>
              </div>
              <span className="text-[10px] font-mono text-brand-gray">LEVERAGE ENGINE</span>
            </div>

            <p className="text-sm text-brand-neutral/80">
              We leverage modern computational models to ruthlessly eliminate mechanical friction:
            </p>

            <div className="space-y-4">
              {aiEraData.whatAiAccelerates.map((item) => (
                <div
                  key={item.area}
                  className="p-4 rounded-xl bg-white/[0.02] border border-brand-neutral/10 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-brand-neutral uppercase">
                      {item.area}
                    </span>
                    <span className="text-xs font-mono text-brand-green px-2 py-0.5 rounded bg-brand-green/10">
                      {item.velocityGain}
                    </span>
                  </div>
                  <p className="text-xs text-brand-neutral/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What Humans Must Provide */}
          <div className="bg-brand-navy/90 border border-brand-green/30 rounded-2xl p-6 sm:p-8 space-y-6 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-green/5">
            <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase">
                <Brain className="w-4 h-4" />
                <span>WHAT ONLY HUMAN STRATEGISTS CAN PROVIDE</span>
              </div>
              <span className="text-[10px] font-mono text-brand-green font-bold">NON-NEGOTIABLE</span>
            </div>

            <p className="text-sm text-brand-neutral/80">
              The high-stakes commercial dimensions where neural algorithms fail:
            </p>

            <div className="space-y-4">
              {aiEraData.whatHumansMustProvide.map((item) => (
                <div
                  key={item.discipline}
                  className="p-4 rounded-xl bg-black/30 border border-brand-neutral/15 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                    <span className="text-sm font-bold text-brand-neutral uppercase">
                      {item.discipline}
                    </span>
                  </div>
                  <p className="text-xs text-brand-neutral/70 pl-5.5">{item.whyAiFailsHere}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Point of View */}
        <div className="p-8 rounded-xl bg-brand-green/5 border border-brand-green/30 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green">
            THE PANKNOX CREED
          </span>
          <p className="text-xl sm:text-2xl font-bold uppercase text-brand-neutral">
            &ldquo;Tools do not build brands. Strategic minds wielding tools do.&rdquo;
          </p>
          <p className="text-sm text-brand-neutral/70">
            {aiEraData.thePanknoxPosition}
          </p>
        </div>
      </div>
    </section>
  );
}
