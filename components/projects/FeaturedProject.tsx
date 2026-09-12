"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FolderGit2,
  Star,
} from "lucide-react";

export default function FeaturedProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="grid items-center lg:grid-cols-2">

        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src="/projects/westwiseAI.png"
            alt="Mask R-CNN Project"
            width={1200}
            height={800}
            priority
            className="transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-10 lg:p-14">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300">
            <Star size={15} />
            Featured Project
          </span>

          <h3 className="mt-6 text-4xl font-black">
            WasteWiseAI
          </h3>

          <p className="mt-6 leading-8 text-zinc-400">
            Engineered a real-time, AI-driven municipal waste intelligence platform integrating IoT telemetry, predictive overflow analytics, risk-based prioritization, geospatial fleet intelligence, dynamic multi-stop route optimization, and scenario-based operational simulation to transform fixed-schedule collection into a demand-driven system.
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Python",
              "AI/ML",
              "IoT",
              "Geospatial Analytics",
              "TypeScript",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wastewise-ai-null.vercel.app/"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold transition hover:scale-105"
            >
              <ArrowUpRight size={18} />
              Live Demo
            </a>

            <a
              href="https://github.com/shiva12pra/WastewiseAI"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:border-violet-500/40"
            >
              <FolderGit2 size={18} />
              GitHub (collaborator)
            </a>

          </div>

        </div>

      </div>
    </motion.div>
  );
}