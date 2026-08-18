"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function CertificationsHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-300 backdrop-blur-xl">
          <Award size={16} />
          Professional Certifications
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
        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Certifications
        </span>
      </motion.h2>

      {/* Animated Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
      >
        Professional certifications and technical credentials earned through
        continuous learning, hands-on projects, and industry-recognized
        training programs.
      </motion.p>
    </div>
  );
}