"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TerminalTitleBar from "./TerminalTitleBar";
import ErrorBoundary from "./ErrorBoundary";
import AboutContent from "./terminal-content/AboutContent";
import ProjectsContent from "./terminal-content/ProjectsContent";
import ResumeContent from "./terminal-content/ResumeContent";
import ContactContent from "./terminal-content/ContactContent";
import {
  useTerminalSequence,
  type TerminalLine,
} from "@/hooks/useTerminalSequence";
import { useRotatingWord } from "@/hooks/useRotatingWord";

const IDENTITY_WORDS = [
  "Programmer",
  "Developer",
  "Student",
  "Builder",
  "Creator",
  "Designer",
  "Hispanic",
  "Athlete",
  "Teammate",
  "Competitor",
  "Leader",
  "Problem Solver",
  "Traveler",
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
];

const ASCII_ARG = `
  █████╗ ██████╗  ██████╗
 ██╔══██╗██╔══██╗██╔════╝
 ███████║██████╔╝██║  ███╗
 ██╔══██║██╔══██╗██║   ██║
 ██║  ██║██║  ██║╚██████╔╝
 ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝`;

export default function Terminal() {
  const [activeSection, setActiveSection] = useState<Section>("intro");
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const { displayedLines, isComplete } = useTerminalSequence(introLines);
  const { displayedText } = useRotatingWord(IDENTITY_WORDS);

  // Auto-scroll terminal body to bottom when content changes
  const lineCount = displayedLines.length;
  useEffect(() => {
    const el = terminalBodyRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [activeSection, lineCount]);

  const showIntroContent = isComplete;
  const showNav = isComplete;

  return (
    <div className="flex flex-col h-auto min-h-[70vh] md:h-full border border-white overflow-hidden bg-matte-black shadow-[0_0_40px_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.8)]">
      <TerminalTitleBar />
      <div ref={terminalBodyRef} className="flex-1 bg-matte-black p-4 md:p-6 font-mono overflow-y-auto terminal-scrollbar">
        {/* Intro command typing */}
        {displayedLines.map((line, i) => (
          <p key={i} className="leading-relaxed text-sm">
            {line.isCommand && (
              <span className="text-terminal-green">$ </span>
            )}
            <span className="text-white">{line.text}</span>
            {line.isTyping && <span className="terminal-cursor">|</span>}
          </p>
        ))}

        {/* Neofetch-style hero — always visible */}
        {showIntroContent && (
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 mt-4">
            {/* ASCII art — hidden on very small screens, shown on sm+ */}
            <pre className="text-terminal-green text-base sm:text-lg md:text-[1.6rem] leading-tight select-none shrink-0 hidden sm:block">
              {ASCII_ARG}
            </pre>

            {/* Info — right side on desktop, below on mobile */}
            <div className="flex flex-col justify-center pt-0 md:pt-2 md:pl-4">
              <h1 className="text-xl sm:text-2xl md:text-[1.7rem] font-bold tracking-wide md:whitespace-nowrap">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="text-terminal-green underline underline-offset-4 decoration-terminal-green/40">Andrew Robalino Garcia</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-[1.6rem] mt-1 mb-3 md:mb-4">
                <span className="text-white">I&apos;m a </span>
                <span className="text-terminal-green font-semibold">{displayedText}</span>
                <span className="terminal-cursor-thick">█</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-0.5 text-xs">
                {[
                  ["OS", "Portfolio v1.0"],
                  ["Host", "Miami, FL"],
                  ["Kernel", "FIU Computer Science"],
                  ["Uptime", "Dec 2026 (graduating)"],
                  ["Shell", "React 19 + Next.js"],
                  ["Theme", "Matte Black [terminal]"],
                  ["Packages", "7 projects loaded"],
                  ["Status", "open to opportunities"],
                ].map(([label, value]) => (
                  <p key={label}>
                    <span className="text-terminal-green-muted font-semibold">{label}: </span>
                    <span className="text-white/80">{value}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Nav buttons — centered below intro content */}
        {showNav && (
          <motion.div
            className="flex flex-wrap gap-2 md:gap-3 justify-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => setActiveSection(item.section)}
                className={`font-mono text-xs md:text-sm border px-3 py-1.5 md:px-4 md:py-2 transition-all duration-200 ${
                  activeSection === item.section
                    ? "border-terminal-green-muted text-terminal-green-muted shadow-[0_0_10px_rgba(52,211,153,0.2)]"
                    : "border-terminal-green-muted/30 text-terminal-green-muted/70 hover:border-terminal-green-muted/60 hover:text-terminal-green-muted hover:shadow-[0_0_8px_rgba(52,211,153,0.15)]"
                }`}
              >
                [ {item.label} ]
              </button>
            ))}
          </motion.div>
        )}

        {/* Section content area */}
        <ErrorBoundary>
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
          {activeSection === "resume" && (
            <div className="mt-6" key="resume">
              <ResumeContent />
            </div>
          )}
          {activeSection === "contact" && (
            <div className="mt-6" key="contact">
              <ContactContent />
            </div>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
}
