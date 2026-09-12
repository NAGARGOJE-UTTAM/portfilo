"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const [statusType, setStatusType] = useState<
    "success" | "error" | ""
  >("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Check API response
      if (!response.ok) {
        throw new Error(
          data.error || "Failed to send message."
        );
      }

      // Success
      setStatus(
        "Message sent successfully! I'll get back to you soon."
      );

      setStatusType("success");

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus(
        "Failed to send message. Please try again."
      );

      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{
        once: true,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Heading */}

      <h3 className="text-3xl font-bold text-white">
        Send Me a Message
      </h3>

      <p className="mt-4 text-zinc-400">
        Have an idea, opportunity, or project in mind? Fill out
        the form below and I&apos;ll get back to you as soon as
        possible.
      </p>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        {/* ========================= */}
        {/* Full Name */}
        {/* ========================= */}

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-white"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        {/* ========================= */}
        {/* Email */}
        {/* ========================= */}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        {/* ========================= */}
        {/* Subject */}
        {/* ========================= */}

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-white"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        {/* ========================= */}
        {/* Message */}
        {/* ========================= */}

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-white"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Write your message..."
            required
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        {/* ========================= */}
        {/* Status Message */}
        {/* ========================= */}

        {status && (
          <p
            className={`text-sm ${
              statusType === "success"
                ? "text-cyan-400"
                : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}

        {/* ========================= */}
        {/* Submit Button */}
        {/* ========================= */}

        <motion.button
          whileHover={{
            scale: loading ? 1 : 1.03,
          }}
          whileTap={{
            scale: loading ? 1 : 0.97,
          }}
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={20} />

          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
}