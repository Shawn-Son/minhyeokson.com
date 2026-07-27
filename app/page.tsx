import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { site } from "@/content/site";

/** The headshot is optional. Drop public/portrait.jpg in and it appears. */
const hasPortrait = existsSync(join(process.cwd(), "public", "portrait.jpg"));

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-10 sm:pt-16">
      <p className="rise font-display text-lg italic text-soft">{site.name}</p>

      {/* Hero */}
      <section className="rise mt-16 sm:mt-24" style={{ animationDelay: "60ms" }}>
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div className="flex-1">
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
              {site.greeting}
            </h1>

            <p className="mt-6 text-[15px] leading-[1.7] text-soft">
              {site.intro}
            </p>

            <p className="mt-3 text-[15px] leading-[1.7] text-ink">
              {site.status}
            </p>
          </div>

          {hasPortrait && (
            <Image
              src={site.portrait}
              alt={site.displayName}
              width={320}
              height={320}
              priority
              className="h-32 w-32 shrink-0 rounded-2xl object-cover sm:h-40 sm:w-40"
            />
          )}
        </div>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {site.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group text-[15px] text-ink underline decoration-rule underline-offset-[5px] transition-colors hover:decoration-ink"
            >
              {link.label}
              <span className="ml-0.5 text-faint transition-colors group-hover:text-ink">
                ↗
              </span>
            </a>
          ))}
        </nav>
      </section>

      {/* Work */}
      <section className="mt-24">
        <Label>Work</Label>
        <ul className="space-y-9">
          {site.work.map((job) => (
            <li key={job.company}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[15px] font-medium text-ink">
                  {job.company}
                </h3>
                <span className="shrink-0 text-[13px] text-faint">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-[13px] text-faint">{job.role}</p>
              <p className="mt-2.5 text-[15px] leading-[1.7] text-soft">
                {job.blurb}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="mt-20">
        <Label>Projects</Label>
        <ul className="space-y-9">
          {site.projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-1.5 text-[15px] font-medium text-ink"
              >
                <span className="underline decoration-rule underline-offset-[5px] transition-colors group-hover:decoration-ink">
                  {project.name}
                </span>
                <span className="text-faint transition-colors group-hover:text-ink">
                  ↗
                </span>
              </a>
              <p className="mt-2.5 text-[15px] leading-[1.7] text-soft">
                {project.blurb}
              </p>
              <p className="mt-2 text-[13px] text-faint">
                {project.stack.join("  ·  ")}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Publication */}
      <section className="mt-20">
        <Label>Publication</Label>
        <p className="text-[15px] leading-[1.7] text-soft">
          {site.paper.title}
        </p>
        <p className="mt-2 text-[13px] text-faint">
          {site.paper.venue}, {site.paper.year}
        </p>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <Label>Tools</Label>
        <p className="text-[15px] leading-[2] text-soft">
          {site.skills.join("  ·  ")}
        </p>
      </section>

      <footer className="mt-24 border-t border-rule pt-6">
        <p className="text-[13px] text-faint">
          {site.displayName} · {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
