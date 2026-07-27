import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { NARRATIVE_ORDER } from "@/content/types";
import { inline } from "@/lib/markup";
import { Container, MetricRow, Pill } from "@/components/ui/primitives";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.tagline },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <Container className="pt-12 pb-6 sm:pt-16">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag} tone="accent">
              {tag}
            </Pill>
          ))}
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {project.tagline}
        </p>

        <p className="mt-5 font-mono text-xs text-faint">
          {project.role} · {project.period}
        </p>

        <div className="mt-10 border-y border-line py-7">
          <MetricRow metrics={project.metrics} />
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="font-mono text-xs text-faint">
            {project.stack.join(" · ")}
          </p>
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>

      <Container className="pb-16">
        {NARRATIVE_ORDER.map(({ key, heading, blurb }) => {
          const block = project.narrative[key];
          if (!block?.body && !block?.list) return null;

          return (
            <section
              key={key}
              id={key}
              className="border-t border-line py-10 sm:py-12"
            >
              <div className="grid gap-6 sm:grid-cols-[13rem_1fr] sm:gap-10">
                <div>
                  <h2 className="text-sm font-semibold tracking-tight text-text">
                    {heading}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-faint">
                    {blurb}
                  </p>
                </div>

                <div className="max-w-2xl">
                  {block.body?.map((paragraph, i) => (
                    <p
                      key={i}
                      className="mb-4 text-[0.95rem] leading-[1.75] text-muted last:mb-0"
                    >
                      {inline(paragraph)}
                    </p>
                  ))}

                  {block.list && (
                    <ul className="mt-5 space-y-3">
                      {block.list.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-5 text-[0.95rem] leading-[1.75] text-muted before:absolute before:left-0 before:top-[0.72em] before:size-1 before:rounded-full before:bg-accent"
                        >
                          {inline(item)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </Container>

      <Container>
        <Link
          href={`/projects/${next.slug}`}
          className="group block rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-7"
        >
          <p className="font-mono text-xs text-faint">Next project</p>
          <p className="mt-2 flex items-center gap-2 text-lg font-semibold tracking-tight text-text">
            {next.title}
            <span
              aria-hidden
              className="text-accent transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </p>
          <p className="mt-2 text-sm text-muted">{next.tagline}</p>
        </Link>
      </Container>
    </article>
  );
}
