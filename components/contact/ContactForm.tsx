"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <h3 className="text-3xl font-bold text-white">
        Send Me a Message
      </h3>

      <p className="mt-4 text-zinc-400">
        Have an idea, opportunity, or project in mind? Fill out the form below
        and I'll get back to you as soon as possible.
      </p>

      <form className="mt-10 space-y-6">

        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Subject
          </label>

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Message
          </label>

          <textarea
            rows={6}
            placeholder="Write your message..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/40"
        >
          <Send size={20} />
          Send Message
        </motion.button>

      </form>
    </motion.div>
  );
}