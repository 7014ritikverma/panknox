import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";
import ContactExperienceSection from "@/components/home/ContactExperienceSection";
import { brandData } from "@/data/brand";

export const metadata: Metadata = {
  title: "Start A Conversation | Qualification Portal",
  description:
    "Direct conversational qualification briefing with Panknox Media Pvt. Ltd. Studio HQ: Jaipur, Rajasthan, India.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-brand-neutral relative overflow-hidden">
      <AtmosphericBackground className="pt-36 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
          {/* Top Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-green/80 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>COMMUNICATION TERMINAL // JAIPUR STUDIO</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-brand-neutral leading-[0.92]">
              START A <br />
              <span className="text-brand-green">CONVERSATION.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-brand-neutral/80 leading-relaxed max-w-2xl font-normal">
              We work with ambitious founders, manufacturing directors, healthcare leaders,
              and real estate developers ready to build an enduring marketing engine.
            </p>
          </div>

          {/* Studio Dispatch Metadata Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-black/40 border border-white/10 text-xs font-mono">
            <div className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-brand-gray uppercase font-bold block">STUDIO LOCATION:</span>
                <p className="text-brand-neutral font-medium">{brandData.location.address}</p>
                <p className="text-brand-green">{brandData.location.coordinates}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-brand-gray uppercase font-bold block">DISPATCH EMAIL:</span>
                <a
                  href={`mailto:${brandData.contact.email}`}
                  className="text-brand-neutral hover:text-brand-green transition-colors font-medium underline block"
                >
                  {brandData.contact.email}
                </a>
                <span className="text-brand-gray">DIRECT ROUTE TO PRINCIPALS</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-brand-gray uppercase font-bold block">OPERATING PROTOCOL:</span>
                <p className="text-brand-neutral font-medium">Monday — Friday: 10:00 — 19:00 IST</p>
                <p className="text-brand-green">RESPONSE TIME: UNDER 24 HOURS</p>
              </div>
            </div>
          </div>

          {/* The Conversational Experience */}
          <ContactExperienceSection />
        </div>
      </AtmosphericBackground>
    </div>
  );
}
