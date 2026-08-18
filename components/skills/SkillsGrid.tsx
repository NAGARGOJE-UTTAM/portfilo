"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillCategories } from "./skillsData";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
        >
          <SkillCard category={category} />
        </motion.div>
      ))}
    </div>
  );
}