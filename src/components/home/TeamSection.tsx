"use client";

import { useState } from "react";
import { teamData } from "@/data/team";

export default function TeamSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="the-team"
      className="py-20 sm:py-24 lg:py-28 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-5 max-w-4xl">
          <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>08 // The creative operating unit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-brand-navy leading-[1.08]">
            Built by people. <br />
            <span className="text-brand-green">Powered by systems.</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-gray font-normal max-w-2xl leading-relaxed pt-1">
            Direct access to directors and specialists. Zero account-manager bureaucracy.
          </p>
        </div>

        {/* Spacious Editorial Disciplines Stream */}
        <div className="divide-y divide-brand-navy/15 border-y border-brand-navy/15">
          {teamData.disciplines.map((unit, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <div
                key={unit.code}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`py-8 sm:py-12 transition-all duration-300 cursor-pointer group ${
                  isSelected ? "bg-brand-neutral-surface/60 px-6 sm:px-8 rounded-2xl" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs sm:text-sm font-mono text-brand-green font-semibold">
                      {unit.code}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-navy group-hover:text-brand-green transition-colors">
                      {unit.name}
                    </h3>
                  </div>

                  <span className="text-xs sm:text-sm font-mono text-brand-gray font-medium">
                    {unit.role}
                  </span>
                </div>

                {isSelected && (
                  <div className="pt-6 mt-6 border-t border-brand-navy/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
                    <p className="lg:col-span-8 text-base sm:text-lg text-brand-navy leading-relaxed">
                      {unit.focus}
                    </p>
                    <div className="lg:col-span-4 text-xs font-mono text-brand-gray space-y-1">
                      <span className="font-semibold text-brand-green block">Deliverable focus:</span>
                      <p className="text-brand-navy font-semibold">{unit.deliverableFocus}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Studio Provenance Footnote */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-brand-gray">
          <span>Offices: Chitrakoot, Vaishali Nagar, Jaipur • Mandrella, Jhunjhunu</span>
          <span>Creative &amp; Performance Marketing Partner</span>
        </div>
      </div>
    </section>
  );
}
