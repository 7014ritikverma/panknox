"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Disable on touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return () => mediaQuery.removeEventListener("change", handleMotionChange);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over element with data-cursor attribute
      const target = (e.target as HTMLElement).closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovering(true);
      } else {
        const interactive = (e.target as HTMLElement).closest("a, button, input, textarea, select");
        if (interactive) {
          setCursorText("");
          setIsHovering(true);
        } else {
          setCursorText("");
          setIsHovering(false);
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, [isVisible]);

  if (isReducedMotion || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
      }}
    >
      {/* Central Signal Point */}
      <div
        className={`w-2.5 h-2.5 rounded-full bg-brand-green -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
          isHovering ? "scale-150 shadow-[0_0_12px_#30C682]" : "opacity-90"
        }`}
      />

      {/* Trailing Ring / Cursor Pill with dynamic text */}
      {cursorText ? (
        <div className="absolute top-3 left-3 bg-brand-navy border border-brand-green/80 text-brand-neutral text-[10px] tracking-widest font-mono uppercase px-2.5 py-1 rounded shadow-lg backdrop-blur-md whitespace-nowrap flex items-center gap-1.5 animate-fadeIn">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
          <span>{cursorText}</span>
        </div>
      ) : isHovering ? (
        <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full border border-brand-green/60 animate-pulse pointer-events-none" />
      ) : null}
    </div>
  );
}
