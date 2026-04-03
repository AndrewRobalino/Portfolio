export interface Project {
  name: string;
  slug: string;
  tag: string;
  tagColor: string;
  summary: string;
  screenshot?: string;
  demoLink?: string;
  githubLink?: string;
  isEasterEgg?: boolean;
  isDemo?: boolean;
  isPlaceholder?: boolean;
}

export const projects: Project[] = [
  {
    name: "Miami-TandM",
    slug: "miami-tandm",
    tag: "[LIVE]",
    tagColor: "text-terminal-green",
    summary:
      "Solo-built a fully responsive marketing site with React and Tailwind CSS for a Miami-based tax & accounting firm. Designed and implemented dynamic routing, animated UI components with Framer Motion, and a clean component architecture designed for scalability.",
    screenshot: "/images/miami-tandm.png",
    demoLink: "https://miami-taxes.vercel.app",
    githubLink: "https://github.com/AndrewRobalino/Miami-TandM",
  },
  {
    name: "DocuMind",
    slug: "documind",
    tag: "[LIVE]",
    tagColor: "text-terminal-green",
    summary:
      "Built a production AI-powered financial analysis platform for a construction PM firm. Full-stack: React + Vite + Tailwind frontend, FastAPI + PostgreSQL + Redis backend, Docker deployment. Multi-model AI (Gemini/Claude/OpenAI) with BYOK support for spreadsheet ingestion, cross-file analysis, anomaly detection, and cost projections.",
    screenshot: "/images/documind.png",
    demoLink: "https://documind-phi.vercel.app",
    githubLink: "https://github.com/AndrewRobalino/DocuMind",
  },
  {
    name: "Draft-Lab",
    slug: "draft-lab",
    tag: "[LIVE]",
    tagColor: "text-terminal-green",
    summary:
      "Co-built a competitive drafting assistant for Brawl Stars esports. Scraped and analyzed 100+ BSC 2026 pro matches, built a 15-factor recommendation engine with range-aware scoring, hard counters, synergies, and map trait analysis. React + Vite frontend with live draft coaching, ban suggestions, and an AshBS-style meta tier list.",
    screenshot: "/images/draft-lab.png",
    demoLink: "https://brawl-draft-lab.vercel.app",
    githubLink: "https://github.com/AndrewRobalino/brawl-draft-lab",
  },
  {
    name: "Portfolio",
    slug: "portfolio",
    tag: "[LIVE]",
    tagColor: "text-terminal-green",
    summary: "",
    isEasterEgg: true,
  },
  {
    name: "Special-Question",
    slug: "special-question",
    tag: "[CLASSIFIED]",
    tagColor: "text-slash-red",
    summary: "A personal project built for someone special. Access restricted.",
    githubLink: "https://github.com/AndrewRobalino/Special-Question",
  },
  {
    name: "8-Puzzle Solver",
    slug: "8-puzzle",
    tag: "[INTERACTIVE]",
    tagColor: "text-cyan-400",
    summary:
      "Built as a data structures project. Classic sliding tile puzzle with solvability validation. Click a tile next to the empty space to move it.",
    isDemo: true,
  },
  {
    name: "Restaurant Manager",
    slug: "restaurant-manager",
    tag: "[INTERACTIVE]",
    tagColor: "text-cyan-400",
    summary:
      "Built as an OOP project. Table management system with stateful seat tracking, menu ordering, and active table management.",
    isDemo: true,
  },
  {
    name: "Fuel Log Parser",
    slug: "fuel-log",
    tag: "[INTERACTIVE]",
    tagColor: "text-cyan-400",
    summary:
      "Built as a file I/O project. Enter fuel data and parse it into a formatted report with per-entry MPG, totals, and averages.",
    isDemo: true,
  },
  {
    name: "More to come",
    slug: "more",
    tag: "...",
    tagColor: "text-white/40",
    summary: "",
    isPlaceholder: true,
  },
];
