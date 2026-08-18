"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-12">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row lg:px-10">
        {/* Left */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-bold text-white">
            NAGARGOJE UTTAM
          </h3>

          <p className="mt-2 text-zinc-400">
            Full Stack Developer • AI Enthusiast • Problem Solver
          </p>

          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-500 lg:justify-start">
            Made with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            using Next.js & Tailwind CSS
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-8 text-zinc-400">
          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Right */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="rounded-full border border-cyan-500/30 bg-cyan-500/10 p-4 transition hover:bg-cyan-500/20"
        >
          <ArrowUp className="h-5 w-5 text-cyan-300" />
        </motion.button>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
        © {currentYear} Nagargoje Uttam. All Rights Reserved.
      </div>
    </footer>
  );
}