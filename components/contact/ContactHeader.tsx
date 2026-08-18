"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactHeader() {
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
          <Mail size={16} />
          Get In Touch
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
        Let's{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Connect
        </span>
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
      >
        I'm always interested in discussing new opportunities,
        collaborating on innovative projects, or simply connecting with
        fellow developers. Feel free to reach out anytime.
      </motion.p>
    </div>
  );
}