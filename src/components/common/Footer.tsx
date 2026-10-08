"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PanknoxLogo from "./PanknoxLogo";
import AtmosphericBackground from "./AtmosphericBackground";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative border-t border-white/5 text-brand-neutral overflow-hidden">
      <AtmosphericBackground className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20 relative z-10">
          {/* Main Editorial Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-16 border-b border-white/10">
            <div className="lg:col-span-8 space-y-6">
              <PanknoxLogo variant="light" height={32} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-neutral leading-tight max-w-2xl">
                YOUR BUSINESS IS ALREADY DOING SOMETHING. <br />
                <span className="text-brand-green">WE MAKE SURE THE WORLD NOTICES.</span>
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:items-end space-y-4">
              <Link
                href="/contact"
                data-cursor="START"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-green text-brand-navy font-bold text-xs tracking-widest uppercase hover:bg-brand-green/90 transition-all shadow-[0_0_25px_rgba(48,198,130,0.3)]"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-xs font-mono text-brand-gray sm:text-right">
                Studio Base: Jaipur, Rajasthan, India
              </p>
            </div>
          </div>

          {/* Minimal Navigation & Legal Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-xs font-mono text-brand-gray">
            <div className="flex flex-wrap items-center gap-8 text-brand-neutral/80">
              <Link href="/what-we-do" className="hover:text-brand-green transition-colors">
                WHAT WE DO
              </Link>
              <Link href="/industries" className="hover:text-brand-green transition-colors">
                INDUSTRIES
              </Link>
              <Link href="/work" className="hover:text-brand-green transition-colors">
                WORK
              </Link>
              <Link href="/about" className="hover:text-brand-green transition-colors">
                ABOUT
              </Link>
              <Link href="/contact" className="hover:text-brand-green transition-colors">
                CONTACT
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <span>© {currentYear} PANKNOX MEDIA PVT. LTD.</span>
              {/* The final fading signal */}
              <span className="flex items-center gap-2 text-brand-green">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green opacity-70 animate-pulse" />
                <span>SIGNAL // RESTING</span>
              </span>
            </div>
          </div>
        </div>
      </AtmosphericBackground>
    </footer>
  );
}
