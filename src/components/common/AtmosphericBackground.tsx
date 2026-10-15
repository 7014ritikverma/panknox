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
      {/* 1. Slow Organic Atmospheric Light Fields (28s - 38s duration) */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[75vw] h-[75vw] max-w-[950px] max-h-[950px] rounded-full pointer-events-none mix-blend-screen opacity-40 blur-[130px] animate-ambientGlow1"
        style={{
          background:
            "radial-gradient(circle, rgba(48, 198, 130, 0.22) 0%, rgba(6, 47, 58, 0.12) 55%, transparent 75%)",
        }}
      />

      <div
        className="absolute top-[35%] -right-[15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none mix-blend-screen opacity-35 blur-[140px] animate-ambientGlow2"
        style={{
          background:
            "radial-gradient(circle, rgba(30, 140, 100, 0.24) 0%, rgba(4, 38, 47, 0.18) 50%, transparent 75%)",
        }}
      />

      <div
        className="absolute -bottom-[20%] left-[25%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full pointer-events-none mix-blend-screen opacity-25 blur-[125px] animate-ambientGlow3"
        style={{
          background:
            "radial-gradient(circle, rgba(48, 198, 130, 0.18) 0%, rgba(6, 47, 58, 0.1) 60%, transparent 75%)",
        }}
      />

      {/* 2. Soft Central Organic Atmosphere (34s slow drift) */}
      <div
        className="absolute top-[20%] left-[20%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none mix-blend-screen opacity-20 blur-[150px] animate-ambientGlow1"
        style={{
          background:
            "radial-gradient(circle, rgba(48, 198, 130, 0.15) 0%, rgba(4, 38, 47, 0.08) 60%, transparent 80%)",
          animationDuration: "34s",
        }}
      />

      {/* 3. Fine Film Grain Overlay (SVG noise filter, 3.8% opacity) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.038] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="panknox-film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
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
