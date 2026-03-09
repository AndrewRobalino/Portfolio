"use client";

import { useTerminalSequence } from "@/hooks/useTerminalSequence";
import type { TerminalLine } from "@/hooks/useTerminalSequence";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const contactLines: TerminalLine[] = [
  { text: "cat contact.info", isCommand: true, speed: 50 },
  { text: "---", delay: 300, speed: 20 },
  { text: "email    andrewrobalino1@gmail.com", delay: 100, speed: 20 },
  { text: "github   AndrewRobalino", delay: 100, speed: 20 },
  { text: "linkedin Andrew Robalino Garcia", delay: 100, speed: 20 },
  { text: "instagram (coming soon)", delay: 100, speed: 20 },
];

const contactLinks = [
  {
    icon: Mail,
    label: "andrewrobalino1@gmail.com",
    href: "mailto:andrewrobalino1@gmail.com",
  },
  {
    icon: Github,
    label: "AndrewRobalino",
    href: "https://github.com/AndrewRobalino",
  },
  {
    icon: Linkedin,
    label: "Andrew Robalino Garcia",
    href: "https://www.linkedin.com/in/andrew-robalino-garcia-b74563323/",
  },
  {
    icon: Instagram,
    label: "coming soon",
    href: "#",
  },
];

export default function ContactContent() {
  const { displayedLines, isComplete } = useTerminalSequence(contactLines);

  return (
    <div>
      {/* Typed terminal lines — fade out once complete */}
      <div
        className={`transition-opacity duration-500 ${
          isComplete ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        {displayedLines.map((line, i) => (
          <p key={i} className="leading-relaxed">
            {line.isCommand && (
              <span className="text-terminal-green">$ </span>
            )}
            <span className="text-white">{line.text}</span>
            {line.isTyping && <span className="terminal-cursor">|</span>}
          </p>
        ))}
      </div>

      {/* Clickable links — appear after typing completes */}
      {isComplete && (
        <div className="flex flex-col gap-3 animate-in fade-in duration-500">
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 w-fit"
            >
              <Icon size={18} className="shrink-0" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
