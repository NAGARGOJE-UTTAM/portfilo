"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-violet-600/30 blur-[120px]" />
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm">
              👋 AI Engineer | Full Stack Developer
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-black leading-none">

              <span className="text-white">
                NAGARGOJE
              </span>

              <br />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                UTTAM
              </span>

            </h1>

            <h2 className="mt-6 text-2xl text-zinc-300">
              AI Engineer • Software Engineer • Computer Science Student
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-8 max-w-xl">
              Creating AI-powered digital experiences using Artificial
              Intelligence, Full Stack Development and Cloud Technologies.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex gap-5">

              <Button
                size="lg"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl"
              >
                Contact Me
              </Button>

            </div>

            {/* Social */}

            <div className="mt-10 flex gap-4">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:bg-gray-800 transition"
              >
                <FaGithub className="text-white text-xl" />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:bg-blue-600 transition"
              >
                <FaLinkedin className="text-white text-xl" />
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:bg-pink-600 transition"
              >
                <FaInstagram className="text-white text-xl" />
              </a>

              <a
                href="mailto:your@email.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 hover:bg-red-600 transition"
              >
                <Mail className="text-white h-5 w-5" />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            {/* Glow Circle */}

            <motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    absolute
    h-[430px]
    w-[430px]
    rounded-full
    border-2
    border-dashed
    border-violet-500/40
  "
/>

            <motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.3, 0.6, 0.3],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    h-[500px]
    w-[500px]
    rounded-full
    bg-gradient-to-r
    from-violet-600/30
    via-blue-500/20
    to-cyan-400/20
    blur-3xl
  "
/>

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration:5,
                repeat: Infinity,
                ease:"easeInOut"
              }}
            >
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={500}
                height={650}
                priority
                className="
                rounded-3xl
                object-cover
                shadow-2xl
                shadow-violet-500/30
                border
                border-white/10"
              />
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}