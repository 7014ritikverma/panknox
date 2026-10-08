"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Send, Terminal, Sparkles, ShieldCheck } from "lucide-react";
import { brandData } from "@/data/brand";

const NEED_OPTIONS = [
  "Build a stronger digital presence",
  "Improve social media",
  "Generate more enquiries",
  "Build a brand",
  "Launch something",
  "Fix our marketing",
  "Create better content",
  "Not sure yet",
];

const INVESTMENT_TIERS = [
  "₹75,000 – ₹1,50,000 / month",
  "₹1,50,000 – ₹3,00,000 / month",
  "₹3,00,000 – ₹6,00,000 / month",
  "₹6,00,000+ / month (Enterprise & Multi-Plant)",
  "Strategic Single-Sprint Project",
];

export default function ContactExperienceSection() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    investment: "",
    improvementGoal: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleNeed = (option: string) => {
    if (selectedNeeds.includes(option)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== option));
    } else {
      setSelectedNeeds([...selectedNeeds, option]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="conversation-portal"
      className="py-28 sm:py-36 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>09 // CONVERSATION PORTAL</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-brand-neutral leading-[0.95]">
            WHAT ARE YOU <br />
            <span className="text-brand-green">TRYING TO BUILD?</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-2xl font-normal">
            This is not standard paperwork. This is a conversational qualification briefing
            designed to clarify your commercial parameters before we open a direct dialogue.
          </p>
        </div>

        {/* Transition into Clean High-Contrast White Qualification Chamber */}
        <div className="bg-brand-white text-brand-navy rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative border-2 border-brand-green/40">
          {isSubmitted ? (
            /* Success Response State */
            <div className="py-16 text-center space-y-6 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-brand-green/20 border-2 border-brand-green text-brand-navy flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-brand-navy" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-brand-green uppercase tracking-widest font-bold">
                  COMMUNICATION CHANNEL INITIALIZED
                </span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase text-brand-navy">
                  SIGNAL RECEIVED.
                </h3>
                <p className="text-brand-gray text-base leading-relaxed">
                  Thank you, <span className="font-bold text-brand-navy">{formData.name || "Partner"}</span>.
                  Our senior strategic director in Jaipur is reviewing your commercial parameters.
                  We will contact you via {formData.email || "email"} and {formData.phone || "phone"} shortly.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-neutral-surface border border-brand-neutral-border text-xs font-mono text-brand-navy text-left space-y-1">
                <p className="text-brand-green font-bold uppercase">BRIEF SUMMARY:</p>
                <p>COMPANY: {formData.company || "CONFIDENTIAL"}</p>
                <p>SELECTED OBJECTIVES: {selectedNeeds.join(", ") || "General Strategic Audit"}</p>
                <p>STATUS: DIRECT ROUTING TO CREATIVE OPERATING UNIT</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedNeeds([]);
                  setFormData({
                    name: "",
                    company: "",
                    phone: "",
                    email: "",
                    industry: "",
                    investment: "",
                    improvementGoal: "",
                  });
                }}
                className="text-xs font-mono text-brand-gray hover:text-brand-navy underline font-bold"
              >
                SUBMIT ANOTHER BRIEF
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Part 1: WHAT DO YOU NEED? */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-brand-navy/10 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
                    STEP 01 // WHAT DO YOU NEED?
                  </span>
                  <span className="text-xs font-mono text-brand-gray">
                    SELECT ALL THAT APPLY
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {NEED_OPTIONS.map((option) => {
                    const isSelected = selectedNeeds.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleNeed(option)}
                        data-cursor="SELECT"
                        className={`p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-brand-navy text-white border-brand-navy font-semibold shadow-md"
                            : "bg-brand-neutral-surface text-brand-navy border-brand-neutral-border hover:border-brand-navy/40"
                        }`}
                      >
                        <span>{option}</span>
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ml-2 ${
                            isSelected
                              ? "bg-brand-green border-brand-green text-brand-navy font-bold"
                              : "border-brand-navy/30"
                          }`}
                        >
                          {isSelected && <span className="text-[10px]">✓</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Part 2: Business & Contact Parameters */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-brand-navy/10 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
                    STEP 02 // PARAMETERS &amp; CONTEXT
                  </span>
                  <span className="text-xs font-mono text-brand-gray">
                    COMMERCIAL DIAGNOSTIC
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-navy font-bold block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Singh"
                      className="w-full px-4 py-3 rounded-xl bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy placeholder:text-brand-gray/60 text-sm focus:border-brand-navy focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-navy font-bold block">
                      COMPANY / VENTURE *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Precision Engineering"
                      className="w-full px-4 py-3 rounded-xl bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy placeholder:text-brand-gray/60 text-sm focus:border-brand-navy focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-navy font-bold block">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy placeholder:text-brand-gray/60 text-sm focus:border-brand-navy focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-navy font-bold block">
                      BUSINESS EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@apexengineering.com"
                      className="w-full px-4 py-3 rounded-xl bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy placeholder:text-brand-gray/60 text-sm focus:border-brand-navy focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Industry */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-navy font-bold block">
                      SECTOR / INDUSTRY
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy text-sm focus:border-brand-navy focus:outline-none transition-colors"
                    >
                      <option value="">Select sector...</option>
                      <option value="Manufacturing">Manufacturing &amp; Industrial</option>
                      <option value="Healthcare">Healthcare &amp; Clinical Services</option>
                      <option value="Real Estate">Real Estate &amp; Developments</option>
                      <option value="Interiors & Furniture">Interiors &amp; Furniture</option>
                      <option value="Hospitality">Hospitality &amp; Boutique Travel</option>
                      <option value="Jewellery & Luxury">Jewellery &amp; Luxury Craft</option>
                      <option value="Other High-Value B2B/B2C">Other Enterprise Business</option>
                    </select>
                  </div>

                  {/* Approximate monthly marketing investment */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-navy font-bold block">
                      MONTHLY MARKETING INVESTMENT
                    </label>
                    <select
                      value={formData.investment}
                      onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy text-sm focus:border-brand-navy focus:outline-none transition-colors"
                    >
                      <option value="">Approximate monthly commitment...</option>
                      {INVESTMENT_TIERS.map((tier) => (
                        <option key={tier} value={tier}>
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* What are you trying to improve? */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-brand-navy font-bold block">
                    WHAT ARE YOU TRYING TO IMPROVE?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.improvementGoal}
                    onChange={(e) => setFormData({ ...formData, improvementGoal: e.target.value })}
                    placeholder="Describe your current commercial bottleneck: where does perception fail, what is missing from your distribution, or what outcome is essential?"
                    className="w-full px-4 py-3 rounded-xl bg-brand-neutral-surface border border-brand-neutral-border text-brand-navy placeholder:text-brand-gray/60 text-sm focus:border-brand-navy focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Final CTA Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-brand-navy/10">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  <span>CONFIDENTIAL COMMERCIAL BRIEFING // STRICT PRIVACY</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="TRANSMIT"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-brand-navy text-white font-black text-sm tracking-widest uppercase transition-all duration-200 hover:bg-brand-navy/90 shadow-xl disabled:opacity-50"
                >
                  <span>{isSubmitting ? "TRANSMITTING BRIEF..." : "LET'S FIGURE IT OUT."}</span>
                  <ArrowRight className="w-4 h-4 text-brand-green" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
