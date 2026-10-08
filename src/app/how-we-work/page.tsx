import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, RotateCw, CheckCircle2, ShieldCheck, Terminal, Layers } from "lucide-react";
import { processData } from "@/data/process";

export const metadata: Metadata = {
  title: "How We Work | The Continuous Loop",
  description:
    "The Panknox Method is a recursive feedback system: Understand, Find, Think, Build, Distribute, Learn, and Evolve. Moving beyond linear agency conveyor belts.",
};

export default function HowWeWorkPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-navy min-h-screen text-brand-neutral relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* Page Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>OPERATING METHODOLOGY // CONTINUOUS LOOP</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-none">
            A CONTINUOUS LOOP, <br />
            <span className="text-brand-green">NOT A CONVEYOR BELT.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-3xl">
            {processData.loopSummary}
          </p>
        </div>

        {/* The 7-Node Recursive Architecture */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase">
              <RotateCw className="w-4 h-4 animate-spin [animation-duration:10s]" />
              <span>THE 7 NODES OF THE PANKNOX ENGINE</span>
            </div>
            <span className="text-xs font-mono text-brand-gray">
              RECURSIVE CYCLE: 01 → 07 ↺
            </span>
          </div>

          <div className="space-y-6">
            {processData.steps.map((step, idx) => (
              <div
                key={step.id}
                className="p-6 sm:p-10 rounded-2xl border border-brand-neutral/15 bg-brand-navy/90 hover:border-brand-green/40 transition-all space-y-6 shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-brand-neutral/10">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-brand-green">
                      {step.number}
                    </span>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black uppercase text-brand-neutral tracking-tight">
                        {step.title}
                      </h2>
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
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-brand-neutral/90">
                    &ldquo;{step.question}&rdquo;
                  </h3>

                  <p className="text-base text-brand-neutral/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-brand-neutral/10 text-xs font-mono bg-black/30 p-5 rounded-xl border border-brand-neutral/10">
                  <div className="space-y-1">
                    <span className="text-brand-gray uppercase">SYSTEM DIAGNOSTIC:</span>
                    <p className="text-brand-neutral font-medium">{step.systemAction}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-brand-green uppercase font-bold">NODE ARTIFACT:</span>
                    <p className="text-brand-neutral font-medium">{step.output}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Principles */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy border border-brand-neutral/20 space-y-8 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green">
              FOUNDATIONAL LAWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-brand-neutral">
              HOW WE GOVERN PRODUCTION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processData.operatingPrinciples.map((op, i) => (
              <div
                key={op.title}
                className="p-6 rounded-xl bg-white/[0.02] border border-brand-neutral/10 space-y-3"
              >
                <span className="text-brand-green font-mono font-bold text-sm">
                  LAW 0{i + 1}
                </span>
                <h3 className="text-lg font-bold uppercase text-brand-neutral">
                  {op.title}
                </h3>
                <p className="text-sm text-brand-neutral/70 leading-relaxed">
                  {op.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-green/10 border border-brand-green/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
              CYCLE COMMENCEMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
              COMMENCE SPRINT 01 WITH PANKNOX.
            </h3>
            <p className="text-sm text-brand-neutral/80">
              Initialize step 01 (UNDERSTAND) for your business today.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded bg-brand-green text-brand-navy font-bold text-sm tracking-wider uppercase hover:bg-brand-green/90 transition-all shrink-0"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
