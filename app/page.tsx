import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

const hasPortrait = existsSync(join(process.cwd(), "public", "portrait.jpg"));

function Label({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
          dark ? "text-cream/45" : "text-faint"
        }`}
      >
        {children}
      </span>
      <span
        aria-hidden
        className={`h-px flex-1 ${dark ? "bg-cream/15" : "bg-rule"}`}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ---- Hero ---------------------------------------------------- */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-8 sm:px-10 sm:pb-32 sm:pt-12">
        <header className="rise flex items-center justify-between">
          <p className="font-display text-lg italic text-soft">{site.name}</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
            Ann Arbor, MI
          </p>
        </header>

        <div className="mt-20 grid gap-12 sm:mt-28 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-16">
          <div>
            {/* Oversized display type is the moment the page was missing. */}
            <h1
              className="rise font-display leading-[0.92] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(3.5rem, 11vw, 8rem)", animationDelay: "80ms" }}
            >
              hi, i&apos;m
              <br />
              shawn<span className="text-clay">.</span>
            </h1>

            <p
              className="rise mt-10 max-w-lg text-[17px] leading-[1.65] text-soft"
              style={{ animationDelay: "220ms" }}
            >
              {site.intro}
            </p>

            <p
              className="rise mt-4 max-w-lg text-[17px] leading-[1.65] text-ink"
              style={{ animationDelay: "300ms" }}
            >
              {site.status}
            </p>

            <nav
              className="rise mt-10 flex flex-wrap gap-x-8 gap-y-3"
              style={{ animationDelay: "380ms" }}
            >
              {site.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-1.5 text-[15px] text-ink"
                >
                  <span className="draw">{link.label}</span>
                  <span className="text-clay transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {hasPortrait && (
            <div
              className="rise relative order-first sm:order-none"
              style={{ animationDelay: "160ms" }}
            >
              {/* Offset frame gives the flat white studio photo some depth. */}
              <span
                aria-hidden
                className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.25rem] border border-clay/35"
              />
              <Image
                src={site.portrait}
                alt={site.displayName}
                width={480}
                height={480}
                priority
                className="relative h-44 w-44 rounded-[1.25rem] object-cover sm:h-64 sm:w-64"
              />
            </div>
          )}
        </div>
      </section>

      {/* ---- Tools ticker -------------------------------------------- */}
      <Marquee items={site.skills} />

      {/* ---- Work ----------------------------------------------------- */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <Label>Work</Label>
        </Reveal>

        <ul className="mt-14">
          {site.work.map((job, i) => (
            <Reveal key={job.company} delay={i * 90}>
              <li className="group border-b border-rule py-9 transition-colors duration-300 first:border-t hover:border-clay/40">
                <div className="grid gap-4 sm:grid-cols-[1fr_1.4fr] sm:gap-12">
                  <div className="flex items-baseline justify-between gap-4 sm:block">
                    <h3 className="text-xl tracking-tight text-ink transition-transform duration-500 ease-out sm:group-hover:translate-x-2">
                      {job.company}
                    </h3>
                    <span className="font-mono text-xs text-faint sm:mt-2 sm:block">
                      {job.period}
                    </span>
                  </div>

                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay">
                      {job.role}
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.7] text-soft">
                      {job.blurb}
                    </p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---- Projects (dark panel breaks the flat cream field) --------- */}
      <section className="bg-ink py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <Reveal>
            <Label dark>Selected projects</Label>
          </Reveal>

          <ul className="mt-14 space-y-2">
            {site.projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 90}>
                <li>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl px-5 py-8 transition-colors duration-500 hover:bg-cream/[0.04] sm:px-8"
                  >
                    <div className="grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-10">
                      <span className="font-mono text-xs text-clay">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3
                          className="font-display tracking-tight text-cream"
                          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
                        >
                          {project.name}
                        </h3>
                        <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-cream/55">
                          {project.blurb}
                        </p>
                        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/35">
                          {project.stack.join("  /  ")}
                        </p>
                      </div>

                      <span
                        aria-hidden
                        className="hidden text-2xl text-cream/25 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-clay sm:block"
                      >
                        ↗
                      </span>
                    </div>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Publication ---------------------------------------------- */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <Label>Publication</Label>
          <div className="mt-12 grid gap-4 sm:grid-cols-[1fr_1.4fr] sm:gap-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-clay">
              {site.paper.venue} · {site.paper.year}
            </p>
            <p className="max-w-xl text-xl leading-[1.45] tracking-tight text-ink">
              {site.paper.title}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---- Contact --------------------------------------------------- */}
      <footer className="border-t border-rule">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
              Get in touch
            </p>

            <a
              href={`mailto:${site.email}`}
              className="group mt-8 inline-block font-display tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem, 6.5vw, 4.5rem)" }}
            >
              <span className="draw">{site.email}</span>
            </a>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8">
              <p className="font-mono text-[11px] text-faint">
                © {new Date().getFullYear()} {site.displayName}
              </p>
              <div className="flex gap-6">
                {site.links
                  .filter((l) => l.href.startsWith("http"))
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint transition-colors hover:text-clay"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
