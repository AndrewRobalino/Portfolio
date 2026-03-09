import type { TerminalLine } from "@/hooks/useTerminalSequence";

export const aboutLines: TerminalLine[] = [
  { text: "cat about_me.txt", isCommand: true, speed: 50 },
  { text: "---", delay: 300, speed: 20 },
  { text: "name: Andrew Robalino Garcia", delay: 80, speed: 25 },
  { text: "location: Miami, FL (born in Charlotte, NC)", delay: 80, speed: 25 },
  { text: "education: CS @ FIU — graduating Dec 2026", delay: 80, speed: 25 },
  { text: "---", delay: 80, speed: 20 },
  { text: "", delay: 200, speed: 10 },
  { text: "design-obsessed frontend dev who actually cares about the details.", delay: 150, speed: 20 },
  { text: "problem solver first — pretty pixels second.", delay: 100, speed: 20 },
  { text: "lived in Ecuador for 4 years — Hispanic roots run deep.", delay: 100, speed: 20 },
  { text: "big on travel, being outdoors, experiencing different cultures.", delay: 100, speed: 20 },
  { text: "Manchester City supporter — don't start.", delay: 100, speed: 20 },
  { text: "gaming with the boys when the sun goes down.", delay: 100, speed: 20 },
  { text: "currently full send on dev — creating, improving, iterating.", delay: 100, speed: 20 },
  { text: "always asking: \"how can I make this better?\"", delay: 100, speed: 20 },
];
