import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Lock, CheckCircle2, Quote } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";
import { projectsData } from "@/data/projects";
import CtaIsland from "@/components/common/CtaIsland";

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

  const nextProject =
    projectsData.find((p) => p.slug === project.nextProjectSlug) || projectsData[0];

  return (
    <article className="relative min-h-screen text-brand-neutral overflow-hidden">
      <AtmosphericBackground className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 space-y-16 sm:space-y-20">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-brand-neutral/60">
            <Link href="/work" className="hover:text-brand-green transition-colors">
              Work
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>{project.industry}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-green font-medium truncate max-w-xs">{project.client}</span>
          </div>

          {/* 1. Project Header & Industry */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-brand-green">
              <span>Project {project.number}</span>
              <span className="text-white/20">•</span>
              <span>{project.industry}</span>
              <span className="text-white/20">•</span>
              <span>{project.partnership}</span>
              {project.nda && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-black/40 border border-white/10 text-amber-300">
                  <Lock className="w-3 h-3" />
                  <span>NDA protected</span>
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-neutral leading-[1.08]">
              {project.title}
            </h1>

            <p className="text-xs sm:text-sm font-mono text-brand-green font-semibold">
              Client: {project.client} ({project.clientDescriptor})
            </p>

            <p className="text-lg sm:text-2xl text-brand-neutral/85 font-normal leading-relaxed pt-2">
              {project.summary}
            </p>
          </div>

          {/* 2. Large Visual Showcase */}
          <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden bg-brand-navy/90 border border-white/15 shadow-2xl flex items-center justify-center p-8 sm:p-14">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 40% 40%, rgba(48, 198, 130, 0.22) 0%, rgba(4, 38, 47, 0.95) 75%)",
              }}
            />
            <div className="relative z-10 text-center space-y-4 max-w-lg">
              <span className="text-xs font-mono text-brand-green block">
                [ Strategic Visual System ]
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-neutral">
                {project.client}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-brand-neutral/70">
                {project.industry} // {project.partnership}
              </p>
            </div>
          </div>

          {/* Optional Client Quote */}
          {project.quote && (
            <div className="p-8 sm:p-10 rounded-2xl bg-black/40 border border-brand-green/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-green">
                <Quote className="w-4 h-4" />
                <span>Client perspective</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-semibold text-brand-neutral italic">
                &ldquo;{project.quote}&rdquo;
              </blockquote>
            </div>
          )}

          {/* 3. Context & Background */}
          <div className="space-y-4 max-w-3xl pt-8 border-t border-white/10">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              01 // Commercial context
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-neutral">
              The business background.
            </h3>
            <p className="text-base sm:text-lg text-brand-neutral/80 font-normal leading-relaxed">
              {project.context}
            </p>
          </div>

          {/* 4. The Challenge */}
          <div className="space-y-4 max-w-3xl pt-8 border-t border-white/10">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              02 // The challenge
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-neutral">
              Where commercial friction existed.
            </h3>
            <p className="text-base sm:text-lg text-brand-neutral/80 font-normal leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* 5. Our Approach */}
          <div className="space-y-4 max-w-3xl pt-8 border-t border-white/10">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              03 // The strategy
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-neutral">
              How Panknox structured the solution.
            </h3>
            <p className="text-base sm:text-lg text-brand-neutral/80 font-normal leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* 6. What We Delivered */}
          <div className="space-y-6 max-w-3xl pt-8 border-t border-white/10">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              04 // Delivered deliverables
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-neutral">
              Systems and assets engineered.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-brand-neutral/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Outcome */}
          <div className="space-y-4 max-w-3xl pt-8 border-t border-white/10">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              05 // Verified outcome
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-neutral">
              Qualitative organizational impact.
            </h3>
            <p className="text-base sm:text-lg text-brand-neutral/85 font-normal leading-relaxed bg-[#30C682]/10 p-6 rounded-2xl border border-brand-green/30">
              {project.outcome}
            </p>
          </div>

          {/* 8. Navigation to Next Project */}
          <div className="pt-12 border-t border-white/10">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-green/40 transition-all"
            >
              <div className="flex items-center justify-between text-xs font-mono text-brand-neutral/60 pb-2">
                <span>Next project →</span>
                <span className="text-brand-green">{nextProject.industry}</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-brand-neutral group-hover:text-brand-green transition-colors">
                {nextProject.title}
              </h4>
              <p className="text-xs font-mono text-brand-neutral/60 pt-2">
                Client: {nextProject.client}
              </p>
            </Link>
          </div>

          {/* 9. Closing Signature CTA Island */}
          <CtaIsland variant="work" />
        </div>
      </AtmosphericBackground>
    </article>
  );
}
