export interface Project {
  name: string;
  slug: string;
  tag: string;
  tagColor: string; // tailwind text color class
  summary: string;
  screenshot?: string; // path to screenshot image (placeholder for now)
  demoLink?: string;
  githubLink?: string;
  isEasterEgg?: boolean;
  isDemo?: boolean;
}

export const projects: Project[] = [
  {
    name: "Miami-TandM",
    slug: "miami-tandm",
    tag: "[LIVE]",
    tagColor: "text-terminal-green",
    summary:
      "Fully responsive marketing site built with React and Tailwind CSS for a Miami-based tax & accounting firm. Features dynamic routing, animated UI components with Framer Motion, and a clean component architecture designed for scalability.",
    demoLink: "#", // placeholder
    githubLink: "https://github.com/AndrewRobalino/Miami-TandM",
  },
  {
    name: "Draft-Lab",
    slug: "draft-lab",
    tag: "[LIVE]",
    tagColor: "text-terminal-green",
    summary:
      "Real-time drafting assistant for Brawl Stars competitive play, powered by custom datasets from World Finals. Built with React and Vite, featuring dynamic matchup analysis, filtered brawler recommendations, and a responsive data-driven UI.",
    demoLink: "#", // placeholder
    githubLink: "https://github.com/AndrewRobalino/Draft-Lab",
  },
  {
    name: "Portfolio",
    slug: "portfolio",
    tag: "[LIVE]",
    tagColor: "text-terminal-green",
    summary: "", // not used — easter egg handles this
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
    tag: "[LIVE TEST]",
    tagColor: "text-cyan-400",
    summary:
      "An interactive solver for the classic 8-puzzle problem using search algorithms.",
    isDemo: true,
    githubLink: "https://github.com/AndrewRobalino/AndrewRobalino", // placeholder
  },
  {
    name: "Restaurant Manager",
    slug: "restaurant-manager",
    tag: "[LIVE TEST]",
    tagColor: "text-cyan-400",
    summary:
      "A C-based system for managing restaurant orders and table assignments.",
    isDemo: true,
  },
  {
    name: "Fuel Log Parser",
    slug: "fuel-log",
    tag: "[LIVE TEST]",
    tagColor: "text-cyan-400",
    summary:
      "A file parser that reads fuel log data and outputs formatted reports.",
    isDemo: true,
  },
];
