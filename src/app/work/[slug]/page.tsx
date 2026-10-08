import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import AtmosphericBackground from "@/components/common/AtmosphericBackground";
import { projectsData } from "@/data/projects";

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
      <AtmosphericBackground className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 space-y-20">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-brand-neutral/60">
            <Link href="/work" className="hover:text-brand-green transition-colors">
              Work
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>{project.industry}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-green font-medium truncate max-w-xs">{project.title}</span>
          </div>

          {/* 1. Project & 2. Short Context */}
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-mono text-brand-green">
              <span>Project {project.number}</span>
              <span className="text-white/20">•</span>
              <span>{project.industry}</span>
              <span className="text-white/20">•</span>
              <span>{project.year}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-neutral leading-[1.08]">
              {project.title}
            </h1>

            <p className="text-xs sm:text-sm font-mono text-brand-green font-semibold">
              {project.clientDescriptor}
            </p>

            <p className="text-xl sm:text-2xl text-brand-neutral/85 font-normal leading-relaxed pt-2">
              {project.summary}
            </p>
          </div>

          {/* 3. Large Visual (Hero) */}
          <div className="relative w-full h-[380px] sm:h-[540px] rounded-3xl overflow-hidden bg-brand-navy/90 border border-white/15 shadow-2xl flex items-center justify-center p-8 sm:p-14">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 40% 40%, rgba(48, 198, 130, 0.18) 0%, rgba(4, 38, 47, 0.95) 70%)",
              }}
            />
            <div className="relative z-10 text-center space-y-3 max-w-md">
              <span className="text-xs font-mono text-brand-green block">
                Primary visual narrative
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-neutral">
                {project.theCreativeDirection.split(".")[0]}.
              </h2>
            </div>
          </div>

          {/* 4. The Challenge */}
          <div className="space-y-5 max-w-3xl pt-8 border-t border-white/10">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              01 // The challenge
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-neutral">
              The gap between capability and perception.
            </h3>
            <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed font-normal">
              {project.theChallenge}
            </p>
            <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed font-normal pt-2">
              {project.theBusiness}
            </p>
          </div>

          {/* 5. What We Did */}
          <div className="space-y-5 max-w-3xl pt-8 border-t border-white/10">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              02 // What we did
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-neutral">
              The strategic &amp; creative intervention.
            </h3>
            <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed font-normal">
              {project.theThinking}
            </p>
            <p className="text-base sm:text-lg text-brand-neutral/80 leading-relaxed font-normal pt-2">
              {project.theWork.details}
            </p>
          </div>

          {/* 6. Selected Work */}
          <div className="space-y-6 pt-8 border-t border-white/10">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              03 // Selected work
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-neutral">
              Deliverables &amp; craft artifacts.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {project.theWork.deliverablesList.map((item) => (
                <div
                  key={item}
                  className="p-5 rounded-2xl bg-black/40 border border-white/10 text-sm font-medium text-brand-neutral/90"
                >
                  <span className="text-xs font-mono text-brand-green block mb-1.5">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* 7. Outcome / Learning */}
          <div className="space-y-6 max-w-3xl pt-8 border-t border-white/10">
            <span className="text-xs font-mono text-brand-green font-semibold block">
              04 // Outcome &amp; learning
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-neutral">
              Commercial impact &amp; verified transformation.
            </h3>
            <p className="text-base sm:text-lg text-brand-neutral/90 leading-relaxed font-normal">
              {project.theOutcome.qualitativeSummary}
            </p>

            <div className="space-y-3 pt-2">
              {project.theOutcome.transformationPoints.map((pt) => (
                <div key={pt} className="flex items-start gap-3 text-sm sm:text-base text-brand-neutral/80">
                  <span className="text-brand-green font-bold">•</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 text-xs font-mono text-brand-neutral/60">
              Note: {project.theOutcome.metricNote}
            </div>
          </div>

          {/* 8. Final Visual */}
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center p-8 text-center shadow-xl">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(6, 47, 58, 0.4) 0%, rgba(2, 20, 25, 0.8) 100%)",
              }}
            />
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-mono text-brand-green">Panknox Systems Archive</span>
              <p className="text-xl sm:text-2xl font-semibold text-brand-neutral max-w-md">
                Systems built around the reality of your business.
              </p>
            </div>
          </div>

          {/* Next Case Study Link */}
          <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-brand-neutral/60 block mb-1">
                Next case study
              </span>
              <p className="text-xl sm:text-2xl font-bold text-brand-neutral">
                {nextProject.title}
              </p>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-green text-brand-navy font-semibold text-xs sm:text-sm hover:bg-brand-green/90 transition-all shrink-0 self-start sm:self-auto"
            >
              <span>View next project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </AtmosphericBackground>
    </article>
  );
}
