import type { Role } from "@/content/types";
import { inline } from "@/lib/markup";
import { Pill } from "@/components/ui/primitives";

export function Timeline({ roles }: { roles: Role[] }) {
  return (
    <ol className="relative">
      {roles.map((role, i) => (
        <li
          key={`${role.company}-${role.start}`}
          className={`relative pl-8 sm:pl-10 ${i === roles.length - 1 ? "" : "pb-12"}`}
        >
          {/* Rail */}
          {i !== roles.length - 1 && (
            <span
              aria-hidden
              className="absolute left-[5px] top-3 h-full w-px bg-line"
            />
          )}
          <span
            aria-hidden
            className={`absolute left-0 top-1.5 size-[11px] rounded-full border-2 ${
              role.current
                ? "border-accent bg-accent"
                : "border-line-strong bg-bg"
            }`}
          />

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-base font-semibold tracking-tight text-text">
              {role.title}
            </h3>
            {role.current && <Pill tone="accent">Current</Pill>}
          </div>

          <p className="mt-1 text-sm text-muted">
            <span className="font-medium text-text">{role.company}</span>
            {role.via && (
              <span className="text-faint"> · via {role.via}</span>
            )}
            <span className="text-faint">
              {" "}
              · {role.location} · {role.start} — {role.end}
            </span>
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {role.summary}
          </p>

          <ul className="mt-4 max-w-2xl space-y-2.5">
            {role.bullets.map((bullet, j) => (
              <li
                key={j}
                className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-line-strong"
              >
                {inline(bullet)}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {role.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
