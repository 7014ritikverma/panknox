"use client";

import { useId } from "react";

interface FestiveAmbientProps {
  className?: string;
  particlesCount?: number;
  showBokeh?: boolean;
  intensity?: "subtle" | "medium" | "glow";
}

// 12 deterministic, beautifully spaced golden light particles
const PARTICLES_CONFIG = [
  { left: "12%", bottom: "18%", size: 3, delay: "0s", duration: "14s", drift: "18px", opacity: 0.65 },
  { left: "28%", bottom: "24%", size: 2.5, delay: "3.2s", duration: "16s", drift: "-14px", opacity: 0.5 },
  { left: "42%", bottom: "12%", size: 4, delay: "1.5s", duration: "18s", drift: "22px", opacity: 0.75 },
  { left: "58%", bottom: "20%", size: 2, delay: "4.8s", duration: "13s", drift: "-20px", opacity: 0.55 },
  { left: "74%", bottom: "16%", size: 3.5, delay: "2.1s", duration: "17s", drift: "16px", opacity: 0.7 },
  { left: "86%", bottom: "26%", size: 2.5, delay: "5.5s", duration: "15s", drift: "-18px", opacity: 0.6 },
  { left: "20%", bottom: "35%", size: 2, delay: "6.8s", duration: "19s", drift: "12px", opacity: 0.45 },
  { left: "68%", bottom: "32%", size: 3, delay: "7.4s", duration: "16s", drift: "-15px", opacity: 0.6 },
  { left: "8%", bottom: "10%", size: 3.5, delay: "8.2s", duration: "18s", drift: "20px", opacity: 0.5 },
  { left: "92%", bottom: "15%", size: 2.5, delay: "9.1s", duration: "14s", drift: "-16px", opacity: 0.55 },
  { left: "48%", bottom: "28%", size: 2, delay: "10.4s", duration: "20s", drift: "10px", opacity: 0.4 },
  { left: "80%", bottom: "8%", size: 3, delay: "1.8s", duration: "15s", drift: "-12px", opacity: 0.65 },
];

export default function FestiveAmbient({
  className = "",
  particlesCount = 12,
  showBokeh = true,
  intensity = "subtle",
}: FestiveAmbientProps) {
  const componentId = useId();
  const particles = PARTICLES_CONFIG.slice(0, particlesCount);

  const bokehOpacity =
    intensity === "glow" ? "opacity-40" : intensity === "medium" ? "opacity-25" : "opacity-15";

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Soft Festive Bokeh Spheres */}
      {showBokeh && (
        <>
          {/* Bokeh 1: Lower Left Amber Pool */}
          <div
            className={`absolute -bottom-[10%] left-[8%] w-[420px] h-[340px] rounded-full bg-gradient-to-tr from-[#D97706]/20 via-[#F59E0B]/12 to-transparent blur-[120px] mix-blend-screen ${bokehOpacity} transition-opacity duration-1000`}
          />

          {/* Bokeh 2: Central Warm Radiance (Harmonized with Emerald) */}
          <div
            className={`absolute top-[40%] right-[15%] w-[480px] h-[360px] rounded-full bg-gradient-to-bl from-[#FBBF24]/14 via-[#F59E0B]/08 to-transparent blur-[130px] mix-blend-screen ${bokehOpacity} transition-opacity duration-1000`}
          />

          {/* Bokeh 3: Deep Warm Accent at Top Right */}
          <div
            className="absolute top-[10%] right-[30%] w-[320px] h-[260px] rounded-full bg-[#F59E0B]/06 blur-[100px] mix-blend-screen opacity-20 pointer-events-none"
          />
        </>
      )}

      {/* 2. Floating Golden Light Particles */}
      <div className="absolute inset-0">
        {particles.map((p, idx) => (
          <span
            key={`${componentId}-p-${idx}`}
            className="absolute rounded-full"
            style={
              {
                left: p.left,
                bottom: p.bottom,
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: "#FDE68A",
                boxShadow: `0 0 ${p.size * 3}px rgba(245, 158, 11, 0.9), 0 0 ${p.size * 6}px rgba(217, 119, 6, 0.5)`,
                animation: `festiveFloat ${p.duration} ease-in-out infinite`,
                animationDelay: p.delay,
                "--p-opacity": p.opacity,
                "--drift-x": p.drift,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
