"use client";

import { useState, useEffect } from "react";
import { Play, Pause, ChevronRight, Activity, Cpu, Sparkles } from "lucide-react";

interface Stage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  inputState: string;
  systemAction: string;
  outputState: string;
  metricLabel: string;
  visualCode: string;
}

const STAGES: Stage[] = [
  {
    id: "business",
    number: "01",
    title: "RAW BUSINESS INFO",
    subtitle: "Hidden Operational Reality",
    inputState: "Internal factory machinery, doctor clinical credentials, or bespoke furniture craft.",
    systemAction: "Dissect commercial truth, unit economics, and unarticulated competitive advantages.",
    outputState: "Diagnostic commercial profile free of buzzwords.",
    metricLabel: "SIGNAL PURITY: RAW (12%)",
    visualCode: "SRC // UNPROCESSED TRUTH",
  },
  {
    id: "strategy",
    number: "02",
    title: "STRATEGY",
    subtitle: "Market Wedge & Positioning",
    inputState: "Raw capabilities without external narrative differentiation.",
    systemAction: "Define audience friction, competitive voids, and high-leverage market positioning.",
    outputState: "A singular narrative thesis and channel blueprint.",
    metricLabel: "SIGNAL COHERENCE: HIGH (38%)",
    visualCode: "VEC // NARRATIVE DEFINITION",
  },
  {
    id: "creative",
    number: "03",
    title: "CREATIVE",
    subtitle: "Visual Grammar & Art Direction",
    inputState: "Strategy on a spreadsheet without sensory distinction.",
    systemAction: "Establish typographical discipline, cinematic framing, tone of voice, and art direction.",
    outputState: "High-prestige visual identity system.",
    metricLabel: "AESTHETIC AUTHORITY: HIGH (55%)",
    visualCode: "ART // SENSORY DISCIPLINE",
  },
  {
    id: "content",
    number: "04",
    title: "CONTENT",
    subtitle: "Cinematography & Editorial Craft",
    inputState: "Abstract design without tangible proof assets.",
    systemAction: "Shoot 4K macro plant footage, record founder thought leadership, and write sharp editorial.",
    outputState: "Library of purposeful assets with reasons to exist.",
    metricLabel: "PRODUCTION INTEGRITY: 78%",
    visualCode: "MED // HIGH-FIDELITY ASSETS",
  },
  {
    id: "distribution",
    number: "05",
    title: "DISTRIBUTION",
    subtitle: "Algorithmic Placement & Paid Media",
    inputState: "Content sitting quietly on an empty profile.",
    systemAction: "Deploy Meta Ads, Google high-intent search architectures, and targeted LinkedIn delivery.",
    outputState: "Unavoidable visibility in front of active decision-makers.",
    metricLabel: "TARGET REACH DENSITY: 89%",
    visualCode: "TRAF // ALGORITHMIC LEVERAGE",
  },
  {
    id: "performance",
    number: "06",
    title: "PERFORMANCE",
    subtitle: "Attention & Behavior Analytics",
    inputState: "Raw traffic without conversion filtering.",
    systemAction: "Qualify inbound intent, track drop-offs, and run conversion rate optimizations.",
    outputState: "Streamlined enquiry funnels and buyer confidence.",
    metricLabel: "PIPELINE VELOCITY: 94%",
    visualCode: "QUAL // CONVERSION MECHANISM",
  },
  {
    id: "growth",
    number: "07",
    title: "GROWTH",
    subtitle: "Compounding Market Dominance",
    inputState: "Fragmented customer perception.",
    systemAction: "Feed campaign learnings back into Step 01 to compound competitive advantage.",
    outputState: "A self-sustaining creative operating system.",
    metricLabel: "SYSTEM EQUILIBRIUM: 100%",
    visualCode: "EXP // COMPOUNDING ADVANTAGE",
  },
];

export default function HeroSignatureInteraction() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-cycle through the signal steps
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeStage = STAGES[activeStageIndex];

  return (
    <div className="w-full bg-brand-navy border border-brand-neutral/15 rounded-xl p-4 sm:p-6 lg:p-8 relative overflow-hidden shadow-2xl">
      {/* Background Technical Grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Header bar of the system */}
      <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-brand-neutral/10 gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-brand-green/10 border border-brand-green/40 text-brand-green">
            <Cpu className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <span className="text-[11px] font-mono tracking-widest text-brand-green uppercase block">
              PANKNOX CREATIVE OPERATING SYSTEM
            </span>
            <span className="text-xs font-mono text-brand-gray">
              SYS-00 // SIGNAL TRANSFORMATION PIPELINE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            data-cursor="TOGGLE"
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-brand-neutral/5 hover:bg-brand-neutral/10 border border-brand-neutral/15 text-xs font-mono text-brand-neutral transition-colors"
            title={isPlaying ? "Pause auto-cycle" : "Play auto-cycle"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-brand-green" />
                <span>PAUSE SCAN</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-brand-green" />
                <span>AUTO SCAN</span>
              </>
            )}
          </button>

          <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-green/10 text-brand-green border border-brand-green/30">
            STAGE {activeStage.number} / 07
          </span>
        </div>
      </div>

      {/* Stage Flow Nodes Ribbon */}
      <div className="relative z-10 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            const isPassed = idx < activeStageIndex;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => {
                  setActiveStageIndex(idx);
                  setIsPlaying(false);
                }}
                data-cursor="STAGE"
                className={`text-left p-3 rounded-lg border transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? "bg-brand-green/10 border-brand-green text-brand-neutral shadow-[0_0_15px_rgba(48,198,130,0.2)]"
                    : isPassed
                    ? "bg-brand-navy/60 border-brand-neutral/20 text-brand-neutral/80 hover:border-brand-neutral/40"
                    : "bg-brand-navy/40 border-brand-neutral/10 text-brand-gray hover:border-brand-neutral/20"
                }`}
              >
                {/* Visual Signal Indicator Bar */}
                <div
                  className={`h-1 w-full rounded mb-2 transition-colors ${
                    isActive ? "bg-brand-green" : isPassed ? "bg-brand-green/40" : "bg-brand-neutral/10"
                  }`}
                />
                <span className="text-[10px] font-mono tracking-wider block text-brand-gray">
                  {stage.number}
                </span>
                <span className="text-xs font-bold tracking-tight block truncate text-brand-neutral">
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage Display */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-brand-navy/80 border border-brand-neutral/15 rounded-lg p-5 sm:p-7">
        {/* Left Column: Visual Stage Graphic & Pipeline Coordinates */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 border-b lg:border-b-0 lg:border-r border-brand-neutral/10 pb-6 lg:pb-0 lg:pr-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>{activeStage.visualCode}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-neutral">
              {activeStage.title}
            </h3>
            <p className="text-sm font-medium text-brand-green">
              {activeStage.subtitle}
            </p>
          </div>

          {/* Interactive Flow Visualizer Canvas */}
          <div className="p-4 rounded border border-brand-neutral/15 bg-brand-navy/95 relative overflow-hidden space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-brand-gray">
              <span>INPUT DISPATCH</span>
              <span className="text-brand-green font-bold">{activeStage.metricLabel}</span>
            </div>

            {/* Simulated Signal Transfer Wave */}
            <div className="relative h-10 w-full flex items-center justify-between px-2 bg-black/30 rounded border border-brand-neutral/10 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-brand-green/20 transition-all duration-500"
                style={{ width: `${((activeStageIndex + 1) / STAGES.length) * 100}%` }}
              />
              <span className="text-[11px] font-mono text-brand-gray z-10">RAW DATA</span>
              <div className="flex items-center gap-1 z-10">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                <span className="w-2 h-2 rounded-full bg-brand-green" />
              </div>
              <span className="text-[11px] font-mono text-brand-green font-semibold z-10">
                BUSINESS GROWTH
              </span>
            </div>

            <div className="text-[11px] font-mono text-brand-gray flex justify-between">
              <span>LATENCY: 0.14MS</span>
              <span className="text-brand-neutral/70">ARCH: SIGNAL-CORE</span>
            </div>
          </div>
        </div>

        {/* Right Column: In-depth Transformation Mechanics */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            {/* 1. Input Condition */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gray">
                A. INCOMING RAW STATE
              </span>
              <p className="text-sm text-brand-neutral/80 bg-white/5 p-3 rounded border border-brand-neutral/10">
                {activeStage.inputState}
              </p>
            </div>

            {/* 2. Panknox Intervention */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-green flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>B. PANKNOX SYSTEM OPERATION</span>
              </span>
              <p className="text-sm text-brand-neutral bg-brand-green/10 p-3 rounded border border-brand-green/30 font-medium">
                {activeStage.systemAction}
              </p>
            </div>

            {/* 3. Output Transformation */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gray">
                C. TRANSFORMED COMMERCIAL ASSET
              </span>
              <p className="text-sm text-brand-neutral/90 bg-white/5 p-3 rounded border border-brand-neutral/10">
                {activeStage.outputState}
              </p>
            </div>
          </div>

          {/* Step Trigger Bar */}
          <div className="pt-2 flex items-center justify-between border-t border-brand-neutral/10 text-xs font-mono">
            <span className="text-brand-gray">
              CLICK NODES TO SCRUB THE METAPHOR
            </span>
            <button
              type="button"
              onClick={() => {
                setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
                setIsPlaying(false);
              }}
              data-cursor="NEXT"
              className="inline-flex items-center gap-1.5 text-brand-green hover:underline font-semibold"
            >
              <span>NEXT STEP ({activeStageIndex === 6 ? "01" : `0${activeStageIndex + 2}`})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
