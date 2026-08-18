"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Brain,
  Code2,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech CSE",
  },
  {
    icon: Brain,
    title: "Specialization",
    value: "AI & ML",
  },
  {
    icon: Code2,
    title: "Focus",
    value: "Full Stack",
  },
];

export default function AboutHeader() {
  return (
    <div className="relative space-y-8">

      {/* Decorative Glow */}
      <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl -z-10" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300 backdrop-blur-xl">
          <Sparkles size={16} />
          About Me
        </span>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl lg:text-6xl font-black leading-tight">
          Building
          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Intelligent Software
          </span>
        </h2>

        {/* Gradient Underline */}
        <div className="mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl text-lg leading-8 text-zinc-400"
      >
        I am a Computer Science student passionate about Artificial
        Intelligence, modern web development, and building scalable,
        real-world software solutions. I enjoy learning continuously
        and turning ideas into impactful products.
      </motion.p>

      {/* Info Cards */}
      <div className="grid gap-5 sm:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-violet-500/40 hover:bg-white/10"
            >
              <Icon
                className="text-violet-400"
                size={28}
              />

              <p className="mt-4 text-xs uppercase tracking-wider text-zinc-400">
                {card.title}
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                {card.value}
              </h3>
            </motion.div>
          );
        })}
      </div>

      {/* Signature */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg font-semibold italic text-violet-400">
          — Nagargoje Uttam
        </p>
      </motion.div>

    </div>
  );
}