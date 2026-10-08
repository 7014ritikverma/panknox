import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowRight, ChevronRight, ShieldCheck, CheckCircle2, Terminal, Sparkles } from "lucide-react";
import { projectsData, ProjectCaseStudy } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return notFound();

  const nextProject = projectsData.find((p) => p.slug === project.nextProjectSlug) || projectsData[0];

  return (
    <article className="pt-28 pb-24 bg-brand-navy min-h-screen text-brand-neutral relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
          <Link href="/work" className="hover:text-brand-green transition-colors">
            WORK ARCHIVE
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="uppercase text-brand-neutral/60">{project.industry}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-green font-bold uppercase truncate max-w-xs">{project.title}</span>
        </div>

        {/* Case Study Hero */}
        <div className="space-y-6 max-w-5xl">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-gray">
            <span className="text-brand-green font-bold text-sm">
              PROJECT {project.number}
            </span>
            <span>•</span>
            <span className="uppercase text-brand-neutral font-semibold">{project.industry}</span>
            <span>•</span>
            <span>{project.location}</span>
            <span>•</span>
            <span>YEAR: {project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-brand-neutral leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-mono text-brand-green">
            {project.clientDescriptor}
          </p>

          <p className="text-xl sm:text-2xl text-brand-neutral/85 leading-relaxed font-normal max-w-4xl">
            {project.summary}
          </p>

          {/* Scope badges */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.scope.map((s) => (
              <span
                key={s}
                className="text-xs font-mono px-3 py-1.5 rounded bg-white/5 border border-brand-neutral/15 text-brand-neutral/80"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 1: THE BUSINESS & THE CHALLENGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* The Business */}
          <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy/90 border border-brand-neutral/15 space-y-4 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold block">
              01 // THE BUSINESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
              THE OPERATIONAL REALITY
            </h2>
            <p className="text-base text-brand-neutral/80 leading-relaxed">
              {project.theBusiness}
            </p>
          </div>

          {/* The Challenge */}
          <div className="p-8 sm:p-10 rounded-2xl bg-black/40 border border-brand-neutral/15 space-y-4 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block">
              02 // THE CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral">
              THE PERCEPTION IMPASSE
            </h2>
            <p className="text-base text-brand-neutral/80 leading-relaxed">
              {project.theChallenge}
            </p>
          </div>
        </div>

        {/* SECTION 2: THE THINKING & THE CREATIVE DIRECTION */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy border border-brand-neutral/20 space-y-10 shadow-2xl">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
              03 // THE THINKING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-brand-neutral">
              THE STRATEGIC HYPOTHESIS
            </h2>
            <p className="text-base sm:text-lg text-brand-neutral/85 leading-relaxed">
              {project.theThinking}
            </p>
          </div>

          <div className="pt-8 border-t border-brand-neutral/10 space-y-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold">
              04 // THE CREATIVE DIRECTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-brand-neutral">
              AESTHETIC GRAMMAR &amp; SENSORY TONALITY
            </h3>
            <p className="text-base text-brand-neutral/80 leading-relaxed">
              {project.theCreativeDirection}
            </p>
          </div>
        </div>

        {/* SECTION 3: THE WORK & DELIVERABLES */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy border border-brand-green/30 space-y-8 bg-gradient-to-br from-brand-navy to-brand-green/5 shadow-2xl">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
              05 // THE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-brand-neutral">
              {project.theWork.headline}
            </h2>
            <p className="text-base text-brand-neutral/80 leading-relaxed">
              {project.theWork.details}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-neutral/10">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gray font-bold block">
              SYSTEM DELIVERABLES PRODUCED:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.theWork.deliverablesList.map((deliv, idx) => (
                <div
                  key={deliv}
                  className="p-4 rounded-xl bg-black/30 border border-brand-neutral/10 text-xs sm:text-sm text-brand-neutral flex items-start gap-3"
                >
                  <span className="text-brand-green font-mono font-bold">0{idx + 1}</span>
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 4: THE OUTCOME */}
        <div className="p-8 sm:p-12 rounded-2xl bg-brand-navy border border-brand-neutral/20 space-y-8 shadow-2xl">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
              06 // THE OUTCOME
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-brand-neutral">
              COMMERCIAL REALIGNMENT
            </h2>
            <p className="text-base sm:text-lg text-brand-neutral/90 leading-relaxed">
              {project.theOutcome.qualitativeSummary}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-neutral/10">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gray block">
              STRUCTURAL SHIFTS ACHIEVED:
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.theOutcome.transformationPoints.map((pt) => (
                <li
                  key={pt}
                  className="p-4 rounded-xl bg-white/[0.02] border border-brand-neutral/10 text-xs sm:text-sm text-brand-neutral flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metric Protocol Note */}
          <div className="p-4 rounded-lg bg-black/40 border border-brand-neutral/15 text-xs font-mono text-brand-gray flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
            <span>{project.theOutcome.metricNote}</span>
          </div>
        </div>

        {/* NEXT PROJECT NAVIGATION */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-brand-neutral/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gray block">
              NEXT CASE STUDY // 0{nextProject.number}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-brand-neutral hover:text-brand-green transition-colors">
              <Link href={`/work/${nextProject.slug}`}>
                {nextProject.title}
              </Link>
            </h3>
            <p className="text-xs font-mono text-brand-green">
              {nextProject.industry} • {nextProject.categoryTag}
            </p>
          </div>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded bg-brand-green text-brand-navy font-bold text-sm tracking-wider uppercase hover:bg-brand-green/90 transition-all shrink-0"
          >
            <span>ADVANCE TO PROJECT {nextProject.number}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
