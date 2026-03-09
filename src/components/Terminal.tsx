"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import TerminalTitleBar from "./TerminalTitleBar";
import AboutContent from "./terminal-content/AboutContent";
import ProjectsContent from "./terminal-content/ProjectsContent";
import {
  useTerminalSequence,
  type TerminalLine,
} from "@/hooks/useTerminalSequence";
import { useRotatingWord } from "@/hooks/useRotatingWord";

const IDENTITY_WORDS = [
  "Programmer",
  "Student",
  "Builder",
  "Athlete",
  "Leader",
  "Creator",
];

const NAV_ITEMS = [
  { label: "about_me", section: "about" },
  { label: "projects", section: "projects" },
  { label: "resume", section: "resume" },
  { label: "contact", section: "contact" },
] as const;

type Section = "intro" | "about" | "projects" | "resume" | "contact";

const introLines: TerminalLine[] = [
  { text: "whoami", isCommand: true, speed: 60 },
  { text: "Hi, I'm Andrew Robalino Garcia", delay: 300, speed: 30 },
];

export default function Terminal() {
  const [activeSection, setActiveSection] = useState<Section>("intro");

  const { displayedLines, isComplete } = useTerminalSequence(introLines);
  const { currentWord } = useRotatingWord(IDENTITY_WORDS);

  const showRotatingWord = isComplete;
  const showNav = isComplete;

  const sectionPlaceholders: Record<Exclude<Section, "intro">, string> = useMemo(
    () => ({
      about: "$ Loading about_me...",
      projects: "$ Loading projects...",
      resume: "$ Loading resume...",
      contact: "$ Loading contact...",
    }),
    []
  );

  return (
    <div className="flex flex-col h-full border border-white/10 overflow-hidden">
      <TerminalTitleBar />
      <div className="flex-1 bg-matte-black p-6 font-mono text-sm overflow-y-auto terminal-scrollbar">
        {/* Intro sequence lines */}
        {displayedLines.map((line, i) => (
          <p key={i} className="leading-relaxed">
            {line.isCommand && (
              <span className="text-terminal-green">$ </span>
            )}
            <span className="text-white">{line.text}</span>
            {line.isTyping && <span className="terminal-cursor">|</span>}
          </p>
        ))}

        {/* Rotating word line */}
        {showRotatingWord && (
          <p className="leading-relaxed">
            <span className="text-white/60">I&apos;m a </span>
            <span className="text-white font-semibold">{currentWord}</span>
            {activeSection === "intro" && (
              <span className="terminal-cursor">|</span>
            )}
          </p>
        )}

        {/* Nav buttons */}
        {showNav && (
          <motion.div
            className="flex flex-wrap gap-3 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => setActiveSection(item.section)}
                className={`font-mono text-sm border px-4 py-2 transition-colors ${
                  activeSection === item.section
                    ? "border-white/50 text-white"
                    : "border-white/20 text-white/60 hover:border-white/40 hover:text-white/80"
                }`}
              >
                [ {item.label} ]
              </button>
            ))}
          </motion.div>
        )}

        {/* Section content area */}
        {activeSection === "about" && (
          <div className="mt-6" key={activeSection}>
            <AboutContent />
          </div>
        )}
        {activeSection === "projects" && (
          <div className="mt-6" key={activeSection}>
            <ProjectsContent />
          </div>
        )}
        {(activeSection === "resume" || activeSection === "contact") && (
          <div className="mt-6">
            <p className="leading-relaxed">
              <span className="text-terminal-green">
                {sectionPlaceholders[activeSection]}
              </span>
              <span className="terminal-cursor">|</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
