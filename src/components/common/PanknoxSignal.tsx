"use client";

import React from "react";

interface PanknoxSignalProps {
  variant?: "dot" | "badge" | "track";
  label?: string;
  className?: string;
  active?: boolean;
}

export default function PanknoxSignal({
  variant = "badge",
  label = "Signal // Active",
  className = "",
  active = true,
}: PanknoxSignalProps) {
  if (variant === "dot") {
    return (
      <span className={`relative inline-flex h-2.5 w-2.5 ${className}`}>
        {active && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green" />
      </span>
    );
  }

  if (variant === "track") {
    return (
      <div className={`relative w-full h-[1px] bg-white/10 overflow-hidden ${className}`}>
        <div
          className="absolute top-0 h-[2px] w-48 bg-gradient-to-r from-transparent via-[#30C682] to-transparent animate-signal-travel opacity-85 shadow-[0_0_12px_#30C682]"
          style={{ animationDuration: "6s" }}
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3 py-1 rounded-full text-xs font-mono border backdrop-blur-sm ${
        active
          ? "bg-brand-green/10 border-brand-green/30 text-brand-green"
          : "bg-white/5 border-white/10 text-brand-neutral/60"
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {active && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
      </span>
      <span>{label}</span>
    </div>
  );
}
