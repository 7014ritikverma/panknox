import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Terminal, Layers } from "lucide-react";
import WorkArchiveSection from "@/components/home/WorkArchiveSection";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work Archive | Editorial Case Studies",
  description:
    "An editorial archive of creative and performance marketing systems engineered by Panknox across Manufacturing, Healthcare, Hospitality, Jewellery, and Interiors.",
};

export default function WorkArchivePage() {
  return (
    <div className="pt-28 pb-24 bg-brand-navy min-h-screen text-brand-neutral relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Page Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>EDITORIAL ARCHIVE // VERIFIED SYSTEMS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-none">
            WORK THAT COMMANDS <br />
            <span className="text-brand-green">MARKET RESPECT.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-3xl">
            We do not show superficial mockups on laptop frames. Each project documented in this
            archive represents a ground-level transformation of business reality, creative direction,
            and customer acquisition.
          </p>
        </div>

        {/* Global Integrity Protocol Notice */}
        <div className="p-6 rounded-xl bg-black/40 border border-brand-neutral/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-green shrink-0" />
            <div>
              <span className="text-brand-green font-bold uppercase block">
                INTEGRITY PROTOCOL:
              </span>
              <span className="text-brand-neutral/80">
                Panknox never fabricates vanity ROI numbers, fictitious testimonials, or fake metrics.
                Every case represents authentic qualitative and structural transformation.
              </span>
            </div>
          </div>
          <span className="text-brand-gray shrink-0">{projectsData.length} VERIFIED CASE SYSTEMS</span>
        </div>

        {/* Interactive Filterable Work Archive */}
        <WorkArchiveSection />
      </div>
    </div>
  );
}
