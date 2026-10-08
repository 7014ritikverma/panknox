"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, RotateCw, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { processData, ProcessStep } from "@/data/process";

export default function PanknoxMethodSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = processData.steps[activeStepIndex];

  return (
    <section id="panknox-method" className="py-24 sm:py-32 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>07 // CONTINUOUS OPERATING LOOP</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-tight">
              THE PANKNOX <br />
              <span className="text-brand-green">METHOD.</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed">
              Marketing is not a static conveyor belt with a finish line.
              It is a recursive learning cycle where performance data continuously evolves the next strategic cycle.
            </p>
          </div>

          <Link
            href="/how-we-work"
            data-cursor="METHOD"
            className="inline-flex items-center gap-2 text-sm font-mono text-brand-green hover:underline uppercase tracking-wider self-start lg:self-end"
          >
            <span>DEEP DIVE METHODOLOGY</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Circular Loop Visualizer & Interactive Nodes */}
        <div className="bg-brand-navy border border-brand-neutral/15 rounded-2xl p-6 sm:p-10 lg:p-12 space-y-10 shadow-2xl">
          {/* Loop Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-neutral/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
                <RotateCw className="w-4 h-4 animate-spin [animation-duration:8s]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-neutral">
                RECURSIVE FEEDBACK LOOP: 7 NODES
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-brand-green">
              <span>ACTIVE NODE: {activeStep.number} // {activeStep.title}</span>
            </div>
          </div>

          {/* Stepper Buttons along the Loop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {processData.steps.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  data-cursor="NODE"
                  className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-32 ${
                    isSelected
                      ? "bg-brand-green/15 border-brand-green text-brand-neutral shadow-[0_0_15px_rgba(48,198,130,0.25)]"
                      : "bg-brand-navy/60 border-brand-neutral/10 text-brand-neutral/70 hover:border-brand-neutral/30 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono text-brand-gray">{step.number}</span>
                    {idx === 6 ? (
                      <RotateCw className="w-3.5 h-3.5 text-brand-green animate-spin [animation-duration:10s]" />
                    ) : (
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isSelected ? "bg-brand-green" : "bg-brand-neutral/20"
                        }`}
                      />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-tight block text-brand-neutral">
                      {step.title}
                    </span>
                    <span className="text-[9px] font-mono text-brand-gray block truncate mt-1">
                      {step.subtitle.split("&")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="bg-black/40 border border-brand-neutral/15 rounded-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-green/20 text-brand-green font-bold">
                  NODE {activeStep.number} // {activeStep.signalTag}
                </span>
                <span className="text-xs font-mono text-brand-gray uppercase">
                  {activeStep.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
                {activeStep.question}
              </h3>

              <p className="text-base text-brand-neutral/80 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-neutral/10 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-brand-gray uppercase">SYSTEM OPERATION:</span>
                  <p className="text-brand-neutral font-medium">{activeStep.systemAction}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-brand-green uppercase font-bold">NODE ARTIFACT:</span>
                  <p className="text-brand-neutral font-medium">{activeStep.output}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:border-l border-brand-neutral/10 lg:pl-8">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gray block">
                  CYCLE CONTINUITY
                </span>
                <p className="text-xs text-brand-neutral/70">
                  When Step 07 (EVOLVE) concludes, its intelligence feeds immediately back into
                  Step 01 (UNDERSTAND), making every campaign smarter than the last.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % processData.steps.length)}
                data-cursor="NEXT NODE"
                className="w-full py-3 px-4 rounded bg-brand-green/10 border border-brand-green/40 text-brand-green hover:bg-brand-green hover:text-brand-navy font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2"
              >
                <span>ADVANCE TO NODE {activeStepIndex === 6 ? "01" : `0${activeStepIndex + 2}`}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Operating Principles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {processData.operatingPrinciples.map((principle, i) => (
              <div
                key={principle.title}
                className="p-5 rounded-xl bg-white/[0.02] border border-brand-neutral/10 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-brand-green">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span>PRINCIPLE 0{i + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-brand-neutral uppercase">
                  {principle.title}
                </h4>
                <p className="text-xs text-brand-neutral/70 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
