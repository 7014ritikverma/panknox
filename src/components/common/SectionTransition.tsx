interface SectionTransitionProps {
  label?: string;
  theme?: "dark-to-light" | "light-to-dark";
}

export default function SectionTransition({
  label = "System phase shift",
  theme = "dark-to-light",
}: SectionTransitionProps) {
  const isDarkToLight = theme === "dark-to-light";

  return (
    <div
      className={`relative w-full overflow-hidden py-3 ${
        isDarkToLight ? "bg-brand-navy" : "bg-white"
      }`}
    >
      {/* 1px Divider Line with Traveling Green Signal */}
      <div className="relative w-full h-[1px] bg-brand-gray/25 overflow-hidden">
        <div className="animate-signal-travel" />
      </div>

      {/* Floating Center or Right Chapter Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
          <span
            className={`text-[11px] font-mono tracking-wider ${
              isDarkToLight ? "text-brand-gray" : "text-brand-navy/60"
            }`}
          >
            {label}
          </span>
        </div>

        <span
          className={`text-[11px] font-mono tracking-wider ${
            isDarkToLight ? "text-brand-green/80" : "text-brand-green"
          }`}
        >
          Signal protocol · Active
        </span>
      </div>
    </div>
  );
}
