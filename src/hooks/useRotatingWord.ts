import { useState, useEffect, useRef } from "react";

interface UseRotatingWordReturn {
  displayedText: string;
  isDeleting: boolean;
}

/**
 * Types out a word, holds it, deletes it character by character, then types the next.
 * All timeouts clean up properly — no memory leaks.
 */
export function useRotatingWord(
  words: string[],
  {
    typeSpeed = 80,
    deleteSpeed = 40,
    holdDuration = 3000,
    pauseBetween = 400,
  } = {}
): UseRotatingWordReturn {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const word = words[wordIndex];

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < word.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(word.slice(0, displayedText.length + 1));
        }, typeSpeed);
      } else {
        // Fully typed — hold, then start deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, holdDuration);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Fully deleted — pause, then move to next word
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, pauseBetween);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayedText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, holdDuration, pauseBetween]);

  return { displayedText, isDeleting };
}
