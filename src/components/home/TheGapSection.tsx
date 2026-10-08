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
        {/* Calibrated Editorial Typography with Generous Whitespace */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>01 // The fundamental gap</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-brand-navy leading-[1.08]">
            Your business is not what people see.
          </h2>

          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-brand-gray leading-snug">
            It&apos;s what they{" "}
            <span className="text-brand-green underline decoration-brand-green/30">
              think they see.
            </span>
          </p>

          <p className="text-base sm:text-xl text-brand-gray max-w-3xl pt-2 font-normal leading-relaxed">
            Your customer doesn&apos;t experience your factory floor, your clinical expertise, or
            your decades of craftsmanship. They only see scattered fragments online.
          </p>
        </div>

        {/* Interactive Thought Experiment: Two Large Editorial Areas */}
        <div className="space-y-10">
          {/* Interactive Align Slider / Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-navy/10 pb-5">
            <span className="text-xs font-mono text-brand-gray font-semibold">
              Experience the gap closing:
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setAlignmentLevel(0)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                  alignmentLevel === 0
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-brand-neutral-surface text-brand-gray hover:text-brand-navy"
                }`}
              >
                The market gap (default)
              </button>
              <button
                type="button"
                onClick={() => setAlignmentLevel(1)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                  alignmentLevel === 1
                    ? "bg-brand-green text-brand-navy shadow-sm"
                    : "bg-brand-neutral-surface text-brand-gray hover:text-brand-navy"
                }`}
              >
                Panknox aligned (the system)
              </button>
            </div>
          </div>

          {/* Dynamic Editorial Visual Canvas */}
          <div
            className={`transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              alignmentLevel === 1 ? "lg:gap-4" : "lg:gap-14"
            }`}
          >
            {/* Left Area: Real Business */}
            <div
              className={`p-8 sm:p-12 rounded-3xl transition-all duration-700 space-y-5 ${
                alignmentLevel === 1
                  ? "lg:col-span-6 bg-brand-navy text-white shadow-2xl"
                  : "lg:col-span-5 bg-brand-neutral-surface text-brand-navy border border-brand-neutral-border"
              }`}
            >
              <span className="text-xs font-mono text-brand-green font-semibold block">
                01 // The internal truth
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
                Real business
              </h3>
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  alignmentLevel === 1 ? "text-brand-neutral/80" : "text-brand-gray"
                }`}
              >
                Decades of tooling, engineering tolerances, genuine clinical outcomes,
                and relentless customer dedication.
              </p>

              <div className="pt-4 border-t border-current/10 text-xs font-mono space-y-1.5">
                <p>• Proprietary engineering</p>
                <p>• Operational integrity</p>
                <p>• High unit economics</p>
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
              <span className="py-2.5 text-[11px] font-mono text-brand-green font-semibold text-center">
                The Gap
              </span>
              <div className="relative w-full h-[2px] bg-brand-navy/15 overflow-hidden">
                <div className="animate-signal-travel" />
              </div>
            </div>

            {/* Right Area: Digital Perception */}
            <div
              className={`p-8 sm:p-12 rounded-3xl transition-all duration-700 space-y-5 ${
                alignmentLevel === 1
                  ? "lg:col-span-6 bg-brand-navy text-white shadow-2xl border-l-4 border-brand-green"
                  : "lg:col-span-5 bg-brand-neutral-surface text-brand-navy border border-brand-neutral-border"
              }`}
            >
              <span
                className={`text-xs font-mono font-semibold block ${
                  alignmentLevel === 1 ? "text-brand-green" : "text-red-500"
                }`}
              >
                02 // External projection
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">
                Digital perception
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

              <div className="pt-4 border-t border-current/10 text-xs font-mono space-y-1.5">
                {alignmentLevel === 1 ? (
                  <>
                    <p className="text-brand-green font-semibold">• 100% aligned reputation</p>
                    <p className="text-brand-green font-semibold">• High-intent conversion</p>
                    <p className="text-brand-green font-semibold">• Market authority</p>
                  </>
                ) : (
                  <>
                    <p className="line-through text-red-500">• Unmemorable noise</p>
                    <p className="line-through text-red-500">• Price negotiation wars</p>
                    <p className="line-through text-red-500">• Lost enterprise trust</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Conclusion */}
        <div className="pt-10 text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs font-mono text-brand-gray font-semibold">
            The Panknox intervention
          </p>
          <h3 className="text-3xl sm:text-5xl font-bold text-brand-navy tracking-tight">
            Panknox works <span className="text-brand-green">in the gap.</span>
          </h3>
          <p className="text-brand-gray text-base sm:text-lg font-normal leading-relaxed">
            We bring what your business actually is into complete harmony with how your market perceives it.
          </p>
        </div>
      </div>
    </section>
  );
}
