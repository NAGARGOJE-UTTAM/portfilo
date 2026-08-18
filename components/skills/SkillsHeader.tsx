"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function SkillsHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
          <Code2 size={16} />
          Technical Skills
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
          Skills
        </span>
      </motion.h2>

      {/* Animated Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
      >
        Technologies, frameworks, databases, AI tools, and development
        platforms that I use to build modern, scalable, and intelligent
        applications.
      </motion.p>
    </div>
  );
}