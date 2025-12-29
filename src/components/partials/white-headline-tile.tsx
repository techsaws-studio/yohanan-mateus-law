"use client";

import { motion } from "framer-motion";

export function WhiteHeadlineTile() {
  return (
    <div className="lg:col-span-3 col-span-2 bg-secondary-background">
      <motion.div
        className="flex h-full w-full lg:px-16 px-6 lg:py-12 justify-start lg:items-end items-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="lg:text-6xl md:text-5xl text-4xl font-heading text-heading font-medium capitalize">
          What a law firm should be
        </p>
      </motion.div>
    </div>
  );
}
