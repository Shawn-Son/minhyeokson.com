import type { Metadata } from "next";
import { publications } from "@/content/experience";
import { getProject } from "@/content/projects";
import { ArrowLink, Container, SectionLabel } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Active Inspection with Knowledge Distillation for Cost-Effective Fault Prediction in Manufacturing Process — Scientific Reports (Nature Portfolio), 2026.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  const paper = publications[0];
  const project = getProject("active-inspection-knowledge-distillation");

  return (
    <Container className="pt-16 pb-8 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        Research
      </h1>

      <div className="mt-12 border-t border-line pt-10">
        <p className="font-mono text-xs text-accent">{paper.venue}</p>

        <h2 className="mt-4 max-w-3xl text-xl font-semibold leading-snug tracking-tight text-text sm:text-2xl">
          {paper.title}
        </h2>

        <p className="mt-4 text-sm text-muted">
          {paper.authors}
          <span className="text-faint">
            {" "}
            · {paper.details} · {paper.date}
          </span>
        </p>

        <p className="mt-2 text-sm text-faint">
          My contribution: methodology, formal analysis, and experimentation.
        </p>
      </div>

      {/* The point of this page is that a hiring manager gets the contribution
          in 30 seconds without opening the paper. */}
      <div className="mt-14 max-w-2xl">
        <SectionLabel>In plain language</SectionLabel>

        <div className="space-y-5 text-[0.95rem] leading-[1.75] text-muted">
          <p>
            Factories that make semiconductors face an awkward trade-off. The
            measurements that best predict whether a unit is defective are the
            expensive ones — detailed inspection is slow and costly, so you
            cannot run it on every unit coming off the line.
          </p>
          <p>
            Making that worse, defects are rare. In the case study here, fewer
            than 2% of units were faulty. So if you inspect units at random, you
            spend nearly your whole budget confirming that good units are good,
            and learn almost nothing.
          </p>
          <p>
            The paper attacks both halves of that problem at once.{" "}
            <span className="font-medium text-text">
              Knowledge distillation
            </span>{" "}
            trains a &ldquo;teacher&rdquo; model on the expensive measurements,
            then uses it to supervise a &ldquo;student&rdquo; model that sees
            only cheap, always-available ones. The student inherits much of the
            teacher&apos;s judgment without inheriting its cost, which is what
            makes it deployable.{" "}
            <span className="font-medium text-text">Active inspection</span>{" "}
            then picks which units to physically inspect based on where the
            model is most uncertain, rather than at random — so each inspection
            buys more information.
          </p>
          <p>
            The result: a model that runs on low-cost features reaches accuracy
            close to one using the expensive ones, and uncertainty-based
            selection beats random selection by{" "}
            <span className="font-medium text-text">3 AUROC points</span> at the
            same inspection budget. Because the dataset is so imbalanced, every
            claim was validated across 30+ repeated trials with significance
            testing rather than a single train/test split.
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-line bg-surface px-5 py-4">
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-medium text-text">Why it generalizes:</span>{" "}
            any setting where labels are expensive and positives are rare has
            this shape — fraud review, medical screening, security alert triage.
            The framework is about spending a fixed labeling budget well, not
            about semiconductors.
          </p>
        </div>

        {project && (
          <div className="mt-8">
            <ArrowLink href={`/projects/${project.slug}`}>
              Full technical write-up
            </ArrowLink>
          </div>
        )}
      </div>
    </Container>
  );
}
