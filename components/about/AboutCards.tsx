"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Target,
  Rocket,
} from "lucide-react";

const cards = [
  {
    icon: Heart,
    title: "What Drives Me",
    description:
      "Creating meaningful software that solves real-world problems.",
  },
  {
    icon: Target,
    title: "What I'm Good At",
    description:
      "AI, Full Stack Development, API Integration, and Problem Solving.",
  },
  {
    icon: Rocket,
    title: "Beyond Code",
    description:
      "Learning every day, exploring emerging technologies, and building innovative ideas.",
  },
];

export default function AboutCards() {
  return (
    <div className="space-y-6">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-violet-500/30"
          >
            <Icon
              className="text-violet-400"
              size={26}
            />

            <h3 className="mt-4 text-lg font-semibold">
              {card.title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-zinc-400">
              {card.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}