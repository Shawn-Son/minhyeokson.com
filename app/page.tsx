import Link from "next/link";
import { profile } from "@/content/profile";
import { roles, publications } from "@/content/experience";
import { featuredProjects } from "@/content/projects";
import { Timeline } from "@/components/home/Timeline";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowLink, Container, SectionLabel } from "@/components/ui/primitives";

export default function Home() {
  const paper = publications[0];

  return (
    <>
      {/* Hero */}
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {profile.headline}
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          {profile.displayName}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.positioning}
        </p>

        {/* Work authorization sits above the fold on purpose: it is the first
            thing a recruiter would otherwise have to email to find out. */}
        <div className="mt-8 max-w-2xl rounded-lg border border-line bg-surface px-4 py-3.5">
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-medium text-text">{profile.seeking}</span>{" "}
            {profile.workAuthorization}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={profile.links.email}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-text transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.resume}
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Resume
          </a>
        </div>
      </Container>

      {/* Selected work */}
      <Container className="py-16 sm:py-20">
        <SectionLabel>Selected work</SectionLabel>
        <div className="grid gap-5 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            All projects
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </Container>

      {/* Experience */}
      <Container className="py-16 sm:py-20">
        <SectionLabel>Experience</SectionLabel>
        <Timeline roles={roles} />
      </Container>

      {/* Research */}
      <Container className="py-16 sm:py-20">
        <SectionLabel>Research</SectionLabel>
        <div className="max-w-2xl rounded-xl border border-line bg-surface p-6 sm:p-7">
          <p className="font-mono text-xs text-accent">{paper.venue}</p>
          <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-text">
            {paper.title}
          </h3>
          <p className="mt-3 text-sm text-muted">
            {paper.authors} · {paper.details} · {paper.date}
          </p>
          <div className="mt-5">
            <ArrowLink href="/research">
              Read the plain-language summary
            </ArrowLink>
          </div>
        </div>
      </Container>
    </>
  );
}
