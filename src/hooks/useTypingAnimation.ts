import { useState, useEffect, useCallback, useRef } from "react";

interface UseTypingAnimationReturn {
  displayedText: string;
  isComplete: boolean;
  reset: () => void;
}

export function useTypingAnimation(
  text: string,
  speed: number = 40
): UseTypingAnimationReturn {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);

  const reset = useCallback(() => {
    indexRef.current = 0;
    setDisplayedText("");
    setIsComplete(false);
  }, []);

  // Reset when text changes
  useEffect(() => {
    reset();
  }, [text, reset]);

  useEffect(() => {
    if (isComplete || !text) return;

    const timer = setTimeout(() => {
      indexRef.current += 1;
      setDisplayedText(text.slice(0, indexRef.current));

      if (indexRef.current >= text.length) {
        setIsComplete(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, speed, displayedText, isComplete]);

  return { displayedText, isComplete, reset };
}
