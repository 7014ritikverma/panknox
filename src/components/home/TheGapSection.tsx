"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle, Layers } from "lucide-react";

interface GapExample {
  id: string;
  reality: string;
  marketPerception: string;
  commercialCost: string;
  panknoxBridge: string;
}

const GAP_EXAMPLES: GapExample[] = [
  {
    id: "product",
    reality: "Great product & rigorous engineering",
    marketPerception: "Weak, outdated presentation",
    commercialCost: "Treated as a commodity vendor; forced into price wars.",
    panknoxBridge: "Macro cinematography, clear specification architecture, and precision visual identity.",
  },
  {
    id: "expertise",
    reality: "Strong domain expertise & deep knowledge",
    marketPerception: "Weak, infrequent communication",
    commercialCost: "Less capable competitors win contracts because they explain themselves better.",
    panknoxBridge: "Executive ghost-writing, thought leadership video columns, and technical whitepapers.",
  },
  {
    id: "consistency",
    reality: "Thriving physical business & reliable operations",
    marketPerception: "Inconsistent, abandoned digital profiles",
    commercialCost: "Prospects assume you are struggling or stagnant when profiles are silent.",
    panknoxBridge: "14-day continuous editorial sprint systems that maintain relentless presence.",
  },
  {
    id: "experience",
    reality: "Exceptional clinical or client service",
    marketPerception: "Frustrating, dated digital experience",
    commercialCost: "High initial churn; high anxiety during customer deliberation.",
    panknoxBridge: "Dignity-first educational funnels and frictionless instant triage channels.",
  },
  {
    id: "distribution",
    reality: "High-caliber craft & distinctive heritage",
    marketPerception: "Zero distribution leverage",
    commercialCost: "Trapped in local geography or reliant on gouging third-party aggregators.",
    panknoxBridge: "Paid media architectures that target exact international buyers without third-party commission bleed.",
  },
  {
    id: "conversion",
    reality: "Occasional viral post or eye-catching reel",
    marketPerception: "No conversion or qualification system",
    commercialCost: "Vanity likes that never convert into bank deposits or enterprise purchase orders.",
    panknoxBridge: "Pre-qualification enquiry funnels and direct customer acquisition pipelines.",
  },
];

export default function TheGapSection() {
  const [activeGapIndex, setActiveGapIndex] = useState(0);
  const activeGap = GAP_EXAMPLES[activeGapIndex];

  return (
    <section id="the-gap-section" className="py-24 sm:py-32 bg-brand-navy relative overflow-hidden border-t border-brand-neutral/10">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>02 // THE MARKET GAP</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-tight">
            THERE&apos;S USUALLY <br />
            <span className="text-brand-green">A GAP.</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-neutral/80 max-w-2xl leading-relaxed">
            Your customer doesn&apos;t experience your entire business from the inside.
            They only see fragments: an Instagram reel, a Google search, a broken form, an outdated catalog.
          </p>
        </div>

        {/* The Two Sides Visual Contrast Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-brand-neutral/15 rounded-xl overflow-hidden border border-brand-neutral/20 shadow-2xl">
          {/* Left Column: WHAT YOUR BUSINESS ACTUALLY IS */}
          <div className="bg-brand-navy p-6 sm:p-10 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-brand-neutral/70 uppercase">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              <span>THE INTERNAL REALITY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
              WHAT YOUR BUSINESS ACTUALLY IS
            </h3>
            <ul className="space-y-4 text-sm sm:text-base text-brand-neutral/80">
              <li className="flex items-start gap-3">
                <span className="text-brand-green font-mono font-bold">01</span>
                <span>Decades of proprietary engineering, tooling, or clinical craft.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green font-mono font-bold">02</span>
                <span>Deep manufacturing tolerances, medical outcomes, or bespoke finishes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green font-mono font-bold">03</span>
                <span>High integrity, operational reliability, and real customer dedication.</span>
              </li>
            </ul>
          </div>

          {/* Right Column: WHAT YOUR MARKET THINKS IT IS */}
          <div className="bg-brand-navy/90 p-6 sm:p-10 space-y-6 bg-gradient-to-br from-brand-navy to-black/40">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-brand-gray uppercase">
              <AlertTriangle className="w-4 h-4 text-yellow-500/80" />
              <span>THE EXTERNAL DISTORTION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral/80">
              WHAT YOUR MARKET THINKS IT IS
            </h3>
            <ul className="space-y-4 text-sm sm:text-base text-brand-gray">
              <li className="flex items-start gap-3">
                <span className="text-brand-neutral/40 font-mono font-bold">01</span>
                <span>Just another commoditized vendor competing purely on price.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-neutral/40 font-mono font-bold">02</span>
                <span>Indistinguishable from hundreds of competitors who shout louder.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-neutral/40 font-mono font-bold">03</span>
                <span>Unverified risk before initial engagement or site visit.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Gap Inspector */}
        <div className="bg-brand-navy/95 border border-brand-neutral/15 rounded-xl p-6 sm:p-8 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-neutral/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase">
              <Layers className="w-4 h-4" />
              <span>INTERACTIVE GAP DIAGNOSTIC // 6 COMMON SCENARIOS</span>
            </div>
            <span className="text-xs font-mono text-brand-gray">
              SELECT SCENARIO TO INSPECT INTERVENTION
            </span>
          </div>

          {/* Scenario Tab Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {GAP_EXAMPLES.map((gap, index) => (
              <button
                key={gap.id}
                type="button"
                onClick={() => setActiveGapIndex(index)}
                data-cursor="DIAGNOSE"
                className={`text-left p-3 rounded border text-xs font-mono transition-all ${
                  index === activeGapIndex
                    ? "bg-brand-green/15 border-brand-green text-brand-neutral font-semibold"
                    : "bg-brand-navy border-brand-neutral/10 text-brand-gray hover:border-brand-neutral/30 hover:text-brand-neutral"
                }`}
              >
                <span className="block text-[10px] text-brand-gray mb-1">SCENARIO 0{index + 1}</span>
                <span className="block truncate font-bold text-brand-neutral">
                  {gap.reality.split("&")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Active Gap Diagnostic Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-black/30 p-6 rounded-lg border border-brand-neutral/10 items-center">
            {/* The Tension */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-green block">
                THE SPECIFIC GAP
              </span>
              <p className="text-base font-bold text-brand-neutral">{activeGap.reality}</p>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
                <span>VERSUS</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
              </div>
              <p className="text-sm text-brand-gray line-through decoration-red-400/50">
                {activeGap.marketPerception}
              </p>
            </div>

            {/* The Commercial Toll */}
            <div className="lg:col-span-4 space-y-2 border-l lg:border-l border-brand-neutral/10 pl-0 lg:pl-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 block">
                COMMERCIAL CONSEQUENCE
              </span>
              <p className="text-sm text-brand-neutral/80">{activeGap.commercialCost}</p>
            </div>

            {/* The Panknox Bridge */}
            <div className="lg:col-span-4 space-y-2 border-l lg:border-l border-brand-neutral/10 pl-0 lg:pl-6 bg-brand-green/5 p-4 rounded border border-brand-green/20">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-green font-bold block">
                PANKNOX BRIDGE INTERVENTION
              </span>
              <p className="text-sm font-medium text-brand-neutral">{activeGap.panknoxBridge}</p>
            </div>
          </div>
        </div>

        {/* The Climax Editorial Statement */}
        <div className="pt-12 text-center space-y-4">
          <p className="text-xs font-mono tracking-widest text-brand-gray uppercase">
            THE CONCLUSION
          </p>
          <p className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-brand-neutral tracking-tight">
            PANKNOX WORKS <span className="text-brand-green underline decoration-brand-green/40">IN THE GAP.</span>
          </p>
          <p className="text-brand-neutral/70 max-w-xl mx-auto text-base">
            We align reality and perception until your market values you for exactly what you are worth.
          </p>
        </div>
      </div>
    </section>
  );
}
