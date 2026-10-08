"use client";

import { useState } from "react";
import { Users, Terminal, Shield, ArrowUpRight } from "lucide-react";
import { teamData } from "@/data/team";

export default function TeamSection() {
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState(0);
  const activeUnit = teamData.disciplines[activeDisciplineIndex];

  return (
    <section id="the-team" className="py-24 sm:py-32 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>09 // THE OPERATING UNIT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-tight">
            BUILT BY PEOPLE. <br />
            <span className="text-brand-green">POWERED BY SYSTEMS.</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-3xl">
            {teamData.philosophy}
          </p>
        </div>

        {/* Studio Operating Unit Matrix */}
        <div className="bg-brand-navy border border-brand-neutral/15 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-neutral/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-green">
              <Terminal className="w-4 h-4" />
              <span>THE 7 CREATIVE DISCIPLINES // DIRECT ACCESS ARCHITECTURE</span>
            </div>
            <span className="text-xs font-mono text-brand-gray">
              {teamData.locationDetails}
            </span>
          </div>

          {/* Unit Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {teamData.disciplines.map((unit, idx) => {
              const isSelected = idx === activeDisciplineIndex;
              return (
                <button
                  key={unit.code}
                  type="button"
                  onClick={() => setActiveDisciplineIndex(idx)}
                  data-cursor="UNIT"
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-brand-green/15 border-brand-green text-brand-neutral shadow-[0_0_15px_rgba(48,198,130,0.25)]"
                      : "bg-brand-navy/60 border-brand-neutral/10 text-brand-neutral/70 hover:border-brand-neutral/30 hover:bg-white/5"
                  }`}
                >
                  <span className="text-[10px] font-mono text-brand-gray block mb-1">
                    {unit.code}
                  </span>
                  <span className="text-xs font-extrabold uppercase block truncate">
                    {unit.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Discipline Card */}
          <div className="bg-black/30 border border-brand-neutral/15 rounded-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-green/20 text-brand-green font-bold">
                  DISCIPLINE {activeUnit.code}
                </span>
                <span className="text-xs font-mono text-brand-gray uppercase">
                  {activeUnit.role}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
                {activeUnit.name}
              </h3>

              <p className="text-base text-brand-neutral/80 leading-relaxed">
                {activeUnit.focus}
              </p>

              <div className="pt-2 text-xs font-mono space-y-1">
                <span className="text-brand-gray uppercase block">PRIMARY WORK ARTIFACTS:</span>
                <p className="text-brand-green font-semibold">{activeUnit.deliverableFocus}</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-brand-navy/80 p-5 rounded-lg border border-brand-neutral/10 space-y-3 text-xs font-mono">
              <span className="text-brand-gray uppercase block">ORGANIZATIONAL ROLE:</span>
              <p className="text-sm font-bold text-brand-neutral uppercase">{activeUnit.systemRole}</p>
              <div className="pt-2 border-t border-brand-neutral/10 space-y-1 text-brand-neutral/70">
                <p>• Zero intermediary agency accounts</p>
                <p>• Direct tactical collaboration</p>
                <p>• Rigorous commercial ownership</p>
              </div>
            </div>
          </div>

          {/* Operating Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-brand-neutral/10">
            {teamData.operatingValues.map((val) => (
              <div
                key={val.title}
                className="p-5 rounded-xl bg-white/[0.02] border border-brand-neutral/10 space-y-2"
              >
                <h4 className="text-sm font-bold text-brand-neutral uppercase">{val.title}</h4>
                <p className="text-xs text-brand-neutral/70 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
