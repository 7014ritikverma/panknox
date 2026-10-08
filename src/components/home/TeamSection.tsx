"use client";

import { useState } from "react";
import { teamData } from "@/data/team";

export default function TeamSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="the-team"
      className="py-36 sm:py-48 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-28">
        {/* Section Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-gray uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>08 // THE CREATIVE OPERATING UNIT</span>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-navy leading-[0.92]">
            BUILT BY PEOPLE. <br />
            <span className="text-brand-green">POWERED BY SYSTEMS.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-brand-gray font-normal max-w-2xl leading-relaxed">
            Direct access to directors and specialists. Zero account-manager bureaucracy.
          </p>
        </div>

        {/* Spacious Editorial Disciplines Stream */}
        <div className="divide-y-2 divide-brand-navy/15 border-y-2 border-brand-navy/15">
          {teamData.disciplines.map((unit, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <div
                key={unit.code}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                data-cursor="UNIT"
                className={`py-10 sm:py-14 transition-all cursor-pointer group ${
                  isSelected ? "bg-brand-neutral-surface/60 px-6 sm:px-10 rounded-2xl" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-baseline gap-6">
                    <span className="text-sm font-mono text-brand-green font-bold">
                      {unit.code}
                    </span>
                    <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-brand-navy group-hover:text-brand-green transition-colors">
                      {unit.name}
                    </h3>
                  </div>

                  <span className="text-xs sm:text-sm font-mono text-brand-gray uppercase font-semibold">
                    {unit.role}
                  </span>
                </div>

                {isSelected && (
                  <div className="pt-6 mt-6 border-t border-brand-navy/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
                    <p className="lg:col-span-8 text-base sm:text-lg text-brand-navy leading-relaxed">
                      {unit.focus}
                    </p>
                    <div className="lg:col-span-4 text-xs font-mono text-brand-gray space-y-1">
                      <span className="font-bold text-brand-green uppercase block">DELIVERABLE:</span>
                      <p className="text-brand-navy font-bold">{unit.deliverableFocus}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Studio Provenance Footnote */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-brand-gray">
          <span>STUDIO HQ // JAIPUR, RAJASTHAN, INDIA</span>
          <span>CREATIVE &amp; PERFORMANCE MARKETING PARTNER</span>
        </div>
      </div>
    </section>
  );
}
