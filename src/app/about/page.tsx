import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Terminal, Users, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";
import { brandData } from "@/data/brand";
import { teamData } from "@/data/team";
import { faqsData } from "@/data/faqs";

export const metadata: Metadata = {
  title: "About Panknox | Creative & Performance Marketing Partner",
  description:
    "Panknox Media Pvt. Ltd. is a Creative & Performance Marketing Partner based in Jaipur, Rajasthan, India. Built by people, powered by systems.",
};

import AtmosphericBackground from "@/components/common/AtmosphericBackground";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-brand-neutral relative overflow-hidden">
      <AtmosphericBackground className="pt-36 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
        {/* Page Hero */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>ABOUT PANKNOX // JAIPUR STUDIO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-none">
            NOT AN AGENCY. <br />
            <span className="text-brand-green">A MARKETING SYSTEM.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-3xl">
            Panknox Media Pvt. Ltd. was founded in Jaipur with a singular conviction:
            ambitious businesses do not need more superficial social media noise.
            They need an intelligent creative operating system that connects commercial reality to market perception.
          </p>
        </div>

        {/* Studio Origin & Location Coordinates */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy border border-brand-neutral/20 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase">
              <MapPin className="w-4 h-4" />
              <span>HEADQUARTERS &amp; PRODUCTION BASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-brand-neutral">
              ROOTED IN JAIPUR. BUILT FOR SCALE.
            </h2>
            <p className="text-base text-brand-neutral/80 leading-relaxed">
              Based in the cultural and industrial heart of Rajasthan, Panknox combines
              deep ground-level commercial understanding with world-class aesthetic execution.
              From multi-acre manufacturing facilities in industrial corridors to boutique heritage estates
              and pioneering surgical centers, our creative teams deploy directly where commercial value is forged.
            </p>
          </div>

          <div className="lg:col-span-5 bg-black/40 p-6 rounded-xl border border-brand-neutral/15 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-3">
              <span className="text-brand-gray uppercase">STUDIO SPECIFICATION</span>
              <span className="text-brand-green">STATUS: DEPLOYED</span>
            </div>
            <div className="space-y-2 text-brand-neutral/90">
              <p>ENTITY: {brandData.legalName}</p>
              <p>LOCATION: {brandData.location.city}, {brandData.location.state}, {brandData.location.country}</p>
              <p className="text-brand-green">COORDINATES: {brandData.location.coordinates}</p>
              <p>POSITIONING: {brandData.positioning}</p>
            </div>
          </div>
        </div>

        {/* The 9-Stage Philosophy Pipeline */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy border border-brand-neutral/15 space-y-8 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green">
              THE VALUE TRANSFORMATION PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-brand-neutral">
              HOW WE THINK ABOUT BUSINESS VALUE
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2">
            {brandData.philosophySteps.map((step, idx) => (
              <div
                key={step}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-brand-neutral/10 text-center space-y-1"
              >
                <span className="text-[10px] font-mono text-brand-green block">0{idx + 1}</span>
                <span className="text-xs font-extrabold uppercase block text-brand-neutral">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-brand-neutral/70 italic text-center max-w-2xl mx-auto pt-2">
            &ldquo;We don&apos;t simply make posts. We build a creative and marketing system around a business.&rdquo;
          </p>
        </div>

        {/* The Operating Unit */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green">
              ORGANIZATIONAL STRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-brand-neutral">
              BUILT BY PEOPLE. POWERED BY SYSTEMS.
            </h2>
            <p className="text-base text-brand-neutral/80 max-w-3xl">
              {teamData.philosophy}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamData.disciplines.map((unit) => (
              <div
                key={unit.code}
                className="p-6 rounded-xl bg-brand-navy/90 border border-brand-neutral/15 hover:border-brand-green/40 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-green font-bold">{unit.code}</span>
                  <span className="text-brand-neutral/40 uppercase">{unit.systemRole}</span>
                </div>
                <h3 className="text-xl font-bold uppercase text-brand-neutral">{unit.name}</h3>
                <p className="text-xs text-brand-green font-mono">{unit.role}</p>
                <p className="text-xs text-brand-neutral/75 leading-relaxed">{unit.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive FAQs Section */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy border border-brand-neutral/20 space-y-10 shadow-2xl">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-brand-neutral">
              WHAT FOUNDERS &amp; DIRECTORS ASK US
            </h2>
            <p className="text-sm text-brand-neutral/70">
              Clear answers regarding how we work, who we work with, and our operational standards.
            </p>
          </div>

          <div className="divide-y divide-brand-neutral/10 space-y-6 pt-2">
            {faqsData.map((faq) => (
              <div key={faq.id} className="pt-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-green">
                  <span>CATEGORY // {faq.category}</span>
                </div>
                <h3 className="text-xl font-bold uppercase text-brand-neutral">
                  {faq.question}
                </h3>
                <p className="text-sm text-brand-neutral/80 leading-relaxed max-w-4xl">
                  {faq.answer}
                </p>
                <div className="pt-1 text-xs font-mono text-brand-gray flex items-center gap-1.5">
                  <span className="text-brand-green font-bold">CORE TAKEAWAY:</span>
                  <span>{faq.keyTakeaway}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-green/10 border border-brand-green/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
              OPEN DIALOGUE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
              READY TO DISCUSS YOUR MARKET POSITION?
            </h3>
            <p className="text-sm text-brand-neutral/80">
              Our Jaipur studio works with a capped roster of partners to preserve intense craft and focus.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded bg-brand-green text-brand-navy font-bold text-sm tracking-wider uppercase hover:bg-brand-green/90 transition-all shrink-0"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </AtmosphericBackground>
  </div>
);
}
