import type { TerminalLine } from "@/hooks/useTerminalSequence";

export const aboutLines: TerminalLine[] = [
  { text: "cat about_me.txt", isCommand: true, speed: 50 },
  { text: "", delay: 300, speed: 10 },
  {
    text: "Born in Charlotte, NC and raised between Miami and Ecuador — I grew up navigating different cultures, languages, and perspectives. That adaptability shaped how I approach everything, especially building software.",
    delay: 200,
    speed: 15,
  },
  { text: "", delay: 100, speed: 10 },
  {
    text: "I'm a Computer Science student at Florida International University, graduating December 2026. My focus is frontend development — I care deeply about design, user experience, and the details that separate functional from exceptional.",
    delay: 100,
    speed: 15,
  },
  { text: "", delay: 100, speed: 10 },
  {
    text: "Outside of code, I'm a competitor. Whether it's on the pitch supporting Man City, gaming with friends late at night, or pushing myself to learn something new — I don't do things halfway.",
    delay: 100,
    speed: 15,
  },
  { text: "", delay: 100, speed: 10 },
  {
    text: "Right now I'm heads-down building, iterating, and asking the same question every day: how do I make this better?",
    delay: 100,
    speed: 15,
  },
];
