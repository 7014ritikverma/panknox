"use client";

import React from "react";

interface MarigoldFlowerProps {
  color: "yellow" | "orange";
  size?: number;
  className?: string;
}

/**
 * High-fidelity Marigold (Genda Phool) vector artwork
 * Features rich petal rosettes and textured center matching traditional Indian festive torans.
 */
export function MarigoldFlower({ color, size = 38, className = "" }: MarigoldFlowerProps) {
  const isYellow = color === "yellow";

  // Saffron vs Golden-Yellow Color Palettes
  const outerGrad = isYellow
    ? { start: "#FEF08A", mid: "#FBBF24", end: "#D97706" }
    : { start: "#FDBA74", mid: "#EA580C", end: "#9A3412" };

  const innerGrad = isYellow
    ? { start: "#FEF9C3", mid: "#F59E0B", end: "#B45309" }
    : { start: "#FED7AA", mid: "#F97316", end: "#7C2D12" };

  const centerCore = isYellow ? "#B45309" : "#7C2D12";
  const centerPip = isYellow ? "#78350F" : "#451A03";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`mg-outer-${color}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={outerGrad.start} />
          <stop offset="60%" stopColor={outerGrad.mid} />
          <stop offset="100%" stopColor={outerGrad.end} />
        </radialGradient>
        <radialGradient id={`mg-inner-${color}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={innerGrad.start} />
          <stop offset="70%" stopColor={innerGrad.mid} />
          <stop offset="100%" stopColor={innerGrad.end} />
        </radialGradient>
      </defs>

      {/* Layer 1: Outer Dense Petal Rosette (16 Petals) */}
      <path
        d="M30 3
           C32 8, 38 7, 41 4
           C42 9, 47 10, 51 9
           C50 14, 54 17, 57 18
           C54 22, 57 26, 58 29
           C54 32, 55 37, 54 41
           C49 42, 49 47, 46 51
           C42 50, 39 54, 36 56
           C33 53, 28 55, 25 57
           C23 52, 18 53, 14 53
           C15 48, 11 45, 8 43
           C11 39, 8 35, 6 31
           C10 28, 9 23, 8 19
           C13 18, 14 13, 16 9
           C20 11, 23 8, 27 5
           Z"
        fill={`url(#mg-outer-${color})`}
      />

      {/* Layer 2: Offset Intermediate Petal Ring (Interlocking Depth) */}
      <path
        d="M30 8
           C34 11, 39 12, 43 11
           C44 15, 48 18, 50 21
           C48 25, 51 29, 51 33
           C47 36, 48 40, 46 44
           C41 45, 41 49, 37 51
           C33 49, 29 51, 25 51
           C23 47, 19 47, 16 45
           C17 41, 14 38, 13 34
           C16 30, 14 26, 13 22
           C17 20, 18 16, 19 12
           C23 13, 27 11, 30 8
           Z"
        fill={`url(#mg-outer-${color})`}
        opacity="0.95"
      />

      {/* Layer 3: Mid Concentric Petals */}
      <path
        d="M30 14
           C34 16, 38 18, 41 20
           C41 24, 44 28, 44 32
           C41 35, 42 39, 39 42
           C35 43, 33 46, 29 46
           C26 44, 22 45, 19 43
           C19 39, 17 36, 17 32
           C19 28, 18 24, 20 21
           C23 20, 26 17, 30 14
           Z"
        fill={`url(#mg-inner-${color})`}
      />

      {/* Layer 4: Inner Petal Texture Ring */}
      <circle cx="30" cy="30" r="11" fill={`url(#mg-inner-${color})`} />

      {/* Layer 5: Darker Ruffled Center Core */}
      <circle cx="30" cy="30" r="6.5" fill={centerCore} />
      <circle cx="30" cy="30" r="3.5" fill={centerPip} opacity="0.9" />

      {/* Subtle Micro-Highlights on Center Ruffles */}
      <circle cx="28.5" cy="28.5" r="1.5" fill="#FEF08A" opacity="0.8" />
      <circle cx="32" cy="30" r="1" fill="#FEF08A" opacity="0.6" />
    </svg>
  );
}

/**
 * Realistic Mango Leaves (Aam ke Patte) at the garland tail
 * Vibrant emerald green with leaf-spine highlights
 */
export function MangoLeaves({ className = "", width = 36, height = 48 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="leafGradLeft" x1="12" y1="10" x2="28" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="25%" stopColor="#16A34A" />
          <stop offset="70%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
        <linearGradient id="leafGradRight" x1="48" y1="10" x2="32" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="30%" stopColor="#16A34A" />
          <stop offset="75%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#052E16" />
        </linearGradient>
      </defs>

      {/* Left Pointed Mango Leaf */}
      <path
        d="M28 6 C24 16, 10 32, 10 48 C10 64, 22 74, 27 76 C26 62, 27 34, 28 6 Z"
        fill="url(#leafGradLeft)"
      />
      {/* Left Leaf Spine */}
      <path d="M28 8 Q24 40, 27 74" stroke="#86EFAC" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* Right Pointed Mango Leaf */}
      <path
        d="M32 6 C36 16, 50 32, 50 48 C50 64, 38 74, 33 76 C34 62, 33 34, 32 6 Z"
        fill="url(#leafGradRight)"
      />
      {/* Right Leaf Spine */}
      <path d="M32 8 Q36 40, 33 74" stroke="#86EFAC" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* Knot/Binding Node at Top of Leaves */}
      <ellipse cx="30" cy="7" rx="5" ry="3" fill="#D97706" />
    </svg>
  );
}

interface HangingGarlandStringProps {
  count?: number;
  flowerSize?: number;
  className?: string;
  withLeaves?: boolean;
}

/**
 * A single vertical string of alternating yellow and saffron marigolds,
 * terminating in traditional mango leaves.
 */
export function HangingGarlandString({
  count = 8,
  flowerSize = 34,
  className = "",
  withLeaves = true,
}: HangingGarlandStringProps) {
  // Pattern: alternating yellow and orange blooms
  const colors: Array<"yellow" | "orange"> = Array.from({ length: count }, (_, i) =>
    i % 2 === 0 ? "yellow" : "orange"
  );

  return (
    <div
      className={`inline-flex flex-col items-center select-none pointer-events-none relative ${className}`}
      aria-hidden="true"
    >
      {/* Central Thread */}
      <div className="absolute top-0 bottom-4 w-[1.5px] bg-[#D97706]/40 -z-10" />

      {/* Flowers Stacked Vertically with Organic Overlap (-my-[5px]) */}
      <div className="flex flex-col items-center">
        {colors.map((color, idx) => (
          <div
            key={idx}
            className="-my-[5px] transition-transform duration-300"
            style={{
              transform: `rotate(${(idx % 3 - 1) * 6}deg)`,
            }}
          >
            <MarigoldFlower color={color} size={flowerSize} />
          </div>
        ))}
      </div>

      {/* Terminal Mango Leaves */}
      {withLeaves && (
        <div className="-mt-1 z-10">
          <MangoLeaves width={Math.round(flowerSize * 0.95)} height={Math.round(flowerSize * 1.35)} />
        </div>
      )}
    </div>
  );
}

/**
 * Complete Traditional Indian Toran System
 * Elegant draped marigold strings flanking the hero/section edges.
 * Left & right corner drops that frame the viewport without obstructing center content.
 */
export default function MarigoldToran({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute top-0 left-0 right-0 pointer-events-none select-none overflow-hidden z-20 ${className}`}
      aria-hidden="true"
    >
      {/* ========================================================
          TOP DRAPED GARLAND SWAGS (Desktop Viewport Ceiling Framing)
          ======================================================== */}
      {/* Top Left Swag */}
      <div className="hidden xl:flex absolute top-0 left-12 2xl:left-24 items-center -space-x-2 opacity-95">
        <MarigoldFlower color="orange" size={26} />
        <MarigoldFlower color="yellow" size={28} />
        <MarigoldFlower color="orange" size={30} />
        <MarigoldFlower color="yellow" size={32} />
        <MarigoldFlower color="orange" size={30} />
        <MarigoldFlower color="yellow" size={28} />
        <MarigoldFlower color="orange" size={26} />
      </div>

      {/* Top Right Swag */}
      <div className="hidden xl:flex absolute top-0 right-12 2xl:right-24 items-center -space-x-2 opacity-95">
        <MarigoldFlower color="orange" size={26} />
        <MarigoldFlower color="yellow" size={28} />
        <MarigoldFlower color="orange" size={30} />
        <MarigoldFlower color="yellow" size={32} />
        <MarigoldFlower color="orange" size={30} />
        <MarigoldFlower color="yellow" size={28} />
        <MarigoldFlower color="orange" size={26} />
      </div>

      {/* ========================================================
          LEFT CORNER MARIGOLD ARRANGEMENT (Framing Viewport Left)
          ======================================================== */}
      <div className="absolute top-0 left-2 sm:left-6 md:left-8 lg:left-12 flex items-start gap-2 sm:gap-3.5 animate-toran-sway-left origin-top">
        {/* Outer Long String (Desktop) */}
        <HangingGarlandString count={9} flowerSize={36} className="hidden sm:inline-flex" />

        {/* Primary Graceful String (Desktop / Tablet) */}
        <HangingGarlandString count={7} flowerSize={32} className="hidden sm:inline-flex" />

        {/* Mobile-Calibrated Compact String */}
        <HangingGarlandString count={5} flowerSize={24} className="sm:hidden" />

        {/* Inner Short String for Tiered Depth (Large Desktop) */}
        <HangingGarlandString count={5} flowerSize={28} className="hidden md:inline-flex" />
      </div>

      {/* ========================================================
          RIGHT CORNER MARIGOLD ARRANGEMENT (Framing Viewport Right)
          ======================================================== */}
      <div className="absolute top-0 right-2 sm:right-6 md:right-8 lg:right-12 flex items-start gap-2 sm:gap-3.5 animate-toran-sway-right origin-top">
        {/* Inner Short String for Tiered Depth (Large Desktop) */}
        <HangingGarlandString count={5} flowerSize={28} className="hidden md:inline-flex" />

        {/* Primary Graceful String (Desktop / Tablet) */}
        <HangingGarlandString count={7} flowerSize={32} className="hidden sm:inline-flex" />

        {/* Mobile-Calibrated Compact String */}
        <HangingGarlandString count={5} flowerSize={24} className="sm:hidden" />

        {/* Outer Long String (Desktop) */}
        <HangingGarlandString count={9} flowerSize={36} className="hidden sm:inline-flex" />
      </div>
    </div>
  );
}
