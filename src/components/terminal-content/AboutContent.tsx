"use client";

import { useTerminalSequence } from "@/hooks/useTerminalSequence";
import { aboutLines } from "@/data/terminalContent";

export default function AboutContent() {
  const { displayedLines } = useTerminalSequence(aboutLines);

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
    </div>
  );
}
