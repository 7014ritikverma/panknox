"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Building, HeartPulse, Home, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import { industriesData, IndustryData } from "@/data/industries";

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

  return (
    <section id="industry-switcher" className="py-24 sm:py-32 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>05 // INDUSTRY OPERATING ENVIRONMENTS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-tight">
            INDUSTRY <br />
            <span className="text-brand-green">SWITCHER.</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed">
            One generic marketing template never fits distinct commercial journeys.
            Select an industry to see how the customer journey and communication architecture shifts.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {industriesData.map((ind) => {
            const isSelected = ind.id === selectedIndustryId;
            const Icon = INDUSTRY_ICONS[ind.id] || Building;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustryId(ind.id)}
                data-cursor="SWITCH"
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-36 ${
                  isSelected
                    ? "bg-brand-green/15 border-brand-green text-brand-neutral shadow-[0_0_20px_rgba(48,198,130,0.25)]"
                    : "bg-brand-navy/60 border-brand-neutral/15 text-brand-neutral/70 hover:border-brand-neutral/40 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[11px] font-mono text-brand-gray">{ind.number}</span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-brand-green" : "text-brand-gray"}`} />
                </div>
                <div>
                  <span className="text-base font-extrabold uppercase tracking-tight block text-brand-neutral">
                    {ind.name}
                  </span>
                  <span className="text-[10px] font-mono text-brand-gray block mt-1">
                    {isSelected ? "ENVIRONMENT ACTIVE" : "SWITCH ENVIRONMENT"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Industry Environment Display */}
        <div className="bg-brand-navy border border-brand-neutral/20 rounded-2xl p-6 sm:p-10 lg:p-12 space-y-12 shadow-2xl relative">
          {/* Top Headline for Industry */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-brand-neutral/10">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-green">
                ENVIRONMENT: {activeIndustry.number} // {activeIndustry.name.toUpperCase()}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold uppercase text-brand-neutral tracking-tight">
                {activeIndustry.tagline}
              </h3>
              <p className="text-sm font-mono text-brand-gray">
                SECTOR PROFILE: {activeIndustry.sectorSummary}
              </p>
            </div>

            <Link
              href={`/industries/${activeIndustry.slug}`}
              data-cursor="DEEP DIVE"
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-brand-green/40 bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-brand-navy text-xs font-mono font-bold tracking-wider uppercase transition-all self-start lg:self-center"
            >
              <span>DEEP DIVE {activeIndustry.name}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Customer Journey Pipeline Ribbon */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-green">
                THE DISTINCT CUSTOMER JOURNEY
              </span>
              <span className="text-xs font-mono text-brand-neutral/60">
                {activeIndustry.customerJourneySummary}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeIndustry.journeyStages.map((stage) => (
                <div
                  key={stage.step}
                  className="p-5 rounded-xl bg-white/[0.03] border border-brand-neutral/10 space-y-3 relative group hover:border-brand-green/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-brand-green font-bold">STAGE {stage.step}</span>
                    <span className="text-brand-neutral/40 font-bold uppercase">{stage.label}</span>
                  </div>

                  <h4 className="text-xl font-extrabold uppercase text-brand-neutral tracking-tight">
                    {stage.label}
                  </h4>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-brand-gray block">
                        BUYER FOCUS:
                      </span>
                      <p className="text-brand-neutral/80">{stage.focus}</p>
                    </div>

                    <div className="pt-1 border-t border-brand-neutral/10">
                      <span className="text-[10px] font-mono uppercase text-red-400/80 block">
                        COMMON FRICTION:
                      </span>
                      <p className="text-brand-gray">{stage.frictionPoint}</p>
                    </div>

                    <div className="pt-1 border-t border-brand-neutral/10">
                      <span className="text-[10px] font-mono uppercase text-brand-green font-semibold block">
                        PANKNOX INTERVENTION:
                      </span>
                      <p className="text-brand-neutral font-medium">{stage.panknoxIntervention}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Contrast: Challenge vs Panknox Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-black/30 border border-brand-neutral/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray block">
                THE SECTOR REALITY &amp; PROBLEM
              </span>
              <div className="space-y-2">
                <h4 className="text-sm font-mono font-bold text-red-400 uppercase">
                  BUSINESS CHALLENGE:
                </h4>
                <p className="text-sm text-brand-neutral/80 leading-relaxed">
                  {activeIndustry.businessChallenge}
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-brand-neutral/10">
                <h4 className="text-sm font-mono font-bold text-red-400 uppercase">
                  COMMUNICATION PITFALL:
                </h4>
                <p className="text-sm text-brand-neutral/70 leading-relaxed">
                  {activeIndustry.communicationProblem}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-brand-green/5 border border-brand-green/30 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold block">
                THE PANKNOX STRATEGIC SOLUTION
              </span>
              <div className="space-y-2">
                <h4 className="text-sm font-mono font-bold text-brand-neutral uppercase">
                  HOW PANKNOX ARCHITECTS THIS:
                </h4>
                <p className="text-sm text-brand-neutral leading-relaxed">
                  {activeIndustry.panknoxApproach}
                </p>
              </div>
              <div className="pt-2 border-t border-brand-neutral/10 space-y-2">
                <span className="text-xs font-mono text-brand-green uppercase font-semibold block">
                  TACTICAL LEVERAGE:
                </span>
                <p className="text-xs text-brand-neutral/90 italic bg-brand-navy/60 p-3 rounded border border-brand-green/20">
                  {activeIndustry.tacticalFocus.whatWorks}
                </p>
              </div>
            </div>
          </div>

          {/* Relevant Project Link */}
          <div className="pt-6 border-t border-brand-neutral/10 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase text-brand-gray block">
                ARCHIVED CASE STUDY REFERENCE:
              </span>
              <p className="text-base font-bold text-brand-neutral">
                {activeIndustry.sampleWorkReference.title}
              </p>
            </div>

            <Link
              href={`/work/${activeIndustry.sampleWorkReference.slug}`}
              data-cursor="CASE STUDY"
              className="inline-flex items-center gap-2 text-xs font-mono text-brand-green hover:underline uppercase font-bold"
            >
              <span>INSPECT CASE STUDY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
