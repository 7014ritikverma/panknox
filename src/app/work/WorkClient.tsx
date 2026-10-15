"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { projectsData } from "@/data/projects";
import PanknoxCTAIsland from "@/components/common/PanknoxCTAIsland";

const FILTER_CATEGORIES = [
  "All",
  "Manufacturing",
  "Interiors",
  "Energy",
  "Hospitality",
  "Technology",
];

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "All") return true;
    return p.industry.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-white text-brand-navy relative overflow-hidden">
      {/* 1. White Editorial Header */}
      <section className="pt-32 pb-14 sm:pt-40 sm:pb-16 max-w-6xl mx-auto px-6 sm:px-8 space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-navy text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_6px_#30C682]" />
          <span>Case studies // Verified client outcomes</span>
          <span className="text-amber-500/60">•</span>
          <span className="text-amber-700/80 font-medium">Deepawali</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-navy leading-[1.08]">
          Our work.
        </h1>

        <p className="text-lg sm:text-xl text-brand-gray font-normal leading-relaxed max-w-2xl pt-1">
          A selection of partnerships, campaigns and creative systems we&apos;ve built across industries.
        </p>

        {/* Category Filter Pills on White */}
        <div className="pt-4 flex flex-wrap gap-2.5 sm:gap-3 border-b border-brand-navy/10 pb-6">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${
                activeFilter === cat
                  ? "bg-brand-navy text-white shadow-sm scale-[1.02]"
                  : "bg-[#F8FAF9] text-brand-gray hover:text-brand-navy hover:bg-[#DFE5E2]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Large Editorial Projects Stream (Visuals Dominate) */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-20 space-y-16 sm:space-y-24">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className="group space-y-6 border-b border-brand-navy/10 pb-16 sm:pb-20"
          >
            {/* Dominant Visual Canvas */}
            <Link
              href={`/work/${project.slug}`}
              className="block relative w-full h-[320px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden bg-brand-navy border border-brand-navy/10 group-hover:border-brand-green/50 transition-all duration-500 shadow-xl group-hover:shadow-2xl"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.01] flex flex-col justify-between p-7 sm:p-12 text-white"
                style={{
                  background:
                    idx % 2 === 0
                      ? "linear-gradient(135deg, #021a20 0%, #04262F 50%, #084352 100%)"
                      : "linear-gradient(135deg, #06313d 0%, #04262F 60%, #02171c 100%)",
                }}
              >
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-white/70">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-green font-bold">0{idx + 1}</span>
                    <span>•</span>
                    <span className="text-white/90">{project.industry}</span>
                  </div>
                  {project.nda ? (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/40 border border-white/10 text-[11px] text-amber-300">
                      <Lock className="w-3 h-3" />
                      <span>NDA protected</span>
                    </div>
                  ) : (
                    <span className="text-white/70">{project.partnership}</span>
                  )}
                </div>

                {/* Card Title & Client */}
                <div className="space-y-2.5 max-w-3xl">
                  <span className="text-xs font-mono text-brand-green font-semibold block">
                    {project.client}
                  </span>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.08] group-hover:text-brand-green/90 transition-colors">
                    {project.title}
                  </h2>
                </div>

                {/* Card Bottom Strip */}
                <div className="flex items-center justify-between text-xs font-mono text-white/70 border-t border-white/10 pt-4">
                  <span>{project.clientDescriptor}</span>
                  <span className="inline-flex items-center gap-1.5 text-brand-green font-semibold group-hover:translate-x-1 transition-transform">
                    <span>View case study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Editorial Context & Outcome on White Page */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
              <div className="md:col-span-8 space-y-2">
                <span className="text-xs font-mono text-brand-green font-semibold block">
                  The strategic challenge &amp; approach:
                </span>
                <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
                  {project.summary}
                </p>
              </div>

              <div className="md:col-span-4 space-y-2 md:border-l md:border-brand-navy/10 md:pl-6">
                <span className="text-xs font-mono text-brand-navy font-semibold block">
                  Operational outcome:
                </span>
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed font-normal">
                  {project.outcome}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* 3. White Dynamic Island CTA (Exactly One) */}
      <PanknoxCTAIsland variant="work" />
    </div>
  );
}
