"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function WorkArchiveSection() {
  return (
    <section
      id="work-archive"
      className="py-28 sm:py-36 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-brand-navy/10 pb-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-gray">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>05 // Selected work</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-brand-navy leading-[1.08]">
              Work.
            </h2>

            <p className="text-lg sm:text-xl text-brand-gray font-normal max-w-2xl leading-relaxed">
              Real projects. Realigned market perceptions. Authentic commercial impact.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-navy hover:text-brand-green border-b border-brand-navy hover:border-brand-green pb-1 transition-colors self-start lg:self-end"
          >
            <span>View complete archive ({projectsData.length} projects)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Simplified Large Editorial Case Studies Stream */}
        <div className="space-y-24 sm:space-y-32">
          {projectsData.slice(0, 4).map((project, idx) => (
            <article
              key={project.id}
              className="group space-y-8 border-b border-brand-navy/10 pb-20 sm:pb-28"
            >
              {/* 1. Large Hero Visual */}
              <Link
                href={`/work/${project.slug}`}
                className="block relative w-full h-[320px] sm:h-[460px] lg:h-[540px] rounded-3xl overflow-hidden bg-brand-neutral-surface border border-brand-neutral-border group-hover:border-brand-green/40 transition-all duration-500 shadow-sm"
              >
                {/* Minimalist Architectural Gradient Canvas Representing Project Visual */}
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-102 flex flex-col justify-between p-8 sm:p-12"
                  style={{
                    background:
                      idx % 2 === 0
                        ? "linear-gradient(135deg, #04262F 0%, #063945 40%, #0d5568 100%)"
                        : "linear-gradient(135deg, #093b48 0%, #062f3a 50%, #021a20 100%)",
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-brand-neutral/60">
                    <span className="text-brand-green font-semibold">0{idx + 1}</span>
                    <span>{project.industry}</span>
                  </div>

                  {/* Visual Centerpiece Metaphor */}
                  <div className="space-y-2 max-w-lg">
                    <span className="text-xs font-mono text-brand-green font-semibold">
                      {project.clientDescriptor}
                    </span>
                    <p className="text-2xl sm:text-4xl font-bold text-brand-neutral tracking-tight">
                      {project.title}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-brand-neutral/60 border-t border-white/10 pt-4">
                    <span>Panknox Archive</span>
                    <span className="inline-flex items-center gap-1.5 text-brand-green font-semibold group-hover:translate-x-1 transition-transform">
                      View case study →
                    </span>
                  </div>
                </div>
              </Link>

              {/* 2. Clean Editorial Text Metadata */}
              <div className="space-y-4 max-w-4xl">
                <p className="text-xs font-mono text-brand-green font-semibold">
                  {project.clientDescriptor} • {project.industry}
                </p>

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-navy group-hover:text-brand-green transition-colors">
                  <Link href={`/work/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-base sm:text-xl text-brand-gray font-normal leading-relaxed">
                  {project.summary}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-green transition-colors"
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
    </section>
  );
}

