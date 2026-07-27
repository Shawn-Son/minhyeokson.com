import { Fragment, type ReactNode } from "react";

/**
 * A deliberately tiny inline-markup renderer for content strings.
 *
 * Supports **bold**, `code`, and [text](href) — enough to write readable
 * content in plain TypeScript without pulling in an MDX toolchain. Content is
 * authored in this repo, so there is no untrusted input to sanitize.
 */
const PATTERN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

export function inline(text: string): ReactNode {
  const parts = text.split(PATTERN).filter(Boolean);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-text">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[0.85em] text-text"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      const external = href.startsWith("http");
      return (
        <a
          key={i}
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
        >
          {label}
        </a>
      );
    }

    return <Fragment key={i}>{part}</Fragment>;
  });
}
