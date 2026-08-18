"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Calendar,
  Tag,
  ArrowUpRight,
} from "lucide-react";
import type { Achievement } from "./achievementsData";

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({
  achievement,
}: AchievementCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition-all duration-500 group-hover:bg-yellow-500/20" />

      {/* Trophy Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg">
        <Trophy className="h-8 w-8 text-white" />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-white">
        {achievement.title}
      </h3>

      {/* Category */}
      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
        <Tag size={16} />
        {achievement.category}
      </div>

      {/* Year */}
      <div className="mt-4 flex items-center gap-2 text-zinc-400">
        <Calendar size={18} />
        <span>{achievement.year}</span>
      </div>

      {/* Description */}
      <p className="mt-5 leading-7 text-zinc-400">
        {achievement.description}
      </p>

      {/* Button */}
      <a
        href={achievement.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
      >
        <ArrowUpRight size={18} />
        View More
      </a>
    </motion.div>
  );
}