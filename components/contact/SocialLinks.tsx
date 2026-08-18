"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/NAGARGOJE-UTTAM",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nagargoje-uttam-95b710302/",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:nagargojeuttam143@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -6, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
          >
            <Icon className="h-6 w-6 text-zinc-300 transition-colors duration-300 group-hover:text-cyan-300" />
          </motion.a>
        );
      })}
    </div>
  );
}