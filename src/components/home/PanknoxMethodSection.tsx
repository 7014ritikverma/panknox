"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CLIENT_STEPS = [
  {
    num: "01",
    title: "UNDERSTAND",
    time: "DAYS 1 – 7",
    desc: "Diagnostic immersion into margins, capacity, and commercial constraints with leadership.",
  },
  {
    num: "02",
    title: "PLAN",
    time: "DAYS 8 – 14",
    desc: "Defining what not to do. Crafting the narrative wedge, channel strategy, and asset requirements.",
  },
  {
    num: "03",
    title: "CREATE",
    time: "DAYS 15 – 28",
    desc: "On-site 4K plant & facility cinematography, typography, motion design, and conversion copy.",
  },
  {
    num: "04",
    title: "LAUNCH",
    time: "DAYS 29 – 45",
    desc: "Deploying multi-channel campaigns, high-intent search capture, and CRM lead qualification funnels.",
  },
  {
    num: "05",
    title: "LEARN",
    time: "BI-WEEKLY",
    desc: "Reviewing qualified sales inquiries and conversion behavior rather than vanity metrics.",
  },
  {
    num: "06",
    title: "IMPROVE",
    time: "RECURSIVE",
    desc: "14-day iterative sprints. Winning formats scale; fatigued assets are refined.",
  },
];

export default function PanknoxMethodSection() {
  return (
    <section
      id="how-we-work-section"
      className="py-36 sm:py-48 bg-brand-neutral-surface text-brand-navy border-t border-brand-neutral-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-brand-navy/10 pb-8">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-gray uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>06 // PRACTICAL CLIENT EXPERIENCE</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-navy leading-[0.92]">
              HOW WE WORK.
            </h2>

            <p className="text-xl sm:text-2xl text-brand-gray font-normal max-w-2xl leading-relaxed">
              A clean 6-stage operational rhythm. No prolonged agency siloing.
            </p>
          </div>

          <Link
            href="/how-we-work"
            data-cursor="METHOD"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-navy hover:text-brand-green uppercase tracking-wider self-start lg:self-end border-b-2 border-brand-navy hover:border-brand-green pb-1 transition-colors"
          >
            <span>VIEW COMPLETE TIMELINE IN /HOW-WE-WORK</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Simple Clean Timeline Stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLIENT_STEPS.map((st) => (
            <div
              key={st.num}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-neutral-border space-y-4 shadow-sm hover:border-brand-navy transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-black font-mono text-brand-green">
                  {st.num}
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-neutral-surface text-brand-gray font-semibold">
                  {st.time}
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-brand-navy">
                {st.title}
              </h3>

              <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
