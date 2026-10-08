import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { IndustryData } from "@/data/industries";
import {
  ManufacturingIcon,
  HealthcareIcon,
  RealEstateIcon,
  InteriorsIcon,
  HospitalityIcon,
} from "@/components/common/PanknoxIcons";
import CtaIsland from "@/components/common/CtaIsland";

interface Props {
  industry: IndustryData;
}

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  manufacturing: ManufacturingIcon,
  healthcare: HealthcareIcon,
  "real-estate": RealEstateIcon,
  "interiors-furniture": InteriorsIcon,
  hospitality: HospitalityIcon,
};

export default function IndustryDetailTemplate({ industry }: Props) {
  const Icon = INDUSTRY_ICONS[industry.id] || ManufacturingIcon;

  return (
    <div className="pt-28 pb-24 bg-brand-navy min-h-screen text-brand-neutral relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
          <Link href="/industries" className="hover:text-brand-green transition-colors">
            Industries
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-green font-bold">{industry.name}</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>Vertical {industry.number} · Dedicated architecture</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center shrink-0 mt-1">
              <Icon className="w-7 h-7 text-brand-green" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-neutral leading-tight">
                {industry.name} <br />
                <span className="text-brand-green">marketing architecture.</span>
              </h1>
            </div>
          </div>

          <p className="text-xl sm:text-2xl font-semibold text-brand-neutral/90">
            &ldquo;{industry.tagline}&rdquo;
          </p>

          <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed max-w-3xl">
            {industry.sectorSummary}
          </p>
        </div>

        {/* The 4-Stage Customer Journey Pipeline */}
        <div className="bg-brand-navy border border-brand-neutral/20 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-neutral/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green">
              <Layers className="w-4 h-4" />
              <span>The {industry.name} buyer conversion journey</span>
            </div>
            <span className="text-xs font-mono text-brand-gray">
              {industry.customerJourneySummary}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.journeyStages.map((stage) => (
              <div
                key={stage.step}
                className="p-6 rounded-xl bg-white/[0.03] border border-brand-neutral/15 space-y-4 hover:border-brand-green/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-green font-bold">Phase {stage.step}</span>
                  <span className="text-brand-neutral/50">{stage.label}</span>
                </div>

                <h3 className="text-2xl font-bold text-brand-neutral tracking-tight">
                  {stage.label}
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-brand-gray block">
                      Stage focus:
                    </span>
                    <p className="text-brand-neutral/80 font-medium">{stage.focus}</p>
                  </div>

                  <div className="pt-2 border-t border-brand-neutral/10">
                    <span className="text-[10px] font-mono text-red-400 block font-bold">
                      Buyer skepticism / friction:
                    </span>
                    <p className="text-brand-gray">{stage.frictionPoint}</p>
                  </div>

                  <div className="pt-2 border-t border-brand-neutral/10 bg-brand-green/5 p-3 rounded border border-brand-green/20">
                    <span className="text-[10px] font-mono text-brand-green font-bold block">
                      Panknox system deployment:
                    </span>
                    <p className="text-brand-neutral font-medium">{stage.panknoxIntervention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Contrast Analysis: Sector Challenge vs The Panknox Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-black/40 border border-brand-neutral/15 space-y-6">
            <span className="text-xs font-mono tracking-wider text-red-400 font-bold block">
              The structural impasse
            </span>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-neutral">
                The business challenge:
              </h3>
              <p className="text-sm sm:text-base text-brand-neutral/80 leading-relaxed">
                {industry.businessChallenge}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-brand-neutral/10">
              <h3 className="text-xl font-bold text-brand-neutral">
                Where communication collapses:
              </h3>
              <p className="text-sm sm:text-base text-brand-neutral/70 leading-relaxed">
                {industry.communicationProblem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-red-400/5 border border-red-400/20 text-xs text-red-200 space-y-1">
              <span className="font-mono font-bold block">What typical agencies do wrong:</span>
              <p>{industry.tacticalFocus.whatFails}</p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy border border-brand-green/30 space-y-6 bg-gradient-to-br from-brand-navy to-brand-green/5">
            <span className="text-xs font-mono tracking-wider text-brand-green font-bold block">
              The Panknox solution
            </span>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-neutral">
                Our sector-specific approach:
              </h3>
              <p className="text-sm sm:text-base text-brand-neutral leading-relaxed">
                {industry.panknoxApproach}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-brand-neutral/10">
              <span className="text-xs font-mono text-brand-green font-bold block">
                Specialized capability matrix:
              </span>
              <ul className="space-y-2 text-sm text-brand-neutral/90 font-mono">
                {industry.relevantCapabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-brand-green/10 border border-brand-green/30 text-xs text-brand-neutral space-y-1">
              <span className="font-mono text-brand-green font-bold block">
                What Panknox builds:
              </span>
              <p className="font-medium">{industry.tacticalFocus.whatWorks}</p>
            </div>
          </div>
        </div>

        {/* Case Study Reference */}
        <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy border border-brand-neutral/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono tracking-wider text-brand-green font-bold">
              Verified work in {industry.name}
            </span>
            <h3 className="text-2xl font-bold text-brand-neutral">
              {industry.sampleWorkReference.title}
            </h3>
            <p className="text-sm text-brand-neutral/80">
              {industry.sampleWorkReference.description}
            </p>
          </div>

          <Link
            href={`/work/${industry.sampleWorkReference.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-brand-green text-brand-navy font-bold text-xs tracking-wide hover:bg-brand-green/90 transition-all shrink-0"
          >
            <span>View case study</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Sector Briefing Signature CTA Island */}
        <CtaIsland variant="industries" className="pt-4" />
      </div>
    </div>
  );
}
