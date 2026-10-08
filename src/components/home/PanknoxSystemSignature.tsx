"use client";

import { useState } from "react";
import { ArrowRight, RotateCw, Activity, Cpu } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";

interface SystemStage {
  step: string;
  name: string;
  action: string;
  stateLabel: string;
  visualGraphic: string;
  description: string;
}

const SYSTEM_STAGES: SystemStage[] = [
  {
    step: "01",
    name: "UNDERSTAND",
    action: "Diagnostic immersion into unit economics and operational capability.",
    stateLabel: "RAW SIGNALS DISPERSED",
    visualGraphic: "SCATTERED_INPUTS",
    description: "Raw business information, margins, manufacturing tolerances, and clinician reality are gathered without distortion.",
  },
  {
    step: "02",
    name: "FIND",
    action: "Isolating the perception void where market doubt occurs.",
    stateLabel: "INFORMATION CONNECTING",
    visualGraphic: "NODES_CONVERGING",
    description: "We locate the precise gap between internal excellence and external skepticism to build the narrative wedge.",
  },
  {
    step: "03",
    name: "THINK",
    action: "Synthesizing positioning thesis and channel priorities.",
    stateLabel: "STRUCTURE FORMING",
    visualGraphic: "ARCHITECTURE_LOCKED",
    description: "Strategy is sacrifice. We define what not to say, which audiences to bypass, and where leverage exists.",
  },
  {
    step: "04",
    name: "BUILD",
    action: "Cinema-standard asset engineering and conversion platforms.",
    stateLabel: "CREATIVE SYSTEM ACTIVE",
    visualGraphic: "SYSTEM_PRODUCTION",
    description: "4K cinematography, typographical discipline, Next.js web platforms, and pre-qualified inquiry funnels.",
  },
  {
    step: "05",
    name: "DISTRIBUTE",
    action: "Algorithmic placement where target attention resides.",
    stateLabel: "SIGNALS DEPLOYING OUTWARD",
    visualGraphic: "OUTWARD_RADIAL",
    description: "Meta Ad architectures, Google high-intent search capture, and targeted LinkedIn executive authority.",
  },
  {
    step: "06",
    name: "LEARN",
    action: "Continuous measurement of true commercial signals.",
    stateLabel: "COMMERCIAL SIGNALS RETURNING",
    visualGraphic: "FEEDBACK_INFLOW",
    description: "Tracking qualified sales conversations and objection drop-offs rather than meaningless vanity impressions.",
  },
  {
    step: "07",
    name: "EVOLVE",
    action: "Injecting learnings into the next strategic sprint.",
    stateLabel: "SYSTEM MUTATING & COMPOUNDING",
    visualGraphic: "RECURSIVE_LOOP",
    description: "The system adapts based on real market feedback, compounding competitive advantage in every cycle.",
  },
];

export default function PanknoxSystemSignature() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeStage = SYSTEM_STAGES[activeStageIdx];

  return (
    <section id="panknox-system" className="relative overflow-hidden">
      <AtmosphericBackground className="py-36 sm:py-48">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
          {/* Section Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-green/80 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>SIGNATURE 02 // THE OPERATING ENGINE</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-neutral leading-[0.92]">
              THE PANKNOX <br />
              <span className="text-brand-green">SYSTEM.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed pt-2">
              An intelligent, continuous machine that turns raw business truth into compounding commercial growth.
            </p>
          </div>

          {/* Large Horizontal Interactive System Chamber */}
          <div className="p-8 sm:p-14 rounded-3xl bg-black/50 border border-white/10 space-y-12 shadow-2xl">
            {/* Horizontal Stage Stepper Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold">
                7 CONTINUOUS NODES // INTERACTIVE SCRUBBER
              </span>
              <span className="text-xs font-mono text-brand-green font-bold flex items-center gap-2">
                <RotateCw className="w-3.5 h-3.5 animate-spin [animation-duration:10s]" />
                <span>ACTIVE: {activeStage.step} // {activeStage.name}</span>
              </span>
            </div>

            {/* Stepper Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {SYSTEM_STAGES.map((st, i) => {
                const isSelected = i === activeStageIdx;
                return (
                  <button
                    key={st.step}
                    type="button"
                    onClick={() => setActiveStageIdx(i)}
                    data-cursor="STAGE"
                    className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-32 ${
                      isSelected
                        ? "bg-brand-green/20 border-brand-green text-brand-neutral shadow-[0_0_20px_rgba(48,198,130,0.3)] scale-[1.02]"
                        : "bg-white/[0.02] border-white/10 text-brand-gray hover:border-white/30 hover:text-brand-neutral"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-mono font-bold">{st.step}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSelected ? "bg-brand-green animate-ping" : "bg-white/10"
                        }`}
                      />
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight block">
                      {st.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Expanded Active Visual Transformer Chamber */}
            <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy/90 border border-brand-green/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-brand-green">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span className="font-bold tracking-widest">{activeStage.stateLabel}</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-brand-neutral">
                  {activeStage.name}
                </h3>

                <p className="text-lg text-brand-neutral/90 leading-relaxed font-normal">
                  {activeStage.description}
                </p>

                <div className="pt-4 border-t border-white/10 text-xs font-mono space-y-1">
                  <span className="text-brand-gray uppercase block font-bold">
                    SYSTEM OPERATION:
                  </span>
                  <p className="text-brand-green font-bold text-sm">{activeStage.action}</p>
                </div>
              </div>

              {/* Simulated Living Node Graphic Canvas */}
              <div className="lg:col-span-4 bg-black/60 p-8 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full border-2 border-brand-green/40 flex items-center justify-center relative">
                  <div className="w-8 h-8 rounded-full bg-brand-green/20 animate-ping absolute" />
                  <Cpu className="w-8 h-8 text-brand-green" />
                </div>
                <span className="text-xs font-mono text-brand-green font-bold tracking-widest">
                  STAGE {activeStage.step} ACTIVE
                </span>
                <span className="text-[11px] font-mono text-brand-gray">
                  RECURSIVE FEEDBACK COMPLIANT
                </span>
              </div>
            </div>
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}
