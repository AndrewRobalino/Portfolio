"use client";

import { useTerminalSequence } from "@/hooks/useTerminalSequence";
import type { TerminalLine } from "@/hooks/useTerminalSequence";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const contactLines: TerminalLine[] = [
  { text: "cat contact.info", isCommand: true, speed: 50 },
  { text: "---", delay: 300, speed: 20 },
  { text: "andrewrobalino1@gmail.com", delay: 100, speed: 20 },
  { text: "AndrewRobalino", delay: 100, speed: 20 },
  { text: "Andrew Robalino Garcia", delay: 100, speed: 20 },
  { text: "@andrewrobalino", delay: 100, speed: 20 },
];

// Maps line index (after command + separator) to link data
const linkMeta: { icon: LucideIcon; href: string }[] = [
  { icon: Mail, href: "mailto:andrewrobalino1@gmail.com" },
  { icon: Github, href: "https://github.com/AndrewRobalino" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/andrew-robalino-garcia-b74563323/" },
  { icon: Instagram, href: "https://instagram.com/andrewrobalino" },
];

export default function ContactContent() {
  const { displayedLines } = useTerminalSequence(contactLines);

  return (
    <div>
      {displayedLines.map((line, i) => {
        const linkIndex = i - 2; // first 2 lines are command + separator
        const meta = linkIndex >= 0 ? linkMeta[linkIndex] : null;

        if (meta && !line.isCommand) {
          const Icon = meta.icon;
          const isDisabled = meta.href === "#";

          return (
            <a
              key={i}
              href={isDisabled ? undefined : meta.href}
              target={isDisabled ? undefined : "_blank"}
              rel={isDisabled ? undefined : "noopener noreferrer"}
              className={`flex items-center gap-3 leading-relaxed w-fit ${
                isDisabled
                  ? "text-white/40 cursor-default"
                  : "text-white/80 hover:text-white transition-colors duration-200"
              }`}
            >
              <Icon size={18} className="shrink-0" />
              <span>{line.text}</span>
              {line.isTyping && <span className="terminal-cursor">|</span>}
            </a>
          );
        }

        return (
          <p key={i} className="leading-relaxed">
            {line.isCommand && (
              <span className="text-terminal-green">$ </span>
            )}
            <span className="text-white">{line.text}</span>
            {line.isTyping && <span className="terminal-cursor">|</span>}
          </p>
        );
      })}
    </div>
  );
}
