import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="page-width nav" aria-label="Primary navigation">
          <a className="brand" href="#top">
            Minhyeok Son
          </a>

          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#publication">Publication</a>
          </div>

          <a
            className="nav-resume"
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé <span aria-hidden>↗</span>
          </a>
        </nav>
      </header>

      <section className="hero page-width" id="top">
        <div className="hero-copy">
          <p className="availability rise">
            <span aria-hidden />
            Open to 2027 full-time ML engineering roles
          </p>

          <h1 className="rise" style={{ animationDelay: "70ms" }}>
            I turn messy data into{" "}
            <em>reliable ML systems.</em>
          </h1>

          <p className="hero-intro rise" style={{ animationDelay: "140ms" }}>
            I&apos;m Shawn, a Michigan Data Science master&apos;s student and ML
            Engineer Intern at eBay. I work across anomaly detection, NLP,
            evaluation, and production workflows.
          </p>

          <div className="hero-actions rise" style={{ animationDelay: "210ms" }}>
            <a
              className="primary-action"
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View résumé <span aria-hidden>↗</span>
            </a>
            <a className="text-action" href={`mailto:${site.email}`}>
              Get in touch <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="hero-facts rise" style={{ animationDelay: "280ms" }}>
            <p>
              <span>Based in</span>
              {site.location}
            </p>
            <p>
              <span>Work authorization</span>
              {site.authorization}
            </p>
          </div>
        </div>

        <figure className="portrait-wrap rise" style={{ animationDelay: "120ms" }}>
          <div className="portrait-accent" aria-hidden />
          <Image
            src={site.portrait}
            alt={site.displayName}
            width={720}
            height={720}
            priority
            className="portrait"
          />
          <figcaption>
            <span>Currently</span>
            <strong>ML Engineer Intern · eBay</strong>
          </figcaption>
        </figure>
      </section>

      <section className="impact-band" aria-label="Selected impact">
        <div className="page-width impact-grid">
          {site.highlights.map((highlight) => (
            <div className="impact-item" key={highlight.label}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section page-width" id="experience">
        <Reveal>
          <SectionHeading
            eyebrow="01 / Experience"
            title="From research to production."
            description="Work grounded in noisy data, measurable evaluation, and systems people actually use."
          />
        </Reveal>

        <div className="experience-list">
          {site.work.map((job, index) => (
            <Reveal key={job.company} delay={index * 70}>
              <article className="experience-row">
                <p className="experience-period">{job.period}</p>
                <div className="experience-company">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{job.company}</h3>
                </div>
                <div className="experience-detail">
                  <p className="experience-role">{job.role}</p>
                  <p>{job.blurb}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="page-width">
          <Reveal>
            <SectionHeading
              eyebrow="02 / Selected systems"
              title="Built across language, markets, and security."
              description="A compact selection of hands-on ML and systems work."
            />
          </Reveal>

          <div className="project-grid">
            {site.projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 70}>
                <a
                  className="project-card"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span aria-hidden>↗</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.blurb}</p>
                  <div className="project-stack">
                    {project.stack.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="publication-section" id="publication">
        <div className="page-width">
          <Reveal>
            <a
              className="publication-card"
              href={site.paper.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="publication-label">
                <span>03 / Peer-reviewed publication</span>
                <span>
                  {site.paper.venue} · {site.paper.year}
                </span>
              </div>
              <div className="publication-content">
                <h2>{site.paper.title}</h2>
                <span className="publication-arrow" aria-hidden>
                  ↗
                </span>
              </div>
              <p>
                Knowledge distillation and active inspection for cost-effective
                fault prediction in manufacturing.
              </p>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="toolbox page-width">
        <Reveal>
          <div className="toolbox-heading">
            <p>Toolbox</p>
            <span>What I reach for to get models into working systems.</span>
          </div>
          <ul>
            {site.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <footer>
        <div className="page-width">
          <div className="footer-main">
            <p>Let&apos;s work on something difficult.</p>
            <h2>Open to ML engineering opportunities for 2027.</h2>
            <a href={`mailto:${site.email}`}>
              {site.email} <span aria-hidden>↗</span>
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
