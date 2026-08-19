"use client";

import { motion } from "framer-motion";
import {
  FolderGit2,
  Trophy,
  Brain,
  Code2,
} from "lucide-react";

const stats = [
  {
    icon: FolderGit2,
    value: "5+",
    label: "Projects Built",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Trophy,
    value: "5+",
    label: "Certifications",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    value: "1000+",
    label: "Learning Hours",
    color: "from-pink-500 to-violet-500",
  },
  {
    icon: Code2,
    value: "∞",
    label: "Passion for Coding",
    color: "from-emerald-500 to-cyan-500",
  },
];

export default function AboutStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-violet-500/30
            "
          >
            {/* Glow */}
            <div
              className={`
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-gradient-to-br
                ${stat.color}
                opacity-20
                blur-3xl
              `}
            />

            {/* Icon */}
            <div
              className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                ${stat.color}
                shadow-lg
              `}
            >
              <Icon
                className="text-white"
                size={26}
              />
            </div>

            {/* Number */}
            <h3 className="mt-6 text-5xl font-black">
              {stat.value}
            </h3>

            {/* Label */}
            <p className="mt-3 text-zinc-400">
              {stat.label}
            </p>

            {/* Bottom Line */}
            <div
              className={`
                mt-6
                h-1
                w-16
                rounded-full
                bg-gradient-to-r
                ${stat.color}
              `}
            />
          </motion.div>
        );
      })}
    </div>
  );
}