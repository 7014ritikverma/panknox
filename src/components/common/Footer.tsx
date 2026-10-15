"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PanknoxLogo from "./PanknoxLogo";
import AtmosphericBackground from "./AtmosphericBackground";
import SocialIconLinks from "./SocialIconLinks";
import Diya from "@/components/festive/Diya";
import FestiveAmbient from "@/components/festive/FestiveAmbient";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative text-brand-neutral overflow-hidden border-t border-white/8">
      <AtmosphericBackground className="pt-14 pb-12 sm:pt-16 sm:pb-14">
        {/* Subtle Background Golden Embers */}
        <FestiveAmbient particlesCount={6} showBokeh={false} intensity="subtle" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 relative z-10">
          {/* 1. Subtle Boundary Signal Line with Dual Emerald-Gold Shimmer */}
          <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
            <div
              className="absolute top-0 h-[2px] w-64 bg-gradient-to-r from-transparent via-[#30C682] via-[#FBBF24] to-transparent animate-signal-travel opacity-85 shadow-[0_0_14px_rgba(245,158,11,0.5)]"
              style={{ animationDuration: "8s" }}
            />
          </div>

          {/* 2. Core Brand & Directional Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Logo & Company Vision Statement */}
            <div className="lg:col-span-5 space-y-5">
              <Link href="/" className="inline-block transition-opacity hover:opacity-85">
                <PanknoxLogo variant="light" height={30} priority />
              </Link>
              <p className="text-sm sm:text-[15px] text-brand-neutral/80 max-w-md leading-relaxed font-normal">
                Panknox brings strategy, creative, content, technology and marketing together to help businesses become easier to notice, understand and choose.
              </p>

              {/* Social Channels Row with Recognizable Icons */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono text-brand-neutral/50 block">
                  Connect:
                </span>
                <SocialIconLinks />
              </div>
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
                    href="mailto:info@panknox.com"
                    className="hover:text-brand-green transition-colors break-all"
                  >
                    info@panknox.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Official Dual Locations (Jaipur first without hierarchy) */}
            <div className="lg:col-span-3 space-y-3.5">
              <span className="text-xs font-mono text-brand-neutral/50 font-medium block">
                Official locations
              </span>
              <div className="space-y-3 text-xs sm:text-[13px] text-brand-neutral/80 font-mono leading-relaxed">
                <div>
                  <span className="text-brand-green block font-semibold">Jaipur</span>
                  <p>Chitrakoot, Vaishali Nagar</p>
                  <p className="text-brand-neutral/60">Rajasthan</p>
                </div>
                <div>
                  <span className="text-brand-green block font-semibold">Jhunjhunu</span>
                  <p>Mandrella</p>
                  <p className="text-brand-neutral/60">Rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Bottom Legal & Active Signal Status */}
          <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-neutral/50">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <p>© {currentYear} Panknox Media Pvt. Ltd. All rights reserved.</p>
              <Link href="/privacy-policy" className="hover:text-brand-green transition-colors">
                Privacy policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-brand-green transition-colors">
                Terms &amp; conditions
              </Link>
            </div>
            <div className="flex items-center gap-3 text-brand-green/80">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span>Signal // Active</span>
              <Diya size="sm" withAura={true} className="scale-75 -my-1" />
            </div>
          </div>
        </div>
      </AtmosphericBackground>
    </footer>
  );
}
