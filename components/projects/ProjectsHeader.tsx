"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ProjectsHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300 backdrop-blur-xl">
          <Sparkles size={16} />
          Featured Work
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 text-5xl font-black leading-tight lg:text-6xl"
      >
        My{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
      >
        A collection of AI, Machine Learning, Full Stack, and Computer Vision
        projects built to solve real-world problems while exploring modern
        technologies.
      </motion.p>
    </div>
  );
}