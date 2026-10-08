"use client";

import { useState } from "react";
import { ArrowRight, Lightbulb, Target, Users, Megaphone, BarChart3, RotateCcw } from "lucide-react";

interface WorkflowStep {
  number: string;
  name: string;
  category: "PREREQUISITE" | "OUTPUT" | "FEEDBACK";
  question: string;
  focus: string;
}

const FLOW_STEPS: WorkflowStep[] = [
  {
    number: "01",
    name: "BUSINESS",
    category: "PREREQUISITE",
    question: "What is the commercial constraint?",
    focus: "Margins, operational capacity, ticket size, and business objectives.",
  },
  {
    number: "02",
    name: "AUDIENCE",
    category: "PREREQUISITE",
    question: "Who holds the purchasing authority?",
    focus: "Decision-maker psychology, fears of making a bad hire or purchase.",
  },
  {
    number: "03",
    name: "OBJECTIVE",
    category: "PREREQUISITE",
    question: "What must happen next?",
    focus: "Enterprise credibility, margin protection, inbound qualification, or site visits.",
  },
  {
    number: "04",
    name: "MESSAGE",
    category: "PREREQUISITE",
    question: "What is the singular point of truth?",
    focus: "The single factual proposition that dismantles the buyer's skepticism.",
  },
  {
    number: "05",
    name: "IDEA",
    category: "PREREQUISITE",
    question: "How do we make it unforgettable?",
    focus: "The creative narrative hook or metaphor that cuts through digital fatigue.",
  },
  {
    number: "06",
    name: "CREATIVE",
    category: "OUTPUT",
    question: "How does it look, sound, and feel?",
    focus: "Visual direction, 4K cinematography, typographical restraint, sound design.",
  },
  {
    number: "07",
    name: "DISTRIBUTION",
    category: "OUTPUT",
    question: "Where will attention be captured?",
    focus: "Algorithmic paid media, high-intent search, LinkedIn executive networks.",
  },
  {
    number: "08",
    name: "MEASUREMENT",
    category: "FEEDBACK",
    question: "What did the market do?",
    focus: "Qualified conversations, retention curves, conversion funnel drop-offs.",
  },
  {
    number: "09",
    name: "LEARNING",
    category: "FEEDBACK",
    question: "How does this refine the business system?",
    focus: "Extracting market feedback to inform the next creative and strategic sprint.",
  },
];

export default function DontSellPostsSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Manifesto Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>03 // THE CORE MANIFESTO</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-none">
            WE DON&apos;T <br />
            <span className="text-brand-green">SELL POSTS.</span>
          </h2>

          <div className="text-lg sm:text-xl text-brand-neutral/80 space-y-3 max-w-3xl pt-2">
            <p className="font-semibold text-brand-neutral">
              A post is an output. A reel is an output. An advertisement is an output.
            </p>
            <p className="text-brand-neutral/70">
              The real work happens before the output. If you hire someone to simply &ldquo;make 15 posts a month,&rdquo; you are paying for noise.
            </p>
          </div>
        </div>

        {/* The 9-Stage Thought Chain */}
        <div className="bg-brand-navy border border-brand-neutral/15 rounded-xl p-6 sm:p-8 space-y-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-neutral/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green">
              <Target className="w-4 h-4" />
              <span>THE 9-STAGE ANATOMY OF PURPOSEFUL COMMUNICATION</span>
            </div>
            <span className="text-xs font-mono text-brand-gray">
              THE WORK BEFORE THE POST
            </span>
          </div>

          {/* Interactive Stepper Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {FLOW_STEPS.map((step, idx) => {
              const isSelected = idx === activeStep;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  data-cursor="INSPECT"
                  className={`p-3 rounded text-left transition-all border ${
                    isSelected
                      ? "bg-brand-green text-brand-navy border-brand-green font-bold shadow-[0_0_15px_rgba(48,198,130,0.4)]"
                      : "bg-brand-navy/60 border-brand-neutral/10 text-brand-neutral/80 hover:border-brand-neutral/30 hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono block ${
                      isSelected ? "text-brand-navy/70" : "text-brand-gray"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-xs font-extrabold uppercase block truncate">
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Display */}
          <div className="bg-black/30 p-6 sm:p-8 rounded-lg border border-brand-neutral/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-green/20 text-brand-green font-bold">
                  PHASE {FLOW_STEPS[activeStep].number}
                </span>
                <span className="text-xs font-mono text-brand-gray uppercase">
                  CLASSIFICATION: {FLOW_STEPS[activeStep].category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
                {FLOW_STEPS[activeStep].name}: &ldquo;{FLOW_STEPS[activeStep].question}&rdquo;
              </h3>
              <p className="text-base text-brand-neutral/80">
                {FLOW_STEPS[activeStep].focus}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col justify-end space-y-3 md:border-l border-brand-neutral/10 md:pl-6 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-brand-gray block">STATUS IN STANDARD AGENCY:</span>
                <span className="text-red-400 font-semibold block">Usually Skipped / Ignored</span>
              </div>
              <div className="space-y-1">
                <span className="text-brand-gray block">PANKNOX STANDARD:</span>
                <span className="text-brand-green font-bold block">Rigorous Strategic Prerequisite</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Golden Rule Banner */}
        <div className="p-8 sm:p-12 rounded-xl border border-brand-green/30 bg-brand-green/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-green font-semibold">
              THE PANKNOX LAW
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
              EVERY PIECE OF COMMUNICATION SHOULD HAVE A REASON TO EXIST.
            </p>
          </div>

          <div className="shrink-0 text-sm font-mono text-brand-green border-l-2 border-brand-green pl-4">
            <span>ZERO VANITY NOISE</span> <br />
            <span className="text-brand-neutral/70">100% COMMERCIAL INTENT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
