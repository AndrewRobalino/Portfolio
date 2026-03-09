"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PhotoPanels from "@/components/PhotoPanels";
import Terminal from "@/components/Terminal";
import SlashCharacter from "@/components/SlashCharacter";

export default function Home() {
  const [isSlashing, setIsSlashing] = useState(false);

  const handleSlashTrigger = useCallback(() => {
    setIsSlashing(true);
  }, []);

  const handleSlashComplete = useCallback(() => {
    setIsSlashing(false);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative flex h-[calc(100vh-64px)] mt-16">
        <motion.div
          className="flex w-[60%] flex-col p-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Terminal onSlashTrigger={handleSlashTrigger} />
        </motion.div>
        <motion.div
          className="w-[40%] p-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <PhotoPanels />
        </motion.div>

        {/* Slash animation overlay — positioned absolutely over the full layout */}
        <SlashCharacter
          isSlashing={isSlashing}
          onSlashComplete={handleSlashComplete}
        />
      </div>
    </>
  );
}
