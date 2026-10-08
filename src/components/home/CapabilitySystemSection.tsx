"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight, Sparkles, Layers } from "lucide-react";

interface SystemDefinition {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  visualStages: string[];
  capabilities: string[];
  deliverableHighlights: string[];
}

const SYSTEMS: SystemDefinition[] = [
  {
    id: "strategy",
    number: "01",
    name: "STRATEGY",
    subtitle: "Commercial Truth & Market Positioning",
    description:
      "Before a single pixel moves, we diagnose unit economics, customer friction, and market voids. We define where your business stands so you never compete on commodity price.",
    visualStages: ["BUSINESS", "AUDIENCE", "POSITIONING", "MESSAGE"],
    capabilities: [
      "Commercial Model Dissection",
      "Audience Decision Psychology",
      "Competitive Void Positioning",
      "Editorial Narrative Strategy",
      "Platform Prioritization Matrix",
    ],
    deliverableHighlights: [
      "Market Category Wedge",
      "Core Narrative Blueprints",
      "Channel Feasibility Plan",
    ],
  },
  {
    id: "creative",
    number: "02",
    name: "CREATIVE & CONTENT",
    subtitle: "Visual Grammar & Sensory Distinction",
    description:
      "Content is the visible surface area of your company's intelligence. We produce cinema-grade assets, typography, and motion that command market respect.",
    visualStages: ["IDEA", "DESIGN", "MOTION", "CONTENT"],
    capabilities: [
      "Art Direction & Visual Grammar",
      "4K Industrial & Facility Cinematography",
      "Short-Form Vertical Video (Reels)",
      "Kinetic Typography & Motion Design",
      "Executive Founder Columns",
    ],
    deliverableHighlights: [
      "Brand Visual System Guide",
      "4K Documentary Asset Vault",
      "Continuous Editorial Sprints",
    ],
  },
  {
    id: "presence",
    number: "03",
    name: "DIGITAL PRESENCE",
    subtitle: "Brand Touchpoints & Trust Infrastructure",
    description:
      "Connecting fragmented surfaces into one coherent perception. When a high-ticket prospect investigates you, every touchpoint reflects world-class authority.",
    visualStages: ["INSTAGRAM", "LINKEDIN", "WEB", "GOOGLE", "YOUTUBE"],
    capabilities: [
      "Curated Instagram Portfolio",
      "B2B LinkedIn Executive Authority",
      "High-Performance Next.js Websites",
      "High-Intent Conversion Landing Pages",
      "Google Business Profile Search Alignment",
    ],
    deliverableHighlights: [
      "Unified Digital Ecosystem",
      "Custom Frontend Platforms",
      "Frictionless Routing Flows",
    ],
  },
  {
    id: "growth",
    number: "04",
    name: "GROWTH",
    subtitle: "Distribution, Conversion & Learning",
    description:
      "Creative without distribution is an expensive museum piece. We run paid media systems that put sharp messages in front of precise decision-makers.",
    visualStages: ["ATTENTION", "LEAD", "CONVERSION", "LEARNING"],
    capabilities: [
      "Algorithmic Meta Ad Architectures",
      "Google High-Intent Search Capture",
      "Pre-Qualified Inbound Funnels",
      "Objection-Handling Retargeting",
      "Cohort Performance Analytics",
    ],
    deliverableHighlights: [
      "Full-Funnel Campaign Assets",
      "Pre-Qualified Lead Pipeline",
      "14-Day Performance Dashboards",
    ],
  },
];

export default function CapabilitySystemSection() {
  const [activeSystemId, setActiveSystemId] = useState<string>("strategy");
  const activeSystem = SYSTEMS.find((s) => s.id === activeSystemId) || SYSTEMS[0];

  return (
    <section
      id="capability-systems"
      className="py-28 sm:py-36 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      {/* Background Architectural Grid Pattern on White */}
      <div className="absolute inset-0 bg-light-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-brand-navy/10 pb-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy text-xs font-mono uppercase tracking-widest font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>03 // CAPABILITY ARCHITECTURE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-navy leading-[0.95]">
              WHAT WE <br />
              <span className="text-brand-green">BUILD.</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-gray leading-relaxed max-w-2xl font-normal">
              Four synchronous operational systems designed to transform internal operational capability
              into unavoidable market dominance.
            </p>
          </div>

          <Link
            href="/what-we-do"
            data-cursor="EXPAND"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-navy hover:text-brand-green uppercase tracking-wider self-start lg:self-end border-b-2 border-brand-navy hover:border-brand-green pb-1 transition-colors"
          >
            <span>VIEW FULL SPECIFICATION IN /WHAT-WE-DO</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Vertical List + Dynamic Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Vertical Rows */}
          <div className="lg:col-span-6 space-y-3">
            {SYSTEMS.map((system) => {
              const isSelected = system.id === activeSystemId;
              return (
                <div
                  key={system.id}
                  onClick={() => setActiveSystemId(system.id)}
                  onMouseEnter={() => setActiveSystemId(system.id)}
                  data-cursor="INSPECT"
                  className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-brand-navy text-white border-brand-navy shadow-xl scale-[1.01]"
                      : "bg-brand-neutral-surface text-brand-navy border-brand-neutral-border hover:border-brand-navy/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider ${
                        isSelected ? "text-brand-green" : "text-brand-gray"
                      }`}
                    >
                      SYSTEM {system.number}
                    </span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isSelected ? "bg-brand-green animate-ping" : "bg-brand-navy/20"
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight pt-2">
                    {system.name}
                  </h3>

                  <p
                    className={`text-xs font-mono pt-1 ${
                      isSelected ? "text-brand-neutral/80" : "text-brand-gray"
                    }`}
                  >
                    {system.subtitle}
                  </p>

                  {/* Expanded description on active */}
                  {isSelected && (
                    <div className="pt-4 border-t border-white/10 mt-4 space-y-3 animate-fadeIn">
                      <p className="text-sm text-brand-neutral/80 leading-relaxed">
                        {system.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {system.capabilities.slice(0, 3).map((cap) => (
                          <span
                            key={cap}
                            className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-brand-green"
                          >
                            • {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Visual Transformation Chamber on White */}
          <div className="lg:col-span-6 sticky top-28 space-y-6">
            <div className="bg-brand-neutral-surface border-2 border-brand-navy p-6 sm:p-10 rounded-2xl shadow-xl space-y-8">
              <div className="flex items-center justify-between border-b border-brand-navy/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold">
                  DYNAMIC PIPELINE // {activeSystem.name}
                </span>
                <span className="text-xs font-mono text-brand-green font-bold">
                  SIGNAL CONNECTED
                </span>
              </div>

              {/* Dynamic Connected Node Stages */}
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gray block">
                  SYSTEM CONNECTION FLOW:
                </span>

                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-3">
                  {activeSystem.visualStages.map((stage, idx) => (
                    <div key={stage} className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-brand-navy/15 text-center flex-1 sm:flex-none shadow-sm">
                        <span className="text-[10px] font-mono text-brand-green font-bold block">
                          0{idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold uppercase text-brand-navy tracking-tight block">
                          {stage}
                        </span>
                      </div>
                      {idx < activeSystem.visualStages.length - 1 && (
                        <div className="hidden sm:flex items-center text-brand-green">
                          <ArrowRight className="w-4 h-4 animate-pulse" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Capabilities Breakdown */}
              <div className="space-y-3 pt-4 border-t border-brand-navy/10">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-navy font-bold block">
                  ACTIVE SPECIALIZATIONS ({activeSystem.capabilities.length}):
                </span>
                <ul className="space-y-2 text-sm text-brand-navy/85">
                  {activeSystem.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="font-medium">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Output Deliverables */}
              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 space-y-2 text-xs font-mono">
                <span className="text-[10px] uppercase text-brand-gray block">
                  COMMERCIAL DELIVERABLES:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSystem.deliverableHighlights.map((deliv) => (
                    <span
                      key={deliv}
                      className="px-2.5 py-1 rounded bg-brand-green/15 text-brand-navy font-bold border border-brand-green/30"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-navy text-white flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-brand-green block">
                  READY TO ACTIVATE {activeSystem.name}?
                </span>
                <p className="text-sm font-bold uppercase">Schedule a diagnostic brief</p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-brand-green text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-green/90 transition-all shrink-0"
              >
                <span>COMMENCE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
