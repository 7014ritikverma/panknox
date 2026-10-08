"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Layers, Terminal } from "lucide-react";
import { capabilitySystems } from "@/data/services";

export default function CapabilitySystemSection() {
  const [activeSystemId, setActiveSystemId] = useState<string>("strategy");

  return (
    <section id="capability-systems" className="py-24 sm:py-32 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span>04 // CAPABILITY ARCHITECTURE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-tight">
              WHAT PANKNOX <br />
              <span className="text-brand-green">BUILDS.</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed">
              We do not sell fragmented agency services. We deploy four tightly integrated
              operational systems engineered to transform raw business value into market dominance.
            </p>
          </div>

          <Link
            href="/what-we-do"
            data-cursor="EXPAND"
            className="inline-flex items-center gap-2 text-sm font-mono text-brand-green hover:underline uppercase tracking-wider self-start lg:self-end"
          >
            <span>VIEW FULL CAPABILITY SPECIFICATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Systems Interactive Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilitySystems.map((system) => {
            const isSelected = system.id === activeSystemId;
            return (
              <button
                key={system.id}
                type="button"
                onClick={() => setActiveSystemId(system.id)}
                data-cursor="SYSTEM"
                className={`text-left p-6 rounded-xl border transition-all relative overflow-hidden flex flex-col justify-between h-56 ${
                  isSelected
                    ? "bg-brand-green/10 border-brand-green text-brand-neutral shadow-[0_0_25px_rgba(48,198,130,0.25)]"
                    : "bg-brand-navy/60 border-brand-neutral/15 text-brand-neutral/70 hover:border-brand-neutral/40 hover:bg-white/5"
                }`}
              >
                {/* Visual Status Indicator */}
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-mono text-brand-gray tracking-wider">
                    SYSTEM {system.number}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isSelected ? "bg-brand-green animate-ping" : "bg-brand-neutral/20"
                    }`}
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black uppercase text-brand-neutral tracking-tight">
                    {system.name}
                  </h3>
                  <p className="text-xs font-mono text-brand-green tracking-wide">
                    {system.subtitle}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-brand-gray flex items-center justify-between w-full border-t border-brand-neutral/10 pt-3">
                  <span>{system.items.length} CORE CAPABILITIES</span>
                  <span className="text-brand-neutral/50">{isSelected ? "ACTIVE" : "SELECT"}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active System Detailed Expanded Chamber */}
        {(() => {
          const activeSys = capabilitySystems.find((s) => s.id === activeSystemId) || capabilitySystems[0];
          return (
            <div className="bg-brand-navy border border-brand-neutral/20 rounded-2xl p-6 sm:p-10 lg:p-12 space-y-10 shadow-2xl relative">
              <div className="absolute top-0 right-0 p-6 hidden sm:block">
                <span className="text-xs font-mono text-brand-green px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30">
                  {activeSys.signalLabel}
                </span>
              </div>

              {/* System Overview Header */}
              <div className="space-y-4 max-w-4xl">
                <div className="flex items-center gap-3 text-xs font-mono text-brand-gray uppercase">
                  <span>DEPLOYED MODULE: {activeSys.number}</span>
                  <span>•</span>
                  <span className="text-brand-green font-bold">{activeSys.name}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-brand-neutral">
                  {activeSys.headline}
                </h3>

                <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed">
                  {activeSys.description}
                </p>
              </div>

              {/* Signal Transformation Mechanics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/30 p-5 rounded-xl border border-brand-neutral/10 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-brand-gray uppercase">INPUT VECTOR:</span>
                  <p className="text-brand-neutral font-medium">{activeSys.systemInput}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-brand-green uppercase font-bold">SYSTEM DELIVERABLE:</span>
                  <p className="text-brand-neutral font-medium">{activeSys.systemOutput}</p>
                </div>
              </div>

              {/* Dynamic Service Items Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-gray">
                    SPECIALIZED CAPABILITY MODULES ({activeSys.items.length})
                  </span>
                  <span className="text-xs font-mono text-brand-green">EXPANDED CAPABILITIES</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeSys.items.map((item, idx) => (
                    <div
                      key={item.name}
                      className="p-5 rounded-xl bg-white/[0.03] border border-brand-neutral/10 hover:border-brand-green/40 transition-colors space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-brand-gray">
                          {activeSys.number}.0{idx + 1}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                      </div>
                      <h4 className="text-lg font-bold text-brand-neutral tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-brand-neutral/70 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 border-t border-brand-neutral/10 space-y-1">
                        <span className="text-[10px] font-mono text-brand-gray uppercase block">
                          CORE DELIVERABLES:
                        </span>
                        <ul className="space-y-1 text-xs text-brand-neutral/80 font-mono">
                          {item.deliverables.slice(0, 2).map((deliv) => (
                            <li key={deliv} className="flex items-center gap-1.5 truncate">
                              <span className="text-brand-green">•</span>
                              <span className="truncate">{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick-Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-brand-neutral/10">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
                  <Terminal className="w-4 h-4 text-brand-green" />
                  <span>ALL CAPABILITIES FULLY IN-HOUSE &amp; INTEGRATED</span>
                </div>

                <Link
                  href="/contact"
                  data-cursor="INQUIRE"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-brand-green text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-green/90 transition-all"
                >
                  <span>DISCUSS {activeSys.name} REQUIREMENTS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
