import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Building, HeartPulse, Home, Compass, Sparkles } from "lucide-react";
import { industriesData } from "@/data/industries";

export const metadata: Metadata = {
  title: "Focus Industries | Tailored Commercial Architectures",
  description:
    "Explore how Panknox architects marketing systems for Manufacturing, Healthcare, Real Estate, Interiors & Furniture, and Hospitality.",
};

const INDUSTRY_ICONS: Record<string, any> = {
  manufacturing: Building,
  healthcare: HeartPulse,
  "real-estate": Home,
  "interiors-furniture": Compass,
  hospitality: Sparkles,
};

export default function IndustriesOverviewPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-navy min-h-screen text-brand-neutral relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>INDUSTRY ARCHITECTURES // 5 CORE VERTICALS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-none">
            COMMERCIAL REALITY <br />
            <span className="text-brand-green">IS NOT ONE-SIZE-FITS-ALL.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-3xl">
            A precision CNC factory does not sell like a boutique heritage hotel.
            A patient seeking prosthetic rehabilitation does not evaluate trust like a real estate investor.
            Panknox develops dedicated communication architectures calibrated to each sector&apos;s commercial friction.
          </p>
        </div>

        {/* 5 Vertical Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industriesData.map((ind) => {
            const Icon = INDUSTRY_ICONS[ind.id] || Building;
            return (
              <article
                key={ind.id}
                className="p-8 sm:p-10 rounded-2xl border border-brand-neutral/15 bg-brand-navy/90 hover:border-brand-green/40 transition-all space-y-6 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-green font-bold">
                      VERTICAL // {ind.number}
                    </span>
                    <Icon className="w-5 h-5 text-brand-gray" />
                  </div>

                  <h2 className="text-3xl font-black uppercase text-brand-neutral tracking-tight">
                    {ind.name}
                  </h2>

                  <p className="text-base font-bold text-brand-green">
                    &ldquo;{ind.tagline}&rdquo;
                  </p>

                  <p className="text-sm text-brand-neutral/75 leading-relaxed">
                    {ind.sectorSummary}
                  </p>

                  {/* Customer Journey Micro-Pipeline */}
                  <div className="p-4 rounded-xl bg-black/40 border border-brand-neutral/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gray block">
                      CUSTOMER DECISION PIPELINE:
                    </span>
                    <p className="text-xs font-mono text-brand-neutral font-semibold">
                      {ind.customerJourneySummary}
                    </p>
                  </div>

                  {/* The Critical Problem */}
                  <div className="space-y-1 text-xs">
                    <span className="font-mono uppercase text-red-400 font-bold block">
                      WHY GENERIC MARKETING FAILS HERE:
                    </span>
                    <p className="text-brand-neutral/70">{ind.communicationProblem}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-neutral/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-gray">
                    CASE: {ind.sampleWorkReference.title}
                  </span>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-green uppercase hover:underline"
                  >
                    <span>ENTER {ind.name.toUpperCase()} ARCHITECTURE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Global Bottom Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-brand-neutral/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
              UNLISTED VERTICALS?
            </span>
            <h3 className="text-2xl font-bold uppercase text-brand-neutral">
              OPERATING IN ANOTHER HIGH-STAKES SECTOR?
            </h3>
            <p className="text-sm text-brand-neutral/70">
              Our diagnostic framework applies to any business where trust, operational complexity, and buyer deliberation are high.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded bg-brand-green text-brand-navy font-bold text-sm tracking-wider uppercase hover:bg-brand-green/90 transition-all shrink-0"
          >
            <span>DISCUSS YOUR SECTOR</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
