"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

interface SystemFragment {
  id: string;
  label: string;
  rawState: string;
  panknoxState: string;
  x: number; // percentage
  y: number; // percentage
}

const FRAGMENTS: SystemFragment[] = [
  {
    id: "strategy",
    label: "Strategy",
    rawState: "Disconnected ideas",
    panknoxState: "Singular market wedge",
    x: 18,
    y: 22,
  },
  {
    id: "creative",
    label: "Creative",
    rawState: "Generic templates",
    panknoxState: "Unmistakable identity",
    x: 48,
    y: 12,
  },
  {
    id: "content",
    label: "Content",
    rawState: "Sporadic posts",
    panknoxState: "Compounding authority",
    x: 82,
    y: 25,
  },
  {
    id: "presence",
    label: "Digital presence",
    rawState: "Fragmented touchpoints",
    panknoxState: "Unified digital system",
    x: 24,
    y: 68,
  },
  {
    id: "attention",
    label: "Attention",
    rawState: "Ignored noise",
    panknoxState: "Targeted decision-makers",
    x: 58,
    y: 78,
  },
  {
    id: "action",
    label: "Action",
    rawState: "Price shopping",
    panknoxState: "High-intent partnership",
    x: 86,
    y: 62,
  },
];

export default function HeroSection() {
  const [isAssembled, setIsAssembled] = useState(true);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [signalStep, setSignalStep] = useState(0);

  // Progressive signal pulse cycle through the system nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStep((prev) => (prev + 1) % FRAGMENTS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-white text-brand-navy flex flex-col justify-between pt-28 sm:pt-36 pb-16 overflow-hidden">
      {/* Subtle Engineered White Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#04262f06_1px,transparent_1px),linear-gradient(to_bottom,#04262f06_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Floating Ambient Emerald Aura (Light Theme Calibration) */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-green/8 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto space-y-16 lg:space-y-20">
        {/* 1. Technical Signal Initiation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-navy/10 pb-4">
          <div className="inline-flex items-center gap-2.5 text-xs font-mono text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="font-semibold text-brand-navy">Signal status:</span>
            <span>Active // Signal → Business → Attention → Action</span>
          </div>

          {/* Interactive State Toggle: Fragmented vs Assembled */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              type="button"
              onClick={() => setIsAssembled(false)}
              className={`px-3 py-1.5 rounded-full transition-all ${
                !isAssembled
                  ? "bg-brand-navy text-white font-semibold"
                  : "bg-[#DFE5E2]/40 text-brand-gray hover:text-brand-navy"
              }`}
            >
              Raw fragments
            </button>
            <button
              type="button"
              onClick={() => setIsAssembled(true)}
              className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                isAssembled
                  ? "bg-brand-green text-brand-navy font-bold shadow-sm"
                  : "bg-[#DFE5E2]/40 text-brand-gray hover:text-brand-navy"
              }`}
            >
              <span>Panknox system</span>
              <Sparkles className="w-3 h-3 text-brand-navy" />
            </button>
          </div>
        </div>

        {/* 2. Core Grid: Strategic Editorial Headline + Dynamic Signal Circuit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Calibrated Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-brand-navy leading-[1.06]">
                Make your business <br />
                <span className="text-brand-green relative inline-block">
                  impossible to ignore.
                  <span className="absolute bottom-1 left-0 w-full h-[3px] bg-brand-green/30 rounded" />
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-brand-gray font-normal max-w-xl leading-relaxed pt-2">
                Strategy, creative, content, digital presence and growth, brought together around your business.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-green text-brand-navy font-bold text-sm tracking-wide transition-all duration-300 hover:bg-brand-green/90 shadow-[0_4px_20px_rgba(48,198,130,0.35)] hover:scale-[1.01]"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-brand-navy/20 text-brand-navy font-semibold text-sm hover:bg-brand-navy/5 transition-all"
              >
                <span>See our work</span>
                <ArrowUpRight className="w-4 h-4 text-brand-gray" />
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-brand-gray/80">
              <span>Chitrakoot, Jaipur</span>
              <span>•</span>
              <span>Mandrella, Jhunjhunu</span>
            </div>
          </div>

          {/* Right Column: Dynamic Signal System Visualizer */}
          <div className="lg:col-span-5 relative">
            <div
              className={`w-full h-[360px] sm:h-[400px] rounded-3xl border transition-all duration-700 relative overflow-hidden p-6 flex flex-col justify-between ${
                isAssembled
                  ? "bg-[#F8FAF9] border-brand-green/30 shadow-[0_20px_50px_rgba(4,38,47,0.06)]"
                  : "bg-[#FAFAFA] border-brand-navy/15 shadow-sm"
              }`}
            >
              {/* Circuit SVG Lines (Visible when Assembled) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700"
                style={{ opacity: isAssembled ? 0.8 : 0.1 }}
              >
                <path
                  d="M 60 70 Q 180 40 280 85 T 180 240 T 70 200 Z"
                  fill="none"
                  stroke="#30C682"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
                <circle cx="60" cy="70" r="3" fill="#30C682" />
                <circle cx="280" cy="85" r="3" fill="#30C682" />
                <circle cx="180" cy="240" r="3" fill="#30C682" />
                <circle cx="70" cy="200" r="3" fill="#30C682" />
              </svg>

              {/* Status Header */}
              <div className="flex items-center justify-between text-xs font-mono relative z-10">
                <span className="font-semibold text-brand-navy">
                  {isAssembled ? "System architecture · Synchronized" : "Raw fragments · Unaligned"}
                </span>
                <span className="text-brand-green font-bold">
                  {isAssembled ? "Active flow" : "Idle"}
                </span>
              </div>

              {/* Dynamic Interactive Fragment Nodes */}
              <div className="relative flex-1 my-4">
                {FRAGMENTS.map((frag, idx) => {
                  const isActive = signalStep === idx || activeNode === frag.id;
                  return (
                    <div
                      key={frag.id}
                      onMouseEnter={() => setActiveNode(frag.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      style={{
                        position: "absolute",
                        left: isAssembled ? `${frag.x}%` : `${(idx % 3) * 35 + 8}%`,
                        top: isAssembled ? `${frag.y}%` : `${Math.floor(idx / 3) * 45 + 15}%`,
                        transform: "translate(-50%, -50%)",
                        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="cursor-pointer group"
                    >
                      <div
                        className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-300 ${
                          isActive
                            ? "bg-brand-navy text-white border-brand-green shadow-md scale-105"
                            : isAssembled
                            ? "bg-white text-brand-navy border-brand-green/30 hover:border-brand-green hover:shadow-sm"
                            : "bg-white/80 text-brand-gray border-dashed border-brand-navy/20"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive ? "bg-brand-green" : "bg-brand-gray/40"
                            }`}
                          />
                          <span className="font-semibold">{frag.label}</span>
                        </div>
                      </div>

                      {/* Tooltip on Active/Hover */}
                      {isActive && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 rounded bg-brand-navy text-white text-[11px] font-mono whitespace-nowrap z-30 shadow-lg border border-brand-green/40">
                          <span className="text-brand-green">
                            {isAssembled ? frag.panknoxState : frag.rawState}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* System Metric / State Explainer at Bottom */}
              <div className="p-3.5 rounded-2xl bg-white border border-brand-navy/10 relative z-10 text-xs font-mono flex items-center justify-between">
                <div>
                  <span className="text-brand-gray block text-[10px]">
                    Current node focus:
                  </span>
                  <span className="text-brand-navy font-bold">
                    {FRAGMENTS[signalStep].label} → {FRAGMENTS[signalStep].panknoxState}
                  </span>
                </div>
                <span className="text-brand-green font-semibold shrink-0">
                  0{signalStep + 1} / 06
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Editorial Footer Signal Line */}
        <div className="pt-6 border-t border-brand-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-brand-gray">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span className="text-brand-navy font-semibold">Panknox Operating System</span>
            <span>// White Primary Environment</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Scroll to explore the market gap</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
          </div>
        </div>
      </div>
    </section>
  );
}
