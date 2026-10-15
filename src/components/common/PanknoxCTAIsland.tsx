"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Diya from "@/components/festive/Diya";

interface PanknoxCTAIslandProps {
  variant?: "home" | "what-we-do" | "industries" | "work" | "about" | "contact";
  className?: string;
}

const VARIANT_DETAILS: Record<
  string,
  {
    tag: string;
    subtext: string;
  }
> = {
  home: {
    tag: "Panknox Signal // Final dispatch",
    subtext: "Strategy, creative, and performance marketing, aligned around your business.",
  },
  "what-we-do": {
    tag: "Panknox Signal // Capability integration",
    subtext: "Connect your positioning, visual direction, and distribution into one operating system.",
  },
  industries: {
    tag: "Panknox Signal // Sector alignment",
    subtext: "Deploy a marketing architecture calibrated to your sector's real buyer friction.",
  },
  work: {
    tag: "Panknox Signal // Verified outcomes",
    subtext: "Move from unvetted commodity pricing to undisputed market authority.",
  },
  about: {
    tag: "Panknox Signal // Studio trajectory",
    subtext: "Collaborate directly with senior practitioners. Zero account-manager noise.",
  },
  contact: {
    tag: "Panknox Signal // Direct channel",
    subtext: "Tell us where your business is today. We will tell you what we see.",
  },
};

export default function PanknoxCTAIsland({
  variant = "home",
  className = "",
}: PanknoxCTAIslandProps) {
  const [isHovered, setIsHovered] = useState(false);
  const info = VARIANT_DETAILS[variant] || VARIANT_DETAILS.home;

  return (
    <section
      aria-label="Call to action"
      className={`w-full  text-brand-navy py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* Background Soft Emerald + Warm Amber Aura on White */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
          isHovered ? "opacity-100" : "opacity-60"
        }`}
      >
        <div className="w-[600px] h-[320px] rounded-full bg-brand-green/8 blur-[110px]" />
        <div className="absolute w-[440px] h-[220px] rounded-full bg-amber-500/8 blur-[100px]" />
      </div>

      {/* Floating Dynamic-Island-Style CTA Capsule */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative z-10 w-full max-w-4xl p-8 sm:p-12 md:p-14 rounded-[32px] sm:rounded-[36px] bg-gradient-to-b from-[#FFFFFF] to-[#F8FAF9] border transition-all duration-500 overflow-hidden group ${
          isHovered
            ? "border-amber-400/40 shadow-[0_28px_80px_rgba(4,38,47,0.10),0_0_35px_rgba(245,158,11,0.14),0_0_20px_rgba(48,198,130,0.15)] scale-[1.008]"
            : "border-brand-navy/10 hover:border-amber-400/35 shadow-[0_16px_50px_rgba(4,38,47,0.06),0_1px_3px_rgba(4,38,47,0.04)]"
        }`}
      >
        {/* Subtle Top Signal Bar: Connects Visually With Top Dynamic Island */}
        <div className="relative w-full h-6 mb-6 flex items-center justify-between overflow-hidden">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-green font-semibold">
            <span
              className={`w-2 h-2 rounded-full bg-brand-green transition-transform duration-300 ${
                isHovered ? "scale-125 shadow-[0_0_8px_#30C682]" : "animate-pulse"
              }`}
            />
            <span className="text-brand-navy/80 font-mono tracking-wide">[ {info.tag} ]</span>
          </div>

          {/* Miniature Traveling Signal Track with Gold Touch */}
          <div className="hidden sm:block w-48 h-[1px] bg-brand-navy/10 relative overflow-hidden rounded-full">
            <div
              className={`absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-[#30C682] via-[#FBBF24] to-transparent transition-all ${
                isHovered
                  ? "animate-signal-travel [animation-duration:1.8s]"
                  : "animate-signal-travel [animation-duration:4.5s]"
              }`}
            />
          </div>
        </div>

        {/* Core Message & Action */}
        <div className="space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-navy leading-[1.08]">
            Let&apos;s make something <br />
            <span className="text-brand-green transition-colors duration-300">
              worth noticing.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-gray max-w-2xl font-normal leading-relaxed">
            {info.subtext}
          </p>

          {/* Interactive Trigger Row */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-green text-brand-navy font-bold text-sm tracking-wide transition-all duration-300 hover:bg-brand-green/90 shadow-[0_4px_20px_rgba(48,198,130,0.35)] hover:shadow-[0_6px_25px_rgba(48,198,130,0.5)] group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono text-brand-gray/80">
              <Diya size="sm" withAura={true} className="scale-75 -my-1" />
              <span>Chitrakoot, Jaipur • Mandrella, Jhunjhunu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
