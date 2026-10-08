"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaIslandProps {
  variant?: "home" | "what-we-do" | "industries" | "work" | "about" | "contact";
  className?: string;
}

const VARIANT_DETAILS: Record<
  string,
  {
    tag: string;
    subtext: string;
    signalPath: string;
  }
> = {
  home: {
    tag: "Panknox signal · Direct briefing",
    subtext: "Strategy, creative, and performance marketing, aligned around your business.",
    signalPath: "M0,12 Q75,3 150,12 T300,12",
  },
  "what-we-do": {
    tag: "Panknox signal · Assembling capabilities",
    subtext: "Connect your positioning, visual direction, and distribution into one operating system.",
    signalPath: "M0,12 Q60,20 120,6 T240,16 T300,12",
  },
  industries: {
    tag: "Panknox signal · Sector alignment",
    subtext: "Deploy a marketing architecture calibrated to your sector's real buyer friction.",
    signalPath: "M0,12 Q90,0 180,24 T300,12",
  },
  work: {
    tag: "Panknox signal · Verified outcomes",
    subtext: "Move from unvetted commodity pricing to undisputed market authority.",
    signalPath: "M0,12 L80,6 L160,18 L240,6 L300,12",
  },
  about: {
    tag: "Panknox signal · Studio trajectory",
    subtext: "Collaborate directly with senior practitioners. Zero account-manager noise.",
    signalPath: "M0,12 C80,0 140,24 220,6 L300,12",
  },
  contact: {
    tag: "Panknox signal · Final dispatch",
    subtext: "Tell us where your business is today. We will tell you what we see.",
    signalPath: "M0,12 Q150,2 300,12",
  },
};

export default function CtaIsland({
  variant = "home",
  className = "",
}: CtaIslandProps) {
  const [isHovered, setIsHovered] = useState(false);
  const info = VARIANT_DETAILS[variant] || VARIANT_DETAILS.home;

  return (
    <div
      className={`w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* Background Soft Glow */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
          isHovered ? "opacity-100" : "opacity-60"
        }`}
      >
        <div className="w-[500px] h-[300px] rounded-full bg-brand-green/10 blur-[100px] animate-pulse [animation-duration:8s]" />
      </div>

      {/* Floating CTA Island Capsule */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative z-10 w-full max-w-4xl p-8 sm:p-12 md:p-14 rounded-3xl bg-brand-navy border transition-all duration-500 shadow-2xl overflow-hidden group ${
          isHovered
            ? "border-brand-green/50 shadow-[0_20px_60px_rgba(4,38,47,0.8),0_0_40px_rgba(48,198,130,0.18)] scale-[1.01]"
            : "border-white/10 hover:border-brand-green/30"
        }`}
      >
        {/* Subtle Atmospheric Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        {/* Traveling Signal Track inside Island */}
        <div className="relative w-full h-6 mb-6 flex items-center justify-between overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-green">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span>[ {info.tag} ]</span>
          </div>

          {/* Miniature Traveling Signal Beam */}
          <div className="hidden sm:block w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <div
              className={`absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#30C682] to-transparent transition-all ${
                isHovered
                  ? "animate-signal-travel [animation-duration:1.5s]"
                  : "animate-signal-travel [animation-duration:4s]"
              }`}
            />
          </div>
        </div>

        {/* Core Message & Action */}
        <div className="space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-neutral leading-[1.08]">
            Let&apos;s make something <br />
            <span className="text-brand-green transition-colors duration-300 group-hover:text-brand-green">
              worth noticing.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-neutral/80 max-w-2xl font-normal leading-relaxed">
            {info.subtext}
          </p>

          {/* Interactive Trigger Pill */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-green text-brand-navy font-bold text-sm tracking-wide transition-all duration-300 hover:bg-brand-green/90 shadow-[0_0_25px_rgba(48,198,130,0.3)] hover:shadow-[0_0_35px_rgba(48,198,130,0.5)] group/btn"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>

            <span className="text-xs font-mono text-brand-neutral/60 sm:pl-2">
              Chitrakoot, Jaipur • Mandrella, Jhunjhunu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
