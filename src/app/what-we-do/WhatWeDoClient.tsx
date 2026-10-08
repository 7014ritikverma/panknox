"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";
import {
  StrategyIcon,
  CreativeIcon,
  PresenceIcon,
  GrowthIcon,
} from "@/components/common/PanknoxIcons";
import CtaIsland from "@/components/common/CtaIsland";

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
      "Websites",
      "Landing pages",
      "LinkedIn presence",
      "Instagram curation",
      "Google Business Profile",
    ],
  },
  {
    id: "growth",
    number: "04",
    title: "Growth",
    sentence: "We connect the work to attention, enquiries and growth.",
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
    <div className="relative min-h-screen text-brand-neutral overflow-hidden">
      <AtmosphericBackground className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 space-y-24">
          {/* 1. Ultra-Clean Hero (Understood in 10 Seconds) */}
          <div className="space-y-5 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-green/90">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Panknox // Four primary areas</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-neutral leading-[1.08]">
              What we do.
            </h1>

            <p className="text-lg sm:text-xl text-brand-neutral/80 font-normal leading-relaxed pt-1">
              We bring strategy, creative, digital presence and growth together around your business.
            </p>
          </div>

          {/* 2. The Four Primary Areas with Visual Metaphors */}
          <div className="space-y-12 sm:space-y-16">
            {PRIMARY_AREAS.map((area) => {
              const IconComponent = area.icon;
              const isExpanded = expandedArea === area.id;

              return (
                <div
                  key={area.id}
                  className="p-8 sm:p-12 rounded-3xl bg-black/45 border border-white/10 hover:border-white/20 transition-all duration-300 space-y-8 shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Icon, Title & One Short Sentence */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-mono text-brand-green font-semibold">
                          {area.number}
                        </span>
                        <div className="p-3 rounded-xl bg-brand-green/10 text-brand-green">
                          <IconComponent active={true} size={24} />
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-neutral">
                          {area.title}
                        </h2>
                      </div>

                      <p className="text-base sm:text-lg text-brand-neutral/85 font-normal leading-relaxed max-w-xl pl-1">
                        {area.sentence}
                      </p>

                      {/* Secondary Progressive Disclosure Trigger */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => toggleExpand(area.id)}
                          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-green hover:text-white transition-colors"
                        >
                          <span>{isExpanded ? "Hide capabilities" : "Explore capabilities"}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Right: One Simple Visual Interaction per Area (Requirement 16) */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                      <div className="w-full max-w-[280px] h-[160px] rounded-2xl bg-brand-navy/90 border border-brand-green/25 p-5 flex flex-col justify-between relative overflow-hidden shadow-inner">
                        <span className="text-[11px] font-mono text-brand-neutral/50 font-medium">
                          {area.metaphorTitle}
                        </span>

                        {/* Interactive Visual Element */}
                        {area.id === "strategy" && (
                          /* Strategy: Signal finding direction */
                          <div className="flex items-center justify-center my-auto relative w-full h-16">
                            <div className="w-16 h-16 rounded-full border border-brand-green/30 flex items-center justify-center animate-spin [animation-duration:16s]">
                              <div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_10px_#30C682]" />
                            </div>
                            <div className="absolute w-28 h-[1px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />
                          </div>
                        )}

                        {area.id === "creative" && (
                          /* Creative: Elements assembling into a composition */
                          <div className="flex items-center justify-center my-auto gap-2.5">
                            <div className="w-10 h-10 rounded-lg border border-brand-green/40 bg-brand-green/10 transform -rotate-6 transition-transform hover:rotate-0" />
                            <div className="w-12 h-12 rounded-lg border border-brand-green/70 bg-brand-green/15 z-10 shadow-sm" />
                            <div className="w-10 h-10 rounded-lg border border-brand-green/40 bg-brand-green/10 transform rotate-6 transition-transform hover:rotate-0" />
                          </div>
                        )}

                        {area.id === "presence" && (
                          /* Digital presence: Interface forming */
                          <div className="flex flex-col gap-1.5 my-auto w-full px-4">
                            <div className="h-2 w-full rounded bg-brand-green/30" />
                            <div className="grid grid-cols-3 gap-1.5">
                              <div className="h-8 rounded bg-brand-green/20" />
                              <div className="h-8 rounded bg-brand-green/20" />
                              <div className="h-8 rounded bg-brand-green/20" />
                            </div>
                          </div>
                        )}

                        {area.id === "growth" && (
                          /* Growth: Signal expanding outward */
                          <div className="flex items-center justify-center my-auto relative">
                            <div className="w-3 h-3 rounded-full bg-brand-green shadow-[0_0_12px_#30C682]" />
                            <div className="absolute w-10 h-10 rounded-full border border-brand-green/40 animate-ping [animation-duration:2.5s]" />
                            <div className="absolute w-16 h-16 rounded-full border border-brand-green/20 animate-ping [animation-duration:3.5s]" />
                          </div>
                        )}

                        <span className="text-[10px] font-mono text-brand-green text-right">
                          Active vector
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progressive Disclosure Expandable Capabilities (Hidden by default) */}
                  {isExpanded && (
                    <div className="pt-6 border-t border-white/10 animate-fadeIn">
                      <span className="text-xs font-mono text-brand-neutral/50 block mb-3 font-medium">
                        Focused capabilities:
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {area.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="px-4 py-2 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-brand-neutral/90"
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
          </div>

          {/* 3. Signature CtaIsland */}
          <CtaIsland variant="what-we-do" className="pt-4" />
        </div>
      </AtmosphericBackground>
    </div>
  );
}
