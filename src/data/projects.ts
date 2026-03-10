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
    name: "Draft-Lab",
    slug: "draft-lab",
    tag: "[LIVE]",
    tagColor: "text-terminal-green",
    summary:
      "Solo-built a real-time drafting assistant for Brawl Stars competitive play. Collected and structured custom datasets from World Finals, then built the frontend with React and Vite — featuring dynamic matchup analysis, filtered brawler recommendations, and a responsive data-driven UI.",
    screenshot: "/images/draft-lab.png",
    demoLink: "https://draft-lab-eight.vercel.app",
    githubLink: "https://github.com/AndrewRobalino/Draft-Lab",
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
