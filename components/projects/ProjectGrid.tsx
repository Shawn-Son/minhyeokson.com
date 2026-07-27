"use client";

import { useMemo, useState } from "react";
import type { Project, Tag } from "@/content/types";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({
  projects,
  tags,
}: {
  projects: Project[];
  tags: Tag[];
}) {
  const [active, setActive] = useState<Tag | null>(null);

  const visible = useMemo(
    () => (active ? projects.filter((p) => p.tags.includes(active)) : projects),
    [projects, active],
  );

  const options: { key: string; label: string; value: Tag | null }[] = [
    { key: "all", label: "All", value: null },
    ...tags.map((t) => ({ key: t, label: t, value: t })),
  ];

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by topic"
        className="mb-10 flex flex-wrap gap-2"
      >
        {options.map((option) => {
          const selected = active === option.value;
          return (
            <button
              key={option.key}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(option.value)}
              className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
                selected
                  ? "border-transparent bg-accent text-accent-text"
                  : "border-line bg-surface text-muted hover:border-line-strong hover:text-text"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-sm text-muted">Nothing tagged that yet.</p>
      )}
    </>
  );
}
