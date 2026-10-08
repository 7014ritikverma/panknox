"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";

const HELP_OPTIONS = [
  "Brand",
  "Content",
  "Social media",
  "Website",
  "Marketing",
  "Growth",
  "Not sure yet",
];

export default function ContactExperienceSection() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [helpArea, setHelpArea] = useState<string>("Brand");
  const [challenge, setChallenge] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleOptionSelect = (option: string) => {
    setHelpArea(option);
    setCurrentStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="conversation-portal" className="relative overflow-hidden">
      <AtmosphericBackground className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-green/90">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>09 // Conversation</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-neutral leading-[1.08]">
              Let&apos;s talk.
            </h2>

            <p className="text-lg sm:text-xl text-brand-neutral/80 font-normal max-w-2xl leading-relaxed pt-1">
              Tell us what you&apos;re trying to improve. We&apos;ll figure out what makes sense.
            </p>
          </div>

          {/* Minimal Progressive Disclosure Container */}
          <div className="max-w-2xl bg-black/50 border border-white/10 rounded-3xl p-7 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Traveling Signal Progress Indicator */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 overflow-hidden">
              <div
                className="h-full bg-brand-green transition-all duration-500 ease-out shadow-[0_0_12px_#30C682]"
                style={{
                  width: isSubmitted ? "100%" : `${(currentStep / 3) * 100}%`,
                }}
              />
            </div>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-5 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-brand-green/20 border border-brand-green text-brand-green flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-neutral tracking-tight">
                  Signal received.
                </h3>
                <p className="text-sm sm:text-base text-brand-neutral/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-brand-green font-semibold">{name || "Partner"}</span>. We&apos;re reviewing your briefing and will get back to you shortly at {email || "your email"}.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                      setChallenge("");
                    }}
                    className="text-xs font-mono text-brand-green hover:underline"
                  >
                    Start a new note
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Step Marker */}
                <div className="flex items-center justify-between text-xs font-mono text-brand-neutral/60 border-b border-white/10 pb-4">
                  <span>Step 0{currentStep} of 03</span>
                  <span className="text-brand-green">
                    {currentStep === 1 && "Select focus area"}
                    {currentStep === 2 && "Core objective"}
                    {currentStep === 3 && "Your coordinates"}
                  </span>
                </div>

                {/* STEP 1: What do you need help with? */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-neutral tracking-tight">
                      What do you need help with?
                    </h3>

                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {HELP_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleOptionSelect(opt)}
                          className={`px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                            helpArea === opt
                              ? "bg-brand-green text-brand-navy font-semibold shadow-[0_0_20px_rgba(48,198,130,0.3)] scale-[1.02]"
                              : "bg-white/5 border border-white/10 text-brand-neutral/80 hover:bg-white/10 hover:text-brand-neutral"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: What's your biggest challenge? */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-neutral tracking-tight">
                        What&apos;s your biggest challenge?
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-neutral/60">
                        Focus: <span className="text-brand-green font-medium">{helpArea}</span>
                      </p>
                    </div>

                    <textarea
                      rows={3}
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      placeholder="e.g. Our product capability is exceptional, but our digital presence is fragmented and competitors are winning perception..."
                      className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/15 text-brand-neutral placeholder:text-brand-neutral/40 text-sm focus:border-brand-green focus:outline-none transition-colors resize-none leading-relaxed"
                    />

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-neutral/60 hover:text-brand-neutral transition-colors"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-green text-brand-navy font-semibold text-xs sm:text-sm hover:bg-brand-green/90 transition-all shadow-sm"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Your details */}
                {currentStep === 3 && (
                  <form onSubmit={handleFinalSubmit} className="space-y-6 animate-fadeIn">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-neutral tracking-tight">
                      Your details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-brand-neutral/60 block">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-brand-neutral text-sm focus:border-brand-green focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-brand-neutral/60 block">
                          Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Your business name"
                          className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-brand-neutral text-sm focus:border-brand-green focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-brand-neutral/60 block">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-brand-neutral text-sm focus:border-brand-green focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-brand-neutral/60 block">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91"
                          className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-brand-neutral text-sm focus:border-brand-green focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-neutral/60 hover:text-brand-neutral transition-colors"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-green text-brand-navy font-semibold text-xs sm:text-sm hover:bg-brand-green/90 transition-all shadow-[0_0_25px_rgba(48,198,130,0.3)] disabled:opacity-50"
                      >
                        <span>{isSubmitting ? "Starting..." : "Start the conversation"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </AtmosphericBackground>
    </section>
  );
}

