"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, RotateCw, Clock, Calendar } from "lucide-react";

interface EngagementStep {
  number: string;
  name: string;
  timeframe: string;
  focus: string;
  clientExperience: string;
  deliverable: string;
}

const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    number: "01",
    name: "UNDERSTAND",
    timeframe: "DAYS 1 – 7",
    focus: "Stakeholder Discovery & Diagnostic Immersion",
    clientExperience:
      "We interview founders, sales leadership, and technical directors. We inspect unit economics, customer friction, and past marketing failures without making empty promises.",
    deliverable: "Commercial Reality Audit & Friction Matrix",
  },
  {
    number: "02",
    name: "PLAN",
    timeframe: "DAYS 8 – 14",
    focus: "Strategic Architecture & Channel Allocation",
    clientExperience:
      "We determine what not to do. We choose the exact narrative wedge, tone of voice, visual grammar, and distribution platforms that will drive commercial leverage.",
    deliverable: "Positioning Blueprint & Production Flight Calendar",
  },
  {
    number: "03",
    name: "CREATE",
    timeframe: "DAYS 15 – 28",
    focus: "Cinema-Grade Asset & Infrastructure Production",
    clientExperience:
      "Our cinematography and design teams deploy on-site to document your factory, clinic, or studio. Copywriters craft sharp scripts and editorial thought leadership.",
    deliverable: "High-Fidelity Visual Vault & Web/Ad Assets",
  },
  {
    number: "04",
    name: "LAUNCH",
    timeframe: "DAYS 29 – 45",
    focus: "Multi-Channel Deployment & Funnels Live",
    clientExperience:
      "Campaigns activate across Meta, Google search, and LinkedIn. Digital touchpoints align, conversion funnels route leads directly to your sales team.",
    deliverable: "Live Market Distribution & Traffic Inflow",
  },
  {
    number: "05",
    name: "LEARN",
    timeframe: "CONTINUOUS (BI-WEEKLY)",
    focus: "Commercial Behavior & Signal Analytics",
    clientExperience:
      "We analyze real sales-qualified conversations rather than vanity likes. We review what messages resonated and where drop-offs occurred.",
    deliverable: "Bi-Weekly Commercial Performance Ledgers",
  },
  {
    number: "06",
    name: "IMPROVE",
    timeframe: "RECURSIVE (14-DAY SPRINTS)",
    focus: "Creative Evolution & Scale",
    clientExperience:
      "Learnings feed directly into the next creative sprint. Winning formats are scaled; fatigued angles are eliminated. The system gets progressively smarter.",
    deliverable: "Sprint Upgrades & Scaled Acquisition Vectors",
  },
];

export default function PanknoxMethodSection() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = ENGAGEMENT_STEPS[activeStepIdx];

  return (
    <section
      id="how-we-work-section"
      className="py-28 sm:py-36 bg-brand-neutral-surface text-brand-navy border-t border-brand-neutral-border relative overflow-hidden"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-light-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-brand-navy/10 pb-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-brand-neutral-border text-brand-navy text-xs font-mono uppercase tracking-widest font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>06 // PRACTICAL CLIENT ENGAGEMENT</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-navy leading-[0.95]">
              HOW AN ENGAGEMENT <br />
              <span className="text-brand-green">ACTUALLY WORKS.</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-gray leading-relaxed max-w-2xl font-normal">
              Not an abstract theory. This is the practical, step-by-step client experience when you
              partner with the Panknox creative operating unit.
            </p>
          </div>

          <Link
            href="/how-we-work"
            data-cursor="METHOD"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-navy hover:text-brand-green uppercase tracking-wider self-start lg:self-end border-b-2 border-brand-navy hover:border-brand-green pb-1 transition-colors"
          >
            <span>DEEP DIVE IN /HOW-WE-WORK</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* The 6 Clear Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGAGEMENT_STEPS.map((step, idx) => {
            const isSelected = idx === activeStepIdx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                data-cursor="STEP"
                className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between h-96 ${
                  isSelected
                    ? "bg-brand-navy text-white border-brand-navy shadow-xl scale-[1.01]"
                    : "bg-white text-brand-navy border-brand-neutral-border hover:border-brand-navy/40 shadow-sm"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-2xl font-black font-mono ${
                        isSelected ? "text-brand-green" : "text-brand-navy"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2.5 py-1 rounded font-semibold ${
                        isSelected
                          ? "bg-white/10 text-brand-neutral"
                          : "bg-brand-neutral-surface text-brand-gray"
                      }`}
                    >
                      {step.timeframe}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    {step.name}
                  </h3>

                  <p
                    className={`text-xs font-mono font-bold ${
                      isSelected ? "text-brand-green" : "text-brand-navy/70"
                    }`}
                  >
                    {step.focus}
                  </p>

                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? "text-brand-neutral/80" : "text-brand-gray"
                    }`}
                  >
                    {step.clientExperience}
                  </p>
                </div>

                <div
                  className={`pt-4 border-t text-xs font-mono flex items-center justify-between ${
                    isSelected ? "border-white/10 text-brand-green" : "border-brand-navy/10 text-brand-navy"
                  }`}
                >
                  <span className="font-bold">DELIVERABLE:</span>
                  <span className="truncate max-w-[180px]">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 14-Day Sprint Commitment Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white border-2 border-brand-navy flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold flex items-center gap-2">
              <RotateCw className="w-4 h-4 animate-spin [animation-duration:8s]" />
              <span>THE 14-DAY RECURSIVE CADENCE</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-navy">
              WE SPRINT IN 14-DAY ITERATIVE CYCLES.
            </h3>
            <p className="text-sm text-brand-gray">
              No prolonged six-month agency siloing. You receive visible, high-standard outputs
              and diagnostic performance feedback every two weeks.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-navy text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-navy/90 transition-all shrink-0"
          >
            <span>COMMENCE SPRINT 01</span>
            <ArrowRight className="w-4 h-4 text-brand-green" />
          </Link>
        </div>
      </div>
    </section>
  );
}
