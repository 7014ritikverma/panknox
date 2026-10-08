import Image from "next/image";

interface PanknoxLogoProps {
  variant?: "dark" | "light"; // "dark" = dark logo for light bg; "light" = light logo for dark bg
  className?: string;
  height?: number;
  priority?: boolean;
}

export default function PanknoxLogo({
  variant = "light",
  className = "",
  height = 28,
  priority = false,
}: PanknoxLogoProps) {
  // Official aspect ratio from the provided assets: 300px width / 83px height = ~3.614
  const width = Math.round(height * (300 / 83));
  const src =
    variant === "light"
      ? "/panknox-logo-light.png"
      : "/panknox-logo-dark.png";

  const alt =
    variant === "light"
      ? "Panknox Media — Light Logo"
      : "Panknox Media — Dark Logo";

  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto object-contain transition-opacity duration-300"
        style={{ maxHeight: height }}
      />
    </div>
  );
}
