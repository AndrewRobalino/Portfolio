import { useState, useEffect, useCallback, useRef } from "react";

interface UseRotatingWordReturn {
  currentWord: string;
  currentIndex: number;
  triggerNext: () => void;
}

export function useRotatingWord(
  words: string[],
  interval: number = 6000
): UseRotatingWordReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);
  }, [words.length, interval]);

  const triggerNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
    startTimer(); // reset interval on external trigger
  }, [words.length, startTimer]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  return {
    currentWord: words[currentIndex],
    currentIndex,
    triggerNext,
  };
}
