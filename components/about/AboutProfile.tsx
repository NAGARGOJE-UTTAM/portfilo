"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Sparkles } from "lucide-react";

export default function AboutProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      {/* Background Glow */}
      <div className="absolute -z-10 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Floating Decorative Circles */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -top-8 -left-8 h-6 w-6 rounded-full bg-violet-500"
      />

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -bottom-5 -right-5 h-5 w-5 rounded-full bg-cyan-400"
      />

      {/* Rotating Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[430px] w-[330px] rounded-[2rem] border border-dashed border-violet-500/40"
      />

      {/* Glass Card */}
      <motion.div
        whileHover={{
          y: -8,
          rotateX: 3,
          rotateY: -3,
        }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl shadow-2xl"
      >
        {/* AI Badge */}
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
          <Sparkles size={14} />
          AI Engineer
        </div>

        {/* Profile Image */}
        <Image
          src="/images/profile.png"
          alt="Profile"
          width={300}
          height={420}
          priority
          className="rounded-2xl object-cover"
        />

        {/* Bottom Info */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-black/30 p-4">
            <Briefcase className="mb-2 text-violet-400" size={22} />
            <p className="text-xs text-zinc-400">Experience</p>
            <h4 className="text-lg font-semibold">Fresher</h4>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/30 p-4">
            <FolderGit2 className="mb-2 text-cyan-400" size={22} />
            <p className="text-xs text-zinc-400">Projects</p>
            <h4 className="text-lg font-semibold">10+</h4>
          </div>
        </div>

        {/* Floating Project Badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute -right-5 top-24 rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 backdrop-blur-xl"
        >
          <p className="text-xs text-zinc-400">Learning</p>
          <h4 className="text-lg font-bold text-cyan-400">AI • ML</h4>
        </motion.div>

        {/* Floating Tech Badge */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute -left-5 bottom-24 rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 backdrop-blur-xl"
        >
          <p className="text-xs text-zinc-400">Stack</p>
          <h4 className="text-lg font-bold text-violet-400">Next.js</h4>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}