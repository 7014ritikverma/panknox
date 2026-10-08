import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";
import CtaIsland from "@/components/common/CtaIsland";
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
    <div className="relative min-h-screen text-brand-neutral overflow-hidden">
      <AtmosphericBackground className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 space-y-24">
          {/* 1. Hero: Concise, Confident Editorial Statement */}
          <div className="space-y-5 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-green/90">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Panknox // Perspective</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-neutral leading-[1.08]">
              Clarity before scale.
            </h1>

            <p className="text-lg sm:text-xl text-brand-neutral/80 font-normal leading-relaxed pt-1">
              Businesses do not simply need more content. They need an integrated system connecting what they actually are to how their market perceives them.
            </p>
          </div>

          {/* 2. The Core Idea: What Businesses Actually Need */}
          <div className="p-8 sm:p-12 rounded-3xl bg-black/45 border border-white/10 space-y-8 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-mono text-brand-green font-semibold block">
                The core premise
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-neutral">
                More content is not a strategy.
              </h2>
              <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed max-w-2xl">
                Most companies produce random social posts hoping something sticks. Panknox brings total clarity across five non-negotiable vectors:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
              {CLARITY_POINTS.map((pt, i) => (
                <div
                  key={pt}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2"
                >
                  <span className="text-xs font-mono text-brand-green font-semibold">0{i + 1}</span>
                  <p className="text-sm font-semibold text-brand-neutral">{pt}</p>
                </div>
              ))}
            </div>

            <p className="text-sm font-mono text-brand-neutral/60 pt-2 border-t border-white/10">
              Panknox brings these pieces together into one coherent perception.
            </p>
          </div>

          {/* 3. The Evolution Timeline */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono text-brand-green font-semibold block">
                The journey
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-neutral">
                How our thinking evolved.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {EVOLUTION_STAGES.map((st) => (
                <div
                  key={st.step}
                  className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-brand-green font-semibold">{st.step}</span>
                    <h3 className="text-base font-bold tracking-tight text-brand-neutral">
                      {st.title}
                    </h3>
                  </div>
                  <p className="text-xs text-brand-neutral/70 leading-relaxed font-mono">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Human Operating Unit Element */}
          <div className="p-8 sm:p-12 rounded-3xl bg-black/45 border border-white/10 space-y-6 shadow-xl">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              Operating model
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-neutral">
              Built by people. Powered by systems.
            </h2>
            <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed max-w-2xl">
              We do not use endless layers of account managers playing telephone between clients and creatives. Panknox operates as a specialized, tightly integrated creative unit directly linked to your business objectives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {teamData.operatingValues.map((val) => (
                <div key={val.title} className="space-y-1.5">
                  <h4 className="text-sm font-semibold text-brand-neutral">{val.title}</h4>
                  <p className="text-xs text-brand-neutral/70 leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Company Offices */}
          <div className="p-8 sm:p-10 rounded-2xl bg-black/40 border border-white/10 space-y-4">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              Official locations
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm font-mono text-brand-neutral/80">
              <div className="space-y-1">
                <span className="text-brand-green font-semibold block">Jaipur</span>
                <p className="text-brand-neutral">Chitrakoot, Vaishali Nagar</p>
                <p className="text-brand-neutral/60">Rajasthan</p>
              </div>
              <div className="space-y-1">
                <span className="text-brand-green font-semibold block">Jhunjhunu</span>
                <p className="text-brand-neutral">Mandrella</p>
                <p className="text-brand-neutral/60">Rajasthan</p>
              </div>
            </div>
          </div>

          {/* 6. Signature CtaIsland */}
          <CtaIsland variant="about" className="pt-4" />
        </div>
      </AtmosphericBackground>
    </div>
  );
}
