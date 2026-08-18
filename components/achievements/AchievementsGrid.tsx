"use client";

import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";
import { achievements } from "./achievementsData";

export default function AchievementsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
        >
          <AchievementCard achievement={achievement} />
        </motion.div>
      ))}
    </div>
  );
}