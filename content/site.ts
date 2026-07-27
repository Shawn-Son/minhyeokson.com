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

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
export const siteHost = siteUrl.replace(/^https?:\/\//, "");

export const site = {
  name: "Minhyeok Son",
  displayName: "Minhyeok (Shawn) Son",
  greeting: "hi, i'm shawn",

  intro:
    "MS Data Science at Michigan. Right now I'm an ML engineer intern at eBay, building anomaly detection over compliance signals.",
  status: "Looking for 2027 full-time ML engineering roles.",

  email: "shawn22587@gmail.com",
  links: [
    { label: "Email", href: "mailto:shawn22587@gmail.com" },
    { label: "GitHub", href: "https://github.com/Shawn-Son" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/minhyeokson" },
    { label: "Resume", href: "/resume/Minhyeok_Son_Resume.pdf" },
  ],

  /** Drop a headshot at public/portrait.jpg and it appears automatically. */
  portrait: "/portrait.jpg",

  work: [
    {
      company: "eBay",
      role: "ML Engineer Intern",
      period: "2026",
      blurb:
        "LLM monitoring workflow over 25 compliance signal types. Cut false positives 46% with STL decomposition and robust z-score detection.",
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

  projects: [
    {
      name: "German E-commerce NER",
      blurb:
        "3rd of 80 teams, competing solo. XLM-R with a word-level CRF on German listing titles, at weighted-F3 0.9466.",
      stack: ["PyTorch", "XLM-R", "CRF"],
      href: "https://github.com/Shawn-Son",
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
