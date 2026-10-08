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
    <footer className="relative text-brand-neutral overflow-hidden border-t border-white/8">
      <AtmosphericBackground className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20 relative z-10">
          {/* 1. Large Memorable Statement — The Final Visual Chapter */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 text-xs font-mono text-brand-green">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Chapter 10 // The conclusion</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-brand-neutral leading-[1.08]">
              Let&apos;s make something <br />
              <span className="text-brand-green">worth noticing.</span>
            </h2>
          </div>

          {/* 2. Signature Visual Element: The Travelling Signal Line Disappearing Into the Atmosphere */}
          <div className="relative w-full h-[1px] bg-white/10 overflow-hidden my-8">
            <div
              className="absolute top-0 h-[2px] w-64 bg-gradient-to-r from-transparent via-[#30C682] to-transparent animate-signal-travel opacity-90 shadow-[0_0_15px_#30C682]"
              style={{ animationDuration: "6s" }}
            />
          </div>

          {/* 3. Core Brand & Directional Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-4">
            {/* Logo & Brand Identity */}
            <div className="lg:col-span-5 space-y-6">
              <Link href="/" className="inline-block transition-opacity hover:opacity-85">
                <PanknoxLogo variant="light" height={30} priority />
              </Link>
              <p className="text-sm sm:text-base text-brand-neutral/70 max-w-sm leading-relaxed">
                Creative &amp; Performance Marketing Partner. Building the systems and perception that turn business reality into growth.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2 space-y-3.5">
              <span className="text-xs font-mono text-brand-neutral/50 font-medium block">
                Navigation
              </span>
              <ul className="space-y-2.5 text-sm font-medium text-brand-neutral/80">
                <li>
                  <Link href="/what-we-do" className="hover:text-brand-green transition-colors">
                    What we do
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-brand-green transition-colors">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-brand-green transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-brand-green transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="lg:col-span-2 space-y-3.5">
              <span className="text-xs font-mono text-brand-neutral/50 font-medium block">
                Contact
              </span>
              <ul className="space-y-2.5 text-sm font-medium text-brand-neutral/80">
                <li>
                  <Link href="/contact" className="hover:text-brand-green transition-colors">
                    Start a conversation
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:contact@panknox.com"
                    className="hover:text-brand-green transition-colors"
                  >
                    contact@panknox.com
                  </a>
                </li>
              </ul>
              <div className="pt-2">
                <span className="text-xs font-mono text-brand-neutral/50 font-medium block mb-2">
                  Social
                </span>
                <div className="flex items-center gap-4 text-xs font-mono text-brand-neutral/70">
                  <a
                    href="https://linkedin.com/company/panknox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-green transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com/panknox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-green transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Official Dual Locations */}
            <div className="lg:col-span-3 space-y-3.5">
              <span className="text-xs font-mono text-brand-neutral/50 font-medium block">
                Locations
              </span>
              <div className="space-y-3 text-xs sm:text-[13px] text-brand-neutral/80 font-mono leading-relaxed">
                <div>
                  <span className="text-brand-green block font-semibold">Main Office</span>
                  <p>Mandrella, Jhunjhunu, Rajasthan</p>
                </div>
                <div>
                  <span className="text-brand-green block font-semibold">Second Location</span>
                  <p>Chitrakoot, Vaishali Nagar, Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Bottom Legal & Fading Signal */}
          <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-neutral/50">
            <p>© {currentYear} Panknox Media Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-2 text-brand-green/80">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span>Signal // Dissolving into the atmosphere</span>
            </div>
          </div>
        </div>
      </AtmosphericBackground>
    </footer>
  );
}

