"use client";

import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

interface SlashCharacterProps {
  isSlashing: boolean;
  onSlashComplete: () => void;
}

/**
 * Inline SVG — minimal manga silhouette mid-katana-slash, facing left.
 * Stroke-based, designed for ~100-150px render height.
 */
function CharacterSVG() {
  return (
    <svg
      viewBox="0 0 120 160"
      width="120"
      height="160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]"
    >
      {/* Head — tilted forward into the slash */}
      <ellipse
        cx="62"
        cy="24"
        rx="10"
        ry="12"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        transform="rotate(-15 62 24)"
      />

      {/* Hair spikes — manga speed lines off head */}
      <path
        d="M72 16 L82 8 M70 12 L78 4 M68 10 L73 2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Torso — leaning hard left into slash */}
      <path
        d="M58 35 L42 75"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Left arm (lead arm) — extended forward holding katana */}
      <path
        d="M50 48 L22 38 L8 28"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right arm (trailing) — follows through on slash */}
      <path
        d="M52 50 L38 42 L24 36"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Katana blade — long diagonal slash line */}
      <path
        d="M8 28 L-18 8"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Katana edge highlight */}
      <path
        d="M8 28 L-16 10"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Katana guard (tsuba) */}
      <line
        x1="10"
        y1="24"
        x2="6"
        y2="32"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Left leg — forward lunge */}
      <path
        d="M42 75 L24 110 L18 140"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right leg — trailing back */}
      <path
        d="M42 75 L58 108 L68 138"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Speed lines — motion trails behind the figure */}
      <path
        d="M85 30 L110 30 M80 45 L115 45 M82 60 L108 60 M78 75 L105 78"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Cape/cloth trailing — adds dynamism */}
      <path
        d="M55 40 Q75 55 85 48 Q95 42 100 50"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M48 55 Q68 70 80 60 Q90 52 98 62"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

export default function SlashCharacter({
  isSlashing,
  onSlashComplete,
}: SlashCharacterProps) {
  const [characterScope, animateCharacter] = useAnimate();
  const [trailScope, animateTrail] = useAnimate();

  useEffect(() => {
    if (!isSlashing) return;

    const runSequence = async () => {
      // Reset positions
      animateCharacter(
        characterScope.current,
        { opacity: 0, x: 200 },
        { duration: 0 }
      );
      animateTrail(trailScope.current, { opacity: 0, scaleX: 0 }, { duration: 0 });

      // 1. Character dashes in from right
      await animateCharacter(
        characterScope.current,
        { opacity: 1, x: 0 },
        { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
      );

      // 2. Slash trail appears at the midpoint
      animateTrail(
        trailScope.current,
        { opacity: [0, 1], scaleX: [0, 1] },
        { duration: 0.15, ease: "easeOut" }
      );

      // 3. Character continues left and fades
      await animateCharacter(
        characterScope.current,
        { opacity: 0, x: -300 },
        { duration: 0.3, ease: [0.55, 0, 1, 0.45] }
      );

      // 4. Trail fades out
      await animateTrail(
        trailScope.current,
        { opacity: 0 },
        { duration: 0.2, ease: "easeIn" }
      );

      onSlashComplete();
    };

    runSequence();
  }, [isSlashing, animateCharacter, animateTrail, characterScope, trailScope, onSlashComplete]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Character */}
      <motion.div
        ref={characterScope}
        className="absolute top-1/2 left-1/2 -translate-y-1/2"
        initial={{ opacity: 0, x: 200 }}
      >
        <CharacterSVG />
      </motion.div>

      {/* Slash trail — diagonal red line from top-right to bottom-left */}
      <motion.div
        ref={trailScope}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scaleX: 0 }}
        style={{ transformOrigin: "center center" }}
      >
        <svg
          viewBox="0 0 400 200"
          width="400"
          height="200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]"
        >
          {/* Main slash line */}
          <line
            x1="380"
            y1="20"
            x2="20"
            y2="180"
            stroke="#ef4444"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Glow layer */}
          <line
            x1="380"
            y1="20"
            x2="20"
            y2="180"
            stroke="#ef4444"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.3"
          />
          {/* Thin highlight edge */}
          <line
            x1="378"
            y1="18"
            x2="22"
            y2="176"
            stroke="#ff8080"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </motion.div>
    </div>
  );
}
