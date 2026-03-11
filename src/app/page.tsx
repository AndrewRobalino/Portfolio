"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PhotoPanels from "@/components/PhotoPanels";
import TechStack from "@/components/TechStack";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Desktop layout — requires both width and height to avoid landscape phone issues */}
      <div className="relative hidden desktop:flex h-[calc(100vh-64px)] mt-16">
        <motion.div
          className="flex w-[60%] flex-col p-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Terminal />
        </motion.div>
        <motion.div
          className="flex h-full w-[40%] flex-col pr-6 py-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <div className="h-[55%]">
            <PhotoPanels />
          </div>
          <div className="flex-1 min-h-0 pt-3">
            <TechStack />
          </div>
        </motion.div>
      </div>

      {/* Mobile layout — also used for landscape phones */}
      <div className="flex flex-col desktop:hidden mt-16">
        <motion.div
          className="flex flex-col p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Terminal />
        </motion.div>
        <motion.div
          className="p-4 pt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <TechStack />
        </motion.div>
      </div>
    </>
  );
}
