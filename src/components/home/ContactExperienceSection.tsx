"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";

const IMPROVE_OPTIONS = [
  "BRAND",
  "CONTENT",
  "MARKETING",
  "DIGITAL PRESENCE",
  "GROWTH",
  "NOT SURE YET",
];

export default function ContactExperienceSection() {
  const [selectedOption, setSelectedOption] = useState<string>("MARKETING");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="conversation-portal" className="relative overflow-hidden">
      <AtmosphericBackground className="py-36 sm:py-48">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-24">
          {/* Section Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-brand-green/80 uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>09 // CONVERSATION</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-brand-neutral leading-[0.92]">
              LET&apos;S BUILD <br />
              SOMETHING <br />
              <span className="text-brand-green">WORTH NOTICING.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed pt-2">
              Tell us what you are aiming to solve. We respond with a diagnostic point of view.
            </p>
          </div>

          {/* Minimalist Conversational Form */}
          <div className="max-w-3xl">
            {isSubmitted ? (
              <div className="p-12 sm:p-16 rounded-3xl bg-black/60 border border-brand-green/40 space-y-6 text-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-brand-green/20 border-2 border-brand-green text-brand-green flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black uppercase text-brand-neutral">
                  SIGNAL RECEIVED.
                </h3>
                <p className="text-brand-neutral/80 text-base leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="text-brand-green font-bold">{name || "Partner"}</span>.
                  Our senior strategic director in Jaipur is reviewing your briefing. We will reach out shortly via {email || "email"}.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono text-brand-gray hover:text-brand-green underline"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* 1. What are you looking to improve? */}
                <div className="space-y-4">
                  <label className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold block">
                    WHAT ARE YOU LOOKING TO IMPROVE?
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {IMPROVE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedOption(opt)}
                        data-cursor="SELECT"
                        className={`px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                          selectedOption === opt
                            ? "bg-brand-green text-brand-navy shadow-[0_0_20px_rgba(48,198,130,0.3)] scale-105"
                            : "bg-white/5 border border-white/10 text-brand-neutral/80 hover:bg-white/10"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikramaditya"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/15 text-brand-neutral placeholder:text-brand-gray/50 text-sm focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vikram@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/15 text-brand-neutral placeholder:text-brand-gray/50 text-sm focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold block">
                      COMPANY *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Apex Industrial"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/15 text-brand-neutral placeholder:text-brand-gray/50 text-sm focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-gray">
                    CONFIDENTIAL BRIEFING // JAIPUR STUDIO
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="TRANSMIT"
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-brand-green text-brand-navy font-bold text-xs tracking-widest uppercase hover:bg-brand-green/90 transition-all shadow-[0_0_30px_rgba(48,198,130,0.35)] disabled:opacity-50 hover:scale-105"
                  >
                    <span>{isSubmitting ? "TRANSMITTING..." : "LET'S FIGURE IT OUT."}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}
