"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Building, HeartPulse, Home, Compass, Sparkles } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";

interface IndustryItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  journey: string[];
  slug: string;
  problem: string;
  solution: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "manufacturing",
    number: "01",
    name: "MANUFACTURING",
    tagline: "Industrial Capability Demands Concrete Proof, Not Fluff.",
    journey: ["PRODUCT", "UNDERSTANDING", "TRUST", "ENQUIRY"],
    slug: "manufacturing",
    problem: "High engineering reality hidden behind dated PDFs and commodity vendor pricing.",
    solution: "4K macro plant cinematography, tolerance documentation, and technical RFQ funnels.",
  },
  {
    id: "healthcare",
    number: "02",
    name: "HEALTHCARE",
    tagline: "In Healthcare, Marketing Must Never Look Like Marketing.",
    journey: ["EDUCATION", "TRUST", "CONFIDENCE", "APPOINTMENT"],
    slug: "healthcare",
    problem: "Patient anxiety compounded by aggressive discount ad banners and medical jargon.",
    solution: "Dignity-first clinical education videos, transparent care pathways, and frictionless triage.",
  },
  {
    id: "real-estate",
    number: "03",
    name: "REAL ESTATE",
    tagline: "Move Beyond Render Galleries to Lifestyle Reality.",
    journey: ["ATTENTION", "INTEREST", "SITE VISIT", "ENQUIRY"],
    slug: "real-estate",
    problem: "Identical 3D renders, broker spam calls, and buyer cynicism over delivery velocity.",
    solution: "Construction milestone documentation films, spatial POV tours, and pre-qualified investor funnels.",
  },
  {
    id: "interiors-furniture",
    number: "04",
    name: "INTERIORS & FURNITURE",
    tagline: "Turn Aesthetic Inspiration into Material Certainty.",
    journey: ["INSPIRATION", "DESIRE", "TRUST", "ENQUIRY"],
    slug: "interiors-furniture",
    problem: "Artisanal joinery looking indistinguishable from flat-pack brands on generic feeds.",
    solution: "Tactile timber cinema, joinery durability tests, and architect specification portals.",
  },
  {
    id: "hospitality",
    number: "05",
    name: "HOSPITALITY",
    tagline: "Guests Don't Book Rooms. They Book Moments.",
    journey: ["EXPERIENCE", "DESIRE", "TRUST", "BOOKING"],
    slug: "hospitality",
    problem: "OTA aggregators taking 20%+ commissions while stripping the estate of its soul.",
    solution: "Sensory dusk cinematography, culinary heritage vignettes, and direct reservation platforms.",
  },
];

export default function IndustrySwitcherSection() {
  const [activeId, setActiveId] = useState<string>("manufacturing");
  const activeInd = INDUSTRIES.find((i) => i.id === activeId) || INDUSTRIES[0];

  return (
    <section id="industry-switcher" className="relative overflow-hidden">
      <AtmosphericBackground className="py-36 sm:py-48">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
          {/* Section Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-green/80 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>04 // SECTOR OPERATING ENVIRONMENTS</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-neutral leading-[0.92]">
              INDUSTRIES.
            </h2>

            <p className="text-xl sm:text-2xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed pt-2">
              One visual environment changes as the selected sector changes.
            </p>
          </div>

          {/* Morphing Industry Experience */}
          <div className="p-8 sm:p-14 rounded-3xl bg-black/50 border border-white/10 space-y-12 shadow-2xl">
            {/* Horizontal Selector Pills */}
            <div className="flex flex-wrap gap-3 border-b border-white/10 pb-6">
              {INDUSTRIES.map((ind) => {
                const isSelected = ind.id === activeId;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setActiveId(ind.id)}
                    data-cursor="SWITCH"
                    className={`px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                      isSelected
                        ? "bg-brand-green text-brand-navy shadow-[0_0_20px_rgba(48,198,130,0.3)] scale-105"
                        : "bg-white/5 text-brand-gray hover:text-brand-neutral hover:bg-white/10"
                    }`}
                  >
                    {ind.number} // {ind.name}
                  </button>
                );
              })}
            </div>

            {/* Active Sector Canvas */}
            <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy/90 border border-brand-green/30 space-y-10 shadow-xl animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-mono text-brand-green uppercase font-bold tracking-widest block">
                    SECTOR // {activeInd.name}
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-black uppercase text-brand-neutral tracking-tight pt-1">
                    {activeInd.tagline}
                  </h3>
                </div>

                <Link
                  href={`/industries/${activeInd.slug}`}
                  data-cursor="ENTER SPEC"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-green text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-green/90 transition-all shrink-0"
                >
                  <span>ENTER {activeInd.name} SPEC</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Morphing Customer Journey Pipeline */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold block">
                  THE BUYER DECISION PIPELINE:
                </span>

                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
                  {activeInd.journey.map((step, idx) => (
                    <div key={step} className="flex items-center gap-3 w-full sm:w-auto">
                      <div className="p-5 rounded-2xl bg-black/50 border border-white/10 text-center flex-1 sm:flex-none min-w-[140px]">
                        <span className="text-xs font-mono text-brand-green font-bold block">
                          0{idx + 1}
                        </span>
                        <span className="text-base font-extrabold uppercase text-brand-neutral tracking-tight block">
                          {step}
                        </span>
                      </div>

                      {idx < activeInd.journey.length - 1 && (
                        <div className="hidden sm:flex text-brand-green">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-red-400 font-bold uppercase block">THE PITFALL:</span>
                  <p className="text-brand-neutral/80">{activeInd.problem}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-brand-green font-bold uppercase block">PANKNOX DEPLOYMENT:</span>
                  <p className="text-brand-neutral">{activeInd.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}
