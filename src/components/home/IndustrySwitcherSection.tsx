"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Building, HeartPulse, Home, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import { industriesData } from "@/data/industries";

const INDUSTRY_ICONS: Record<string, any> = {
  manufacturing: Building,
  healthcare: HeartPulse,
  "real-estate": Home,
  "interiors-furniture": Compass,
  hospitality: Sparkles,
};

export default function IndustrySwitcherSection() {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("manufacturing");
  const activeIndustry = industriesData.find((i) => i.id === selectedIndustryId) || industriesData[0];
  const Icon = INDUSTRY_ICONS[activeIndustry.id] || Building;

  return (
    <section
      id="industry-switcher"
      className="py-28 sm:py-36 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>04 // SECTOR OPERATING ENVIRONMENTS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-neutral leading-[0.95]">
            INDUSTRIES.
          </h2>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed font-normal">
            B2B manufacturing cannot use the marketing playbook of a boutique hotel.
            Select an industry on the left to see how the customer journey and communication architecture shifts.
          </p>
        </div>

        {/* 2-Column Layout: Left Selector + Right Dynamic Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Industry Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <div className="pb-2 border-b border-brand-neutral/10">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold">
                SELECT OPERATING ENVIRONMENT:
              </span>
            </div>

            {industriesData.map((ind) => {
              const isSelected = ind.id === selectedIndustryId;
              const IndIcon = INDUSTRY_ICONS[ind.id] || Building;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIndustryId(ind.id)}
                  data-cursor="SWITCH"
                  className={`w-full p-5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-brand-green/15 border-brand-green text-brand-neutral shadow-[0_0_20px_rgba(48,198,130,0.25)] scale-[1.01]"
                      : "bg-brand-navy/60 border-brand-neutral/15 text-brand-neutral/70 hover:border-brand-neutral/40 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IndIcon
                      className={`w-4 h-4 ${
                        isSelected ? "text-brand-green" : "text-brand-gray"
                      }`}
                    />
                    <div>
                      <span className="text-xs font-mono text-brand-gray block">
                        VERTICAL {ind.number}
                      </span>
                      <span className="text-base font-extrabold uppercase tracking-tight block text-brand-neutral">
                        {ind.name}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? "bg-brand-green animate-ping" : "bg-brand-neutral/20"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Visual & Customer Journey Pipeline */}
          <div className="lg:col-span-8 bg-black/40 border border-brand-neutral/20 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl relative">
            {/* Top Headline & Icon */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-neutral/10">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>VERTICAL // {activeIndustry.name.toUpperCase()}</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-brand-neutral tracking-tight">
                  {activeIndustry.tagline}
                </h3>
              </div>

              <Link
                href={`/industries/${activeIndustry.slug}`}
                data-cursor="DEEP DIVE"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand-green text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-green/90 transition-all shrink-0"
              >
                <span>ENTER SPEC</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Dynamic Customer Journey Pipeline */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold">
                  THE SECTOR BUYER JOURNEY:
                </span>
                <span className="text-xs font-mono text-brand-green font-bold">
                  {activeIndustry.customerJourneySummary}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {activeIndustry.journeyStages.map((stage, idx) => (
                  <div
                    key={stage.step}
                    className="p-4 rounded-xl bg-white/[0.03] border border-brand-neutral/15 space-y-2 relative"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-brand-green font-bold">STAGE {stage.step}</span>
                      <span className="text-brand-neutral/40 uppercase">{stage.label}</span>
                    </div>

                    <h4 className="text-lg font-bold uppercase text-brand-neutral tracking-tight">
                      {stage.label}
                    </h4>

                    <div className="space-y-1.5 text-xs">
                      <p className="text-brand-neutral/80 font-medium">{stage.focus}</p>
                      <p className="text-[11px] text-brand-green italic pt-1 border-t border-brand-neutral/10">
                        Panknox: {stage.panknoxIntervention}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tactical Focus & Verified Case Reference */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-brand-neutral/10 text-xs">
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 space-y-1">
                <span className="font-mono uppercase text-red-300 font-bold block">
                  COMMUNICATION PITFALL:
                </span>
                <p className="text-brand-neutral/80">{activeIndustry.communicationProblem}</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-green/10 border border-brand-green/30 space-y-1">
                <span className="font-mono uppercase text-brand-green font-bold block">
                  WHAT PANKNOX BUILDS:
                </span>
                <p className="text-brand-neutral/90 font-medium">
                  {activeIndustry.tacticalFocus.whatWorks}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
