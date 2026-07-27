import Link from "next/link";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center gap-2 px-5 sm:gap-4 sm:px-8">
        <Link
          href="/"
          className="shrink-0 font-mono text-sm font-medium tracking-tight text-text transition-colors hover:text-accent"
        >
          {profile.name.toLowerCase().replace(" ", "")}
          {/* The TLD is decorative; it is the first thing to go when space is tight. */}
          <span className="hidden text-faint sm:inline">.com</span>
        </Link>

        <div className="ml-auto flex items-center gap-0.5 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1.5 text-[13px] text-muted transition-colors hover:bg-surface-2 hover:text-text sm:px-3 sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.links.resume}
            className="hidden rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-text sm:block"
          >
            Resume
          </a>
          <div className="ml-1 shrink-0 sm:ml-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
