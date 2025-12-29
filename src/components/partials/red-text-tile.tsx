"use client";

import { motion } from "framer-motion";

export function RedTextTile() {
  return (
    <div className="bg-primary max-lg:hidden">
      <motion.div
        className="flex-center h-full w-full px-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-white text-3xl font-light font-heading leading-[1.2]">
          Where great work and great people come together
        </p>
      </motion.div>
    </div>
  );
}
