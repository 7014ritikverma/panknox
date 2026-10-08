"use client";

import { useState } from "react";
import { ArrowRight, Layers, AlertCircle, CheckCircle2, Sparkles, Activity } from "lucide-react";

interface GapScenario {
  id: string;
  name: string;
  realityPoint: string;
  perceptionPoint: string;
  consequence: string;
  bridge: string;
}

const SCENARIOS: GapScenario[] = [
  {
    id: "product",
    name: "Product & Engineering",
    realityPoint: "Precision engineering, rigorous QA tolerances, and decades of tooling craft.",
    perceptionPoint: "Dated PDF catalogs, low-res phone photos, and an unmaintained website.",
    consequence: "Procurement committees treat the firm as a commodity vendor, forcing brutal price wars.",
    bridge: "Macro industrial cinematography, structured technical RFQ funnels, and precision typography.",
  },
  {
    id: "expertise",
    name: "Clinical & Medical",
    realityPoint: "Pioneering clinical clinicians, advanced bio-rehab, and honest patient care.",
    perceptionPoint: "Aggressive discount ad banners or silent, intimidating medical terminology.",
    consequence: "Anxious patients hesitate, question clinical legitimacy, or choose louder commercial chains.",
    bridge: "Empathetic educational video columns, anatomical walkthroughs, and frictionless WhatsApp triage.",
  },
  {
    id: "architecture",
    name: "Real Estate & Living",
    realityPoint: "Premium construction velocity, seismic structural integrity, and architectural craft.",
    perceptionPoint: "Generic 3D stock renders and broker phone spam campaigns.",
    consequence: "Buyers question delivery timelines; high-ticket investors bypass the project.",
    bridge: "Construction milestone documentation films, spatial architectural POV, and pre-qualified investor funnels.",
  },
  {
    id: "atelier",
    name: "Interiors & Furniture",
    realityPoint: "100-year seasoned timber, handcrafted mortise joints, and architectural millwork.",
    perceptionPoint: "Appears identical to flat-pack online furniture brands on generic feeds.",
    consequence: "Clients demand bargain prices without understanding generational joinery durability.",
    bridge: "Tactile woodcraft cinema, workshop joinery breakdowns, and architect specification portals.",
  },
  {
    id: "hospitality",
    name: "Hospitality & Heritage",
    realityPoint: "19th-century restored fresco ceilings, courtyard folk acoustics, and authentic cuisine.",
    perceptionPoint: "Fisheye room snapshots on OTA aggregators competing on discount coupons.",
    consequence: "80%+ bookings bleed into third-party commission fees; guest relationships lost.",
    bridge: "Sensory dusk cinematography, culinary heritage vignettes, and frictionless direct-booking systems.",
  },
];

export default function TheGapSection() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const activeScenario = SCENARIOS[activeScenarioIdx];

  return (
    <section
      id="the-gap-section"
      className="py-28 sm:py-36 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      {/* Background Architectural Grid Pattern on White */}
      <div className="absolute inset-0 bg-light-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy text-xs font-mono uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>01 // THE MARKET GAP</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-navy leading-[0.95]">
            YOUR BUSINESS <br />
            IS ONE THING. <br />
            <span className="text-brand-green">YOUR MARKET SEES ANOTHER.</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-gray max-w-3xl leading-relaxed pt-2 font-normal">
            Your customer doesn&apos;t walk your factory floor or sit with your senior engineers.
            They see fragmented digital surfaces. When those surfaces fail to communicate your standard,
            the market discounts your worth.
          </p>
        </div>

        {/* Visual Split with Animated Green Signal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-neutral-surface border border-brand-neutral-border p-6 sm:p-10 lg:p-12 rounded-2xl shadow-sm relative">
          {/* Left Side: Business Reality */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between border-b border-brand-navy/10 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-navy/60 font-semibold">
                SIDE A // INTERNAL TRUTH
              </span>
              <span className="text-xs font-mono text-brand-green font-bold">VERIFIED REALITY</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold uppercase text-brand-navy tracking-tight">
              BUSINESS REALITY
            </h3>

            <div className="space-y-3 text-sm sm:text-base text-brand-navy/85">
              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 shadow-sm flex items-center justify-between">
                <span className="font-bold">01 / PRODUCT &amp; SPECIFICATION</span>
                <span className="text-xs font-mono text-brand-gray">PROPRIETARY QA</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 shadow-sm flex items-center justify-between">
                <span className="font-bold">02 / SERVICE INTEGRITY</span>
                <span className="text-xs font-mono text-brand-gray">DECIMAL ACCURACY</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 shadow-sm flex items-center justify-between">
                <span className="font-bold">03 / DOMAIN EXPERTISE</span>
                <span className="text-xs font-mono text-brand-gray">DEEP COMPETENCE</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 shadow-sm flex items-center justify-between">
                <span className="font-bold">04 / CUSTOMER VALUE</span>
                <span className="text-xs font-mono text-brand-gray">REAL IMPACT</span>
              </div>
            </div>
          </div>

          {/* Center Column: Animated Signal Gap Vector */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0 relative">
            {/* Vertical or Horizontal Animated Signal Track */}
            <div className="w-full flex items-center justify-center">
              <div className="relative w-full h-1 bg-brand-navy/10 overflow-hidden rounded-full">
                <div className="absolute top-0 h-full w-20 bg-brand-green animate-signal-travel" />
              </div>
            </div>

            <div className="py-4 text-center space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gray block">
                THE GAP
              </span>
              <span className="text-xs font-mono font-bold text-brand-green block">
                WHERE VALUE IS LOST
              </span>
            </div>

            <div className="w-full flex items-center justify-center">
              <div className="relative w-full h-1 bg-brand-navy/10 overflow-hidden rounded-full">
                <div className="absolute top-0 h-full w-20 bg-brand-green animate-signal-travel" />
              </div>
            </div>
          </div>

          {/* Right Side: Digital Perception */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between border-b border-brand-navy/10 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-semibold">
                SIDE B // EXTERNAL PROJECTION
              </span>
              <span className="text-xs font-mono text-red-500 font-bold">MARKET DISTORTION</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold uppercase text-brand-navy tracking-tight">
              DIGITAL PERCEPTION
            </h3>

            <div className="space-y-3 text-sm sm:text-base text-brand-gray">
              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 shadow-sm flex items-center justify-between">
                <span className="line-through decoration-red-400">01 / GENERIC SOCIAL POSTS</span>
                <span className="text-xs font-mono text-red-500">NOISE</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 shadow-sm flex items-center justify-between">
                <span className="line-through decoration-red-400">02 / OUTDATED WEBSITES</span>
                <span className="text-xs font-mono text-red-500">FRICTION</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 shadow-sm flex items-center justify-between">
                <span className="line-through decoration-red-400">03 / WEAK MESSAGING</span>
                <span className="text-xs font-mono text-red-500">SKEPTICISM</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-brand-navy/10 shadow-sm flex items-center justify-between">
                <span className="line-through decoration-red-400">04 / DISJOINTED TOUCHPOINTS</span>
                <span className="text-xs font-mono text-red-500">COMMODITY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Scenario Inspection Matrix on White */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-navy/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-navy font-bold uppercase tracking-wider">
              <Activity className="w-4 h-4 text-brand-green" />
              <span>DIAGNOSE SECTOR PERCEPTION GAPS</span>
            </div>
            <span className="text-xs font-mono text-brand-gray">
              SELECT SECTOR TO INSPECT THE INTERVENTION
            </span>
          </div>

          {/* Scenario Tab Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SCENARIOS.map((sc, idx) => {
              const isSelected = idx === activeScenarioIdx;
              return (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setActiveScenarioIdx(idx)}
                  data-cursor="INSPECT"
                  className={`p-4 rounded-xl text-left border transition-all ${
                    isSelected
                      ? "bg-brand-navy text-white border-brand-navy shadow-md"
                      : "bg-white text-brand-navy border-brand-neutral-border hover:border-brand-navy/40"
                  }`}
                >
                  <span
                    className={`text-[11px] font-mono block mb-1 ${
                      isSelected ? "text-brand-green" : "text-brand-gray"
                    }`}
                  >
                    0{idx + 1} // SCENARIO
                  </span>
                  <span className="text-sm font-extrabold uppercase block truncate">
                    {sc.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Diagnostic Card */}
          <div className="bg-white border-2 border-brand-navy p-6 sm:p-10 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold block">
                INTERNAL REALITY
              </span>
              <p className="text-base sm:text-lg font-bold text-brand-navy leading-snug">
                {activeScenario.realityPoint}
              </p>
              <div className="pt-2 text-xs font-mono text-red-500 flex items-center gap-2">
                <span>VS. MARKET PERCEPTION:</span>
              </div>
              <p className="text-sm text-brand-gray line-through decoration-red-400">
                {activeScenario.perceptionPoint}
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2 border-l-0 lg:border-l border-brand-navy/10 pl-0 lg:pl-8">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block">
                COMMERCIAL CONSEQUENCE
              </span>
              <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
                {activeScenario.consequence}
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2 border-l-0 lg:border-l border-brand-navy/10 pl-0 lg:pl-8 bg-brand-green/10 p-6 rounded-xl border border-brand-green/40">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-navy font-bold block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                <span>PANKNOX BRIDGE</span>
              </span>
              <p className="text-sm sm:text-base text-brand-navy font-bold leading-snug">
                {activeScenario.bridge}
              </p>
            </div>
          </div>
        </div>

        {/* The Climax Statement on White */}
        <div className="pt-8 text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs font-mono tracking-widest text-brand-gray uppercase font-semibold">
            THE STRATEGIC REASON TO EXIST
          </p>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-brand-navy tracking-tight leading-tight">
            PANKNOX WORKS <br />
            <span className="text-brand-green underline decoration-brand-green/40">IN THE GAP.</span>
          </h3>
          <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
            We build the creative and marketing systems that bring market perception
            into complete alignment with your operational truth.
          </p>
        </div>
      </div>
    </section>
  );
}
