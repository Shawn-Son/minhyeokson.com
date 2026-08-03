/**
 * Everything on the site lives here.
 *
 * The hard rule for this file is length. Each blurb is one sentence, maybe two.
 * If something needs a paragraph to explain, it belongs in the resume or the
 * GitHub README, not on the landing page.
 */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  return "https://minhyeokson.com";
}

export const siteUrl = resolveSiteUrl();
export const siteHost = siteUrl.replace(/^https?:\/\//, "");

export const site = {
  name: "Minhyeok Son",
  displayName: "Minhyeok (Shawn) Son",
  location: "Ann Arbor, MI",

  intro:
    "Michigan Data Science master's student and ML Engineer Intern at eBay, interested in building thoughtful, useful systems.",
  status: "Open to 2027 full-time ML engineering roles.",
  authorization: "F-1 STEM · 36 months OPT eligible",

  email: "shawn22587@gmail.com",
  resume: "/Minhyeok_Son_Resume.pdf",
  links: [
    { label: "Email", href: "mailto:shawn22587@gmail.com" },
    { label: "GitHub", href: "https://github.com/Shawn-Son" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/minhyeokson" },
  ],

  /** Drop a headshot at public/portrait.jpg and it appears automatically. */
  portrait: "/portrait.jpg",

  highlights: [
    { value: "1M+", label: "flight legs modeled" },
    { value: "2.9M", label: "sensor rows analyzed" },
    { value: "3 / 80", label: "solo competition rank" },
  ],

  work: [
    {
      company: "eBay",
      role: "ML Engineer Intern",
      period: "2026",
      blurb:
        "Built an LLM monitoring workflow and cut false positives 46% with STL decomposition and robust z-score detection.",
    },
    {
      company: "American Airlines",
      role: "Applied Data Scientist, student team via Michigan",
      period: "2025",
      blurb:
        "Flight-delay prediction across 1M+ legs. Beat baselines by 8 AUC points under walk-forward validation.",
    },
    {
      company: "Industrial AI Lab, SeoulTech",
      role: "Research Assistant",
      period: "2022 — 2024",
      blurb:
        "Rare-fault detection on a 2.9M-row sensor stream. The work became a Scientific Reports paper.",
    },
  ],

  /**
   * `href` is optional. Omit it and the card renders as plain text — no link,
   * no arrow, no hover lift. Use that for anything under NDA.
   */
  projects: [
    {
      name: "German E-commerce NER",
      blurb:
        "3rd of 80 teams, competing solo. XLM-R with a word-level CRF on German listing titles, at weighted-F3 0.9466.",
      stack: ["PyTorch", "XLM-R", "CRF"],
    },
    {
      name: "Kalshi Auto Trader",
      blurb:
        "A probability-mispricing bot on event contracts. Python for research, C++ for execution under 300ms.",
      stack: ["Python", "C++"],
      href: "https://github.com/Shawn-Son/kalshi-auto-trader",
    },
    {
      name: "Agentic RAG Security Assistant",
      blurb:
        "Retrieval and autonomous triage over 500K security logs, with a Go service ingesting 3M events a day.",
      stack: ["LangChain", "Go", "PyTorch"],
      href: "https://github.com/Shawn-Son/Agentic-RAG",
    },
  ],

  paper: {
    title:
      "Active Inspection with Knowledge Distillation for Cost-Effective Fault Prediction",
    venue: "Scientific Reports",
    year: "2026",
    href: "https://www.nature.com/articles/s41598-026-39412-8",
  },

  skills: [
    "Python",
    "C++",
    "Go",
    "SQL",
    "PyTorch",
    "Transformers",
    "XGBoost",
    "scikit-learn",
    "pandas",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
} as const;
