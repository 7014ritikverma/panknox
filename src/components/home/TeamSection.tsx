"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Terminal, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { teamData } from "@/data/team";
import { brandData } from "@/data/brand";

export default function TeamSection() {
  const [activeUnitIdx, setActiveUnitIdx] = useState(0);
  const activeUnit = teamData.disciplines[activeUnitIdx];

  return (
    <section
      id="the-team"
      className="py-28 sm:py-36 bg-brand-white text-brand-navy relative overflow-hidden"
    >
      {/* Background Architectural Grid Pattern on White */}
      <div className="absolute inset-0 bg-light-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy text-xs font-mono uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>08 // THE CREATIVE OPERATING UNIT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-navy leading-[0.95]">
            BUILT BY PEOPLE. <br />
            <span className="text-brand-green">POWERED BY SYSTEMS.</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-gray leading-relaxed max-w-3xl pt-2 font-normal">
            We do not operate as an inflated corporate bureaucracy with endless account executives
            playing telephone. Panknox deploys a specialized, tightly integrated creative operating unit
            working directly with your leadership.
          </p>
        </div>

        {/* Operating Disciplines Matrix on White */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-navy/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-navy font-bold uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-brand-green" />
              <span>THE 7 OPERATING DISCIPLINES // DIRECT ACCESS</span>
            </div>
            <span className="text-xs font-mono text-brand-gray">
              STUDIO BASE: JAIPUR, RAJASTHAN, INDIA
            </span>
          </div>

          {/* Unit Switcher Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {teamData.disciplines.map((unit, idx) => {
              const isSelected = idx === activeUnitIdx;
              return (
                <button
                  key={unit.code}
                  type="button"
                  onClick={() => setActiveUnitIdx(idx)}
                  data-cursor="UNIT"
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-brand-navy text-white border-brand-navy shadow-md"
                      : "bg-brand-neutral-surface text-brand-navy border-brand-neutral-border hover:border-brand-navy/40"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono block mb-1 ${
                      isSelected ? "text-brand-green" : "text-brand-gray"
                    }`}
                  >
                    {unit.code}
                  </span>
                  <span className="text-xs font-extrabold uppercase block truncate">
                    {unit.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Unit Editorial Inspection Card */}
          <div className="bg-white border-2 border-brand-navy p-6 sm:p-10 rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-green/20 text-brand-navy font-bold">
                  DISCIPLINE {activeUnit.code}
                </span>
                <span className="text-xs font-mono text-brand-gray uppercase font-semibold">
                  {activeUnit.role}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black uppercase text-brand-navy tracking-tight">
                {activeUnit.name}
              </h3>

              <p className="text-base text-brand-gray leading-relaxed max-w-2xl">
                {activeUnit.focus}
              </p>

              <div className="pt-2 text-xs font-mono space-y-1">
                <span className="text-brand-gray uppercase font-bold block">DELIVERABLE VECTOR:</span>
                <p className="text-brand-green font-bold text-sm">{activeUnit.deliverableFocus}</p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-neutral-surface p-6 rounded-xl border border-brand-neutral-border space-y-3 text-xs font-mono">
              <span className="text-brand-gray uppercase font-bold block">OPERATIONAL STANDARD:</span>
              <p className="text-sm font-bold text-brand-navy uppercase">{activeUnit.systemRole}</p>
              <div className="pt-2 border-t border-brand-navy/10 space-y-1.5 text-brand-navy/80">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                  <span>Direct client collaboration</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                  <span>Zero intermediary delay</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                  <span>Strict commercial ownership</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Location & Values Banner on White */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-brand-navy/10">
          {teamData.operatingValues.map((val, idx) => (
            <div
              key={val.title}
              className="p-6 rounded-2xl bg-brand-neutral-surface border border-brand-neutral-border space-y-2 shadow-sm"
            >
              <span className="text-xs font-mono text-brand-green font-bold block">
                VALUE 0{idx + 1}
              </span>
              <h4 className="text-lg font-bold uppercase text-brand-navy">
                {val.title}
              </h4>
              <p className="text-xs text-brand-gray leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
