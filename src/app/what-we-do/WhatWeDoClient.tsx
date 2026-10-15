"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import {
  StrategyIcon,
  CreativeIcon,
  PresenceIcon,
  GrowthIcon,
} from "@/components/common/PanknoxIcons";
import PanknoxCTAIsland from "@/components/common/PanknoxCTAIsland";

interface AreaConfig {
  id: string;
  number: string;
  title: string;
  sentence: string;
  metaphorTitle: string;
  icon: typeof StrategyIcon;
  capabilities: string[];
}

const PRIMARY_AREAS: AreaConfig[] = [
  {
    id: "strategy",
    number: "01",
    title: "Strategy",
    sentence: "We figure out what needs to happen.",
    metaphorTitle: "Signal finding direction",
    icon: StrategyIcon,
    capabilities: [
      "Market research",
      "Brand positioning",
      "Commercial narrative",
      "Platform strategy",
      "Campaign planning",
    ],
  },
  {
    id: "creative",
    number: "02",
    title: "Creative & content",
    sentence: "We turn the strategy into things people notice and remember.",
    metaphorTitle: "Elements assembling into a composition",
    icon: CreativeIcon,
    capabilities: [
      "Video production",
      "Typography systems",
      "Motion design",
      "Editorial content",
      "Campaign assets",
    ],
  },
  {
    id: "presence",
    number: "03",
    title: "Digital presence",
    sentence: "We make sure your business shows up clearly online.",
    metaphorTitle: "Interface forming",
    icon: PresenceIcon,
    capabilities: [
      "Website architecture",
      "Social media systems",
      "Digital touchpoints",
      "Brand collateral",
      "Technical integration",
    ],
  },
  {
    id: "growth",
    number: "04",
    title: "Growth",
    sentence: "We turn attention into business results.",
    metaphorTitle: "Signal expanding outward",
    icon: GrowthIcon,
    capabilities: [
      "Meta ads",
      "Google ads",
      "Lead generation",
      "Retargeting",
      "Conversion rate optimization",
    ],
  },
];

export default function WhatWeDoClient() {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedArea((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative min-h-screen bg-white text-brand-navy overflow-hidden">
      {/* 1. White Editorial Header */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 max-w-6xl mx-auto px-6 sm:px-8 space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-navy text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-green" />
          <span>Capabilities // Four primary areas</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-navy leading-[1.08]">
          What we do.
        </h1>

        <p className="text-lg sm:text-xl text-brand-gray font-normal leading-relaxed max-w-2xl pt-1">
          We bring strategy, creative, digital presence and growth together around your business.
        </p>
      </section>

      {/* 2. The Four Primary Areas (Clean White Editorial Surfaces) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-20 space-y-8 sm:space-y-10">
        {PRIMARY_AREAS.map((area) => {
          const IconComponent = area.icon;
          const isExpanded = expandedArea === area.id;

          return (
            <div
              key={area.id}
              className="p-8 sm:p-12 rounded-3xl bg-[#F8FAF9] border border-brand-navy/10 hover:border-brand-green/40 transition-all duration-300 space-y-6 shadow-sm hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Icon, Number, Title & Sentence */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-brand-green font-bold">
                      {area.number}
                    </span>
                    <div className="p-3 rounded-xl bg-brand-green/15 text-brand-navy">
                      <IconComponent active={true} size={24} />
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-navy">
                      {area.title}
                    </h2>
                  </div>

                  <p className="text-base sm:text-lg text-brand-navy/85 font-normal leading-relaxed max-w-xl pl-1">
                    {area.sentence}
                  </p>

                  {/* Progressive Disclosure Trigger */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => toggleExpand(area.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-navy/70 hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                    >
                      <span>{isExpanded ? "Hide capabilities" : "Explore capabilities"}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-brand-green" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Right: Visual Interaction Container */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="w-full max-w-[280px] h-[160px] rounded-2xl bg-white border border-brand-navy/10 p-5 flex flex-col justify-between relative overflow-hidden shadow-sm">
                    <span className="text-[11px] font-mono text-brand-gray font-medium">
                      {area.metaphorTitle}
                    </span>

                    {/* Interactive Visual Element */}
                    {area.id === "strategy" && (
                      <div className="flex items-center justify-center my-auto relative w-full h-16">
                        <div className="w-16 h-16 rounded-full border border-brand-green/30 flex items-center justify-center animate-spin [animation-duration:16s]">
                          <div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_10px_#30C682]" />
                        </div>
                        <div className="absolute w-28 h-[1px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />
                      </div>
                    )}

                    {area.id === "creative" && (
                      <div className="flex items-center justify-center my-auto gap-2.5">
                        <div className="w-10 h-10 rounded-lg border border-brand-green/40 bg-brand-green/10 transform -rotate-6 transition-transform hover:rotate-0" />
                        <div className="w-12 h-12 rounded-lg border border-brand-green bg-brand-green/20 z-10 shadow-sm" />
                        <div className="w-10 h-10 rounded-lg border border-brand-green/40 bg-brand-green/10 transform rotate-6 transition-transform hover:rotate-0" />
                      </div>
                    )}

                    {area.id === "presence" && (
                      <div className="flex flex-col gap-1.5 my-auto w-full px-4">
                        <div className="h-2 w-full rounded bg-brand-green/40" />
                        <div className="grid grid-cols-3 gap-1.5">
                          <div className="h-8 rounded bg-brand-green/20" />
                          <div className="h-8 rounded bg-brand-green/20" />
                          <div className="h-8 rounded bg-brand-green/20" />
                        </div>
                      </div>
                    )}

                    {area.id === "growth" && (
                      <div className="flex items-center justify-center my-auto relative">
                        <div className="w-3 h-3 rounded-full bg-brand-green shadow-[0_0_12px_#30C682]" />
                        <div className="absolute w-10 h-10 rounded-full border border-brand-green/40 animate-ping [animation-duration:2.5s]" />
                        <div className="absolute w-16 h-16 rounded-full border border-brand-green/20 animate-ping [animation-duration:3.5s]" />
                      </div>
                    )}

                    <span className="text-[10px] font-mono text-brand-green font-semibold text-right">
                      Active vector
                    </span>
                  </div>
                </div>
              </div>

              {/* Expandable Capabilities Checklist */}
              {isExpanded && (
                <div className="pt-6 border-t border-brand-navy/10 animate-fadeIn">
                  <span className="text-xs font-mono text-brand-gray block mb-3 font-medium">
                    Focused capabilities:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {area.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-4 py-2 rounded-full text-xs font-mono bg-white border border-brand-navy/10 text-brand-navy"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 3. ONE DEDICATED DARK VISUAL SECTION (Visual Moment) */}
      <section className="bg-[#04262F] text-brand-neutral py-20 sm:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 space-y-12">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-green font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Integration // The unified system</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Four capabilities. <br />
              <span className="text-brand-green">One coherent perception.</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed font-normal">
              When strategy, creative, digital presence, and growth operate in silos, marketing leaks attention and capital. Panknox binds them into a single continuous feedback loop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-brand-green">01 // Diagnosis</span>
              <h3 className="text-lg font-bold text-white">Strategy first</h3>
              <p className="text-xs text-brand-neutral/70 leading-relaxed">
                Determine the core commercial wedge before producing any asset.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-brand-green">02 // Craft</span>
              <h3 className="text-lg font-bold text-white">Distinctive creative</h3>
              <p className="text-xs text-brand-neutral/70 leading-relaxed">
                High-fidelity video, typography, and assets people actually remember.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-brand-green">03 // Foundation</span>
              <h3 className="text-lg font-bold text-white">Digital presence</h3>
              <p className="text-xs text-brand-neutral/70 leading-relaxed">
                Seamless digital interfaces and brand collateral that inspire immediate trust.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-brand-green">04 // Leverage</span>
              <h3 className="text-lg font-bold text-white">Growth &amp; ads</h3>
              <p className="text-xs text-brand-neutral/70 leading-relaxed">
                Algorithmic ad distribution targeting high-conviction decision-makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. White Dynamic Island CTA (Exactly One) */}
      <PanknoxCTAIsland variant="what-we-do" />
    </div>
  );
}
