import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industriesData } from "@/data/industries";
import {
  ManufacturingIcon,
  HealthcareIcon,
  RealEstateIcon,
  InteriorsIcon,
  HospitalityIcon,
} from "@/components/common/PanknoxIcons";
import CtaIsland from "@/components/common/CtaIsland";

export const metadata: Metadata = {
  title: "Focus Industries | Tailored Commercial Architectures",
  description:
    "Explore how Panknox architects marketing systems for Manufacturing, Healthcare, Real Estate, Interiors & Furniture, and Hospitality.",
};

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  manufacturing: ManufacturingIcon,
  healthcare: HealthcareIcon,
  "real-estate": RealEstateIcon,
  "interiors-furniture": InteriorsIcon,
  hospitality: HospitalityIcon,
};

export default function IndustriesOverviewPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-navy min-h-screen text-brand-neutral relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>Industry architectures · 5 core verticals</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-neutral leading-tight">
            Commercial reality <br />
            <span className="text-brand-green">is not one-size-fits-all.</span>
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
            const Icon = INDUSTRY_ICONS[ind.id] || ManufacturingIcon;
            return (
              <article
                key={ind.id}
                className="p-8 sm:p-10 rounded-2xl border border-brand-neutral/15 bg-brand-navy/90 hover:border-brand-green/40 transition-all space-y-6 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-brand-green font-bold">
                      Vertical {ind.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-green" />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-brand-neutral tracking-tight">
                    {ind.name}
                  </h2>

                  <p className="text-base font-semibold text-brand-green">
                    &ldquo;{ind.tagline}&rdquo;
                  </p>

                  <p className="text-sm text-brand-neutral/75 leading-relaxed">
                    {ind.sectorSummary}
                  </p>

                  {/* Customer Journey Micro-Pipeline */}
                  <div className="p-4 rounded-xl bg-black/40 border border-brand-neutral/10 space-y-2">
                    <span className="text-[10px] font-mono tracking-wider text-brand-gray block">
                      Customer decision pipeline:
                    </span>
                    <p className="text-xs font-mono text-brand-neutral font-medium">
                      {ind.customerJourneySummary}
                    </p>
                  </div>

                  {/* The Critical Problem */}
                  <div className="space-y-1 text-xs">
                    <span className="font-mono text-red-400 font-bold block">
                      Why generic marketing fails here:
                    </span>
                    <p className="text-brand-neutral/70">{ind.communicationProblem}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-neutral/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-gray">
                    Case: {ind.sampleWorkReference.title}
                  </span>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-brand-green hover:underline"
                  >
                    <span>Explore {ind.name} architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Signature End-of-Page CTA Island */}
        <CtaIsland variant="industries" className="pt-4" />
      </div>
    </div>
  );
}
