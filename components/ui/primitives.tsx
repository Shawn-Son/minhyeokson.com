import type { ReactNode } from "react";
import type { Metric } from "@/content/types";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-5xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

/** Small uppercase label that anchors each major section. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-8 font-mono text-xs font-medium uppercase tracking-[0.18em] text-faint">
      {children}
    </h2>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent";
}) {
  const tones = {
    neutral: "border-line bg-surface-2 text-muted",
    accent: "border-transparent bg-accent-soft text-accent",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-tight ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/**
 * The headline numbers. Deliberately restrained — a wall of huge digits reads
 * as marketing, and the point here is that each number is checkable.
 */
export function MetricRow({
  metrics,
  size = "md",
}: {
  metrics: Metric[];
  size?: "sm" | "md";
}) {
  const value = size === "sm" ? "text-lg" : "text-2xl sm:text-[1.75rem]";
  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-5">
      {metrics.map((m) => (
        <div key={m.label}>
          <dt className="sr-only">{m.label}</dt>
          <dd>
            <span
              className={`block font-mono ${value} font-semibold leading-none tracking-tight text-text`}
            >
              {m.value}
            </span>
            <span className="mt-1.5 block text-xs text-muted">{m.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}
