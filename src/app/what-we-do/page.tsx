import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Layers, CheckCircle2, XCircle, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { capabilitySystems } from "@/data/services";

export const metadata: Metadata = {
  title: "What We Do | Capability Systems",
  description:
    "Panknox deploys four tightly integrated systems: Strategy, Creative & Content, Digital Presence, and Growth. Built for businesses that need serious marketing leverage.",
};

const SYSTEM_COMPARISONS = [
  {
    dimension: "Core Engagement",
    standardAgency: "Sells commodity deliverables (e.g. 15 posts/month, 2 reels/week).",
    panknoxSystem: "Deploys end-to-end creative & commercial systems designed around business margins.",
  },
  {
    dimension: "Strategic Depth",
    standardAgency: "Starts with Canva templates without diagnosing business models.",
    panknoxSystem: "Conducts diagnostic immersion into unit economics, customer friction, and market voids.",
  },
  {
    dimension: "Production Integrity",
    standardAgency: "Generic stock photography, mobile snapshots, and template graphics.",
    panknoxSystem: "4K cinema-grade industrial & architectural production, bespoke typography, and restrained art direction.",
  },
  {
    dimension: "Media & Growth",
    standardAgency: "Boosts posts blindly for vanity likes and low-intent click volume.",
    panknoxSystem: "Full-funnel Meta & Google search intent targeting with pre-qualification filters.",
  },
  {
    dimension: "Feedback Velocity",
    standardAgency: "Monthly vanity reports hiding behind vague impressions.",
    panknoxSystem: "14-day continuous recursive learning sprints where data refines creative output.",
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-navy min-h-screen text-brand-neutral relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* Page Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>SYSTEM DIRECTORY // THE 4 ENGINES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-none">
            WE DON&apos;T SELL SERVICES. <br />
            <span className="text-brand-green">WE DEPLOY SYSTEMS.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-3xl">
            A piece-meal approach creates fragmented brand perception. Panknox engineers four
            synchronous operational engines that align your internal business reality with external market perception.
          </p>
        </div>

        {/* Detailed 4 Systems Deep Dive */}
        <div className="space-y-20">
          {capabilitySystems.map((system) => (
            <section
              key={system.id}
              id={system.id}
              className="p-6 sm:p-10 lg:p-12 rounded-2xl border border-brand-neutral/15 bg-brand-navy/90 space-y-10 shadow-2xl relative scroll-mt-28"
            >
              {/* Header Ribbon */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-brand-neutral/10">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-3 text-xs font-mono text-brand-gray">
                    <span className="text-brand-green font-bold">SYSTEM {system.number}</span>
                    <span>•</span>
                    <span className="uppercase text-brand-neutral">{system.name}</span>
                    <span>•</span>
                    <span className="text-brand-neutral/60">{system.signalLabel}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-brand-neutral">
                    {system.headline}
                  </h2>

                  <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed">
                    {system.description}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col gap-2">
                  <span className="text-xs font-mono text-brand-gray">SYSTEM MATURITY: OPERATIONAL</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-brand-green text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-green/90 transition-all"
                  >
                    <span>INITIALIZE {system.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Input vs Output Pipeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/40 p-5 rounded-xl border border-brand-neutral/10 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-brand-gray uppercase">RAW INPUT SIGNAL:</span>
                  <p className="text-brand-neutral font-medium">{system.systemInput}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-brand-green uppercase font-bold">TRANSFORMED OUTPUT:</span>
                  <p className="text-brand-neutral font-medium">{system.systemOutput}</p>
                </div>
              </div>

              {/* Core System Principles */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gray block">
                  GOVERNING SYSTEM LAWS:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {system.corePrinciples.map((law, idx) => (
                    <div
                      key={law}
                      className="p-4 rounded-lg bg-white/[0.02] border border-brand-neutral/10 text-xs text-brand-neutral/90 flex items-start gap-2.5"
                    >
                      <span className="text-brand-green font-mono font-bold">0{idx + 1}</span>
                      <span>{law}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Granular Capabilities Breakdown */}
              <div className="space-y-4 pt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold block">
                  DEPLOYED SUBSYSTEMS &amp; DELIVERABLES ({system.items.length})
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {system.items.map((item, idx) => (
                    <div
                      key={item.name}
                      className="p-5 rounded-xl bg-white/[0.03] border border-brand-neutral/10 hover:border-brand-green/40 transition-colors space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-brand-gray">
                          {system.number}.0{idx + 1}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                      </div>

                      <h3 className="text-lg font-bold text-brand-neutral uppercase tracking-tight">
                        {item.name}
                      </h3>

                      <p className="text-xs text-brand-neutral/70 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 border-t border-brand-neutral/10 space-y-1 text-xs font-mono">
                        <span className="text-[10px] text-brand-gray uppercase block">DELIVERABLES:</span>
                        <ul className="space-y-1 text-brand-neutral/80">
                          {item.deliverables.map((deliv) => (
                            <li key={deliv} className="flex items-center gap-1.5 truncate">
                              <span className="text-brand-green">•</span>
                              <span className="truncate">{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contrast Table: Standard Agency vs Panknox Operating System */}
        <section className="p-6 sm:p-10 lg:p-12 rounded-2xl border border-brand-neutral/20 bg-brand-navy space-y-8 shadow-2xl">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green">
              STRUCTURAL DIVERGENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-brand-neutral">
              TYPICAL AGENCY VS. PANKNOX OPERATING SYSTEM
            </h2>
            <p className="text-sm text-brand-neutral/70">
              Why traditional agency relationships generate exhaustion and why structured systems compound.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-brand-neutral/20 font-mono text-xs uppercase text-brand-gray">
                  <th className="py-4 px-4">DIMENSION</th>
                  <th className="py-4 px-4 text-red-400">STANDARD AGENCY MODEL</th>
                  <th className="py-4 px-4 text-brand-green">PANKNOX SYSTEM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-neutral/10">
                {SYSTEM_COMPARISONS.map((row) => (
                  <tr key={row.dimension} className="hover:bg-white/[0.02]">
                    <td className="py-4 px-4 font-mono font-bold text-brand-neutral">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-4 text-brand-neutral/60">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                        <span>{row.standardAgency}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-brand-neutral font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{row.panknoxSystem}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-green/10 border border-brand-green/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
              READY TO INTEGRATE?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
              BUILD A MARKETING SYSTEM AROUND YOUR BUSINESS.
            </h3>
            <p className="text-sm text-brand-neutral/80">
              Stop hiring vendors for disconnected outputs. Partner with a dedicated creative operating unit.
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
