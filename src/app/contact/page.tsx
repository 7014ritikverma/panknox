import type { Metadata } from "next";
import { Mail, MapPin, Globe, Terminal, ShieldCheck, Clock } from "lucide-react";
import ContactExperienceSection from "@/components/home/ContactExperienceSection";
import { brandData } from "@/data/brand";

export const metadata: Metadata = {
  title: "Start A Conversation | Qualification Portal",
  description:
    "Direct conversational qualification briefing with Panknox Media Pvt. Ltd. Studio HQ: Jaipur, Rajasthan, India.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-navy min-h-screen text-brand-neutral relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Top Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>COMMUNICATION TERMINAL // JAIPUR STUDIO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-none">
            START A <br />
            <span className="text-brand-green">CONVERSATION.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-3xl">
            We work with ambitious founders, manufacturing directors, healthcare leaders,
            and real estate developers ready to build a serious marketing engine.
          </p>
        </div>

        {/* Studio Dispatch Metadata Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl bg-black/40 border border-brand-neutral/15 text-xs font-mono">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-brand-gray uppercase block">STUDIO LOCATION:</span>
              <p className="text-brand-neutral font-medium">{brandData.location.address}</p>
              <p className="text-brand-green">{brandData.location.coordinates}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-brand-gray uppercase block">DISPATCH EMAIL:</span>
              <a
                href={`mailto:${brandData.contact.email}`}
                className="text-brand-neutral hover:text-brand-green transition-colors font-medium underline block"
              >
                {brandData.contact.email}
              </a>
              <span className="text-brand-gray">DIRECT ROUTE TO PRINCIPALS</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-brand-gray uppercase block">OPERATING PROTOCOL:</span>
              <p className="text-brand-neutral font-medium">Monday — Friday: 10:00 — 19:00 IST</p>
              <p className="text-brand-green">RESPONSE TIME: UNDER 24 HOURS</p>
            </div>
          </div>
        </div>

        {/* The Conversational Experience */}
        <ContactExperienceSection />
      </div>
    </div>
  );
}
