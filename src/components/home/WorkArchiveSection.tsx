"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Filter } from "lucide-react";
import { projectsData, ProjectCaseStudy } from "@/data/projects";

const CATEGORIES = ["ALL", "MANUFACTURING", "HEALTHCARE", "HOSPITALITY", "JEWELLERY", "INTERIORS"];

export default function WorkArchiveSection() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects = projectsData.filter((proj) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "MANUFACTURING") return proj.industry === "Manufacturing";
    if (selectedCategory === "HEALTHCARE") return proj.industry === "Healthcare";
    if (selectedCategory === "HOSPITALITY") return proj.industry === "Hospitality";
    if (selectedCategory === "JEWELLERY") return proj.industry === "Jewellery & Luxury";
    if (selectedCategory === "INTERIORS") return proj.industry === "Interiors & Furniture";
    return true;
  });

  return (
    <section id="work-archive" className="py-24 sm:py-32 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header & Editorial Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-brand-neutral/10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>06 // EDITORIAL WORK ARCHIVE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-tight">
              PROVEN <br />
              <span className="text-brand-green">SYSTEMS.</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed">
              We do not display superficial mockups. Each project represents an end-to-end
              realignment between business truth, creative perception, and market distribution.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
              <Filter className="w-3.5 h-3.5 text-brand-green" />
              <span>FILTER DISCIPLINE</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  data-cursor="FILTER"
                  className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-brand-green text-brand-navy font-bold shadow-[0_0_12px_rgba(48,198,130,0.3)]"
                      : "bg-brand-navy/60 border border-brand-neutral/15 text-brand-neutral/70 hover:border-brand-neutral/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Project Stream */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const isAlternate = idx % 2 === 1;
            return (
              <article
                key={project.id}
                className={`p-6 sm:p-10 lg:p-12 rounded-2xl border border-brand-neutral/15 bg-brand-navy/90 hover:border-brand-green/40 transition-all duration-300 relative group overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isAlternate ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Background Giant Project Number Watermark */}
                <span className="absolute -top-10 -right-4 text-9xl sm:text-[14rem] font-black text-brand-neutral/[0.03] select-none pointer-events-none font-mono">
                  {project.number}
                </span>

                {/* Left/Main Column: Number, Title, Scope & Narrative */}
                <div className="lg:col-span-7 space-y-6 relative z-10">
                  <div className="flex items-center gap-4 text-xs font-mono text-brand-gray">
                    <span className="text-brand-green font-bold text-sm tracking-widest">
                      PROJECT // {project.number}
                    </span>
                    <span>•</span>
                    <span className="uppercase text-brand-neutral/60">{project.industry}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-brand-neutral tracking-tight group-hover:text-brand-green transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm font-mono text-brand-green font-medium">
                    {project.clientDescriptor}
                  </p>

                  <p className="text-base text-brand-neutral/80 leading-relaxed max-w-2xl">
                    {project.summary}
                  </p>

                  {/* Scope badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.scope.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-brand-neutral/10 text-brand-neutral/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="pt-4">
                    <Link
                      href={`/work/${project.slug}`}
                      data-cursor="CASE STUDY"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded bg-brand-green text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-green/90 transition-all shadow-[0_0_15px_rgba(48,198,130,0.2)]"
                    >
                      <span>INSPECT COMPLETE CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Editorial Blueprint Panel */}
                <div className="lg:col-span-5 bg-black/40 border border-brand-neutral/15 rounded-xl p-6 sm:p-7 space-y-5 relative z-10">
                  <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-3 text-xs font-mono">
                    <span className="text-brand-gray uppercase">THE ARCHITECTURE</span>
                    <span className="text-brand-green">VERIFIED WORKFLOW</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-mono uppercase text-brand-gray block text-[10px]">
                        THE CORE CHALLENGE:
                      </span>
                      <p className="text-brand-neutral/80 line-clamp-2">{project.theChallenge}</p>
                    </div>

                    <div className="pt-2 border-t border-brand-neutral/10">
                      <span className="font-mono uppercase text-brand-green block text-[10px] font-bold">
                        THE STRATEGIC HYPOTHESIS:
                      </span>
                      <p className="text-brand-neutral font-medium line-clamp-2">
                        {project.theThinking}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-brand-neutral/10">
                      <span className="font-mono uppercase text-brand-gray block text-[10px]">
                        AUTHENTIC OUTCOME:
                      </span>
                      <p className="text-brand-neutral/90 line-clamp-2">
                        {project.theOutcome.qualitativeSummary}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-brand-neutral/10 flex items-center gap-2 text-[11px] font-mono text-brand-gray">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                    <span>HONEST ARCHIVE // ZERO FABRICATED METRICS</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Work Link */}
        <div className="pt-8 text-center">
          <Link
            href="/work"
            data-cursor="ALL WORK"
            className="inline-flex items-center gap-3 px-8 py-4 rounded border border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-navy font-bold text-sm tracking-wider uppercase transition-all"
          >
            <span>ENTER FULL EDITORIAL ARCHIVE ({projectsData.length} PROJECTS)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
