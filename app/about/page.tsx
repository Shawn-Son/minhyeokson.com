import type { Metadata } from "next";
import { profile, skills } from "@/content/profile";
import { awards, education, organizations } from "@/content/experience";
import { Container, Pill, SectionLabel } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "About",
  description: `${profile.displayName} — background, education, and skills. ${profile.seeking}`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Container className="pt-16 pb-8 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        About
      </h1>

      <div className="mt-8 max-w-2xl space-y-5 text-[0.95rem] leading-[1.75] text-muted">
        <p>
          I&apos;m a master&apos;s student in Data Science at the University of
          Michigan, currently interning as a machine learning engineer at eBay in
          San Jose. Before Michigan I spent two and a half years in the
          Industrial AI Lab at Seoul National University of Science &amp;
          Technology, working on fault prediction for manufacturing lines — work
          that ended up published in Scientific Reports.
        </p>
        <p>
          The thread running through all of it is{" "}
          <span className="font-medium text-text">
            models that have to survive contact with reality
          </span>
          . Manufacturing sensors where defects are under 2% of the data.
          Marketplace listing text that no grammar survives. Compliance signals
          where a false positive costs an analyst an afternoon and a false
          negative costs considerably more. In each case the interesting work
          was not picking an architecture — it was figuring out what
          &ldquo;good&rdquo; actually meant, and building an evaluation that
          measured it honestly.
        </p>
        <p>
          I care a lot about the gap between a model that scores well and a
          model that helps someone. Most of what I&apos;ve built has had a
          non-technical user on the other end of it, and that constraint tends
          to improve the engineering rather than compromise it.
        </p>
      </div>

      <div className="mt-10 max-w-2xl rounded-lg border border-line bg-surface px-5 py-4">
        <p className="text-sm leading-relaxed text-muted">
          <span className="font-medium text-text">{profile.seeking}</span>{" "}
          {profile.workAuthorization}
        </p>
      </div>

      {/* Education */}
      <section className="mt-16">
        <SectionLabel>Education</SectionLabel>
        <div className="space-y-8">
          {education.map((school) => (
            <div key={school.school}>
              <h3 className="text-base font-semibold tracking-tight text-text">
                {school.school}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {school.degree}, {school.field}
              </p>
              <p className="mt-1 font-mono text-xs text-faint">
                {school.location} · {school.period}
              </p>
              {school.coursework && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {school.coursework.map((course) => (
                    <Pill key={course}>{course}</Pill>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <SectionLabel>Skills</SectionLabel>
        <dl className="space-y-6">
          {skills.map((group) => (
            <div key={group.group} className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="text-sm font-medium text-text">{group.group}</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5 sm:mt-0">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Awards */}
      <section className="mt-16">
        <SectionLabel>Honors</SectionLabel>
        <div className="space-y-6">
          {awards.map((award) => (
            <div key={award.title}>
              <h3 className="text-sm font-semibold tracking-tight text-text">
                {award.title}
              </h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                {award.detail}
              </p>
              <p className="mt-1 font-mono text-xs text-faint">{award.date}</p>
            </div>
          ))}
          {organizations.map((org) => (
            <div key={org.name}>
              <h3 className="text-sm font-semibold tracking-tight text-text">
                {org.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-faint">
                {org.detail} · {org.period}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16">
        <SectionLabel>Contact</SectionLabel>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          <a
            href={profile.links.email}
            className="font-mono text-sm text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
          >
            {profile.email}
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            github.com/Shawn-Son
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            linkedin.com/in/minhyeokson
          </a>
        </div>
      </section>
    </Container>
  );
}
