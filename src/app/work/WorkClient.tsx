"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";
import { projectsData } from "@/data/projects";

const FILTER_CATEGORIES = [
  "All",
  "Manufacturing",
  "Healthcare",
  "Real estate",
  "Interiors & furniture",
  "Hospitality",
];

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "All") return true;
    return p.industry.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <div className="relative min-h-screen text-brand-neutral overflow-hidden">
      <AtmosphericBackground className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 space-y-20">
          {/* 1. Hero: Our work. + Short supporting sentence */}
          <div className="space-y-5 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-green/90">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Panknox // Archive</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-neutral leading-[1.08]">
              Our work.
            </h1>

            <p className="text-lg sm:text-xl text-brand-neutral/80 font-normal leading-relaxed pt-1">
              Real businesses. Realigned perception. Systems built to endure.
            </p>
          </div>

          {/* 2. Secondary Minimal Category Filter */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 border-b border-white/10 pb-6">
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

          {/* 3. Large Editorial Projects Stream (One Dominating Each Viewport) */}
          <div className="space-y-28 sm:space-y-40">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="group space-y-8 border-b border-white/10 pb-20 sm:pb-28"
              >
                {/* Large Hero Visual */}
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative w-full h-[360px] sm:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden bg-brand-navy/90 border border-white/12 group-hover:border-brand-green/40 transition-all duration-500 shadow-2xl"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-102 flex flex-col justify-between p-8 sm:p-14"
                    style={{
                      background:
                        idx % 2 === 0
                          ? "linear-gradient(135deg, #021a20 0%, #04262F 45%, #084352 100%)"
                          : "linear-gradient(135deg, #06313d 0%, #04262F 55%, #02171c 100%)",
                    }}
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-brand-neutral/60">
                      <span className="text-brand-green font-semibold">0{idx + 1}</span>
                      <span>{project.industry}</span>
                    </div>

                    <div className="space-y-3 max-w-2xl">
                      <span className="text-xs font-mono text-brand-green font-semibold">
                        {project.clientDescriptor}
                      </span>
                      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-brand-neutral tracking-tight leading-[1.05]">
                        {project.title}
                      </h2>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-brand-neutral/60 border-t border-white/10 pt-4">
                      <span>Panknox Archive // {project.year}</span>
                      <span className="inline-flex items-center gap-1.5 text-brand-green font-semibold group-hover:translate-x-1 transition-transform">
                        View case study →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Editorial Information Block */}
                <div className="space-y-4 max-w-3xl">
                  <span className="text-xs font-mono text-brand-green font-semibold">
                    {project.clientDescriptor} • {project.industry}
                  </span>

                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-neutral group-hover:text-brand-green transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="text-base sm:text-lg text-brand-neutral/80 font-normal leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-neutral hover:text-brand-green transition-colors"
                    >
                      <span>View case study</span>
                      <ArrowRight className="w-4 h-4 text-brand-green group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AtmosphericBackground>
    </div>
  );
}
