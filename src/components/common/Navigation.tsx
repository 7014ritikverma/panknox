"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Radio, Layers, Building2, Briefcase, Info } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "WORK", href: "/work", icon: Briefcase },
    { label: "SYSTEM", href: "/what-we-do", icon: Layers },
    { label: "INDUSTRIES", href: "/industries", icon: Building2 },
    { label: "METHOD", href: "/how-we-work", icon: Radio },
    { label: "ABOUT", href: "/about", icon: Info },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-navy/95 backdrop-blur-md border-b border-brand-neutral/10 py-3.5 shadow-xl"
            : "bg-transparent py-5 border-b border-brand-neutral/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & System Coordinates */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="group flex items-center gap-3 text-brand-neutral tracking-wider text-xl font-bold uppercase transition-colors"
                data-cursor="PANKNOX"
              >
                {/* Visual Signal Pulse Indicator */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green" />
                </span>
                <span className="font-extrabold tracking-tight">PANKNOX</span>
              </Link>

              {/* Technical System Label */}
              <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-brand-neutral/15 text-[11px] font-mono tracking-widest text-brand-gray uppercase">
                <span className="text-brand-green">JAIPUR</span>
                <span>/</span>
                <span>26.91°N 75.78°E</span>
                <span className="text-brand-neutral/30">•</span>
                <span className="text-brand-neutral/70">OS: READY</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-cursor={link.label}
                    className={`relative py-1 transition-all group ${
                      isActive ? "text-brand-green font-semibold" : "text-brand-neutral/80 hover:text-brand-neutral"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-green transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                data-cursor="START"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded border border-brand-green bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-brand-navy transition-all duration-200"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-brand-neutral hover:text-brand-green transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-navy/90 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-brand-navy border-l border-brand-neutral/15 p-6 pt-24 flex flex-col justify-between transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-brand-neutral/10">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gray">
                PANKNOX // SYSTEM DIRECTORY
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-brand-green">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                ONLINE
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded text-base font-medium tracking-wide transition-colors ${
                      isActive
                        ? "bg-brand-green/10 text-brand-green border border-brand-green/30"
                        : "text-brand-neutral hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-brand-gray" />
                      <span>{link.label}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-brand-neutral/10">
            <div className="text-xs font-mono text-brand-gray space-y-1">
              <p>JAIPUR, RAJASTHAN, INDIA</p>
              <p className="text-brand-neutral/60">Creative & Performance Marketing Partner</p>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-brand-green text-brand-navy font-bold text-sm tracking-wider uppercase transition-colors hover:bg-brand-green/90"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
