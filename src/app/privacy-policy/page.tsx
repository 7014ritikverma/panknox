import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Panknox Media Pvt. Ltd.",
  description:
    "Official Privacy Policy of Panknox Media Pvt. Ltd. Detailing data protection, inquiry information, and user rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-white text-brand-navy min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-gray hover:text-brand-green transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return home</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 border-b border-brand-navy/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-green/10 border border-brand-green/30 text-brand-navy text-xs font-mono">
            <Shield className="w-3.5 h-3.5 text-brand-green" />
            <span>Legal notice · Data governance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-navy">
            Privacy policy
          </h1>

          <p className="text-sm sm:text-base text-brand-gray">
            Effective date: October 2026 · Panknox Media Pvt. Ltd.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm sm:text-base text-brand-gray leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              1. Overview
            </h2>
            <p>
              Panknox Media Pvt. Ltd. (&ldquo;Panknox&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates this website to communicate our creative and performance marketing services. We are dedicated to safeguarding the privacy and personal data of our visitors, prospective clients, and partners. This policy outlines how we collect, handle, and protect your information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              2. Information we collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when submitting project briefs, scheduling diagnostic calls, or reaching out via email or conversational forms:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-brand-navy">Contact details:</strong> Your name, business email address, phone number, and company name.
              </li>
              <li>
                <strong className="text-brand-navy">Project information:</strong> Business details, commercial objectives, budget parameters, and operational challenges submitted via our contact forms.
              </li>
              <li>
                <strong className="text-brand-navy">Technical &amp; usage data:</strong> Anonymized interaction metrics, browser type, device information, and pages visited, collected through standard web analytics to optimize site performance.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              3. Purpose of data use
            </h2>
            <p>
              We process your data strictly for legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To evaluate and respond to your project inquiries and diagnostic briefings.</li>
              <li>To prepare strategic proposals and service agreements tailored to your business.</li>
              <li>To execute contracted creative, digital, and marketing deliverables.</li>
              <li>To maintain website security and optimize user experience.</li>
            </ul>
            <p className="pt-2 font-medium text-brand-navy">
              We never sell, rent, or trade your personal or business information to third-party data brokers or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              4. Data protection &amp; confidentiality
            </h2>
            <p>
              We apply strict administrative and technical safeguards to preserve data integrity and prevent unauthorized access. All digital transmissions through this website are encrypted via SSL/TLS. Project briefs and proprietary information shared with us are treated with strict professional confidentiality. Mutual Non-Disclosure Agreements (NDAs) are honored upon request prior to strategic discovery.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              5. Third-party tools &amp; infrastructure
            </h2>
            <p>
              We utilize trusted operational service providers for secure hosting, performance monitoring, and business communications. These providers process data strictly under confidentiality agreements and compliance standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              6. Your data rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request deletion of your information from our communications systems at any time. To exercise these rights, email us directly at <a href="mailto:info@panknox.com" className="text-brand-green font-semibold underline">info@panknox.com</a>.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-brand-navy/10">
            <h2 className="text-xl font-bold text-brand-navy">
              7. Contact &amp; official locations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm font-mono pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAF9] border border-brand-navy/10 space-y-1.5">
                <span className="text-brand-green font-bold block">Jaipur location</span>
                <p className="text-brand-navy">Chitrakoot, Vaishali Nagar</p>
                <p className="text-brand-gray">Jaipur, Rajasthan</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAF9] border border-brand-navy/10 space-y-1.5">
                <span className="text-brand-green font-bold block">Jhunjhunu location</span>
                <p className="text-brand-navy">Mandrella</p>
                <p className="text-brand-gray">Jhunjhunu, Rajasthan</p>
              </div>
            </div>
            <div className="pt-2 text-xs sm:text-sm text-brand-gray space-y-1">
              <p>Email: <a href="mailto:info@panknox.com" className="text-brand-navy font-semibold">info@panknox.com</a></p>
              <p>Corporate: Panknox Media Pvt. Ltd.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
