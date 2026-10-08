"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

interface CapabilityRow {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  visualMetaphor: string;
  visualLabel: string;
  details: string;
}

const CAPABILITY_ROWS: CapabilityRow[] = [
  {
    number: "01",
    id: "strategy",
    title: "STRATEGY",
    subtitle: "Commercial Truth & Narrative Vector",
    visualMetaphor: "SIGNAL FINDING DIRECTION",
    visualLabel: "BUSINESS → AUDIENCE → POSITIONING → MESSAGE",
    details: "Dissecting unit economics, customer friction, and market voids so you never compete on commodity price.",
  },
  {
    number: "02",
    id: "creative",
    title: "CREATIVE & CONTENT",
    subtitle: "Visual Grammar & Sensory Craft",
    visualMetaphor: "ELEMENTS ASSEMBLING INTO COMPOSITION",
    visualLabel: "IDEA → DESIGN → CINEMA → CONTENT",
    details: "Cinema-grade 4K industrial plant documentation, typography, and motion design that commands market respect.",
  },
  {
    number: "03",
    id: "presence",
    title: "DIGITAL PRESENCE",
    subtitle: "Brand Touchpoints & Trust Architecture",
    visualMetaphor: "COHERENT INTERFACE FORMING",
    visualLabel: "INSTAGRAM • LINKEDIN • WEB • GOOGLE • YOUTUBE",
    details: "Unifying fragmented digital touchpoints so every interaction reflects world-class authority.",
  },
  {
    number: "04",
    id: "growth",
    title: "GROWTH",
    subtitle: "Algorithmic Placement & Qualified Conversion",
    visualMetaphor: "SIGNAL MULTIPLYING OUTWARD",
    visualLabel: "ATTENTION → LEAD → CONVERSION → REVENUE",
    details: "Full-funnel Meta and Google search architectures targeting high-intent decision-makers.",
  },
];

export default function CapabilitySystemSection() {
  const [activeRowId, setActiveRowId] = useState<string>("strategy");
  const activeRow = CAPABILITY_ROWS.find((r) => r.id === activeRowId) || CAPABILITY_ROWS[0];

  return (
    <section
      id="capability-systems"
      className="py-36 sm:py-48 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
        {/* Section Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-gray uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>03 // CAPABILITY ARCHITECTURE</span>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-navy leading-[0.92]">
            WHAT WE <br />
            <span className="text-brand-green">BUILD.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-brand-gray font-normal max-w-2xl leading-relaxed">
            Four large integrated systems engineered to turn operational capability into market dominance.
          </p>
        </div>

        {/* 4 Large Editorial Rows */}
        <div className="divide-y-2 divide-brand-navy/15 border-y-2 border-brand-navy/15">
          {CAPABILITY_ROWS.map((row) => {
            const isSelected = row.id === activeRowId;
            return (
              <div
                key={row.id}
                onMouseEnter={() => setActiveRowId(row.id)}
                onClick={() => setActiveRowId(row.id)}
                data-cursor="INSPECT"
                className={`py-12 sm:py-16 transition-all cursor-pointer group ${
                  isSelected ? "bg-brand-neutral-surface/60 px-6 sm:px-10 rounded-2xl" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6">
                    <span className="text-lg sm:text-2xl font-mono text-brand-green font-bold">
                      {row.number}
                    </span>
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-brand-navy group-hover:text-brand-green transition-colors">
                      {row.title}
                    </h3>
                  </div>

                  <span className="text-xs sm:text-sm font-mono text-brand-gray uppercase font-semibold">
                    {row.subtitle}
                  </span>
                </div>

                {/* Expanded Dominant Visual Detail on Active Row */}
                {isSelected && (
                  <div className="pt-8 mt-8 border-t border-brand-navy/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
                    <div className="lg:col-span-6 space-y-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>METAPHOR: {row.visualMetaphor}</span>
                      </span>
                      <p className="text-base sm:text-lg text-brand-navy leading-relaxed">
                        {row.details}
                      </p>
                    </div>

                    <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-brand-neutral-border shadow-sm space-y-2 font-mono text-xs">
                      <span className="text-brand-gray uppercase block font-bold">
                        PIPELINE VECTOR:
                      </span>
                      <p className="text-brand-navy font-bold text-sm tracking-wide">
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
        <div className="pt-4 flex items-center justify-between">
          <span className="text-xs font-mono text-brand-gray uppercase">
            FOUR INTERLOCKED ENGINES
          </span>

          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-navy hover:text-brand-green uppercase tracking-wider border-b-2 border-brand-navy hover:border-brand-green pb-1 transition-colors"
          >
            <span>VIEW COMPLETE SPECIFICATION IN /WHAT-WE-DO</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
