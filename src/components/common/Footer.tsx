"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Globe, ShieldCheck } from "lucide-react";
import { brandData } from "@/data/brand";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    const updateTime = () => {
      // Format time in Indian Standard Time (Asia/Kolkata)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const istTime = new Intl.DateTimeFormat("en-GB", options).format(new Date());
      setCurrentTime(`${istTime} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-brand-navy border-t border-brand-neutral/15 pt-20 pb-12 relative overflow-hidden text-brand-neutral">
      {/* Subtle Background Grid Line */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Hero Statement in Footer */}
        <div className="pb-16 border-b border-brand-neutral/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span>THE OPERATING SYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-neutral uppercase leading-tight">
              WE WORK IN THE GAP BETWEEN WHAT YOUR BUSINESS IS AND HOW YOUR MARKET PERCEIVES IT.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:items-end justify-end space-y-4">
            <Link
              href="/contact"
              data-cursor="START"
              className="inline-flex items-center gap-3 px-6 py-4 rounded bg-brand-green text-brand-navy font-bold text-sm tracking-wider uppercase hover:bg-brand-green/90 transition-all shadow-[0_0_20px_rgba(48,198,130,0.3)]"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-xs font-mono text-brand-gray sm:text-right">
              Direct consultation with our creative operating unit.
            </p>
          </div>
        </div>

        {/* Directory Columns */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 border-b border-brand-neutral/10 text-sm">
          {/* Column 1: Core Navigation */}
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-gray">01 // EXPLORE</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/work" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  Work Archive
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  Capabilities & Systems
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  The Panknox Method
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  About Panknox
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  Conversational Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: The 4 Systems */}
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-gray">02 // SYSTEMS</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/what-we-do#strategy" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  01 / Strategy
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#creative-content" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  02 / Creative & Content
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#digital-presence" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  03 / Digital Presence
                </Link>
              </li>
              <li>
                <Link href="/what-we-do#growth" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  04 / Growth & Paid Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Focus Industries */}
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-gray">03 // INDUSTRIES</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/industries/manufacturing" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  Manufacturing & OEM
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  Healthcare & Medical
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  Real Estate & Living
                </Link>
              </li>
              <li>
                <Link href="/industries/interiors-furniture" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  Interiors & Furniture
                </Link>
              </li>
              <li>
                <Link href="/industries/hospitality" className="text-brand-neutral/80 hover:text-brand-green transition-colors">
                  Hospitality & Luxury
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Coordinates */}
          <div className="space-y-4 col-span-2 md:col-span-1 lg:col-span-2">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-gray">04 // LOCATION & DISPATCH</p>
            <div className="space-y-2 text-sm text-brand-neutral/80">
              <p className="font-semibold text-brand-neutral">{brandData.legalName}</p>
              <p>{brandData.location.address}</p>
              <p className="font-mono text-xs text-brand-green">{brandData.location.coordinates}</p>
              <p className="pt-2">
                <a
                  href={`mailto:${brandData.contact.email}`}
                  className="font-mono text-brand-green hover:underline"
                >
                  {brandData.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Technical Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono text-brand-gray">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-brand-neutral font-semibold tracking-wider">
              © {currentYear} PANKNOX MEDIA PVT. LTD.
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-brand-green" />
              <span>JAIPUR STUDIO</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-green" />
              <span>CLOCK: {currentTime || "SYNCING..."}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-brand-green">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SYSTEM OPERATIONAL</span>
            </span>
            <span className="text-brand-neutral/50">BUILT BY PEOPLE. POWERED BY SYSTEMS.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
