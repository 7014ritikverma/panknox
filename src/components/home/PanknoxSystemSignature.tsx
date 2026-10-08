"use client";

import { useState } from "react";
import { RotateCw, Activity } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";
import {
  UnderstandIcon,
  FindIcon,
  ThinkIcon,
  BuildIcon,
  DistributeIcon,
  LearnIcon,
  EvolveIcon,
} from "@/components/common/PanknoxIcons";

interface SystemStage {
  step: string;
  name: string;
  action: string;
  stateLabel: string;
  description: string;
  icon: typeof UnderstandIcon;
}

const SYSTEM_STAGES: SystemStage[] = [
  {
    step: "01",
    name: "Understand",
    action: "Diagnostic immersion into unit economics and operational capability.",
    stateLabel: "Raw signals gathered",
    description:
      "Raw business information, margins, manufacturing tolerances, and clinician reality are gathered without distortion.",
    icon: UnderstandIcon,
  },
  {
    step: "02",
    name: "Find",
    action: "Isolating the perception void where market doubt occurs.",
    stateLabel: "Information connecting",
    description:
      "We locate the precise gap between internal excellence and external skepticism to build the narrative wedge.",
    icon: FindIcon,
  },
  {
    step: "03",
    name: "Think",
    action: "Synthesizing positioning thesis and channel priorities.",
    stateLabel: "Structure forming",
    description:
      "Strategy is sacrifice. We define what not to say, which audiences to bypass, and where leverage exists.",
    icon: ThinkIcon,
  },
  {
    step: "04",
    name: "Build",
    action: "Precision asset engineering and conversion platforms.",
    stateLabel: "Creative system active",
    description:
      "Video & motion production, typographical discipline, Next.js web platforms, and pre-qualified inquiry funnels.",
    icon: BuildIcon,
  },
  {
    step: "05",
    name: "Distribute",
    action: "Algorithmic placement where target attention resides.",
    stateLabel: "Signals deploying outward",
    description:
      "Meta Ad architectures, Google high-intent search capture, and targeted LinkedIn executive authority.",
    icon: DistributeIcon,
  },
  {
    step: "06",
    name: "Learn",
    action: "Continuous measurement of true commercial signals.",
    stateLabel: "Commercial signals returning",
    description:
      "Tracking qualified sales conversations and objection drop-offs rather than meaningless vanity impressions.",
    icon: LearnIcon,
  },
  {
    step: "07",
    name: "Evolve",
    action: "Injecting learnings into the next strategic sprint.",
    stateLabel: "System mutating & compounding",
    description:
      "The system adapts based on real market feedback, compounding competitive advantage in every cycle.",
    icon: EvolveIcon,
  },
];

export default function PanknoxSystemSignature() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeStage = SYSTEM_STAGES[activeStageIdx];
  const ActiveIcon = activeStage.icon;

  return (
    <section id="panknox-system" className="relative overflow-hidden">
      <AtmosphericBackground className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">
          {/* Section Header */}
          <div className="space-y-5 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-green/90">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Signature 02 // The operating engine</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-brand-neutral leading-[1.08]">
              The Panknox <br />
              <span className="text-brand-green">system.</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed pt-1">
              An intelligent, continuous machine that turns raw business truth into compounding commercial growth.
            </p>
          </div>

          {/* Large Horizontal Interactive System Chamber */}
          <div className="p-7 sm:p-12 rounded-3xl bg-black/50 border border-white/10 space-y-10 shadow-2xl">
            {/* Horizontal Stage Stepper Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <span className="text-xs font-mono text-brand-neutral/60 font-medium">
                7 continuous nodes // Interactive scrubber
              </span>
              <span className="text-xs font-mono text-brand-green font-semibold flex items-center gap-2">
                <RotateCw className="w-3.5 h-3.5 animate-spin [animation-duration:10s]" />
                <span>Active: {activeStage.step} // {activeStage.name}</span>
              </span>
            </div>

            {/* Stepper Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {SYSTEM_STAGES.map((st, i) => {
                const isSelected = i === activeStageIdx;
                const StageIcon = st.icon;
                return (
                  <button
                    key={st.step}
                    type="button"
                    onClick={() => setActiveStageIdx(i)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-34 ${
                      isSelected
                        ? "bg-brand-green/20 border-brand-green text-brand-neutral shadow-[0_0_20px_rgba(48,198,130,0.3)] scale-[1.02]"
                        : "bg-white/[0.02] border-white/10 text-brand-neutral/70 hover:border-white/30 hover:text-brand-neutral"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-mono font-semibold">{st.step}</span>
                      <StageIcon active={isSelected} size={18} />
                    </div>
                    <span className="text-sm font-semibold tracking-tight block mt-3">
                      {st.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Expanded Active Visual Transformer Chamber */}
            <div className="p-7 sm:p-10 rounded-2xl bg-brand-navy/90 border border-brand-green/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-mono text-brand-green">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span className="font-semibold">{activeStage.stateLabel}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-neutral">
                  {activeStage.name}
                </h3>

                <p className="text-base sm:text-lg text-brand-neutral/90 leading-relaxed font-normal">
                  {activeStage.description}
                </p>

                <div className="pt-4 border-t border-white/10 text-xs font-mono space-y-1">
                  <span className="text-brand-neutral/60 block font-medium">
                    System operation:
                  </span>
                  <p className="text-brand-green font-semibold text-sm">{activeStage.action}</p>
                </div>
              </div>

              {/* Living Node Graphic Canvas */}
              <div className="lg:col-span-4 bg-black/60 p-8 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full border border-brand-green/40 flex items-center justify-center relative bg-brand-green/5">
                  <div className="w-8 h-8 rounded-full bg-brand-green/15 animate-ping absolute" />
                  <ActiveIcon active={true} size={36} />
                </div>
                <span className="text-xs font-mono text-brand-green font-semibold">
                  Stage {activeStage.step} active
                </span>
                <span className="text-[11px] font-mono text-brand-neutral/60">
                  Recursive feedback engine
                </span>
              </div>
            </div>
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}

