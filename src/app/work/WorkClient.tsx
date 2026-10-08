"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";
import { projectsData } from "@/data/projects";
import CtaIsland from "@/components/common/CtaIsland";

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
    <div className="relative min-h-screen text-brand-neutral overflow-hidden">
      <AtmosphericBackground className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 space-y-16 sm:space-y-20">
          {/* 1. Hero: Editorial Specification */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 text-xs font-mono text-brand-green">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Verified client systems · Portfolio archive</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-neutral leading-[1.08]">
              Our work.
            </h1>

            <p className="text-lg sm:text-xl text-brand-neutral/80 font-normal leading-relaxed pt-1">
              A selection of partnerships, campaigns and creative systems we&apos;ve built across industries.
            </p>
          </div>

          {/* 2. Secondary Minimal Category Filter */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 border-b border-white/10 pb-5">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-brand-green text-brand-navy shadow-sm scale-[1.02]"
                    : "bg-white/5 text-brand-neutral/70 hover:text-brand-neutral hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3. Large Editorial Projects Stream (Visuals Dominate) */}
          <div className="space-y-20 sm:space-y-28">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="group space-y-6 border-b border-white/10 pb-16 sm:pb-24"
              >
                {/* Large Hero Visual Canvas */}
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative w-full h-[320px] sm:h-[460px] lg:h-[540px] rounded-3xl overflow-hidden bg-brand-navy/95 border border-white/12 group-hover:border-brand-green/40 transition-all duration-500 shadow-2xl"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.01] flex flex-col justify-between p-7 sm:p-12"
                    style={{
                      background:
                        idx % 2 === 0
                          ? "linear-gradient(135deg, #021a20 0%, #04262F 45%, #084352 100%)"
                          : "linear-gradient(135deg, #06313d 0%, #04262F 55%, #02171c 100%)",
                    }}
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-brand-neutral/60">
                      <div className="flex items-center gap-2">
                        <span className="text-brand-green font-bold">0{idx + 1}</span>
                        <span>•</span>
                        <span className="text-brand-neutral/80">{project.industry}</span>
                      </div>
                      {project.nda ? (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/40 border border-white/10 text-[11px] text-amber-300">
                          <Lock className="w-3 h-3" />
                          <span>NDA protected</span>
                        </div>
                      ) : (
                        <span className="text-brand-neutral/60">{project.partnership}</span>
                      )}
                    </div>

                    <div className="space-y-2.5 max-w-3xl">
                      <span className="text-xs font-mono text-brand-green font-semibold block">
                        {project.client}
                      </span>
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-brand-neutral tracking-tight leading-[1.08]">
                        {project.title}
                      </h2>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-brand-neutral/60 border-t border-white/10 pt-4">
                      <span>{project.clientDescriptor}</span>
                      <span className="inline-flex items-center gap-1.5 text-brand-green font-semibold group-hover:translate-x-1 transition-transform">
                        <span>View case study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Editorial Information Block */}
                <div className="space-y-3.5 max-w-3xl">
                  <div className="flex items-center gap-3 text-xs font-mono text-brand-green font-semibold">
                    <span>{project.client}</span>
                    <span className="text-white/20">•</span>
                    <span className="text-brand-neutral/60">{project.industry}</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-brand-neutral group-hover:text-brand-green transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="text-sm sm:text-base text-brand-neutral/80 font-normal leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-green hover:underline"
                    >
                      <span>View case study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Signature End-of-Page CTA Island */}
          <CtaIsland variant="work" className="pt-8" />
        </div>
      </AtmosphericBackground>
    </div>
  );
}
