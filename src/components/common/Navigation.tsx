"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import PanknoxLogo from "./PanknoxLogo";

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "WHAT WE DO", href: "/what-we-do" },
    { label: "INDUSTRIES", href: "/industries" },
    { label: "WORK", href: "/work" },
    { label: "ABOUT", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-brand-navy/90 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Official Panknox Brand Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-85"
            data-cursor="PANKNOX"
            aria-label="Panknox Media Home"
          >
            <PanknoxLogo variant="light" height={26} priority />
          </Link>

          {/* Minimal Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor={link.label}
                  className={`relative py-1 transition-colors ${
                    isActive
                      ? "text-brand-green font-semibold"
                      : "text-brand-neutral/80 hover:text-brand-neutral"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-green" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Single Clear Primary CTA */}
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/contact"
              data-cursor="START"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-green/60 text-brand-green hover:bg-brand-green hover:text-brand-navy transition-all duration-300 text-xs font-semibold tracking-widest uppercase"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-neutral hover:text-brand-green transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Minimal Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-brand-navy transition-all duration-500 flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl font-black uppercase text-brand-neutral hover:text-brand-green transition-colors tracking-tight"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-6 pt-8 border-t border-white/10">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brand-green text-brand-navy font-bold text-sm tracking-widest uppercase"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <p className="text-xs font-mono text-brand-gray text-center">
            PANKNOX MEDIA PVT. LTD. • JAIPUR, INDIA
          </p>
        </div>
      </div>
    </>
  );
}
