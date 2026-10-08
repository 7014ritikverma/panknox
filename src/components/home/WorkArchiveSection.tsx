"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, Filter, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";

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
    <section
      id="work-archive"
      className="py-28 sm:py-36 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      {/* Background Light Pattern */}
      <div className="absolute inset-0 bg-light-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-brand-navy/10 pb-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy text-xs font-mono uppercase tracking-widest font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>05 // EDITORIAL WORK ARCHIVE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-navy leading-[0.95]">
              WORK.
            </h2>

            <p className="text-lg sm:text-xl text-brand-gray leading-relaxed max-w-2xl font-normal">
              An editorial archive of commercial and creative systems.
              We do not display generic mockups; each case study demonstrates a realigned market perception.
            </p>
          </div>

          {/* Discipline Filters */}
          <div className="space-y-2 self-start lg:self-end">
            <span className="text-xs font-mono text-brand-gray uppercase font-semibold block">
              FILTER ARCHIVE:
            </span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  data-cursor="FILTER"
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-brand-navy text-white font-bold shadow-md"
                      : "bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy/70 hover:border-brand-navy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Large Editorial Magazine Style Project Stream on White */}
        <div className="space-y-24">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group border-b border-brand-navy/15 pb-20 space-y-8 relative"
            >
              {/* Top Meta Line with Huge Project Number */}
              <div className="flex items-baseline justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy font-bold">
                    ARCHIVE // {project.number}
                  </span>
                  <span className="text-xs font-mono uppercase text-brand-green font-bold">
                    {project.categoryTag}
                  </span>
                </div>

                <span className="text-6xl sm:text-8xl font-black font-mono text-brand-navy/10 group-hover:text-brand-green/30 transition-colors select-none">
                  {project.number}
                </span>
              </div>

              {/* Main Headline & Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-brand-navy tracking-tight group-hover:text-brand-green transition-colors">
                    <Link href={`/work/${project.slug}`} data-cursor="VIEW PROJECT">
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-sm font-mono text-brand-gray uppercase font-semibold">
                    {project.clientDescriptor} • {project.location}
                  </p>

                  <p className="text-base sm:text-lg text-brand-gray leading-relaxed max-w-3xl">
                    {project.summary}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:border-l border-brand-navy/10 lg:pl-8">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold block">
                      SYSTEM INTERVENTION:
                    </span>
                    <p className="text-sm font-bold text-brand-navy leading-snug">
                      {project.theThinking}
                    </p>
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    data-cursor="VIEW PROJECT"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-navy hover:text-brand-green uppercase tracking-wider group-hover:translate-x-1 transition-all"
                  >
                    <span>VIEW CASE ARCHIVE</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-green" />
                  </Link>
                </div>
              </div>

              {/* Visual Composition Banner */}
              <div className="w-full bg-brand-neutral-surface border border-brand-neutral-border rounded-2xl p-6 sm:p-10 relative overflow-hidden group-hover:border-brand-green/50 transition-colors shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-navy/10 pb-4 mb-6 text-xs font-mono">
                  <span className="text-brand-navy font-bold uppercase">
                    DELIVERABLE SYSTEM SPECIFICATION
                  </span>
                  <span className="text-brand-green font-bold">VERIFIED REORGANIZATION</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.scope.map((s, i) => (
                    <div
                      key={s}
                      className="p-4 rounded-xl bg-white border border-brand-navy/10 space-y-1 shadow-sm"
                    >
                      <span className="text-[10px] font-mono text-brand-green font-bold block">
                        MOD 0{i + 1}
                      </span>
                      <p className="text-xs font-bold uppercase text-brand-navy truncate">{s}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 mt-6 border-t border-brand-navy/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-brand-gray">
                  <span>OUTCOME: {project.theOutcome.qualitativeSummary}</span>
                  <span className="text-brand-navy font-semibold">YEAR // {project.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Archive Link */}
        <div className="pt-8 text-center">
          <Link
            href="/work"
            data-cursor="ALL WORK"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-navy text-white hover:bg-brand-navy/90 font-bold text-sm tracking-wider uppercase transition-all shadow-md"
          >
            <span>EXPLORE FULL CASE REPOSITORY ({projectsData.length} PROJECTS)</span>
            <ArrowRight className="w-4 h-4 text-brand-green" />
          </Link>
        </div>
      </div>
    </section>
  );
}
