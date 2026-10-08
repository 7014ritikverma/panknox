import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";
import ContactExperienceSection from "@/components/home/ContactExperienceSection";
import { brandData } from "@/data/brand";

export const metadata: Metadata = {
  title: "Contact | Start a Conversation",
  description:
    "Direct conversational qualification briefing with Panknox Media Pvt. Ltd. Offices in Mandrella, Jhunjhunu and Chitrakoot, Vaishali Nagar, Jaipur, Rajasthan.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-brand-neutral relative overflow-hidden">
      <AtmosphericBackground className="pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 space-y-16">
          {/* Top Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-green/90">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Panknox // Direct channel</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-neutral leading-[1.08]">
              Start a conversation.
            </h1>

            <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed font-normal pt-1">
              We work with ambitious founders, manufacturing directors, healthcare leaders,
              and enterprise builders ready to construct an enduring marketing system.
            </p>
          </div>

          {/* Studio Dispatch Metadata Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-7 sm:p-8 rounded-3xl bg-black/40 border border-white/10 text-xs font-mono">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-brand-neutral/60 font-medium block">Official locations:</span>
                <p className="text-brand-neutral font-medium">Main: Mandrella, Jhunjhunu</p>
                <p className="text-brand-neutral font-medium">Second: Chitrakoot, Vaishali Nagar, Jaipur</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Mail className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-brand-neutral/60 font-medium block">Dispatch email:</span>
                <a
                  href={`mailto:${brandData.contact.email}`}
                  className="text-brand-neutral hover:text-brand-green transition-colors font-medium underline block"
                >
                  {brandData.contact.email}
                </a>
                <span className="text-brand-neutral/60">Direct route to principals</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Clock className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-brand-neutral/60 font-medium block">Operating rhythm:</span>
                <p className="text-brand-neutral font-medium">Monday — Friday: 10:00 — 19:00 IST</p>
                <p className="text-brand-green">Response time: under 24 hours</p>
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
