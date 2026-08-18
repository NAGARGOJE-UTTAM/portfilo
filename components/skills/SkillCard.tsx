"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import type { SkillCategory } from "./skillsData";

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 shadow-lg">
        <Code2 className="h-7 w-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-white">
        {category.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-zinc-400">
        {category.description}
      </p>

      {/* Skills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}