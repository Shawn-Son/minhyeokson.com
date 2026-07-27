import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ebay-german-ner",
    title: "German E-commerce NER",
    tagline:
      "3rd of 80 graduate teams, solo, at a weighted-F3 of 0.9466 — within 0.002 of first place.",
    period: "Jul 2025 — Nov 2025",
    role: "Solo · eBay University ML Competition",
    tags: ["NLP"],
    stack: ["Python", "PyTorch", "XLM-RoBERTa", "mDeBERTa", "CRF", "Transformers"],
    links: [
      { label: "Competition", href: "https://eval.ai/web/challenges" },
    ],
    featured: true,
    metrics: [
      { value: "3rd / 80", label: "graduate teams, solo" },
      { value: "0.9466", label: "weighted F3" },
      { value: "0.002", label: "behind first place" },
    ],
    narrative: {
      problem: {
        body: [
          "eBay's 7th annual university competition asked for named-entity recognition over German eBay Motors listing titles — pulling structured attributes like brand, part type, and vehicle compatibility out of seller-written text.",
          "Listing titles are a genuinely hostile input for NER. They are not sentences. Sellers write in fragments, abbreviate aggressively, mix German and English, run words together in ways German compounding already encourages, and stuff keywords for search ranking. A model trained on well-formed German text has almost no purchase on them.",
          "I entered solo against 80 teams, most of them multi-person.",
        ],
      },
      data: {
        body: [
          "**10,000 labeled German listing titles**, with a much larger pool of unlabeled titles available.",
        ],
        list: [
          "Token boundaries are ambiguous — German compounds mean the entity often sits inside a word, not between two words.",
          "The label distribution is long-tailed: a handful of common attribute types dominate, and the rare ones are where the score is won or lost.",
          "Annotation is inconsistent on edge cases, which puts a ceiling on any model that trusts the labels absolutely.",
        ],
      },
      approach: {
        body: [
          "The backbone is a multilingual encoder — I evaluated **XLM-RoBERTa** and **mDeBERTa**, both of which have real German subword coverage, rather than a German-only model that would choke on the English fragments sellers mix in.",
          "On top of the encoder I put a **word-level CRF** rather than independent per-token softmax. This is the decision that mattered most. BIO tagging has hard structural constraints — an `I-BRAND` tag cannot follow an `O` tag — and a per-token classifier has no way to express that. It produces locally confident, globally invalid sequences. The CRF makes the transition structure part of the model instead of something you clean up afterward.",
          "Two additions handled the noise specifically:",
        ],
        list: [
          "**100+ rule and lexicon priors.** Vehicle brands and part types are a closed, knowable vocabulary. Making the model rediscover them from 10K examples is a waste of capacity, so I injected them as priors instead.",
          "**A verifier-gating ensemble.** Rather than averaging model outputs, a verifier decides which prediction to trust per span. Averaging on this task blurs exactly the confident, correct rare-class predictions you need.",
        ],
      },
      evaluation: {
        body: [
          "The competition scored on a **weighted F3**, not F1 — recall weighted roughly nine times heavier than precision. That asymmetry follows from the business use: a missed attribute means a listing that never surfaces in a filtered search, while a spurious one is comparatively cheap to absorb downstream.",
          "So the first real work was not modeling. It was **reimplementing eBay's official weighted-F3 as a local validation metric.** Until validation agrees with the leaderboard, every experiment is measuring the wrong thing, and you spend your submissions learning what you should have known offline.",
          "Once local validation tracked the leaderboard, the decision threshold could be tuned deliberately toward recall instead of being left at whatever `argmax` produced.",
        ],
      },
      results: {
        body: [
          "**3rd of 80 graduate teams at weighted-F3 0.9466, competing solo, within 0.002 of first place.** The submission also surpassed eBay's own published baseline.",
          "The gap between 3rd and 1st being smaller than a fifth of a percentage point is itself informative: at the top of this leaderboard everyone had converged on a similar architecture, and the remaining spread came from metric alignment and noise handling rather than from model choice.",
        ],
      },
      reflection: {
        body: [
          "I would spend the unlabeled listing pool rather than leaving it idle. Continued pretraining of the encoder on in-domain titles is the standard fix for exactly this distribution gap, and I ran out of time before trying it.",
          "The verifier gating was tuned more by hand than I would like. A learned gate over span-level features would likely be both better and easier to explain.",
          "And I would build the metric harness on day one. I built it early, but not first, and the experiments I ran before it existed were largely wasted.",
        ],
      },
    },
  },
  {
    slug: "kalshi-auto-trader",
    title: "Kalshi Auto Trader",
    tagline:
      "A probability-mispricing signal on event contracts, backtested over 2 years and deployed as a live bot with a sub-300ms execution loop.",
    period: "2026",
    role: "Solo",
    tags: ["Trading", "Time series"],
    stack: ["Python", "C++", "Kalshi API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Shawn-Son/kalshi-auto-trader",
      },
    ],
    featured: true,
    metrics: [
      { value: "<300ms", label: "order latency" },
      { value: "50+", label: "markets traded daily" },
      { value: "2 yrs", label: "backtest history" },
    ],
    narrative: {
      problem: {
        body: [
          "Kalshi lists event contracts that settle at $1 if an event happens and $0 if it does not, which means the price is a direct statement of implied probability. That makes mispricing unusually legible: if you have a better estimate of the probability than the order book does, the edge is arithmetic rather than a matter of interpretation.",
          "The constraints are that the markets are thin, the edges are small, and they close quickly. A signal that is right but slow gets filled at a worse price than the one it evaluated, which turns a positive-expectancy strategy into a negative one.",
        ],
      },
      data: {
        body: [
          "**Two years of Kalshi contract history** for backtesting, and the live Kalshi API for execution across 50+ event markets daily.",
        ],
        list: [
          "Thin books mean quoted prices are frequently stale, so a naive backtest that fills at the mid price systematically overstates returns.",
          "Contracts resolve on external events with their own timing, so the data is event-driven and irregularly spaced rather than a clean fixed-interval series.",
          "Two years is a small sample in strategy-evaluation terms — a point I take seriously below.",
        ],
      },
      approach: {
        body: [
          "The signal compares the market's implied probability against an independently estimated probability and trades the gap when it exceeds a threshold wide enough to cover fees and expected slippage.",
          "The architecture is deliberately split by language, along the boundary where each one is actually better:",
        ],
        list: [
          "**Python for research and signal generation** — the backtester, the probability estimation, and the parameter sweeps, where iteration speed is worth more than runtime.",
          "**C++ for the execution loop** — order placement and management, where the tail latency is what costs money. Porting this path off Python brought order latency **under 300ms**.",
        ],
      },
      evaluation: {
        body: [
          "Backtesting over 2 years of contract history, with fills modeled against the book rather than at the mid price, because on thin markets the difference between those two assumptions is larger than the edge itself.",
          "The honest evaluation question for any strategy like this is not the headline return. It is whether the return survives realistic transaction costs, whether it is concentrated in a few lucky contracts, and whether the live results match what the backtest predicted. I tracked live fills against backtest expectations for exactly that reason.",
        ],
      },
      results: {
        body: [
          "The bot runs autonomously across 50+ Kalshi event markets daily, with a sub-300ms execution loop after the C++ port. Over 6 months of live trading across 500+ contracts it returned **28%**.",
          "The engineering result I would defend more strongly than the return: the live system's fills stayed close enough to the backtest's modeled fills that the backtest remained a usable decision tool, which is the part that most retail strategies get wrong.",
        ],
      },
      reflection: {
        body: [
          "**The sample is too small to be confident in the return.** 500 contracts over 6 months, in one market regime, is not enough to separate edge from variance. I report it because it is what happened, not because I think it generalizes — and I would want several times that history before sizing up.",
          "I would add a proper position-sizing framework. The current version sizes by a fixed rule; fractional-Kelly sizing against the estimated edge would be a better use of the same signal.",
          "I would also make the probability estimator's inputs more diverse. Right now correlated markets can produce correlated positions, which concentrates risk in a way the per-trade view does not reveal.",
        ],
      },
    },
  },
  {
    slug: "active-inspection-knowledge-distillation",
    title: "Active Inspection with Knowledge Distillation",
    tagline:
      "Cost-effective fault prediction for semiconductor manufacturing — published in Scientific Reports.",
    period: "Sep 2022 — Dec 2024",
    role: "Co-author · Industrial AI Lab, SeoulTech",
    tags: ["Research", "Tabular ML"],
    stack: ["Python", "XGBoost", "Knowledge distillation", "SHAP", "Active learning"],
    links: [],
    featured: true,
    metrics: [
      { value: "263K", label: "units screened" },
      { value: "<2%", label: "fault rate" },
      { value: "+3", label: "AUROC pts over random" },
    ],
    narrative: {
      problem: {
        body: [
          "In semiconductor manufacturing, the measurements that predict a fault well are the expensive ones. High-fidelity inspection is slow and costly, so you cannot run it on everything — but faults are rare enough (**under 2%** here) that inspecting at random almost always inspects a good unit and learns nothing.",
          "That is the real constraint: not model accuracy in the abstract, but accuracy per dollar of inspection. A model that needs expensive features at inference time has not solved the problem it was brought in to solve.",
        ],
      },
      data: {
        body: [
          "A real manufacturing case study covering **~263K semiconductor units**, alongside a **2.9M-row, 1-second heat-treatment sensor stream** from the related fault-detection work.",
        ],
        list: [
          "Severe class imbalance — under 2% faulty — which makes accuracy meaningless as a metric and makes threshold choice the actual modeling decision.",
          "The informative features are precisely the ones that cost money to collect, which is the tension the whole method exists to resolve.",
          "Time-ordered sensor data, so any validation split that ignores time will leak.",
        ],
      },
      approach: {
        body: [
          "The framework combines two ideas that address different halves of the cost problem:",
        ],
        list: [
          "**Knowledge distillation** — a teacher model trained with the expensive high-fidelity features supervises a student that sees only cheap, always-available ones. The student inherits some of the teacher's discrimination without inheriting its input cost. This is what makes deployment affordable.",
          "**Active inspection** — rather than choosing units to inspect at random, select by model uncertainty, so the inspection budget goes to the units where the label actually carries information.",
        ],
      },
      evaluation: {
        body: [
          "**AUROC rather than accuracy**, because at a 2% base rate a model that predicts 'no fault' for everything is 98% accurate and completely worthless.",
          "The comparison that matters is not student-versus-teacher in isolation but **uncertainty sampling versus random sampling at an equal inspection budget** — that is the decision a plant actually faces.",
          "Everything was validated across **30+ repeated trials** with significance testing, because on a dataset this imbalanced, a single split's result is mostly noise about which rare positives landed in the test set.",
        ],
      },
      results: {
        body: [
          "The student reached **near-teacher accuracy using only low-cost features**, and **uncertainty sampling beat random selection by 3 AUROC points** at the same inspection budget.",
          "The work was published in **Scientific Reports** (Nature Portfolio), Vol. 16, Article 8613, February 2026, with my contribution spanning methodology, formal analysis, and experimentation.",
        ],
      },
      reflection: {
        body: [
          "The uncertainty measure is the obvious place to push. Plain predictive-entropy sampling is a reasonable baseline, but it selects redundant near-duplicate units; a batch-aware criterion that accounts for diversity within each inspection batch would use the same budget better.",
          "I would also want a cost-sensitive formulation where inspection cost enters the objective directly, instead of being handled by fixing the budget and optimizing accuracy within it. The current framing answers 'best accuracy for this budget' when the plant is really asking 'what budget should we set'.",
        ],
      },
    },
  },
  {
    slug: "agentic-rag-security-assistant",
    title: "Agentic RAG Security Assistant",
    tagline:
      "Retrieval and autonomous triage over 500K security logs, with a Go ingestion service feeding the inference pipeline.",
    period: "2026",
    role: "Solo",
    tags: ["LLM / Agents", "MLOps"],
    stack: ["Python", "Go", "PyTorch", "LangChain", "FastAPI", "S3"],
    links: [
      { label: "GitHub", href: "https://github.com/Shawn-Son/Agentic-RAG" },
    ],
    featured: true,
    metrics: [
      { value: "500K", label: "security logs indexed" },
      { value: "+22%", label: "top-5 recall" },
      { value: "+12", label: "F1 points on triage" },
    ],
    narrative: {
      problem: {
        body: [
          "Security operations centers drown in alerts. The overwhelming majority are benign, but each one still costs an analyst attention, and the cost of missing the rare real one is severe. The bottleneck is triage throughput, not detection.",
          "The constraint that shaped the design: security logs are sensitive, so the system had to work **offline-first**, against locally hosted models rather than an external API.",
        ],
      },
      data: {
        body: [
          "**500K security logs** for retrieval, **50K labeled alerts** for supervised fine-tuning, and a streaming source producing roughly **3M events per day**.",
        ],
        list: [
          "Log text is semi-structured and template-heavy, so naive embedding puts near-identical templates on top of each other and retrieval returns redundant neighbors.",
          "Labels are skewed toward benign, matching the real alert distribution.",
          "Volume is high enough that ingestion, not inference, becomes the first thing to break.",
        ],
      },
      approach: {
        body: [
          "Three components, each solving a distinct failure mode:",
        ],
        list: [
          "**Retrieval and ranking over the log corpus** — a RAG layer that surfaces historically similar incidents, so triage decisions are grounded in what the organization has actually seen rather than in the model's priors.",
          "**A fine-tuned open-source LLM** trained on the 50K labeled alerts. Fine-tuning rather than prompting because alert classification depends on organization-specific conventions that no amount of prompt context conveys efficiently.",
          "**A tool-calling agent** that triages autonomously — retrieving context, checking indicators, and escalating only what needs a human.",
          "**A Go microservice** streaming 3M events/day from S3 into the inference pipeline. Go rather than Python here because this path is I/O-bound and concurrent, which is precisely what it is good at.",
        ],
      },
      evaluation: {
        body: [
          "Retrieval and classification are measured separately, because they fail for different reasons and a combined end-to-end number hides which half is broken.",
          "**Top-5 recall** for retrieval — an analyst looks at a handful of similar incidents, so recall in the top few is what corresponds to real utility, not mean reciprocal rank over the full ranking.",
          "**F1 for alert classification**, since the class imbalance makes accuracy uninformative in the same way it does in the manufacturing work above.",
        ],
      },
      results: {
        body: [
          "Retrieval **lifted top-5 recall by 22%**. The fine-tuned classifier **improved F1 by 12 points** over the pre-fine-tuning baseline. The agent autonomously triages **200 alerts daily** via tool-calling, and the Go ingestion service sustains **3M events/day at 99.9% uptime**.",
        ],
      },
      reflection: {
        body: [
          "The agent has no calibrated notion of its own uncertainty, so it escalates by rule rather than by confidence. For a security tool that is the wrong default — the escalation decision should be driven by a calibrated probability, with an explicit, tunable cost asymmetry between a missed incident and a wasted analyst hour.",
          "Retrieval would benefit from template-aware chunking. Because log lines are formulaic, embedding raw lines wastes most of the vector on boilerplate that is identical across every document.",
          "I would also want a held-out temporal evaluation. Attack patterns drift, and a random split flatters any system like this one.",
        ],
      },
    },
  },
  {
    slug: "automl-platform",
    title: "User-Friendly AutoML Platform",
    tagline:
      "A Streamlit app that takes a raw dataset to an explained model report without the user writing code.",
    period: "2025",
    role: "Solo",
    tags: ["Tabular ML", "MLOps"],
    stack: ["Python", "Streamlit", "scikit-learn", "SHAP"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Shawn-Son/User-Friendly-Auto-ML-Service",
      },
    ],
    featured: false,
    metrics: [
      { value: "0", label: "lines of code required" },
      { value: "End-to-end", label: "EDA → model → report" },
    ],
    narrative: {
      problem: {
        body: [
          "Domain experts routinely have the dataset and the question but not the Python. The gap between those two is where a lot of useful analysis dies.",
        ],
      },
      data: {
        body: [
          "Arbitrary user-uploaded tabular data, which means the app cannot assume anything about types, missingness, or target encoding.",
        ],
      },
      approach: {
        body: [
          "The app auto-detects the task type from the target column, then runs exploratory analysis, preprocessing, model search, and SHAP-based explanation as one pipeline, ending in a downloadable report.",
          "The design bet is that **explanation is not optional**. An AutoML tool that returns a model and a score teaches its user nothing and invites misplaced trust; returning SHAP attributions alongside the score is what makes the output something a domain expert can actually argue with.",
        ],
      },
      evaluation: {
        body: [
          "Held-out performance per candidate model, with the selection surfaced to the user rather than hidden behind a single reported number.",
        ],
      },
      results: {
        body: [
          "A working end-to-end app: upload a dataset, get an explained model and a downloadable report, no code required.",
        ],
      },
      reflection: {
        body: [
          "It needs guardrails against the failure mode it makes easiest — target leakage. An automated pipeline will happily achieve a suspiciously good score off a leaked column, and a non-technical user has no way to catch it. Automatic leakage detection would matter more here than any additional model in the search space.",
        ],
      },
    },
  },
  {
    slug: "dysarthric-speech-classification",
    title: "Dysarthric Speech Classification & Calibration",
    tagline:
      "Deep-learning speech classification with an explicit focus on whether the model's confidence can be trusted.",
    period: "2026",
    role: "Solo",
    tags: ["Research"],
    stack: ["Python", "PyTorch", "Calibration"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Shawn-Son/Classification_and_Calibration_of_Dysarthric_Speech",
      },
    ],
    featured: false,
    metrics: [
      { value: "Calibration", label: "as a first-class metric" },
    ],
    narrative: {
      problem: {
        body: [
          "Dysarthria is a motor speech disorder, and classification models built on dysarthric speech sit close to clinical decisions. In that setting a confidently wrong prediction is far more damaging than an uncertain one, which makes calibration a requirement rather than a nicety.",
        ],
      },
      data: {
        body: ["Dysarthric speech recordings, with speaker-level variation that makes naive splits leak speaker identity into the test set."],
      },
      approach: {
        body: [
          "Deep classification models evaluated not only on discrimination but on whether predicted probabilities match observed frequencies — the same question I pursued in the calibration/distillation benchmarking work at SeoulTech.",
        ],
      },
      evaluation: {
        body: [
          "Discrimination metrics paired with calibration error, because a model can rank correctly while being systematically overconfident, and only one of those two failures is visible in an accuracy number.",
        ],
      },
      results: {
        body: [
          "A comparison of classification approaches with reliability assessed alongside accuracy rather than after the fact.",
        ],
      },
      reflection: {
        body: [
          "Speaker-independent evaluation is the thing to guard hardest here. With a small number of speakers, a random split lets the model memorize voices instead of learning the disorder's acoustic signature.",
        ],
      },
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags)),
).sort();
