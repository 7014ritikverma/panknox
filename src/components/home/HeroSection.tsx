"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden">
      <AtmosphericBackground className="min-h-[92vh] flex flex-col justify-between pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto space-y-12 relative z-10">
          {/* Subtle Precision Technical Marker */}
          <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-green/80 uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span>PANKNOX // CREATIVE &amp; PERFORMANCE</span>
            <span className="text-white/20">•</span>
            <span className="text-brand-gray hidden sm:inline">JAIPUR, INDIA</span>
          </div>

          {/* Huge Monolithic Typography */}
          <div className="space-y-8 max-w-5xl">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-neutral leading-[0.92]">
              MAKE YOUR BUSINESS <br />
              <span className="text-brand-green">IMPOSSIBLE</span> <br />
              TO IGNORE.
            </h1>

            <p className="text-xl sm:text-2xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed">
              Creative, content &amp; marketing built around how your business actually grows.
            </p>

            {/* Singular Primary CTA */}
            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/contact"
                data-cursor="START"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-brand-green text-brand-navy font-bold text-xs tracking-widest uppercase hover:bg-brand-green/90 transition-all duration-300 shadow-[0_0_35px_rgba(48,198,130,0.35)] hover:scale-[1.02]"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <span className="text-xs font-mono text-brand-gray tracking-wider hidden md:inline">
                JAIPUR STUDIO • GLOBAL REACH
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Signal Transition Beam to Next Section */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 flex items-center justify-between text-xs font-mono text-brand-gray border-t border-white/5 relative z-10">
          <div className="flex items-center gap-3">
            <span className="text-brand-green">01</span>
            <span>SYSTEM INITIALIZED</span>
          </div>

          <div className="flex items-center gap-2 text-brand-neutral/60">
            <span>SCROLL TO ENTER THE GAP</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-bounce" />
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}
