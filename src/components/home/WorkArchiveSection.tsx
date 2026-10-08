"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function WorkArchiveSection() {
  return (
    <section
      id="work-archive"
      className="py-36 sm:py-48 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-28">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-brand-navy/10 pb-8">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-gray uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>05 // EDITORIAL ARCHIVE</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-navy leading-[0.92]">
              WORK.
            </h2>

            <p className="text-xl sm:text-2xl text-brand-gray font-normal max-w-2xl leading-relaxed">
              Real projects. Realigned market perceptions. Authentic commercial impact.
            </p>
          </div>

          <Link
            href="/work"
            data-cursor="ALL WORK"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-navy hover:text-brand-green uppercase tracking-wider self-start lg:self-end border-b-2 border-brand-navy hover:border-brand-green pb-1 transition-colors"
          >
            <span>VIEW COMPLETE ARCHIVE ({projectsData.length} PROJECTS)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Large Editorial Archive Stream (No boxed generic cards) */}
        <div className="space-y-32">
          {projectsData.slice(0, 4).map((project) => (
            <article
              key={project.id}
              className="group border-b border-brand-navy/15 pb-24 space-y-8 relative"
            >
              {/* Category & Project Index */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="uppercase text-brand-green font-bold tracking-widest">
                  {project.categoryTag} // PROJECT {project.number}
                </span>

                <span className="text-brand-gray font-semibold">
                  {project.location} • {project.year}
                </span>
              </div>

              {/* Large Project Name & One-Line Context */}
              <div className="space-y-4 max-w-5xl">
                <h3 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-navy group-hover:text-brand-green transition-colors leading-[0.95]">
                  <Link href={`/work/${project.slug}`} data-cursor="VIEW">
                    {project.title}
                  </Link>
                </h3>

                <p className="text-xl sm:text-2xl text-brand-gray font-normal leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Large Visual Composition Frame with Subtle Signal Reveal */}
              <div className="w-full bg-brand-neutral-surface rounded-3xl p-8 sm:p-14 border border-brand-neutral-border space-y-6 group-hover:border-brand-green/50 transition-all duration-500 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-navy/10 pb-4 text-xs font-mono">
                  <span className="text-brand-navy font-bold uppercase">
                    THE THINKING // {project.theThinking}
                  </span>
                  <span className="text-brand-green font-bold">VERIFIED REALITY</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.scope.map((s) => (
                    <span
                      key={s}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-brand-navy/10 text-xs font-mono font-bold text-brand-navy shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <p className="text-xs font-mono text-brand-gray">
                    OUTCOME: {project.theOutcome.qualitativeSummary}
                  </p>

                  <Link
                    href={`/work/${project.slug}`}
                    data-cursor="VIEW"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-navy hover:text-brand-green uppercase tracking-wider group-hover:translate-x-1 transition-all"
                  >
                    <span>ENTER CASE STUDY</span>
                    <ArrowRight className="w-4 h-4 text-brand-green" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
