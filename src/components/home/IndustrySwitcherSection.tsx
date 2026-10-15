"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  ManufacturingIcon,
  HealthcareIcon,
  RealEstateIcon,
  InteriorsIcon,
  HospitalityIcon,
} from "@/components/common/PanknoxIcons";

interface IndustryItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  journey: string[];
  slug: string;
  problem: string;
  solution: string;
  icon: typeof ManufacturingIcon;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "manufacturing",
    number: "01",
    name: "Manufacturing",
    tagline: "Industrial capability demands concrete proof, not promotional fluff.",
    journey: ["Product", "Understanding", "Trust", "Enquiry"],
    slug: "manufacturing",
    problem: "High engineering reality hidden behind dated PDFs and commodity vendor pricing.",
    solution: "Macro process video, tolerance verification, and technical RFQ funnels.",
    icon: ManufacturingIcon   ,
  },
  {
    id: "healthcare",
    number: "02",
    name: "Healthcare",
    tagline: "In healthcare, marketing must never look like marketing.",
    journey: ["Education", "Trust", "Confidence", "Appointment"],
    slug: "healthcare",
    problem: "Patient anxiety compounded by aggressive discount ad banners and medical jargon.",
    solution: "Dignity-first clinical education videos, transparent care pathways, and frictionless triage.",
    icon: HealthcareIcon,
  },
  {
    id: "real-estate",
    number: "03",
    name: "Real estate",
    tagline: "Move beyond render galleries to lifestyle reality.",
    journey: ["Attention", "Interest", "Site visit", "Enquiry"],
    slug: "real-estate",
    problem: "Identical 3D renders, broker spam calls, and buyer cynicism over delivery velocity.",
    solution: "Construction milestone documentation films, spatial POV tours, and pre-qualified investor funnels.",
    icon: RealEstateIcon,
  },
  {
    id: "interiors-furniture",
    number: "04",
    name: "Interiors & furniture",
    tagline: "Turn aesthetic inspiration into material certainty.",
    journey: ["Inspiration", "Desire", "Trust", "Enquiry"],
    slug: "interiors-furniture",
    problem: "Artisanal joinery looking indistinguishable from flat-pack brands on generic feeds.",
    solution: "Tactile material video, joinery durability tests, and architect specification portals.",
    icon: InteriorsIcon ,
  },
  {
    id: "hospitality",
    number: "05",
    name: "Hospitality",
    tagline: "Guests don't book rooms. They book moments and cultural belonging.",
    journey: ["Experience", "Desire", "Trust", "Booking"],
    slug: "hospitality",
    problem: "OTA aggregators taking 20%+ commissions while stripping the estate of its soul.",
    solution: "Sensory dusk video vignettes, culinary heritage documentation, and direct reservation platforms.",
    icon: HospitalityIcon,
  },
];

export default function IndustrySwitcherSection() {
  const [activeId, setActiveId] = useState<string>("manufacturing");
  const activeInd = INDUSTRIES.find((i) => i.id === activeId) || INDUSTRIES[0];
  const ActiveIcon = activeInd.icon;

  return (
    <section id="industry-switcher" className="py-20 sm:py-24 lg:py-28 bg-[#F8FAF9] text-brand-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-navy text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>04 // Sector operating environments</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-brand-navy leading-[1.08]">
            Industries.
          </h2>

          <p className="text-lg sm:text-xl text-brand-gray font-normal max-w-2xl leading-relaxed pt-1">
            One visual environment changes as the selected sector changes.
          </p>
        </div>

          {/* Morphing Industry Experience */}
          <div className="p-7 sm:p-12 rounded-3xl bg-[#08171b] border border-[#dfe5e2] space-y-10 shadow-2xl">
            {/* Horizontal Selector Pills */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 border-b border-white/10 pb-5">
              {INDUSTRIES.map((ind) => {
                const isSelected = ind.id === activeId;
                const IndIcon = ind.icon;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setActiveId(ind.id)}
                    className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                      isSelected
                        ? "bg-brand-green text-brand-navy shadow-[0_0_20px_rgba(48,198,130,0.3)] scale-[1.02]"
                        : "bg-white/5 text-brand-neutral/70 hover:text-brand-neutral hover:bg-white/10"
                    }`}
                  >
                    <IndIcon active={isSelected}  size={16} />
                    <span>{ind.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Sector Canvas */}
            <div className="p-7 sm:p-10 rounded-2xl bg-brand-navy/90 border border-brand-green/30 space-y-8 shadow-xl animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-white/10 pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-green/15 text-brand-green shrink-0 mt-1 transition-transform duration-500 hover:scale-110">
                    <ActiveIcon active={true} size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-brand-green font-semibold block">
                      Sector // {activeInd.name}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-neutral tracking-tight pt-1">
                      {activeInd.tagline}
                    </h3>
                  </div>
                </div>

                <Link
                  href={`/industries/${activeInd.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-green text-brand-navy font-semibold text-xs hover:bg-brand-green/90 transition-all shrink-0 self-start sm:self-auto"
                >
                  <span>Explore {activeInd.name} specification</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Morphing Customer Journey Pipeline */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-brand-neutral/60 font-semibold block">
                  The buyer decision pipeline:
                </span>

                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
                  {activeInd.journey.map((step, idx) => (
                    <div key={step} className="flex items-center gap-3 w-full sm:w-auto">
                      <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-center flex-1 sm:flex-none min-w-[140px]">
                        <span className="text-xs font-mono text-brand-green font-semibold block">
                          0{idx + 1}
                        </span>
                        <span className="text-sm font-semibold text-brand-neutral tracking-tight block mt-1">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border-t border-white/10 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-red-400 font-semibold block">The pitfall:</span>
                  <p className="text-brand-neutral/80">{activeInd.problem}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-brand-green font-semibold block">Panknox deployment:</span>
                  <p className="text-brand-neutral">{activeInd.solution}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

