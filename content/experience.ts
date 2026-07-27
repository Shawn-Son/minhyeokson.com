import type { Education, Publication, Role } from "./types";

/**
 * CANONICAL. These bullets are the reconciled version of the three tailored
 * resume PDFs. When you tailor a resume, take a subset of these — do not write
 * new numbers into the PDF, or the site and the PDF will disagree and a
 * recruiter holding both will notice.
 */
export const roles: Role[] = [
  {
    company: "eBay",
    title: "Machine Learning Engineer Intern",
    location: "San Jose, CA",
    start: "May 2026",
    end: "Present",
    current: true,
    summary:
      "Monitoring and root-cause tooling for Compliance signals — an LLM workflow that turns a question from an analyst into an answer without an engineer in the loop.",
    bullets: [
      "Built an LLM-powered monitoring workflow in Python that lets analysts track **25 Compliance signal types** from a single query, replacing a set of one-off dashboards.",
      "Flagged anomalies across 25 daily signal series using **STL decomposition and robust z-score tests**, chosen over a fixed-threshold approach because the series carry strong weekly seasonality.",
      "Linked three classes of code events — config changes, data refreshes, and deployments — to anomalous spikes and dips, turning root-cause analysis into something non-technical teammates can do themselves.",
      "Cut false positives **46%** by backtesting 15 detector configurations across 2 years of history, scoring each on precision and detection lag rather than accuracy alone.",
      "Mined **40M+ unstructured listing events** as a previously unused signal source, surfacing 12 features that improved detection on the classes the original series missed.",
    ],
    tags: ["Python", "LLM workflows", "STL", "Anomaly detection", "Backtesting"],
  },
  {
    company: "American Airlines",
    via: "University of Michigan",
    title: "Applied Data Scientist — Student Team",
    location: "Ann Arbor, MI",
    start: "Sep 2025",
    end: "Nov 2025",
    summary:
      "Flight-delay prediction on a unified operations, weather, and congestion feature store, delivered to American Airlines stakeholders on a biweekly review cycle.",
    bullets: [
      "Unified **1M+ flight legs** into a PostgreSQL feature store by joining airline operations, weather, and airport-congestion sources that had no shared key.",
      "Engineered **50 lagged** weather, schedule, and congestion features, including an external weather feed the team had not previously used.",
      "Beat baselines by **8 AUC points** out-of-sample by tuning gradient-boosted trees under walk-forward validation, which matters here because a random split leaks same-day network effects.",
      "Quantified **12 delay drivers at p < 0.01** using bootstrap confidence intervals over 1M+ historical legs.",
      "Presented model performance and operational trade-offs to American Airlines stakeholders in biweekly reviews.",
    ],
    tags: ["PostgreSQL", "XGBoost", "Feature engineering", "Walk-forward CV"],
  },
  {
    company: "Industrial AI Lab, Seoul National University of Science & Technology",
    title: "Research Assistant",
    location: "Seoul, South Korea",
    start: "Sep 2022",
    end: "Dec 2024",
    summary:
      "Rare-fault prediction on manufacturing sensor streams under severe class imbalance. The line of work became a Scientific Reports paper.",
    bullets: [
      "Modeled a **2.9M-row, 1-second** heat-treatment sensor stream to detect rare faults, combining XGBoost with control-chart limits and SHAP for threshold tuning.",
      "Cut inspection cost on **~263K semiconductor units** (under a 2% fault rate) by co-developing a knowledge-distillation and active-inspection framework.",
      "Reached near-teacher accuracy from low-cost features alone; uncertainty sampling beat random selection by **3 AUROC points**.",
      "Published in **Scientific Reports**, contributing methodology, formal analysis, and experimentation across 30+ repeated trials with significance testing.",
    ],
    tags: ["XGBoost", "SHAP", "Knowledge distillation", "Active learning"],
  },
];

export const education: Education[] = [
  {
    school: "University of Michigan, Ann Arbor",
    degree: "Master of Science",
    field: "Data Science",
    location: "Ann Arbor, MI",
    period: "Jul 2025 — May 2027 (expected)",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Statistical Inference",
      "Probability & Stochastic Processes",
      "Time Series Analysis",
      "Distributed Systems",
      "Data Structures",
    ],
  },
  {
    school: "Seoul National University of Science & Technology",
    degree: "Bachelor of Science",
    field: "Industrial & Information Systems Engineering (Minor: Computer Engineering)",
    location: "Seoul, South Korea",
    period: "Feb 2019 — Feb 2025",
  },
];

export const publications: Publication[] = [
  {
    authors: "Heo, J., Son, M., & Shim, J.",
    title:
      "Active Inspection with Knowledge Distillation for Cost-Effective Fault Prediction in Manufacturing Process",
    venue: "Scientific Reports (Nature Portfolio)",
    details: "Vol. 16, Article 8613",
    date: "February 2026",
  },
];

export const awards: { title: string; detail: string; date: string }[] = [
  {
    title: "3rd Place — 7th Annual eBay University Machine Learning Competition",
    detail:
      "Named-entity recognition on German eBay Motors listings. 3rd of 80 graduate teams, competing solo.",
    date: "Nov 2025",
  },
];

export const organizations: { name: string; detail: string; period: string }[] = [
  {
    name: "Michigan Data Science Team",
    detail: "University of Michigan",
    period: "Aug 2025 — Nov 2025",
  },
];
