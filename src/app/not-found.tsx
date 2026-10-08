import Link from "next/link";
import { AlertTriangle, ArrowRight, Home, Layers, Radio } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-navy text-brand-neutral flex items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10 py-16">
        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-400/10 border border-red-400/30 text-red-400 text-xs font-mono uppercase tracking-widest">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>ERROR 404 // SIGNAL UNRESOLVED</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tight text-brand-neutral font-mono">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
            SYSTEM COORDINATES NOT FOUND.
          </h2>
          <p className="text-base text-brand-neutral/70 max-w-lg mx-auto">
            The requested route or dispatch node does not exist within the Panknox operating system.
            Re-calibrate your signal below.
          </p>
        </div>

        {/* Quick Recovery Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-brand-green text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-green/90 transition-all shadow-[0_0_20px_rgba(48,198,130,0.3)]"
          >
            <Home className="w-4 h-4" />
            <span>RETURN TO HOME</span>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-brand-neutral/20 text-brand-neutral hover:bg-brand-neutral/10 font-medium text-xs uppercase tracking-wider transition-colors"
          >
            <Layers className="w-4 h-4 text-brand-green" />
            <span>EXPLORE WORK</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-brand-neutral/20 text-brand-neutral hover:bg-brand-neutral/10 font-medium text-xs uppercase tracking-wider transition-colors"
          >
            <Radio className="w-4 h-4 text-brand-green" />
            <span>START A CONVERSATION</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-brand-neutral/10 text-xs font-mono text-brand-gray">
          <span>JAIPUR STUDIO // 26.9124° N, 75.7873° E</span>
        </div>
      </div>
    </div>
  );
}
