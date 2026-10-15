"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FestiveAmbient from "@/components/festive/FestiveAmbient";
import Diya from "@/components/festive/Diya";

interface WordSegment {
  text: string;
  step: number;
  highlight?: boolean;
}

interface HeadlineLine {
  id: number;
  segments: WordSegment[];
}

const HEADLINE_STRUCTURE: HeadlineLine[] = [
  {
    id: 1,
    segments: [
      { text: "Make your", step: 0 },
      { text: "business", step: 1 },
    ],
  },
  {
    id: 2,
    segments: [
      { text: "impossible", step: 2 },
      { text: "to ignore.", highlight: true, step: 3 },
    ],
  },
];

export default function HeroSection() {
  const [activeStep, setActiveStep] = useState(0); // 0 to 4 (4 = fully illuminated & orbiting)

  // Cinematic signal activation cycle (slow, intentional progression)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 4 : prev + 1));
    }, 850);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#04262F] text-brand-neutral flex flex-col items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* ========================================================
          BACKGROUND MOTION LAYERS (Slow, Organic & Multi-Layered)
          ======================================================== */}

      {/* Layer 1: Deep Navy Base #04262F (section background) */}

      {/* Layer 2: Soft Emerald Light Field (Organic Breath, 24s Cycle) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[450px] sm:h-[550px] bg-[#30C682]/12 rounded-full blur-[140px] pointer-events-none animate-pulse [animation-duration:12s]"
        aria-hidden="true"
      />

      {/* Layer 2b: Festive Warm Amber Radiance (Complements Emerald organically) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] sm:w-[920px] h-[480px] sm:h-[580px] bg-gradient-to-r from-[#F59E0B]/08 via-transparent to-[#30C682]/10 rounded-full blur-[140px] pointer-events-none animate-pulse [animation-duration:16s]"
        aria-hidden="true"
      />

      {/* Layer 3: Organic Moving Secondary Light Orbit */}
      <div
        className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-[#30C682]/8 rounded-full blur-[120px] pointer-events-none transition-all duration-1000"
        style={{
          transform: `translate(${activeStep * 12}px, ${activeStep * -8}px)`,
        }}
        aria-hidden="true"
      />

      {/* Layer 4: Very Subtle Noise & Fine Geometric Horizon */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 5: Festive Floating Particles & Cinematic Amber Bokeh */}
      <FestiveAmbient intensity="medium" particlesCount={14} showBokeh={true} />

      {/* ========================================================
          CENTER-ALIGNED EXPERIENTIAL CONTENT
          ======================================================== */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full relative z-10 flex flex-col items-center text-center space-y-8 sm:space-y-10 my-auto">
        {/* 1. Panknox Signal Indicator with Elevated Deepawali Greeting */}
        <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 py-1.5 rounded-full bg-white/[0.04] border border-amber-500/25 text-xs font-mono text-brand-neutral/85 shadow-[0_2px_18px_rgba(245,158,11,0.08)] backdrop-blur-sm transition-all hover:border-amber-500/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green shadow-[0_0_8px_#30C682]" />
          </span>
          <span className="text-brand-green font-semibold">Panknox Signal</span>
          <span className="text-amber-400/60">•</span>
          <span className="text-amber-200/90 font-medium">Deepawali</span>
          <span className="hidden sm:inline text-brand-neutral/30">|</span>
          <span className="hidden sm:inline text-brand-neutral/80 font-sans italic font-normal">
            A little more light. A lot more possibility.
          </span>
        </div>

        {/* 2. Dynamic Headline Container with Traveling Signal Interaction */}
        <div className="relative py-2 sm:py-4 w-full flex flex-col items-center">
          {/* Subtle Warm Amber Ambient Glow Behind Typography (Enhances Contrast) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[260px] bg-gradient-to-r from-[#F59E0B]/10 via-[#FBBF24]/06 to-[#30C682]/08 rounded-full blur-[90px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Traveling Signal Track Across Typography with Golden Shimmer */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent pointer-events-none">
            <div
              className={`absolute top-0 h-[2px] w-36 bg-gradient-to-r from-transparent via-[#30C682] via-[#FBBF24] to-transparent shadow-[0_0_15px_rgba(245,158,11,0.6)] transition-all duration-700 ${
                activeStep >= 4
                  ? "animate-signal-travel [animation-duration:5s]"
                  : "left-[15%] w-24"
              }`}
            />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-bold tracking-tight leading-[1.08] sm:leading-[1.06] select-none max-w-5xl mx-auto">
            {HEADLINE_STRUCTURE.map((line) => {
              const isLineStarted = activeStep >= line.segments[0].step;

              return (
                <span
                  key={line.id}
                  className="block sm:whitespace-nowrap transition-all duration-700 ease-out"
                  style={{
                    transform: isLineStarted
                      ? "translateY(0) scale(1)"
                      : "translateY(12px) scale(0.98)",
                    opacity: isLineStarted ? 1 : 0.22,
                    filter: isLineStarted ? "blur(0px)" : "blur(2.5px)",
                  }}
                >
                  {line.segments.map((item, itemIdx) => {
                    const isRevealed = activeStep >= item.step;
                    const isCurrent = activeStep === item.step;
                    const isNotLast = itemIdx < line.segments.length - 1;

                    return (
                      <span
                        key={itemIdx}
                        className={`inline-block ${
                          isNotLast ? "mr-[0.28em]" : ""
                        } transition-colors duration-500 ${
                          item.highlight
                            ? isRevealed
                              ? "text-brand-green drop-shadow-[0_0_35px_rgba(48,198,130,0.35)]"
                              : "text-brand-neutral/30"
                            : isCurrent
                            ? "text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                            : isRevealed
                            ? "text-brand-neutral"
                            : "text-brand-neutral/30"
                        }`}
                      >
                        {item.text}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </h1>

          {/* End-of-Signal Orbiting Anchor Point */}
          <div
            className={`mt-4 inline-flex items-center gap-2 text-xs font-mono transition-opacity duration-700 ${
              activeStep >= 4 ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_#30C682]" />
            <span className="text-brand-green/80 tracking-widest uppercase">
              Signal locked · Perception synchronized
            </span>
          </div>
        </div>

        {/* 3. Short Supporting Statement in #DFE5E2 */}
        <p className="text-base sm:text-lg md:text-xl text-[#DFE5E2]/85 max-w-2xl font-normal leading-relaxed">
          Strategy, creative, content, digital presence and growth, brought together around your business.
        </p>

        {/* 4. Minimal Hero Action CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-green text-brand-navy font-bold text-sm tracking-wide transition-all duration-300 hover:bg-brand-green/90 shadow-[0_4px_25px_rgba(48,198,130,0.4)] hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/15 text-brand-neutral font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
          >
            <span>See our work</span>
            <ArrowUpRight className="w-4 h-4 text-brand-neutral/60" />
          </Link>
        </div>

        {/* 5. Dual Locations (Jaipur First Without Hierarchy) */}
        <div className="pt-4 flex items-center justify-center gap-4 text-xs font-mono text-brand-neutral/50">
          <span>Chitrakoot, Jaipur</span>
          <span className="text-brand-green">•</span>
          <span>Mandrella, Jhunjhunu</span>
        </div>

        {/* Mobile-Only Subtle Diya Accent */}
        <div className="sm:hidden pt-2 flex items-center justify-center pointer-events-none">
          <Diya size="sm" withAura={true} label="Deepawali Light" />
        </div>
      </div>

      {/* ========================================================
          TASTEFUL BOTTOM CORNER DIYAS (Desktop Framed Horizon)
          ======================================================== */}
      <div
        className="hidden sm:flex absolute bottom-6 lg:bottom-9 left-6 sm:left-10 lg:left-14 z-20 flex-col items-center gap-1.5 opacity-85 pointer-events-none transition-all duration-700"
        aria-hidden="true"
      >
        <Diya size="sm" withAura={true} withReflection={true} label="Deepawali Light" />
        <span className="font-mono text-[10px] text-amber-200/40 uppercase tracking-widest">
          Light
        </span>
      </div>

      <div
        className="hidden sm:flex absolute bottom-6 lg:bottom-9 right-6 sm:right-10 lg:right-14 z-20 flex-col items-center gap-1.5 opacity-85 pointer-events-none transition-all duration-700"
        aria-hidden="true"
      >
        <Diya size="sm" withAura={true} withReflection={true} label="Deepawali Possibility" />
        <span className="font-mono text-[10px] text-amber-200/40 uppercase tracking-widest">
          Possibility
        </span>
      </div>
    </section>
  );
}
