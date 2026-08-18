"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <h3 className="text-3xl font-bold text-white">
        Contact Information
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        Whether you have an exciting project, internship opportunity,
        freelance work, or simply want to connect, I'm always happy to
        hear from you.
      </p>

      <div className="mt-10 space-y-6">

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-cyan-500/10 p-3">
            <Mail className="h-6 w-6 text-cyan-400" />
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Email
            </h4>

            <a
              href="mailto:nagargojeuttam143@gmail.com"
              className="text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              nagargojeuttam143@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-cyan-500/10 p-3">
            <Phone className="h-6 w-6 text-cyan-400" />
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Phone
            </h4>

            <a
              href="tel:+9193466227XX"
              className="text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              +91 93466227XX
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-cyan-500/10 p-3">
            <MapPin className="h-6 w-6 text-cyan-400" />
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Location
            </h4>

            <p className="text-zinc-400">
              Hyderabad, Telangana, India
            </p>
          </div>
        </div>

      </div>

      {/* Social Links */}
      <div className="mt-10">
        <h4 className="mb-5 text-lg font-semibold text-white">
          Connect With Me
        </h4>

        <SocialLinks />
      </div>
    </motion.div>
  );
}