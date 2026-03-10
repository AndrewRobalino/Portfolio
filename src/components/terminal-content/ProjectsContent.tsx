"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import {
  useTerminalSequence,
  type TerminalLine,
} from "@/hooks/useTerminalSequence";
import { projects } from "@/data/projects";
import EightPuzzleDemo from "./demos/EightPuzzleDemo";
import RestaurantDemo from "./demos/RestaurantDemo";
import FuelLogDemo from "./demos/FuelLogDemo";

const ERROR_LINES = [
  "ERROR: STACK OVERFLOW at 0x7fff2a3b",
  "SEGFAULT: memory corruption detected...",
  "PANIC: kernel fault in module [ui_render]",
  "WARNING: recursive loop in ./andrew/ambition",
  "FATAL: ego.exe has exceeded maximum capacity",
  "ERROR: cannot allocate memory for dreams[]",
  "ABORT: too many open projects (limit: \u221e)",
];

function useTypingEffect(text: string, speed: number, start: boolean) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!start) return;
    setDisplayed("");
    setIsDone(false);

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return { displayed, isDone };
}

function EasterEggContent() {
  const [visibleErrors, setVisibleErrors] = useState<string[]>([]);
  const [phase, setPhase] = useState<"errors" | "wait" | "reveal" | "done">("errors");
  const errorIndexRef = useRef(0);

  useEffect(() => {
    if (phase !== "errors") return;

    if (errorIndexRef.current >= ERROR_LINES.length) {
      const pauseTimer = setTimeout(() => setPhase("wait"), 800);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      const idx = errorIndexRef.current;
      setVisibleErrors((prev) => [...prev, ERROR_LINES[idx]]);
      errorIndexRef.current = idx + 1;
    }, 70);

    return () => clearTimeout(timer);
  }, [phase, visibleErrors.length]);

  const { displayed: waitText, isDone: waitDone } = useTypingEffect(
    "wait.",
    80,
    phase === "wait" || phase === "reveal" || phase === "done"
  );

  useEffect(() => {
    if (waitDone && phase === "wait") {
      const timer = setTimeout(() => setPhase("reveal"), 500);
      return () => clearTimeout(timer);
    }
  }, [waitDone, phase]);

  const { displayed: revealText, isDone: revealDone } = useTypingEffect(
    "you're looking at it.",
    50,
    phase === "reveal" || phase === "done"
  );

  useEffect(() => {
    if (revealDone && phase === "reveal") {
      setPhase("done");
    }
  }, [revealDone, phase]);

  const showCursor = phase !== "done";

  return (
    <div>
      <p className="leading-relaxed">
        <span className="text-terminal-green">$ </span>
        <span className="text-white">cat projects/portfolio/readme.md</span>
      </p>

      {visibleErrors.map((err, i) => (
        <p key={i} className="leading-relaxed text-slash-red">
          {err}
        </p>
      ))}

      {(phase === "wait" || phase === "reveal" || phase === "done") && (
        <p className="leading-relaxed mt-3">
          <span className="text-white">{waitText}</span>
          {phase === "wait" && showCursor && (
            <span className="terminal-cursor">|</span>
          )}
        </p>
      )}

      {(phase === "reveal" || phase === "done") && (
        <p className="leading-relaxed">
          <span className="text-white">{revealText}</span>
          {phase === "reveal" && showCursor && (
            <span className="terminal-cursor">|</span>
          )}
        </p>
      )}
    </div>
  );
}

function PlaceholderContent() {
  const lines: TerminalLine[] = useMemo(() => [
    { text: "ls projects/upcoming/", isCommand: true, speed: 40 },
    { text: "more to come...", delay: 400, speed: 60 },
  ], []);

  const { displayedLines } = useTerminalSequence(lines);

  return (
    <div>
      {displayedLines.map((line, i) => (
        <p key={i} className="leading-relaxed">
          {line.isCommand && (
            <span className="text-terminal-green">$ </span>
          )}
          <span className={i === 1 ? "text-white/40" : "text-white"}>
            {line.text}
          </span>
          {line.isTyping && <span className="terminal-cursor">|</span>}
        </p>
      ))}
    </div>
  );
}

const DEMO_MAP: Record<string, React.ComponentType> = {
  "8-puzzle": EightPuzzleDemo,
  "restaurant-manager": RestaurantDemo,
  "fuel-log": FuelLogDemo,
};

function DemoProjectContent({ projectIndex }: { projectIndex: number }) {
  const project = projects[projectIndex];

  const lines: TerminalLine[] = useMemo(() => [
    { text: `run projects/${project.slug}/demo`, isCommand: true, speed: 40 },
    { text: `${project.name}  ${project.tag}`, delay: 300, speed: 30 },
    { text: project.summary, delay: 200, speed: 15 },
  ], [project.slug, project.name, project.tag, project.summary]);

  const { displayedLines, isComplete } = useTerminalSequence(lines);
  const DemoComponent = DEMO_MAP[project.slug];

  return (
    <div>
      {displayedLines.map((line, i) => (
        <p key={i} className="leading-relaxed">
          {line.isCommand && (
            <span className="text-terminal-green">$ </span>
          )}
          {i === 1 ? (
            <span className="text-white">
              {line.text.includes(project.tag) ? (
                <>
                  {line.text.split(project.tag)[0]}
                  <span className={project.tagColor}>{project.tag}</span>
                </>
              ) : (
                line.text
              )}
            </span>
          ) : (
            <span className="text-white">{line.text}</span>
          )}
          {line.isTyping && <span className="terminal-cursor">|</span>}
        </p>
      ))}

      {isComplete && DemoComponent && (
        <div className="mt-4 border-t border-white/10 pt-4 animate-fade-in">
          <DemoComponent />
        </div>
      )}
    </div>
  );
}

function NormalProjectContent({ projectIndex }: { projectIndex: number }) {
  const project = projects[projectIndex];

  const lines: TerminalLine[] = useMemo(() => [
    { text: `cat projects/${project.slug}/readme.md`, isCommand: true, speed: 40 },
    { text: `${project.name}  ${project.tag}`, delay: 300, speed: 30 },
    { text: project.summary, delay: 200, speed: 15 },
  ], [project.slug, project.name, project.tag, project.summary]);

  const { displayedLines, isComplete } = useTerminalSequence(lines);

  return (
    <div>
      {displayedLines.map((line, i) => (
        <p key={i} className="leading-relaxed">
          {line.isCommand && (
            <span className="text-terminal-green">$ </span>
          )}
          {i === 1 ? (
            <span className="text-white">
              {line.text.includes(project.tag) ? (
                <>
                  {line.text.split(project.tag)[0]}
                  <span className={project.tagColor}>{project.tag}</span>
                </>
              ) : (
                line.text
              )}
            </span>
          ) : (
            <span className="text-white">{line.text}</span>
          )}
          {line.isTyping && <span className="terminal-cursor">|</span>}
        </p>
      ))}

      {/* Screenshot preview */}
      {isComplete && project.screenshot && (
        <div className="mt-4 animate-fade-in">
          <p className="text-white/30 text-xs mb-2 font-mono">// preview</p>
          <div className="border border-white/10 overflow-hidden" style={{ maxWidth: 360 }}>
            <Image
              src={project.screenshot}
              alt={`${project.name} preview`}
              width={360}
              height={200}
              className="w-full h-auto"
              sizes="360px"
            />
          </div>
        </div>
      )}

      {isComplete && (project.demoLink || project.githubLink) && (
        <div className="flex gap-3 mt-4 animate-fade-in">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm border border-terminal-green/30 px-4 py-2 text-terminal-green hover:border-terminal-green/60 hover:text-terminal-green transition-colors"
            >
              [ view site ]
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm border border-white/20 px-4 py-2 text-white/60 hover:border-white/40 hover:text-white/80 transition-colors"
            >
              [ github ]
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectsContent() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const project = projects[currentProjectIndex];
  const total = projects.length;

  const goNext = () =>
    setCurrentProjectIndex((prev) => (prev + 1) % total);
  const goPrev = () =>
    setCurrentProjectIndex((prev) => (prev - 1 + total) % total);

  return (
    <div>
      {/* Project content — key forces remount on index change */}
      <div key={currentProjectIndex}>
        {project.isPlaceholder ? (
          <PlaceholderContent />
        ) : project.isEasterEgg ? (
          <EasterEggContent />
        ) : project.isDemo ? (
          <DemoProjectContent projectIndex={currentProjectIndex} />
        ) : (
          <NormalProjectContent projectIndex={currentProjectIndex} />
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-3 mt-6">
        <button
          onClick={goPrev}
          className="font-mono text-sm border border-terminal-green/30 px-5 py-2 text-terminal-green/70 hover:border-terminal-green/60 hover:text-terminal-green transition-colors"
        >
          [ prev ]
        </button>
        <span className="font-mono text-sm text-white/40">
          {currentProjectIndex + 1}/{total}
        </span>
        <button
          onClick={goNext}
          className="font-mono text-sm border border-terminal-green/30 px-5 py-2 text-terminal-green/70 hover:border-terminal-green/60 hover:text-terminal-green transition-colors"
        >
          [ next ]
        </button>
      </div>
    </div>
  );
}
