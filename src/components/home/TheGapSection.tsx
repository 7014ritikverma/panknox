"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function TheGapSection() {
  const [alignmentLevel, setAlignmentLevel] = useState<number>(0); // 0 = unaligned, 1 = aligned

  return (
    <section
      id="the-gap-section"
      className="py-36 sm:py-48 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-28">
        {/* Huge Monolithic Typography with Generous Whitespace */}
        <div className="space-y-8 max-w-5xl">
          <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-gray uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>01 // THE FUNDAMENTAL GAP</span>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-navy leading-[0.92]">
            YOUR BUSINESS <br />
            IS NOT WHAT <br />
            PEOPLE SEE.
          </h2>

          <p className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-brand-gray leading-tight pt-2">
            IT&apos;S WHAT THEY <br />
            <span className="text-brand-green underline decoration-brand-green/30">
              THINK THEY SEE.
            </span>
          </p>

          <p className="text-lg sm:text-2xl text-brand-gray max-w-3xl pt-4 font-normal leading-relaxed">
            Your customer doesn&apos;t experience your factory floor, your clinical expertise, or
            your decades of craftsmanship. They only see scattered fragments online.
          </p>
        </div>

        {/* Interactive Thought Experiment: Two Large Editorial Areas */}
        <div className="space-y-12">
          {/* Interactive Align Slider / Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-navy/10 pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold">
              EXPERIENCE THE GAP CLOSING:
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setAlignmentLevel(0)}
                data-cursor="EXPAND"
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  alignmentLevel === 0
                    ? "bg-brand-navy text-white shadow-md"
                    : "bg-brand-neutral-surface text-brand-gray hover:text-brand-navy"
                }`}
              >
                THE MARKET GAP (DEFAULT)
              </button>
              <button
                type="button"
                onClick={() => setAlignmentLevel(1)}
                data-cursor="ALIGN"
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  alignmentLevel === 1
                    ? "bg-brand-green text-brand-navy shadow-md"
                    : "bg-brand-neutral-surface text-brand-gray hover:text-brand-navy"
                }`}
              >
                PANKNOX ALIGNED (THE SYSTEM)
              </button>
            </div>
          </div>

          {/* Dynamic Editorial Visual Canvas */}
          <div
            className={`transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              alignmentLevel === 1 ? "lg:gap-4" : "lg:gap-16"
            }`}
          >
            {/* Left Area: REAL BUSINESS */}
            <div
              className={`p-10 sm:p-14 rounded-3xl transition-all duration-700 space-y-6 ${
                alignmentLevel === 1
                  ? "lg:col-span-6 bg-brand-navy text-white shadow-2xl"
                  : "lg:col-span-5 bg-brand-neutral-surface text-brand-navy border border-brand-neutral-border"
              }`}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold block">
                01 // THE INTERNAL TRUTH
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                REAL BUSINESS
              </h3>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  alignmentLevel === 1 ? "text-brand-neutral/80" : "text-brand-gray"
                }`}
              >
                Decades of tooling, engineering tolerances, genuine clinical outcomes,
                and relentless customer dedication.
              </p>

              <div className="pt-4 border-t border-current/10 text-xs font-mono space-y-2">
                <p>• PROPRIETARY ENGINEERING</p>
                <p>• OPERATIONAL INTEGRITY</p>
                <p>• HIGH UNIT ECONOMICS</p>
              </div>
            </div>

            {/* Center Dynamic Signal Channel */}
            <div
              className={`flex flex-col items-center justify-center transition-all duration-700 ${
                alignmentLevel === 1 ? "hidden lg:flex lg:col-span-0 opacity-0 w-0" : "lg:col-span-2"
              }`}
            >
              <div className="relative w-full h-[2px] bg-brand-navy/15 overflow-hidden">
                <div className="animate-signal-travel" />
              </div>
              <span className="py-3 text-[11px] font-mono text-brand-green uppercase font-bold tracking-widest text-center">
                THE GAP
              </span>
              <div className="relative w-full h-[2px] bg-brand-navy/15 overflow-hidden">
                <div className="animate-signal-travel" />
              </div>
            </div>

            {/* Right Area: DIGITAL PERCEPTION */}
            <div
              className={`p-10 sm:p-14 rounded-3xl transition-all duration-700 space-y-6 ${
                alignmentLevel === 1
                  ? "lg:col-span-6 bg-brand-navy text-white shadow-2xl border-l-4 border-brand-green"
                  : "lg:col-span-5 bg-brand-neutral-surface text-brand-navy border border-brand-neutral-border"
              }`}
            >
              <span
                className={`text-xs font-mono uppercase tracking-widest font-bold block ${
                  alignmentLevel === 1 ? "text-brand-green" : "text-red-500"
                }`}
              >
                02 // EXTERNAL PROJECTION
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                DIGITAL PERCEPTION
              </h3>

              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  alignmentLevel === 1 ? "text-brand-neutral/80" : "text-brand-gray"
                }`}
              >
                {alignmentLevel === 1
                  ? "Transformed through Panknox into unavoidable market authority, bespoke cinematography, and high-intent conversion."
                  : "Diluted by generic templates, sporadic social posts, and outdated communication that force commodity price wars."}
              </p>

              <div className="pt-4 border-t border-current/10 text-xs font-mono space-y-2">
                {alignmentLevel === 1 ? (
                  <>
                    <p className="text-brand-green font-bold">• 100% ALIGNED REPUTATION</p>
                    <p className="text-brand-green font-bold">• HIGH-INTENT CONVERSION</p>
                    <p className="text-brand-green font-bold">• MARKET AUTHORITY</p>
                  </>
                ) : (
                  <>
                    <p className="line-through text-red-500">• UNMEMORABLE NOISE</p>
                    <p className="line-through text-red-500">• PRICE NEGOTIATION WARS</p>
                    <p className="line-through text-red-500">• LOST ENTERPRISE TRUST</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Conclusion */}
        <div className="pt-12 text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold">
            THE PANKNOX INTERVENTION
          </p>
          <h3 className="text-4xl sm:text-6xl font-black uppercase text-brand-navy tracking-tight">
            PANKNOX WORKS <span className="text-brand-green">IN THE GAP.</span>
          </h3>
          <p className="text-brand-gray text-lg sm:text-xl font-normal leading-relaxed">
            We bring what your business actually is into complete harmony with how your market perceives it.
          </p>
        </div>
      </div>
    </section>
  );
}
