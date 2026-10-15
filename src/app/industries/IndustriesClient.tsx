"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { industriesData } from "@/data/industries";
import {
  ManufacturingIcon,
  HealthcareIcon,
  RealEstateIcon,
  InteriorsIcon,
  HospitalityIcon,
} from "@/components/common/PanknoxIcons";
import PanknoxCTAIsland from "@/components/common/PanknoxCTAIsland";

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string; active?: boolean; size?: number }>> = {
  manufacturing: ManufacturingIcon,
  healthcare: HealthcareIcon,
  "real-estate": RealEstateIcon,
  "interiors-furniture": InteriorsIcon,
  hospitality: HospitalityIcon,
};

export default function IndustriesClient() {
  const [activeId, setActiveId] = useState(industriesData[0].id);

  const activeInd = industriesData.find((i) => i.id === activeId) || industriesData[0];
  const ActiveIcon = INDUSTRY_ICONS[activeInd.id] || ManufacturingIcon;

  return (
    <div className="min-h-screen bg-white text-brand-navy relative overflow-hidden">
      {/* 1. White Editorial Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 max-w-6xl mx-auto px-6 sm:px-8 space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-navy text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-green" />
          <span>Sectors // 5 dedicated commercial architectures</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-navy leading-[1.08]">
          Commercial reality <br />
          <span className="text-brand-green">is not one-size-fits-all.</span>
        </h1>

        <p className="text-lg sm:text-xl text-brand-gray font-normal leading-relaxed max-w-3xl pt-1">
          A precision engineering factory does not sell like a boutique luxury hotel. Panknox develops dedicated communication architectures calibrated to each sector&apos;s specific buyer friction.
        </p>
      </section>

      {/* 2. Interactive Morphing Sector Console (White Environment with Dark Interactive Console) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-20 space-y-8">
        {/* Horizontal Sector Selector Pills */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 border-b border-brand-navy/10 pb-5">
          {industriesData.map((ind) => {
            const isSelected = ind.id === activeId;
            const Icon = INDUSTRY_ICONS[ind.id] || ManufacturingIcon;

            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveId(ind.id)}
                className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${
                  isSelected
                    ? "bg-brand-navy text-white shadow-md scale-[1.02]"
                    : "bg-[#F8FAF9] text-brand-gray hover:text-brand-navy hover:bg-[#DFE5E2]/40"
                }`}
              >
                <Icon active={isSelected} size={16} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Interactive Console (Dark Visual Moment on White Canvas) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#04262F] text-brand-neutral border border-brand-green/30 space-y-10 shadow-2xl relative overflow-hidden transition-all duration-500">
          {/* Subtle Ambient Emerald Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-brand-green/10 blur-[100px] pointer-events-none" />

          {/* Console Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-brand-green/15 text-brand-green shrink-0 mt-1">
                <ActiveIcon active={true} size={28} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-green font-semibold block">
                  Sector specification // {activeInd.number}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {activeInd.name}
                </h2>
                <p className="text-sm sm:text-base text-brand-neutral/80 pt-1">
                  {activeInd.tagline}
                </p>
              </div>
            </div>

            <Link
              href={`/industries/${activeInd.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-green text-brand-navy font-bold text-xs hover:bg-brand-green/90 transition-all shrink-0 self-start sm:self-auto shadow-md"
            >
              <span>Explore {activeInd.name} architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            
          </div>

          {/* Sector Decision Pipeline */}
          <div className="space-y-4 relative z-10">
            <span className="text-xs font-mono text-brand-neutral/60 font-semibold block">
              The buyer decision pipeline:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeInd.journeyStages.map((stage, idx) => (
                <div
                  key={stage.step || idx}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2"
                >
                  <span className="text-xs font-mono text-brand-green font-bold">
                    0{idx + 1} // {stage.label}
                  </span>
                  <p className="text-xs text-brand-neutral/80 leading-relaxed font-normal">
                    {stage.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tactical Contrast: What Fails vs What Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 relative z-10 text-xs sm:text-[13px] font-mono">
            <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-1.5">
              <span className="text-red-400 font-semibold block">Where standard agencies fail:</span>
              <p className="text-brand-neutral/80 font-sans text-xs leading-relaxed">
                {activeInd.tacticalFocus.whatFails}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-brand-green/10 border border-brand-green/30 space-y-1.5">
              <span className="text-brand-green font-semibold block">The Panknox tactical deployment:</span>
              <p className="text-white font-sans text-xs leading-relaxed">
                {activeInd.tacticalFocus.whatWorks}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Five Verticals Catalog on White Editorial Canvas */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-20 space-y-8">
        <div className="space-y-2 border-b border-brand-navy/10 pb-4">
          <span className="text-xs font-mono text-brand-gray font-semibold">
            All 5 Verticals // Architectural Index
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy">
            Explore dedicated sector blueprints.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => {
            const Icon = INDUSTRY_ICONS[ind.id] || ManufacturingIcon;
            return (
              <Link
                key={ind.id}
                href={`/industries/${ind.slug}`}
                className="group p-6 rounded-2xl bg-[#F8FAF9] border border-brand-navy/10 hover:border-brand-green/50 hover:bg-white hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-green font-semibold">
                      {ind.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-brand-green/10 text-brand-navy group-hover:scale-110 transition-transform">
                      <Icon active={true} size={20} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-brand-navy group-hover:text-brand-green transition-colors">
                    {ind.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-gray line-clamp-3 leading-relaxed">
                    {ind.sectorSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-navy/5 flex items-center justify-between text-xs font-mono font-semibold text-brand-navy group-hover:text-brand-green">
                  <span>View specification</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. White Dynamic Island CTA (Exactly One) */}
      <PanknoxCTAIsland variant="industries" />
    </div>
  );
}
