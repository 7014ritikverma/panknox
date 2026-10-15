"use client";

interface DiyaProps {
  size?: "sm" | "md" | "lg" | number;
  className?: string;
  withAura?: boolean;
  withReflection?: boolean;
  label?: string;
}

export default function Diya({
  size = "md",
  className = "",
  withAura = true,
  withReflection = false,
  label = "Festive Diya",
}: DiyaProps) {
  // Determine pixel dimensions
  const getWidth = () => {
    if (typeof size === "number") return size;
    switch (size) {
      case "sm":
        return 38;
      case "lg":
        return 76;
      case "md":
      default:
        return 52;
    }
  };

  const width = getWidth();
  const height = Math.round(width * 0.95);

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none pointer-events-none ${className}`}
      aria-label={label}
      role="img"
    >
      {/* 1. Warm Ambient Aura Behind the Diya */}
      {withAura && (
        <div
          className="absolute -top-[35%] left-1/2 -translate-x-1/2 w-[180%] h-[180%] rounded-full bg-gradient-to-b from-[#F59E0B]/25 via-[#D97706]/15 to-transparent blur-[22px] pointer-events-none animate-diya-aura"
          aria-hidden="true"
        />
      )}

      {/* 2. Precision SVG Diya Artwork */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 overflow-visible"
      >
        <defs>
          {/* Flame Outer Gradient */}
          <linearGradient id="diyaFlameGrad" x1="50" y1="5" x2="50" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="18%" stopColor="#FEF08A" />
            <stop offset="55%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Flame Core Inner Gradient */}
          <linearGradient id="diyaCoreGrad" x1="50" y1="12" x2="50" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#FEF9C3" />
            <stop offset="90%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          {/* Diya Clay/Bronze Vessel Body Gradient */}
          <linearGradient id="diyaVesselGrad" x1="20" y1="50" x2="80" y2="86" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D49A3D" />
            <stop offset="25%" stopColor="#9C5A18" />
            <stop offset="65%" stopColor="#67340D" />
            <stop offset="100%" stopColor="#3C1A04" />
          </linearGradient>

          {/* Vessel Rim Golden Highlight */}
          <linearGradient id="diyaRimGrad" x1="12" y1="52" x2="88" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#78350F" />
            <stop offset="30%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="70%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Base Shadow Gradient */}
          <radialGradient id="diyaShadow" cx="50" cy="88" r="38" fx="50" fy="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(4, 38, 47, 0.7)" />
            <stop offset="65%" stopColor="rgba(4, 38, 47, 0.3)" />
            <stop offset="100%" stopColor="rgba(4, 38, 47, 0)" />
          </radialGradient>
        </defs>

        {/* Base Contact Shadow */}
        <ellipse cx="50" cy="87" rx="36" ry="6" fill="url(#diyaShadow)" />

        {/* ----------------- FLAME GROUP (Animated) ----------------- */}
        <g className="animate-diya-flame origin-[50%_52%]">
          {/* Flame Halo/Back Glow */}
          <ellipse cx="50" cy="30" rx="14" ry="24" fill="#FBBF24" opacity="0.32" filter="blur(6px)" />

          {/* Outer Teardrop Flame */}
          <path
            d="M 50 6 C 45 20, 36 30, 36 41 C 36 50, 42 54, 50 54 C 58 54, 64 50, 64 41 C 64 30, 55 20, 50 6 Z"
            fill="url(#diyaFlameGrad)"
          />

          {/* Inner Bright Core */}
          <path
            d="M 50 16 C 47 25, 41 33, 41 42 C 41 48, 45 51, 50 51 C 55 51, 59 48, 59 42 C 59 33, 53 25, 50 16 Z"
            fill="url(#diyaCoreGrad)"
          />

          {/* Pure White Flame Filament */}
          <ellipse cx="50" cy="38" rx="3.5" ry="8" fill="#FFFFFF" opacity="0.9" />

          {/* Delicate Cotton Wick */}
          <path
            d="M 50 53 Q 49.5 48, 48 44"
            stroke="#451A03"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        {/* ----------------- DIYA VESSEL ----------------- */}
        {/* Vessel Body */}
        <path
          d="M 14 53 C 14 74, 32 84, 50 84 C 68 84, 86 74, 86 53 C 78 57, 66 59, 50 59 C 34 59, 22 57, 14 53 Z"
          fill="url(#diyaVesselGrad)"
          stroke="#78350F"
          strokeWidth="0.8"
        />

        {/* Vessel Rim Top Oval */}
        <ellipse
          cx="50"
          cy="53"
          rx="36"
          ry="6"
          fill="#451A03"
          stroke="url(#diyaRimGrad)"
          strokeWidth="1.5"
        />

        {/* Inner Oil Surface */}
        <ellipse
          cx="50"
          cy="53.5"
          rx="32"
          ry="4.5"
          fill="#78350F"
          opacity="0.9"
        />
        <ellipse
          cx="50"
          cy="53.5"
          rx="26"
          ry="3"
          fill="#F59E0B"
          opacity="0.35"
        />

        {/* Front Sculpted Lip / Spout Accent */}
        <path
          d="M 44 54 Q 50 51, 56 54"
          stroke="#FEF08A"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Vessel Center Embossed Chevron Motif (Refined architectural touch) */}
        <path
          d="M 46 66 L 50 70 L 54 66"
          stroke="#F59E0B"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg>

      {/* 3. Subtle Under-Surface Reflection (Optional for glossy/dark ground) */}
      {withReflection && (
        <div
          className="w-[80%] h-3 bg-gradient-to-b from-[#F59E0B]/20 to-transparent blur-[3px] rounded-full -mt-1 opacity-50"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
