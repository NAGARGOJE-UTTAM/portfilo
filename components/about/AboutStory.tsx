"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function AboutStory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        My Story
      </span>

      <h3 className="mt-6 text-3xl font-bold">
        Passion for AI, Development & Innovation
      </h3>

      <p className="mt-6 leading-8 text-zinc-400">
        I am a Computer Science student passionate about building intelligent
        software using Artificial Intelligence and modern web technologies.
        I enjoy solving real-world problems through scalable applications,
        continuously learning new technologies, and turning ideas into
        impactful products.
      </p>

      <p className="mt-5 leading-8 text-zinc-400">
        My journey focuses on Full Stack Development, Machine Learning,
        Computer Vision, and AI Engineering while constantly improving my
        problem-solving skills through projects and hands-on practice.
      </p>

      <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold transition hover:scale-105">
        <Download size={18} />
        Download Resume
      </button>
    </motion.div>
  );
}