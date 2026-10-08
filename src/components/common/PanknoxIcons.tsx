import React from "react";

interface IconProps {
  className?: string;
  active?: boolean;
  size?: number;
}

/* =========================================================================
   1. CAPABILITY ICONS (Requirement 7)
   Style: Minimal, Geometric, Precise, Editorial.
   Default: #04262F / #DFE5E2, Active: #30C682
   ========================================================================= */

// Strategy: direction / path / compass concept
export function StrategyIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <circle cx="12" cy="12" r="9" strokeOpacity={active ? "1" : "0.7"} />
      <polygon
        points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
        fill={active ? "rgba(48, 198, 130, 0.15)" : "none"}
      />
      <circle cx="12" cy="12" r="1.5" fill={strokeColor} />
    </svg>
  );
}

// Creative & content: layers / frame / creative construction
export function CreativeIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <rect
        x="3"
        y="3"
        width="13"
        height="13"
        rx="2"
        strokeOpacity={active ? "1" : "0.7"}
        fill={active ? "rgba(48, 198, 130, 0.1)" : "none"}
      />
      <path d="M8 8h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8z" />
      <line x1="8" y1="13" x2="16" y2="13" strokeDasharray="2 2" strokeOpacity="0.6" />
    </svg>
  );
}

// Digital presence: interface / screen / connected structure
export function PresenceIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2"
        fill={active ? "rgba(48, 198, 130, 0.1)" : "none"}
      />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="9" x2="9" y2="18" />
      <circle cx="6" cy="6.5" r="0.75" fill={strokeColor} />
      <circle cx="8.5" cy="6.5" r="0.75" fill={strokeColor} />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  );
}

// Growth: signal / expansion / connected growth
export function GrowthIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <path d="M4 19 L10 13 L14 17 L20 7" />
      <polyline points="15 7 20 7 20 12" />
      <circle cx="4" cy="19" r="1.5" fill={strokeColor} />
      <circle cx="10" cy="13" r="1.5" fill={strokeColor} />
      <circle cx="14" cy="17" r="1.5" fill={strokeColor} />
      <circle cx="20" cy="7" r="1.5" fill={strokeColor} />
    </svg>
  );
}

/* =========================================================================
   2. PANKNOX SYSTEM 7-STAGE ICONS (Requirement 8)
   Understand, Find, Think, Build, Distribute, Learn, Evolve
   ========================================================================= */

// Understand: observation / eye / discovery
export function UnderstandIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" fill={active ? "rgba(48, 198, 130, 0.2)" : "none"} />
      <circle cx="12" cy="12" r="1" fill={strokeColor} />
    </svg>
  );
}

// Find: focus / target
export function FindIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
      <circle cx="12" cy="12" r="4" fill={active ? "rgba(48, 198, 130, 0.2)" : "none"} />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </svg>
  );
}

// Think: connected ideas / nodes
export function ThinkIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <circle cx="12" cy="5" r="2.5" fill={active ? "rgba(48, 198, 130, 0.25)" : "none"} />
      <circle cx="6" cy="17" r="2.5" fill={active ? "rgba(48, 198, 130, 0.25)" : "none"} />
      <circle cx="18" cy="17" r="2.5" fill={active ? "rgba(48, 198, 130, 0.25)" : "none"} />
      <line x1="12" y1="7.5" x2="6" y2="14.5" />
      <line x1="12" y1="7.5" x2="18" y2="14.5" />
      <line x1="8.5" y1="17" x2="15.5" y2="17" strokeDasharray="2 2" />
      <circle cx="12" cy="13" r="1" fill={strokeColor} />
    </svg>
  );
}

// Build: layers / structure
export function BuildIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <polygon points="12 3 21 8 12 13 3 8 12 3" fill={active ? "rgba(48, 198, 130, 0.2)" : "none"} />
      <polyline points="3 12 12 17 21 12" />
      <polyline points="3 16 12 21 21 16" />
    </svg>
  );
}

// Distribute: outward movement / signal
export function DistributeIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <circle cx="12" cy="12" r="2" fill={strokeColor} />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
      <path d="M7.76 16.24a6 6 0 0 1 0-8.49" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
    </svg>
  );
}

// Learn: feedback / analytics
export function LearnIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <rect x="3" y="14" width="4" height="7" rx="1" fill={active ? "rgba(48, 198, 130, 0.2)" : "none"} />
      <rect x="10" y="9" width="4" height="12" rx="1" fill={active ? "rgba(48, 198, 130, 0.2)" : "none"} />
      <rect x="17" y="4" width="4" height="17" rx="1" fill={active ? "rgba(48, 198, 130, 0.3)" : "none"} />
      <polyline points="5 11 12 6 19 3" strokeDasharray="2 2" strokeOpacity="0.7" />
    </svg>
  );
}

// Evolve: transformation / circular progression
export function EvolveIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      <path d="M21.5 2v6h-6" />
      <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.19" />
      <circle cx="12" cy="12" r="3" fill={active ? "rgba(48, 198, 130, 0.25)" : "none"} />
    </svg>
  );
}

/* =========================================================================
   3. INDUSTRY ICONS (Requirement 9)
   Manufacturing, Healthcare, Real estate, Interiors & furniture, Hospitality
   ========================================================================= */

// Manufacturing: Product → understanding → trust → enquiry
export function ManufacturingIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      {/* Precision gear & component geometry */}
      <circle cx="12" cy="12" r="4" fill={active ? "rgba(48, 198, 130, 0.2)" : "none"} />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.05-6.95l-2.12 2.12m-9.66 9.66l-2.12 2.12m0-13.9l2.12 2.12m9.66 9.66l2.12 2.12" />
    </svg>
  );
}

// Healthcare: Education → trust → confidence → appointment
export function HealthcareIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      {/* Clinical cross with subtle pulse line */}
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        strokeOpacity={active ? "1" : "0.7"}
        fill={active ? "rgba(48, 198, 130, 0.1)" : "none"}
      />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <circle cx="12" cy="12" r="1.5" fill={strokeColor} />
    </svg>
  );
}

// Real estate: Attention → interest → site visit → enquiry
export function RealEstateIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      {/* Architectural elevation & spatial form */}
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" fill={active ? "rgba(48, 198, 130, 0.1)" : "none"} />
      <rect x="9" y="13" width="6" height="8" />
      <line x1="9" y1="9" x2="10" y2="9" />
      <line x1="14" y1="9" x2="15" y2="9" />
    </svg>
  );
}

// Interiors & furniture: Inspiration → desire → trust → enquiry
export function InteriorsIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      {/* Precision architectural chair & joinery */}
      <rect x="5" y="10" width="14" height="4" rx="1" fill={active ? "rgba(48, 198, 130, 0.2)" : "none"} />
      <path d="M7 10V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
      <line x1="6" y1="14" x2="6" y2="21" />
      <line x1="18" y1="14" x2="18" y2="21" />
      <line x1="6" y1="17" x2="18" y2="17" strokeDasharray="2 2" strokeOpacity="0.6" />
    </svg>
  );
}

// Hospitality: Experience → desire → trust → booking
export function HospitalityIcon({ className = "w-6 h-6", active = false, size = 24 }: IconProps) {
  const strokeColor = active ? "#30C682" : "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-300 ${className}`}
    >
      {/* Sensory archway & welcoming lantern glow */}
      <path
        d="M4 21V11a8 8 0 0 1 16 0v10"
        fill={active ? "rgba(48, 198, 130, 0.12)" : "none"}
      />
      <path d="M2 21h20" />
      <circle cx="12" cy="11" r="2.5" fill={active ? "rgba(48, 198, 130, 0.3)" : "none"} />
      <line x1="12" y1="13.5" x2="12" y2="17" />
    </svg>
  );
}
