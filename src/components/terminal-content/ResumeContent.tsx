"use client";

import { useMemo } from "react";
import {
  useTerminalSequence,
  type TerminalLine,
} from "@/hooks/useTerminalSequence";

const resumeLines: TerminalLine[] = [
  { text: "cat resume.pdf", isCommand: true, speed: 50 },
  { text: "", delay: 300 },
  { text: "Resume preview loading...", speed: 30, delay: 200 },
];

export default function ResumeContent() {
  const { displayedLines, isComplete } = useTerminalSequence(resumeLines);

  return (
    <div>
      {displayedLines.map((line, i) => (
        <p key={i} className="leading-relaxed">
          {line.isCommand && (
            <span className="text-terminal-green">$ </span>
          )}
          <span className="text-white">{line.text}</span>
          {line.isTyping && <span className="terminal-cursor">|</span>}
        </p>
      ))}

      {isComplete && (
        <div className="mt-6 space-y-4">
          <div className="border border-white/10 min-h-[200px] flex items-center justify-center">
            <span className="text-white/30 font-mono text-sm">
              Resume preview — coming soon
            </span>
          </div>

          <a
            href="#"
            className="inline-block font-mono text-sm border border-white/20 px-4 py-2 text-white/40 cursor-not-allowed opacity-50"
            onClick={(e) => e.preventDefault()}
          >
            [ download resume ]
          </a>
        </div>
      )}
    </div>
  );
}
