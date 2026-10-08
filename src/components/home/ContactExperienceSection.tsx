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
    // Simulate instantaneous local processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="conversation-portal" className="py-24 sm:py-32 bg-brand-navy border-t border-brand-neutral/10 relative overflow-hidden text-brand-neutral">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>10 // CONVERSATION PORTAL</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-tight">
            WHAT ARE YOU <br />
            <span className="text-brand-green">TRYING TO BUILD?</span>
          </h2>

          <p className="text-lg sm:text-xl text-brand-neutral/80 leading-relaxed max-w-2xl">
            This is not standard paperwork. This is a qualification briefing designed to clarify
            what your business needs before we open a direct dialogue.
          </p>
        </div>

        {/* Conversational Form Chamber */}
        <div className="bg-brand-navy border border-brand-neutral/20 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          {isSubmitted ? (
            /* Success Response State */
            <div className="py-16 text-center space-y-6 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green text-brand-green flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-brand-green uppercase tracking-widest">
                  COMMUNICATION CHANNEL INITIALIZED
                </span>
                <h3 className="text-3xl font-black uppercase text-brand-neutral">
                  SIGNAL RECEIVED.
                </h3>
                <p className="text-brand-neutral/80 text-sm leading-relaxed">
                  Thank you, <span className="font-semibold text-brand-green">{formData.name || "Partner"}</span>.
                  Our senior strategic director in Jaipur is reviewing your commercial parameters.
                  We will contact you via {formData.email || "email"} and {formData.phone || "phone"} shortly.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-black/40 border border-brand-neutral/15 text-xs font-mono text-brand-gray text-left space-y-1">
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
                className="text-xs font-mono text-brand-neutral/60 hover:text-brand-green underline"
              >
                SUBMIT ANOTHER BRIEF
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Part 1: WHAT DO YOU NEED? */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
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
                            ? "bg-brand-green/20 border-brand-green text-brand-neutral font-semibold shadow-[0_0_15px_rgba(48,198,130,0.2)]"
                            : "bg-brand-navy/60 border-brand-neutral/15 text-brand-neutral/80 hover:border-brand-neutral/30 hover:bg-white/5"
                        }`}
                      >
                        <span>{option}</span>
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ml-2 ${
                            isSelected
                              ? "bg-brand-green border-brand-green text-brand-navy"
                              : "border-brand-neutral/30"
                          }`}
                        >
                          {isSelected && <span className="text-[10px] font-bold">✓</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Part 2: Business & Contact Parameters */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-brand-neutral/10 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
                    STEP 02 // PARAMETERS &amp; CONTEXT
                  </span>
                  <span className="text-xs font-mono text-brand-gray">
                    COMMERCIAL DIAGNOSTIC
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-neutral/80 block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Singh"
                      className="w-full px-4 py-3 rounded bg-black/40 border border-brand-neutral/20 text-brand-neutral placeholder:text-brand-neutral/30 text-sm focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-neutral/80 block">
                      COMPANY / VENTURE *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Precision Engineering"
                      className="w-full px-4 py-3 rounded bg-black/40 border border-brand-neutral/20 text-brand-neutral placeholder:text-brand-neutral/30 text-sm focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-neutral/80 block">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded bg-black/40 border border-brand-neutral/20 text-brand-neutral placeholder:text-brand-neutral/30 text-sm focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-neutral/80 block">
                      BUSINESS EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@apexengineering.com"
                      className="w-full px-4 py-3 rounded bg-black/40 border border-brand-neutral/20 text-brand-neutral placeholder:text-brand-neutral/30 text-sm focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Industry */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-neutral/80 block">
                      SECTOR / INDUSTRY
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-black/40 border border-brand-neutral/20 text-brand-neutral text-sm focus:border-brand-green focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-brand-navy">Select sector...</option>
                      <option value="Manufacturing" className="bg-brand-navy">Manufacturing &amp; Industrial</option>
                      <option value="Healthcare" className="bg-brand-navy">Healthcare &amp; Clinical Services</option>
                      <option value="Real Estate" className="bg-brand-navy">Real Estate &amp; Developments</option>
                      <option value="Interiors & Furniture" className="bg-brand-navy">Interiors &amp; Furniture</option>
                      <option value="Hospitality" className="bg-brand-navy">Hospitality &amp; Boutique Travel</option>
                      <option value="Jewellery & Luxury" className="bg-brand-navy">Jewellery &amp; Luxury Craft</option>
                      <option value="Other High-Value B2B/B2C" className="bg-brand-navy">Other Enterprise Business</option>
                    </select>
                  </div>

                  {/* Approximate monthly marketing investment */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-brand-neutral/80 block">
                      MONTHLY MARKETING INVESTMENT
                    </label>
                    <select
                      value={formData.investment}
                      onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-black/40 border border-brand-neutral/20 text-brand-neutral text-sm focus:border-brand-green focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-brand-navy">Approximate monthly commitment...</option>
                      {INVESTMENT_TIERS.map((tier) => (
                        <option key={tier} value={tier} className="bg-brand-navy">
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* What are you trying to improve? */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-brand-neutral/80 block">
                    WHAT ARE YOU TRYING TO IMPROVE?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.improvementGoal}
                    onChange={(e) => setFormData({ ...formData, improvementGoal: e.target.value })}
                    placeholder="Describe your current bottleneck: where does perception fail, what is missing from your distribution, or what commercial outcome is essential?"
                    className="w-full px-4 py-3 rounded bg-black/40 border border-brand-neutral/20 text-brand-neutral placeholder:text-brand-neutral/30 text-sm focus:border-brand-green focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Final CTA Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-brand-neutral/10">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  <span>CONFIDENTIAL COMMERCIAL BRIEFING // STRICT PRIVACY</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="TRANSMIT"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded bg-brand-green text-brand-navy font-black text-sm tracking-widest uppercase transition-all duration-200 hover:bg-brand-green/90 shadow-[0_0_25px_rgba(48,198,130,0.35)] disabled:opacity-50"
                >
                  <span>{isSubmitting ? "TRANSMITTING BRIEF..." : "LET'S FIGURE IT OUT."}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
