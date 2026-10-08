"use client";

import { ReactNode } from "react";

interface AtmosphericBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function AtmosphericBackground({
  children,
  className = "",
}: AtmosphericBackgroundProps) {
  return (
    <div
      className={`relative bg-brand-navy overflow-hidden ${className}`}
      style={{ backgroundColor: "#04262F" }}
    >
      {/* 1. Slow Organic Atmospheric Light Fields (30s duration) */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none mix-blend-screen opacity-40 blur-[130px] animate-ambientGlow1"
        style={{
          background:
            "radial-gradient(circle, rgba(48, 198, 130, 0.22) 0%, rgba(6, 47, 58, 0.1) 60%, transparent 80%)",
        }}
      />

      <div
        className="absolute top-[40%] -right-[15%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full pointer-events-none mix-blend-screen opacity-35 blur-[140px] animate-ambientGlow2"
        style={{
          background:
            "radial-gradient(circle, rgba(30, 140, 100, 0.25) 0%, rgba(4, 38, 47, 0.15) 55%, transparent 75%)",
        }}
      />

      <div
        className="absolute -bottom-[25%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none mix-blend-screen opacity-25 blur-[120px] animate-ambientGlow3"
        style={{
          background:
            "radial-gradient(circle, rgba(48, 198, 130, 0.18) 0%, transparent 70%)",
        }}
      />

      {/* 2. Fine Cinematic Film Grain Overlay (SVG noise filter, 3.5% opacity) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="panknox-film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#panknox-film-grain)" />
      </svg>

      {/* Content Layer */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
