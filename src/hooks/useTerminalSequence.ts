import { useState, useEffect, useCallback, useRef } from "react";

export interface TerminalLine {
  text: string;
  delay?: number;
  speed?: number;
  isCommand?: boolean;
}

export interface DisplayedLine {
  text: string;
  isCommand?: boolean;
  isTyping: boolean;
}

interface UseTerminalSequenceOptions {
  speed?: number;
  startImmediately?: boolean;
}

interface UseTerminalSequenceReturn {
  displayedLines: DisplayedLine[];
  currentLineIndex: number;
  isComplete: boolean;
  reset: () => void;
}

export function useTerminalSequence(
  lines: TerminalLine[],
  options: UseTerminalSequenceOptions = {}
): UseTerminalSequenceReturn {
  const { speed: defaultSpeed = 40, startImmediately = true } = options;

  const [displayedLines, setDisplayedLines] = useState<DisplayedLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(startImmediately ? 0 : -1);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isDelaying, setIsDelaying] = useState(false);

  const linesRef = useRef(lines);
  linesRef.current = lines;

  const reset = useCallback(() => {
    setDisplayedLines([]);
    setCurrentLineIndex(startImmediately ? 0 : -1);
    setCharIndex(0);
    setIsComplete(false);
    setIsDelaying(false);
  }, [startImmediately]);

  // Handle delay between lines
  useEffect(() => {
    if (!isDelaying || currentLineIndex >= lines.length) return;

    const delay = currentLineIndex > 0
      ? (lines[currentLineIndex - 1]?.delay ?? 200)
      : 0;

    const timer = setTimeout(() => {
      setIsDelaying(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [isDelaying, currentLineIndex, lines]);

  // Type characters
  useEffect(() => {
    if (isDelaying || isComplete || currentLineIndex < 0) return;
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = lines[currentLineIndex];
    const lineSpeed = currentLine.speed ?? defaultSpeed;
    const fullText = currentLine.text;

    // Update displayed lines with current typing state
    setDisplayedLines((prev) => {
      const completed = prev.filter((l) => !l.isTyping);

      // If we haven't started this line yet or are still typing it
      if (completed.length === currentLineIndex) {
        return [
          ...completed,
          {
            text: fullText.slice(0, charIndex),
            isCommand: currentLine.isCommand,
            isTyping: true,
          },
        ];
      }

      // Update the typing line's text
      const updated = [...prev];
      updated[currentLineIndex] = {
        text: fullText.slice(0, charIndex),
        isCommand: currentLine.isCommand,
        isTyping: true,
      };
      return updated;
    });

    if (charIndex >= fullText.length) {
      // Line complete — finalize it and move to next
      setDisplayedLines((prev) => {
        const updated = [...prev];
        updated[currentLineIndex] = {
          text: fullText,
          isCommand: currentLine.isCommand,
          isTyping: false,
        };
        return updated;
      });

      const nextIndex = currentLineIndex + 1;
      if (nextIndex >= lines.length) {
        setIsComplete(true);
      } else {
        setCurrentLineIndex(nextIndex);
        setCharIndex(0);
        setIsDelaying(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, lineSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, currentLineIndex, lines, defaultSpeed, isDelaying, isComplete]);

  return { displayedLines, currentLineIndex, isComplete, reset };
}
