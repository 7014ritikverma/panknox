import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PanknoxCTAIsland from "@/components/common/PanknoxCTAIsland";
import { teamData } from "@/data/team";

export const metadata: Metadata = {
  title: "About | Creative & Performance Marketing Partner",
  description:
    "Panknox builds the strategy, creative, content and digital systems that connect business reality to market perception. Built by people, powered by systems.",
};

const EVOLUTION_STAGES = [
  {
    step: "01",
    title: "Creative & design roots",
    desc: "Rigorous typographical discipline, art direction, and visual restraint.",
  },
  {
    step: "02",
    title: "Content",
    desc: "On-site video production, founder perspective, and editorial narrative.",
  },
  {
    step: "03",
    title: "Marketing",
    desc: "Algorithmic distribution, high-intent search capture, and conversion funnels.",
  },
  {
    step: "04",
    title: "Systems",
    desc: "Replacing arbitrary posting with continuous 14-day recursive learning sprints.",
  },
  {
    step: "05",
    title: "AI-enabled growth",
    desc: "Collapsing infinite generative abundance into high-conviction strategic decisions.",
  },
];

const CLARITY_POINTS = [
  "What to say",
  "How to look",
  "Where to appear",
  "How to connect with people",
  "What should happen next",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-brand-navy relative overflow-hidden">
      {/* 1. White Editorial Header */}
      <section className="pt-32 pb-14 sm:pt-40 sm:pb-16 max-w-5xl mx-auto px-6 sm:px-8 space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-navy text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_6px_#30C682]" />
          <span>Perspective // Origin, conviction, trajectory</span>
          <span className="text-amber-500/60">•</span>
          <span className="text-amber-700/80 font-medium">Deepawali</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-navy leading-[1.08]">
          Clarity before scale.
        </h1>

        <p className="text-lg sm:text-xl text-brand-gray font-normal leading-relaxed max-w-2xl pt-1">
          Businesses do not simply need more content. They need an integrated system connecting what they actually are to how their market perceives them.
        </p>
      </section>

      {/* 2. Editorial Core Conviction on White */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-20 space-y-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAF9] border border-brand-navy/10 space-y-8 shadow-sm">
          <div className="space-y-3">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              The core premise
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-navy">
              More content is not a strategy.
            </h2>
            <p className="text-base sm:text-lg text-brand-gray leading-relaxed max-w-2xl font-normal">
              Most companies produce random social posts hoping something sticks. Panknox brings total clarity across five non-negotiable vectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            {CLARITY_POINTS.map((pt, i) => (
              <div
                key={pt}
                className="p-5 rounded-2xl bg-white border border-brand-navy/10 space-y-2 shadow-xs"
              >
                <span className="text-xs font-mono text-brand-green font-bold">0{i + 1}</span>
                <p className="text-sm font-semibold text-brand-navy">{pt}</p>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm font-mono text-brand-gray pt-2 border-t border-brand-navy/10">
            Panknox connects these pieces into one coherent, commanding market perception.
          </p>
        </div>
      </section>

      {/* 3. DEDICATED DARK VISUAL MOMENT: The Evolution Timeline */}
      <section className="bg-[#04262F] text-brand-neutral py-20 sm:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-green font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Studio evolution // Five chapters</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              How our thinking evolved.
            </h2>
            <p className="text-base sm:text-lg text-brand-neutral/80 max-w-xl font-normal">
              From pure aesthetic craft to an end-to-end commercial operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {EVOLUTION_STAGES.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-brand-green font-bold">{st.step}</span>
                  <h3 className="text-base font-bold tracking-tight text-white">
                    {st.title}
                  </h3>
                </div>
                <p className="text-xs text-brand-neutral/75 leading-relaxed font-mono">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Operating Culture & Locations on White */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-20 space-y-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAF9] border border-brand-navy/10 space-y-6 shadow-sm">
          <span className="text-xs font-mono text-brand-green font-semibold block">
            Operating culture
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-navy">
            Built by people. Powered by systems.
          </h2>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed max-w-2xl font-normal">
            We do not use endless layers of account managers playing telephone between clients and creatives. Panknox operates as a specialized, tightly integrated creative unit directly linked to your business objectives.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-brand-navy/10">
            {teamData.operatingValues.map((val) => (
              <div key={val.title} className="space-y-1.5">
                <h4 className="text-sm font-semibold text-brand-navy">{val.title}</h4>
                <p className="text-xs sm:text-[13px] text-brand-gray leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Locations (Jaipur First Without Hierarchy) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-brand-navy/10 space-y-4">
          <span className="text-xs font-mono text-brand-green font-semibold block">
            Official locations
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm font-mono text-brand-navy">
            <div className="space-y-1">
              <span className="text-brand-green font-semibold block">Jaipur</span>
              <p className="text-brand-navy font-medium">Chitrakoot, Vaishali Nagar</p>
              <p className="text-brand-gray">Rajasthan</p>
            </div>
            <div className="space-y-1">
              <span className="text-brand-green font-semibold block">Jhunjhunu</span>
              <p className="text-brand-navy font-medium">Mandrella</p>
              <p className="text-brand-gray">Rajasthan</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. White Dynamic Island CTA (Exactly One) */}
      <PanknoxCTAIsland variant="about" />
    </div>
  );
}
