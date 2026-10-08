"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Target, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";

export default function DontSellPostsSection() {
  const [viewMode, setViewMode] = useState<"outputs" | "thinking">("thinking");

  const outputs = [
    { label: "POST", desc: "A static square asset", status: "OUTPUT #1" },
    { label: "REEL", desc: "A 30-second short video", status: "OUTPUT #2" },
    { label: "ADVERTISEMENT", desc: "A paid sponsored creative", status: "OUTPUT #3" },
    { label: "WEBSITE", desc: "A digital destination surface", status: "OUTPUT #4" },
    { label: "CAMPAIGN", desc: "A quarterly distribution push", status: "OUTPUT #5" },
  ];

  const thinkingFoundations = [
    {
      step: "01",
      title: "BUSINESS OBJECTIVE",
      detail: "What commercial constraint must be removed? Margin protection, RFQ volume, or partner credibility?",
    },
    {
      step: "02",
      title: "AUDIENCE PSYCHOLOGY",
      detail: "Who holds the purchasing signature, and what skepticism prevents them from choosing you?",
    },
    {
      step: "03",
      title: "STRATEGIC MESSAGE",
      detail: "The singular, provable truth that makes your capability irreplaceable in the market.",
    },
    {
      step: "04",
      title: "CREATIVE HOOK & IDEA",
      detail: "The visual metaphor and cinematic direction that cuts through digital indifference.",
    },
  ];

  return (
    <section className="py-28 sm:py-36 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>02 // THE FOUNDATIONAL LAW</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-neutral leading-[0.95]">
            WE DON&apos;T <br />
            SELL <br />
            <span className="text-brand-green">POSTS.</span>
          </h2>

          <div className="text-lg sm:text-xl text-brand-neutral/80 space-y-2 max-w-3xl pt-2">
            <p className="font-semibold text-brand-neutral">
              A post is an output. A reel is an output. An advertisement is an output.
            </p>
            <p className="text-brand-gray">
              If an agency sells you &ldquo;15 posts a month,&rdquo; you are purchasing activity, not strategy.
              The real leverage exists in everything that occurs before the output is generated.
            </p>
          </div>
        </div>

        {/* Interactive Paradigm Switcher */}
        <div className="bg-brand-navy border border-brand-neutral/20 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl">
          {/* Toggle Button Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-neutral/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray">
                INSPECT PARADIGM:
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode("thinking")}
                  data-cursor="PANKNOX"
                  className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                    viewMode === "thinking"
                      ? "bg-brand-green text-brand-navy shadow-[0_0_15px_rgba(48,198,130,0.3)]"
                      : "bg-white/5 text-brand-neutral/70 hover:bg-white/10"
                  }`}
                >
                  THE THINKING COMES FIRST (PANKNOX)
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("outputs")}
                  data-cursor="COMMODITY"
                  className={`px-4 py-2 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                    viewMode === "outputs"
                      ? "bg-red-500/20 text-red-300 border border-red-500/40"
                      : "bg-white/5 text-brand-neutral/70 hover:bg-white/10"
                  }`}
                >
                  COMMODITY VENDOR VIEW (OUTPUT FIRST)
                </button>
              </div>
            </div>

            <span className="text-xs font-mono text-brand-green">
              {viewMode === "thinking" ? "STRATEGY → EXECUTION" : "BLIND CHURN"}
            </span>
          </div>

          {/* Dynamic Visual Display Based on Mode */}
          {viewMode === "thinking" ? (
            /* Thinking-First System */
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
                  THE PREREQUISITE ARCHITECTURE (WHERE LEVERAGE HAPPENS)
                </span>
                <span className="text-xs font-mono text-brand-gray">4 FOUNDATIONS</span>
              </div>

              {/* 4 Thinking Foundations */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {thinkingFoundations.map((item) => (
                  <div
                    key={item.step}
                    className="p-6 rounded-xl bg-white/[0.03] border border-brand-green/30 hover:border-brand-green transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-brand-green font-bold text-sm">PHASE {item.step}</span>
                      <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-neutral uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-neutral/75 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Resolution Arrow to Outputs */}
              <div className="p-6 rounded-xl bg-brand-green/10 border border-brand-green/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-brand-green shrink-0" />
                  <span className="text-sm font-bold text-brand-neutral uppercase">
                    ONLY ONCE THE THINKING IS VALIDATED, DO WE PRODUCE THE OUTPUTS:
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-brand-green">
                  {outputs.map((o) => (
                    <span
                      key={o.label}
                      className="px-2.5 py-1 rounded bg-brand-navy border border-brand-green/40 font-bold"
                    >
                      {o.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Commodity Output-First View (Warning State) */
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-200">
                <span className="font-bold uppercase block mb-1">THE COMMODITY MISTAKE:</span>
                Starting directly with deliverables (&ldquo;make 3 reels this week&rdquo;) without business context.
                Produces unmemorable vanity noise with zero revenue attribution.
              </div>

              {/* Floating Output Tokens */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {outputs.map((out) => (
                  <div
                    key={out.label}
                    className="p-5 rounded-xl bg-black/40 border border-brand-neutral/15 text-center space-y-2 opacity-60"
                  >
                    <span className="text-[10px] font-mono text-red-400 block">{out.status}</span>
                    <h4 className="text-lg font-bold text-brand-neutral/80 uppercase">{out.label}</h4>
                    <p className="text-xs text-brand-gray">{out.desc}</p>
                    <span className="text-[10px] font-mono text-red-400/80 block pt-1">
                      NO STRATEGIC REASON
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setViewMode("thinking")}
                  className="inline-flex items-center gap-2 text-xs font-mono text-brand-green hover:underline font-bold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>SWITCH TO PANKNOX THINKING-FIRST ARCHITECTURE</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* The Golden Statement */}
        <div className="p-8 sm:p-12 rounded-2xl border border-brand-green/40 bg-brand-green/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
              THE PANKNOX STANDARD
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
              EVERY PIECE OF COMMUNICATION MUST HAVE A REASON TO EXIST.
            </h3>
          </div>

          <div className="shrink-0 text-sm font-mono text-brand-green border-l-2 border-brand-green pl-4">
            <span>ZERO VANITY NOISE</span> <br />
            <span className="text-brand-neutral/70">100% COMMERCIAL INTENT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
