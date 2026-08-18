"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Lightbulb,
  Rocket,
  Code2,
} from "lucide-react";

const timeline = [
  {
    icon: Brain,
    title: "Curious Mind",
    description:
      "Always exploring emerging technologies and continuously learning.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Breaking complex challenges into elegant software solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "AI Enthusiast",
    description:
      "Learning AI Engineering, Computer Vision and LLM technologies.",
    color: "from-pink-500 to-violet-500",
  },
  {
    icon: Code2,
    title: "Builder",
    description:
      "Building scalable web applications and intelligent products.",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function AboutTimeline() {
  return (
    <div className="relative">

      {/* Vertical Line */}
      <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-500 opacity-40" />

      <div className="space-y-8">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                x: 8,
              }}
              className="relative flex gap-6"
            >
              {/* Timeline Node */}
              <motion.div
                whileHover={{
                  scale: 1.15,
                }}
                className={`
                  relative z-10
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  ${item.color}
                  shadow-xl
                `}
              >
                <Icon
                  size={20}
                  className="text-white"
                />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  flex-1
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-violet-500/30
                  hover:bg-white/10
                "
              >
                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}