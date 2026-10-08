"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CLIENT_STEPS = [
  {
    num: "01",
    title: "Understand",
    time: "Days 1 – 7",
    desc: "Diagnostic immersion into margins, capacity, and commercial constraints with leadership.",
  },
  {
    num: "02",
    title: "Plan",
    time: "Days 8 – 14",
    desc: "Defining what not to do. Crafting the narrative wedge, channel strategy, and asset requirements.",
  },
  {
    num: "03",
    title: "Create",
    time: "Days 15 – 28",
    desc: "On-site plant & facility video documentation, typography, motion design, and conversion copy.",
  },
  {
    num: "04",
    title: "Launch",
    time: "Days 29 – 45",
    desc: "Deploying multi-channel campaigns, high-intent search capture, and CRM lead qualification funnels.",
  },
  {
    num: "05",
    title: "Learn",
    time: "Bi-weekly",
    desc: "Reviewing qualified sales inquiries and conversion behavior rather than vanity metrics.",
  },
  {
    num: "06",
    title: "Improve",
    time: "Recursive",
    desc: "14-day iterative sprints. Winning formats scale; fatigued assets are refined.",
  },
];

export default function PanknoxMethodSection() {
  return (
    <section
      id="how-we-work-section"
      className="py-20 sm:py-24 lg:py-28 bg-[#FFFFFF] text-[#04262F] border-t border-brand-neutral-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">
        {/* Section Header — Explicit High Contrast & Prominent Visibility */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-brand-navy/15 pb-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-gray">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>06 // Practical client experience</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-[#04262F] leading-[1.08]">
              How we work.
            </h2>

            <p className="text-lg sm:text-xl text-[#727272] font-normal max-w-2xl leading-relaxed pt-1">
              A clean 6-stage operational rhythm. No prolonged agency siloing.
            </p>
          </div>

          <Link
            href="/how-we-work"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#04262F] hover:text-brand-green border-b border-[#04262F] hover:border-brand-green pb-1 transition-colors self-start lg:self-end"
          >
            <span>View complete timeline in /how-we-work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Simple Clean Timeline Stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_STEPS.map((st) => (
            <div
              key={st.num}
              className="p-8 sm:p-10 rounded-3xl bg-[#F4F7F6] border border-brand-neutral-border space-y-4 shadow-sm hover:border-[#04262F]/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-brand-green">
                  {st.num}
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white text-[#727272] font-semibold border border-brand-neutral-border">
                  {st.time}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#04262F]">
                {st.title}
              </h3>

              <p className="text-sm sm:text-base text-[#727272] leading-relaxed font-normal">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

