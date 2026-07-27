/**
 * Every fact on this site comes from `content/`. Nothing is typed directly into
 * a component. That is what keeps the site, the resume PDFs, and LinkedIn from
 * drifting apart.
 */

/** A block of prose, optionally followed by a bulleted list. */
export type Block = {
  /** Paragraphs. Inline `code`, **bold**, and [links](url) are supported. */
  body?: string[];
  list?: string[];
};

/**
 * Project deep-dives use the same six sections, in this order, every time.
 * The type enforces it so the pages read as one system.
 */
export type ProjectNarrative = {
  problem: Block;
  data: Block;
  approach: Block;
  evaluation: Block;
  results: Block;
  reflection: Block;
};

export const NARRATIVE_ORDER: {
  key: keyof ProjectNarrative;
  heading: string;
  blurb: string;
}[] = [
  {
    key: "problem",
    heading: "Problem & constraints",
    blurb: "What was actually hard about this.",
  },
  {
    key: "data",
    heading: "Data",
    blurb: "Scale, sources, and what was dirty about it.",
  },
  {
    key: "approach",
    heading: "Approach",
    blurb: "The key decisions, and the alternatives I rejected.",
  },
  {
    key: "evaluation",
    heading: "Evaluation",
    blurb: "The metric, and why that metric.",
  },
  { key: "results", heading: "Results", blurb: "What it actually did." },
  {
    key: "reflection",
    heading: "What I'd do differently",
    blurb: "With hindsight and more time.",
  },
];

export type Metric = {
  value: string;
  label: string;
};

export type Tag =
  | "NLP"
  | "LLM / Agents"
  | "Time series"
  | "Trading"
  | "Research"
  | "MLOps"
  | "Tabular ML";

export type Project = {
  slug: string;
  title: string;
  /** One line. Shows on cards and as the page subtitle. */
  tagline: string;
  period: string;
  /** e.g. "Solo" or "Co-author" — context on your role. */
  role: string;
  tags: Tag[];
  stack: string[];
  links: { label: string; href: string }[];
  /** Featured projects appear on the home page, in array order. */
  featured: boolean;
  /** Two to four headline numbers. Shown on the card and at the top of the page. */
  metrics: Metric[];
  narrative: ProjectNarrative;
};

export type Role = {
  company: string;
  /** Set when the employer of record differs from the company you worked with. */
  via?: string;
  title: string;
  location: string;
  start: string;
  end: string;
  /** Renders as "Present" styling when true. */
  current?: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
};

export type Education = {
  school: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  coursework?: string[];
};

export type Publication = {
  authors: string;
  title: string;
  venue: string;
  details: string;
  date: string;
  href?: string;
};
