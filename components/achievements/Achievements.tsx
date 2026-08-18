"use client";

import AchievementsHeader from "./AchievementsHeader";
import AchievementsGrid from "./AchievementsGrid";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-32"
    >
      {/* Grid */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-30 opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 overflow-hidden"
      >
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <AchievementsHeader />

        <div className="mt-20">
          <AchievementsGrid />
        </div>

      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
      />
    </section>
  );
}