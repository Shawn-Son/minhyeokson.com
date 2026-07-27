import type { Metadata } from "next";
import { allTags, projects } from "@/content/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Container } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Deep-dives on NLP, time-series anomaly detection, event-contract trading, and published manufacturing ML research.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Container className="pt-16 pb-8 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Each write-up follows the same six sections — problem, data, approach,
        evaluation, results, and what I&apos;d do differently. The last one is
        usually the most honest.
      </p>

      <div className="mt-12">
        <ProjectGrid projects={projects} tags={[...allTags]} />
      </div>
    </Container>
  );
}
