"use client";

import Image from "next/image";
import {
  useTerminalSequence,
  type TerminalLine,
} from "@/hooks/useTerminalSequence";

const resumeLines: TerminalLine[] = [
  { text: "cat resume.pdf", isCommand: true, speed: 50 },
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
        <div className="mt-4 space-y-4 animate-fade-in">
          <div className="border border-white/10 overflow-hidden max-w-full sm:max-w-[400px]">
            <Image
              src="/images/resume-preview.png"
              alt="Andrew Robalino Garcia — Resume"
              width={400}
              height={518}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>

          <a
            href="/Andrew_Robalino_Resume.pdf"
            download="Andrew_Robalino_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-sm border border-terminal-green/30 px-4 py-2 text-terminal-green hover:border-terminal-green/60 transition-colors"
          >
            [ download resume ]
          </a>
        </div>
      )}
    </div>
  );
}
