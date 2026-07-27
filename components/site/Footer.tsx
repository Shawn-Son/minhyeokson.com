import { profile } from "@/content/profile";

const social = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Email", href: profile.links.email },
  { label: "Resume", href: profile.links.resume },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-medium text-text">{profile.seeking}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              The fastest way to reach me is email —{" "}
              <a
                href={profile.links.email}
                className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
              >
                {profile.email}
              </a>
              .
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="font-mono text-sm text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.displayName} · Built with Next.js
          and Tailwind
        </p>
      </div>
    </footer>
  );
}
