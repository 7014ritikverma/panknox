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
          <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-green/90">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span>Panknox // Creative &amp; Performance</span>
            <span className="text-white/20">•</span>
            <span className="text-brand-neutral/60 hidden sm:inline">Marketing Partner</span>
          </div>

          {/* Calibrated Editorial Hero Typography */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-brand-neutral leading-[1.05]">
              Make your business <br />
              <span className="text-brand-green">impossible</span> <br />
              to ignore.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed pt-2">
              Creative, content &amp; marketing built around how your business actually grows.
            </p>

            {/* Singular Primary CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-green text-brand-navy font-semibold text-sm hover:bg-brand-green/90 transition-all duration-300 shadow-[0_0_30px_rgba(48,198,130,0.3)] hover:scale-[1.01]"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <span className="text-xs font-mono text-brand-neutral/60 hidden md:inline">
                Strategy • Creative • Digital Systems • Growth
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Signal Transition Beam to Next Section */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 flex items-center justify-between text-xs font-mono text-brand-neutral/60 border-t border-white/8 relative z-10">
          <div className="flex items-center gap-3">
            <span className="text-brand-green font-semibold">01</span>
            <span>System initialized</span>
          </div>

          <div className="flex items-center gap-2 text-brand-neutral/60">
            <span>Scroll to enter The Gap</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-bounce" />
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}
