"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, Building2 } from "lucide-react";
import type { Certification } from "./certificationsData";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/20" />

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg">
        <Award className="h-8 w-8 text-white" />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-white">
        {certification.title}
      </h3>

      {/* Issuer */}
      <div className="mt-4 flex items-center gap-2 text-zinc-400">
        <Building2 size={18} />
        <span>{certification.issuer}</span>
      </div>

      {/* Issue Date */}
      <div className="mt-2 flex items-center gap-2 text-zinc-400">
        <Calendar size={18} />
        <span>Issued: {certification.issued}</span>
      </div>

      {/* Credential ID */}
      <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-3">
        <p className="text-xs uppercase tracking-wider text-zinc-500">
          Credential ID
        </p>

        <p className="mt-1 font-mono text-sm text-cyan-300">
          {certification.credentialId}
        </p>
      </div>

      {/* Verify Button */}
      <a
        href={certification.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
      >
        <ExternalLink size={18} />
        Verify Certificate
      </a>
    </motion.div>
  );
}