export const profile = {
  name: "Minhyeok Son",
  preferredName: "Shawn",
  displayName: "Minhyeok (Shawn) Son",
  headline: "Machine Learning Engineer",
  /** The one-liner under the name. Keep it to a single sentence. */
  positioning:
    "MS Data Science at Michigan, currently an ML engineer intern at eBay. I build models that hold up in production — anomaly detection on live signal streams, NLP on messy marketplace text, and cost-aware ML that shipped as published research.",
  location: "Ann Arbor, MI",
  email: "shawn22587@gmail.com",
  phone: "734-657-3300",
  seeking: "Seeking 2027 full-time ML / software engineering roles.",
  workAuthorization:
    "F-1 visa. CPT-authorized for 2026 internships and STEM-OPT eligible for 3 years of full-time work — no sponsorship needed to start.",
  links: {
    github: "https://github.com/Shawn-Son",
    linkedin: "https://www.linkedin.com/in/minhyeokson",
    email: "mailto:shawn22587@gmail.com",
    resume: "/resume/Minhyeok_Son_Resume.pdf",
  },
  /** Used for canonical URLs, sitemap, and OG tags. Update after the domain is live. */
  siteUrl: "https://minhyeokson.com",
} as const;

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "C++", "SQL (PostgreSQL)", "Go", "R", "Java"],
  },
  {
    group: "ML & deep learning",
    items: [
      "PyTorch",
      "Transformers / NLP",
      "scikit-learn",
      "XGBoost",
      "TensorFlow",
      "CRF",
      "Knowledge distillation",
      "LLMs & RAG",
    ],
  },
  {
    group: "Statistics & modeling",
    items: [
      "Time-series analysis",
      "Hypothesis testing",
      "Bayesian inference",
      "Probability & stochastic processes",
      "Backtesting",
    ],
  },
  {
    group: "Data & tooling",
    items: [
      "pandas",
      "NumPy",
      "SciPy",
      "statsmodels",
      "SHAP",
      "Docker",
      "Git",
      "S3",
      "Streamlit",
    ],
  },
];
