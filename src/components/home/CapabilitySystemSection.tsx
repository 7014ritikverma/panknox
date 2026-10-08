"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  StrategyIcon,
  CreativeIcon,
  PresenceIcon,
  GrowthIcon,
} from "@/components/common/PanknoxIcons";

interface CapabilityRow {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  visualMetaphor: string;
  visualLabel: string;
  details: string;
  icon: typeof StrategyIcon;
}

const CAPABILITY_ROWS: CapabilityRow[] = [
  {
    number: "01",
    id: "strategy",
    title: "Strategy",
    subtitle: "Commercial truth & narrative vector",
    visualMetaphor: "Signal finding direction",
    visualLabel: "Business → Audience → Positioning → Message",
    details:
      "Dissecting unit economics, customer friction, and market voids so you never compete on commodity price.",
    icon: StrategyIcon,
  },
  {
    number: "02",
    id: "creative",
    title: "Creative & content",
    subtitle: "Visual grammar & sensory craft",
    visualMetaphor: "Elements assembling into composition",
    visualLabel: "Idea → Design → Motion → Content",
    details:
      "High-fidelity industrial documentation, typography, and motion design that commands market respect.",
    icon: CreativeIcon,
  },
  {
    number: "03",
    id: "presence",
    title: "Digital presence",
    subtitle: "Brand touchpoints & trust architecture",
    visualMetaphor: "Coherent interface forming",
    visualLabel: "Instagram • LinkedIn • Web • Google • YouTube",
    details:
      "Unifying fragmented digital touchpoints so every interaction reflects world-class authority.",
    icon: PresenceIcon,
  },
  {
    number: "04",
    id: "growth",
    title: "Growth",
    subtitle: "Algorithmic placement & qualified conversion",
    visualMetaphor: "Signal multiplying outward",
    visualLabel: "Attention → Lead → Conversion → Revenue",
    details:
      "Full-funnel Meta and Google search architectures targeting high-intent decision-makers.",
    icon: GrowthIcon,
  },
];

export default function CapabilitySystemSection() {
  const [activeRowId, setActiveRowId] = useState<string>("strategy");

  return (
    <section
      id="capability-systems"
      className="py-20 sm:py-24 lg:py-28 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="space-y-5 max-w-4xl">
          <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>03 // Capability architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-brand-navy leading-[1.08]">
            What we <br />
            <span className="text-brand-green">build.</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-gray font-normal max-w-2xl leading-relaxed">
            Four large integrated systems engineered to turn operational capability into market dominance.
          </p>
        </div>

        {/* 4 Large Editorial Rows with Geometric Icons */}
        <div className="divide-y divide-brand-navy/15 border-y border-brand-navy/15">
          {CAPABILITY_ROWS.map((row) => {
            const isSelected = row.id === activeRowId;
            const IconComponent = row.icon;
            return (
              <div
                key={row.id}
                onMouseEnter={() => setActiveRowId(row.id)}
                onClick={() => setActiveRowId(row.id)}
                className={`py-10 sm:py-14 transition-all duration-300 cursor-pointer group ${
                  isSelected ? "bg-brand-neutral-surface/60 px-6 sm:px-8 rounded-2xl" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-center gap-5 sm:gap-7">
                    <span className="text-base sm:text-xl font-mono text-brand-green font-semibold">
                      {row.number}
                    </span>

                    {/* Minimal Geometric Editorial Icon */}
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isSelected
                          ? "bg-brand-green/15 text-brand-green shadow-sm"
                          : "bg-brand-neutral-surface text-brand-navy group-hover:text-brand-green"
                      }`}
                    >
                      <IconComponent active={isSelected} size={26} />
                    </div>

                    <h3
                      className={`text-2xl sm:text-4xl md:text-[42px] font-bold tracking-tight transition-colors ${
                        isSelected
                          ? "text-brand-navy"
                          : "text-brand-navy/90 group-hover:text-brand-green"
                      }`}
                    >
                      {row.title}
                    </h3>
                  </div>

                  <span className="text-xs sm:text-sm font-mono text-brand-gray font-medium pl-14 lg:pl-0">
                    {row.subtitle}
                  </span>
                </div>

                {/* Expanded Dominant Visual Detail on Active Row */}
                {isSelected && (
                  <div className="pt-8 mt-8 border-t border-brand-navy/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
                    <div className="lg:col-span-6 space-y-3">
                      <span className="text-xs font-mono text-brand-green font-semibold flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Metaphor: {row.visualMetaphor}</span>
                      </span>
                      <p className="text-base sm:text-lg text-brand-navy/90 leading-relaxed">
                        {row.details}
                      </p>
                    </div>

                    <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-brand-neutral-border shadow-sm space-y-2 font-mono text-xs">
                      <span className="text-brand-gray block font-semibold">
                        Pipeline vector:
                      </span>
                      <p className="text-brand-navy font-semibold text-sm tracking-wide">
                        {row.visualLabel}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to Full Capabilities */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-mono text-brand-gray font-medium">
            Four interlocked engines
          </span>

          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-navy hover:text-brand-green border-b-2 border-brand-navy hover:border-brand-green pb-1 transition-colors"
          >
            <span>View complete specification in /what-we-do</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

