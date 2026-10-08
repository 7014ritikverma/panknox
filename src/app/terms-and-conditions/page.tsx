import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Panknox Media Pvt. Ltd.",
  description:
    "Official Terms & Conditions governing creative partnerships, scope of services, revisions, and commercial deliverables with Panknox Media Pvt. Ltd.",
};

export default function TermsAndConditionsPage() {
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
            <FileText className="w-3.5 h-3.5 text-brand-green" />
            <span>Commercial terms · Engagement standards</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-navy">
            Terms &amp; conditions
          </h1>

          <p className="text-sm sm:text-base text-brand-gray">
            Effective date: October 2026 · Panknox Media Pvt. Ltd.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm sm:text-base text-brand-gray leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              1. Scope of services
            </h2>
            <p>
              All professional services, creative deliverables, digital engineering, and performance marketing campaigns delivered by Panknox Media Pvt. Ltd. (&ldquo;Panknox&rdquo;) are governed strictly by the approved project proposal, written scope of work (SOW), or retainer agreement. Any additional requests outside the agreed scope will require mutual written approval and will be quoted separately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              2. Concepts, deliverables &amp; revisions
            </h2>
            <p>
              The number of initial creative concepts, revision rounds, and specific asset formats are established in advance within the approved project proposal.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-brand-navy">Revision scope:</strong> Revisions apply strictly within the boundaries of the approved creative direction and concept.
              </li>
              <li>
                <strong className="text-brand-navy">New directions:</strong> Requests for entirely new concepts, structural redesigns, or substantial strategy pivots outside the approved direction are treated as out-of-scope work and will incur additional fees.
              </li>
              <li>
                <strong className="text-brand-navy">Client approvals:</strong> Timely client feedback is essential to adhere to sprint schedules. Delays in reviews may adjust delivery timelines accordingly.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              3. Commercial terms &amp; payments
            </h2>
            <p>
              In accordance with our standard operating policy:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-brand-navy">Advance payment:</strong> A 50% advance payment is mandatory to commence sprint scheduling, discovery, or creative production. Advance payments are non-refundable as they allocate dedicated studio capacity.
              </li>
              <li>
                <strong className="text-brand-navy">Final balance:</strong> The remaining 50% balance must be cleared prior to final deployment, public launch, or handover of source files, media masters, and production assets.
              </li>
              <li>
                <strong className="text-brand-navy">Retainer partnerships:</strong> Ongoing retainer engagements are billed at the beginning of each billing cycle in accordance with the signed service agreement.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              4. Confidentiality &amp; intellectual property
            </h2>
            <p>
              Both parties agree to treat all business, financial, and strategic information shared during the engagement as strictly confidential.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-brand-navy">Non-disclosure agreements:</strong> Mutual NDAs are executed upon request prior to strategic briefing.
              </li>
              <li>
                <strong className="text-brand-navy">Deliverable ownership:</strong> Upon full and final settlement of all invoiced fees, full commercial rights to approved final assets are transferred to the client.
              </li>
              <li>
                <strong className="text-brand-navy">Unfinalized concepts:</strong> Preliminary drafts, rejected creative concepts, and working project files remain the intellectual property of Panknox Media Pvt. Ltd. and may not be shared, modified, or reproduced without prior consent.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-navy">
              5. Governing law
            </h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising under these terms are subject to the exclusive jurisdiction of the competent courts in Rajasthan, India.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-brand-navy/10">
            <h2 className="text-xl font-bold text-brand-navy">
              6. Official contact &amp; company details
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
              <p>Corporate entity: Panknox Media Pvt. Ltd.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
