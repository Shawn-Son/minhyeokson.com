import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

function SectionHeader({
  index,
  title,
  note,
  dark = false,
}: {
  index: string;
  title: string;
  note: string;
  dark?: boolean;
}) {
  return (
    <div className={`section-header ${dark ? "section-header-dark" : ""}`}>
      <p className="section-index">{index}</p>
      <h2>{title}</h2>
      <p className="section-note">{note}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-gridlines" aria-hidden />

        <nav className="topbar page-width" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Back to top">
            MS<span>/27</span>
          </a>

          <div className="topbar-actions">
            <span className="availability">
              <span aria-hidden />
              Open to 2027
            </span>
            <a
              className="topbar-link"
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé ↗
            </a>
          </div>
        </nav>

        <div className="hero-content page-width">
          <div className="hero-copy">
            <p className="hero-kicker rise">
              {site.displayName} <span>·</span> ML Engineer
            </p>

            <h1 className="rise" style={{ animationDelay: "70ms" }}>
              I build ML systems
              <br />
              that make noisy signals
              <br />
              <em>useful.</em>
            </h1>

            <p className="hero-summary rise" style={{ animationDelay: "150ms" }}>
              {site.intro}
            </p>

            <div className="hero-actions rise" style={{ animationDelay: "230ms" }}>
              <a
                className="button button-signal"
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View résumé <span>↗</span>
              </a>
              <a className="button button-ghost" href={`mailto:${site.email}`}>
                Email me <span>↗</span>
              </a>
            </div>

            <div className="hero-meta rise" style={{ animationDelay: "300ms" }}>
              <p>{site.location}</p>
              <p>{site.authorization}</p>
            </div>
          </div>

          <figure className="portrait-card rise" style={{ animationDelay: "130ms" }}>
            <div className="portrait-index" aria-hidden>
              <span>01</span>
              <span>PROFILE</span>
            </div>
            <div className="portrait-frame">
              <Image
                src={site.portrait}
                alt={site.displayName}
                width={720}
                height={720}
                priority
                className="portrait"
              />
            </div>
            <figcaption>
              <span>Machine learning</span>
              <span>Systems · NLP · Anomaly detection</span>
            </figcaption>
          </figure>
        </div>

        <div className="proof-rail page-width">
          {site.highlights.map((highlight) => (
            <div className="proof-item" key={highlight.label}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={site.skills} />

      <section className="light-section page-width">
        <Reveal>
          <SectionHeader
            index="01"
            title="Experience"
            note="Production ML, applied research, and systems work."
          />
        </Reveal>

        <div className="work-list">
          {site.work.map((job, index) => (
            <Reveal key={job.company} delay={index * 80}>
              <article className="work-row">
                <div className="work-company">
                  <span className="row-number">0{index + 1}</span>
                  <h3>{job.company}</h3>
                </div>
                <div className="work-detail">
                  <p className="work-role">{job.role}</p>
                  <p className="work-blurb">{job.blurb}</p>
                </div>
                <p className="work-period">{job.period}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <div className="page-width">
          <Reveal>
            <SectionHeader
              index="02"
              title="Selected work"
              note="A few systems built across language, markets, and security."
              dark
            />
          </Reveal>

          <div className="projects-list">
            {site.projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 80}>
                <a
                  className="project-row"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.blurb}</p>
                  </div>
                  <div className="project-meta">
                    <span>{project.stack.join(" / ")}</span>
                    <span className="project-arrow" aria-hidden>
                      ↗
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="publication-section">
        <div className="page-width">
          <Reveal>
            <a
              className="publication-card"
              href={site.paper.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="publication-meta">
                <span>03 / Publication</span>
                <span>
                  {site.paper.venue} · {site.paper.year}
                </span>
              </div>
              <div className="publication-title">
                <h2>{site.paper.title}</h2>
                <span aria-hidden>↗</span>
              </div>
              <p>Peer-reviewed research on cost-effective industrial fault prediction.</p>
            </a>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="page-width">
          <div className="footer-main">
            <p className="footer-kicker">Have a hard ML problem?</p>
            <h2>
              Let&apos;s make the
              <br />
              signal <em>clear.</em>
            </h2>
            <a className="footer-email" href={`mailto:${site.email}`}>
              {site.email} ↗
            </a>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} {site.displayName}</p>
            <div>
              <a href={site.resume} target="_blank" rel="noopener noreferrer">
                Résumé
              </a>
              {site.links
                .filter((link) => link.href.startsWith("http"))
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
