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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "What we do", href: "/what-we-do" },
    { label: "Industries", href: "/industries" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      {/* Floating Dynamic Island Container */}
      <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 transition-all duration-500">
        <div
          className={`pointer-events-auto inline-flex items-center justify-between rounded-full bg-[#04262F]/90 backdrop-blur-md border border-white/12 shadow-[0_12px_36px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:border-white/20 hover:shadow-[0_16px_44px_rgba(0,0,0,0.45)] ${
            isScrolled
              ? "py-2 px-4 sm:px-5 gap-4 sm:gap-6 max-w-[860px]"
              : "py-2.5 sm:py-3 px-5 sm:px-6 gap-6 sm:gap-8 max-w-[920px]"
          }`}
        >
          {/* Official Panknox Brand Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-85 pr-1 sm:pr-2"
            aria-label="Panknox Media Home"
          >
            <PanknoxLogo
              variant="light"
              height={isScrolled ? 22 : 24}
              priority
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[14px] font-medium text-brand-neutral/80">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-brand-green font-semibold"
                      : "hover:text-brand-neutral"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-brand-green rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center pl-1">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-1.5 rounded-full border border-brand-green/70 text-brand-green hover:bg-brand-green hover:text-brand-navy transition-all duration-200 font-medium text-xs sm:text-[13px] ${
                isScrolled ? "px-3.5 py-1.5" : "px-4 py-1.5"
              }`}
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center pl-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-brand-neutral hover:text-brand-green transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dynamic Island Expansion Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-[#04262F]/98 backdrop-blur-xl transition-all duration-400 flex flex-col justify-between p-8 pt-24 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="space-y-8 mt-6">
          <p className="text-xs font-mono text-brand-green tracking-wide">
            Navigation
          </p>
          <nav className="space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-semibold text-brand-neutral hover:text-brand-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-6 pt-6 border-t border-white/10">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-brand-green text-brand-navy font-semibold text-sm transition-opacity hover:opacity-95"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <div className="space-y-1 text-xs font-mono text-brand-gray text-center">
            <p>Panknox Media Pvt. Ltd.</p>
            <p className="text-[11px] text-brand-gray/80">
              Chitrakoot, Vaishali Nagar, Jaipur • Mandrella, Jhunjhunu
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

