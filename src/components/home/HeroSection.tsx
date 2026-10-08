"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, Terminal, Shield, Sparkles } from "lucide-react";
import HeroSignatureInteraction from "./HeroSignatureInteraction";

export default function HeroSection() {
  const scrollToNext = () => {
    const gapSection = document.getElementById("the-gap-section");
    if (gapSection) {
      gapSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex flex-col justify-between overflow-hidden bg-brand-navy">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Subtle Ambient Radial Lighting in Deep Navy */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-6 border-b border-brand-neutral/10 text-xs font-mono">
          <div className="flex items-center gap-2 text-brand-green">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
            <span className="font-semibold tracking-widest uppercase">
              PANKNOX / CREATIVE & PERFORMANCE
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-brand-gray tracking-wider uppercase">
            <span>JAIPUR / INDIA</span>
            <span>•</span>
            <span className="text-brand-neutral/80">
              STRATEGY • CREATIVE • CONTENT • GROWTH
            </span>
          </div>

          <div className="flex items-center gap-2 text-brand-neutral/60">
            <Terminal className="w-3.5 h-3.5 text-brand-green" />
            <span>DISPATCH: ACTIVE</span>
          </div>
        </div>

        {/* Hero Huge Headline */}
        <div className="space-y-6 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-neutral leading-[0.95]">
            MAKE YOUR BUSINESS <br />
            <span className="text-brand-green inline-block hover:scale-[1.01] transition-transform">
              IMPOSSIBLE
            </span>{" "}
            <br />
            TO IGNORE.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-brand-neutral/80 font-normal max-w-3xl leading-relaxed">
            Panknox builds the strategy, creative, content and digital systems that help ambitious
            businesses get noticed, understood and trusted.
          </p>

          {/* Action CTAs & Operational Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              data-cursor="START"
              className="inline-flex items-center gap-3 px-8 py-4 rounded bg-brand-green text-brand-navy font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:bg-brand-green/90 shadow-[0_0_25px_rgba(48,198,130,0.35)]"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/what-we-do"
              data-cursor="SYSTEM"
              className="inline-flex items-center gap-2 px-6 py-4 rounded border border-brand-neutral/25 text-brand-neutral hover:bg-brand-neutral/10 font-medium text-sm tracking-wider uppercase transition-colors"
            >
              <span>EXPLORE THE SYSTEM</span>
            </Link>

            <div className="hidden lg:flex items-center gap-2 pl-4 text-xs font-mono text-brand-gray">
              <Shield className="w-3.5 h-3.5 text-brand-green" />
              <span>NOT A STANDARD AGENCY. A MARKETING SYSTEM.</span>
            </div>
          </div>
        </div>

        {/* Signature Interaction Integration */}
        <div className="mt-16 pt-8 border-t border-brand-neutral/10">
          <div className="mb-4 flex items-center justify-between text-xs font-mono text-brand-gray">
            <span className="flex items-center gap-2 text-brand-green">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE SIGNATURE DEMONSTRATION // 01 SIGNAL</span>
            </span>
            <span className="hidden sm:inline">CYCLE: BUSINESS → ACTION → GROWTH</span>
          </div>
          <HeroSignatureInteraction />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-between text-xs font-mono text-brand-gray border-t border-brand-neutral/5 mt-8">
        <span>COORDINATES: 26.9124° N, 75.7873° E</span>
        <button
          type="button"
          onClick={scrollToNext}
          className="flex items-center gap-2 text-brand-neutral/70 hover:text-brand-green transition-colors"
          data-cursor="SCROLL"
        >
          <span>SCROLL TO DISCOVER THE GAP</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-brand-green" />
        </button>
      </div>
    </section>
  );
}
