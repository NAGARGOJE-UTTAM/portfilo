"use client";

import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";
import { certifications } from "./certificationsData";

export default function CertificationsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {certifications.map((certification, index) => (
        <motion.div
          key={certification.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
        >
          <CertificationCard certification={certification} />
        </motion.div>
      ))}
    </div>
  );
}