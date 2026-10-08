import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, RotateCw } from "lucide-react";
import { processData } from "@/data/process";
import {
  UnderstandIcon,
  FindIcon,
  ThinkIcon,
  BuildIcon,
  DistributeIcon,
  LearnIcon,
  EvolveIcon,
} from "@/components/common/PanknoxIcons";
import CtaIsland from "@/components/common/CtaIsland";

export const metadata: Metadata = {
  title: "How We Work | The Continuous Loop",
  description:
    "The Panknox Method is a recursive feedback system: Understand, Find, Think, Build, Distribute, Learn, and Evolve. Moving beyond linear agency conveyor belts.",
};

const STAGE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  understand: UnderstandIcon,
  find: FindIcon,
  think: ThinkIcon,
  build: BuildIcon,
  distribute: DistributeIcon,
  learn: LearnIcon,
  evolve: EvolveIcon,
};

export default function HowWeWorkPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-navy min-h-screen text-brand-neutral relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* Page Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>Operating methodology · Continuous loop</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-neutral leading-tight">
            A continuous loop, <br />
            <span className="text-brand-green">not a conveyor belt.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-3xl">
            {processData.loopSummary}
          </p>
        </div>

        {/* The 7-Node Recursive Architecture */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green">
              <RotateCw className="w-4 h-4 animate-spin [animation-duration:10s]" />
              <span>The 7 nodes of the Panknox engine</span>
            </div>
            <span className="text-xs font-mono text-brand-gray">
              Recursive cycle: 01 → 07 ↺
            </span>
          </div>

          <div className="space-y-6">
            {processData.steps.map((step) => {
              const Icon = STAGE_ICONS[step.id] || UnderstandIcon;
              return (
                <div
                  key={step.id}
                  className="p-6 sm:p-10 rounded-2xl border border-brand-neutral/15 bg-brand-navy/90 hover:border-brand-green/40 transition-all space-y-6 shadow-xl relative overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-brand-neutral/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-brand-green" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-brand-green font-bold">
                            {step.number}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-bold text-brand-neutral tracking-tight">
                            {step.title}
                          </h2>
                        </div>
                        <p className="text-xs font-mono text-brand-gray">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono px-3 py-1 rounded bg-white/5 border border-brand-neutral/10 text-brand-neutral/70 self-start lg:self-center">
                      {step.signalTag}
                    </span>
                  </div>

                  <div className="space-y-4 max-w-4xl">
                    <h3 className="text-xl sm:text-2xl font-semibold text-brand-neutral/90">
                      &ldquo;{step.question}&rdquo;
                    </h3>

                    <p className="text-base text-brand-neutral/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-brand-neutral/10 text-xs font-mono bg-black/30 p-5 rounded-xl border border-brand-neutral/10">
                    <div className="space-y-1">
                      <span className="text-brand-gray">System diagnostic:</span>
                      <p className="text-brand-neutral font-medium">{step.systemAction}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-brand-green font-bold">Node artifact:</span>
                      <p className="text-brand-neutral font-medium">{step.output}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Operating Principles */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy border border-brand-neutral/20 space-y-8 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-wider text-brand-green">
              Foundational principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-neutral">
              How we govern production
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processData.operatingPrinciples.map((op, i) => (
              <div
                key={op.title}
                className="p-6 rounded-xl bg-white/[0.02] border border-brand-neutral/10 space-y-3"
              >
                <span className="text-brand-green font-mono font-bold text-sm">
                  Principle 0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-brand-neutral">
                  {op.title}
                </h3>
                <p className="text-sm text-brand-neutral/70 leading-relaxed">
                  {op.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Signature End-of-Page CTA Island */}
        <CtaIsland variant="home" className="pt-4" />
      </div>
    </div>
  );
}
