import Link from "next/link";
import type { Project } from "@/content/types";
import { MetricRow, Pill } from "@/components/ui/primitives";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <Pill key={tag} tone="accent">
            {tag}
          </Pill>
        ))}
        <span className="ml-auto font-mono text-xs text-faint">
          {project.period}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-text">
        <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
          {project.title}
        </Link>
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

      <div className="mt-6">
        <MetricRow metrics={project.metrics} size="sm" />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <p className="font-mono text-xs text-faint">
          {project.stack.slice(0, 4).join(" · ")}
        </p>
        <span
          aria-hidden
          className="text-sm text-accent transition-transform duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>
    </article>
  );
}
