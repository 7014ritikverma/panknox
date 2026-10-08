import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Terminal, Layers } from "lucide-react";
import { IndustryData } from "@/data/industries";

interface Props {
  industry: IndustryData;
}

export default function IndustryDetailTemplate({ industry }: Props) {
  return (
    <div className="pt-28 pb-24 bg-brand-navy min-h-screen text-brand-neutral relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
          <Link href="/industries" className="hover:text-brand-green transition-colors">
            INDUSTRIES
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-green font-bold uppercase">{industry.name}</span>
        </div>

        {/* Hero Section */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>VERTICAL {industry.number} // DEDICATED ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-none">
            {industry.name.toUpperCase()} <br />
            <span className="text-brand-green">MARKETING ARCHITECTURE.</span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-brand-neutral/90">
            &ldquo;{industry.tagline}&rdquo;
          </p>

          <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed max-w-3xl">
            {industry.sectorSummary}
          </p>
        </div>

        {/* The 4-Stage Customer Journey Pipeline */}
        <div className="bg-brand-navy border border-brand-neutral/20 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-neutral/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase">
              <Layers className="w-4 h-4" />
              <span>THE {industry.name.toUpperCase()} BUYER CONVERSION JOURNEY</span>
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
                  <span className="text-brand-green font-bold">PHASE {stage.step}</span>
                  <span className="text-brand-neutral/50 uppercase">{stage.label}</span>
                </div>

                <h3 className="text-2xl font-black uppercase text-brand-neutral tracking-tight">
                  {stage.label}
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-brand-gray block">
                      STAGE FOCUS:
                    </span>
                    <p className="text-brand-neutral/80 font-medium">{stage.focus}</p>
                  </div>

                  <div className="pt-2 border-t border-brand-neutral/10">
                    <span className="text-[10px] font-mono uppercase text-red-400 block font-bold">
                      BUYER SKEPTICISM / FRICTION:
                    </span>
                    <p className="text-brand-gray">{stage.frictionPoint}</p>
                  </div>

                  <div className="pt-2 border-t border-brand-neutral/10 bg-brand-green/5 p-3 rounded border border-brand-green/20">
                    <span className="text-[10px] font-mono uppercase text-brand-green font-bold block">
                      PANKNOX SYSTEM DEPLOYMENT:
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
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block">
              THE STRUCTURAL IMPASSE
            </span>

            <div className="space-y-3">
              <h3 className="text-xl font-bold uppercase text-brand-neutral">
                THE REALITY OF THE BUSINESS CHALLENGE:
              </h3>
              <p className="text-sm sm:text-base text-brand-neutral/80 leading-relaxed">
                {industry.businessChallenge}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-brand-neutral/10">
              <h3 className="text-xl font-bold uppercase text-brand-neutral">
                WHERE COMMUNICATION COLLAPSES:
              </h3>
              <p className="text-sm sm:text-base text-brand-neutral/70 leading-relaxed">
                {industry.communicationProblem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-red-400/5 border border-red-400/20 text-xs text-red-200 space-y-1">
              <span className="font-mono uppercase font-bold block">WHAT TYPICAL AGENCIES DO WRONG:</span>
              <p>{industry.tacticalFocus.whatFails}</p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy border border-brand-green/30 space-y-6 bg-gradient-to-br from-brand-navy to-brand-green/5">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold block">
              THE PANKNOX SOLUTION
            </span>

            <div className="space-y-3">
              <h3 className="text-xl font-bold uppercase text-brand-neutral">
                OUR SECTOR-SPECIFIC APPROACH:
              </h3>
              <p className="text-sm sm:text-base text-brand-neutral leading-relaxed">
                {industry.panknoxApproach}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-brand-neutral/10">
              <span className="text-xs font-mono text-brand-green uppercase font-bold block">
                SPECIALIZED CAPABILITY MATRIX:
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
              <span className="font-mono uppercase text-brand-green font-bold block">
                WHAT PANKNOX BUILDS THAT WORKS:
              </span>
              <p className="font-medium">{industry.tacticalFocus.whatWorks}</p>
            </div>
          </div>
        </div>

        {/* Case Study Reference */}
        <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy border border-brand-neutral/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
              VERIFIED WORK IN {industry.name.toUpperCase()}
            </span>
            <h3 className="text-2xl font-bold uppercase text-brand-neutral">
              {industry.sampleWorkReference.title}
            </h3>
            <p className="text-sm text-brand-neutral/80">
              {industry.sampleWorkReference.description}
            </p>
          </div>

          <Link
            href={`/work/${industry.sampleWorkReference.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-brand-green text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-green/90 transition-all shrink-0"
          >
            <span>VIEW CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Sector Briefing CTA */}
        <div className="text-center pt-8 space-y-4">
          <h3 className="text-3xl font-extrabold uppercase text-brand-neutral">
            DISCUSS YOUR {industry.name.toUpperCase()} ENTERPRISE
          </h3>
          <p className="text-sm text-brand-neutral/70 max-w-xl mx-auto">
            Schedule a diagnostic briefing with our creative operating unit in Jaipur.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded bg-brand-green text-brand-navy font-bold text-sm tracking-wider uppercase hover:bg-brand-green/90 transition-all"
            >
              <span>START A CONVERSATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
