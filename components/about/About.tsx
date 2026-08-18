"use client";

import AboutHeader from "./AboutHeader";
import AboutProfile from "./AboutProfile";
import AboutTimeline from "./AboutTimeline";
import AboutStory from "./AboutStory";
import AboutCards from "./AboutCards";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Grid Background */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-30 opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* Gradient Glows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 overflow-hidden"
      >
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      {/* Top Fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black to-transparent"
      />

      {/* Bottom Fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <AboutHeader />
          <AboutProfile />
          <AboutTimeline />
        </div>

        {/* Bottom Section */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <AboutStory />
          <AboutCards />
        </div>

        {/* Statistics */}
        <div className="mt-24">
          <AboutStats />
        </div>
      </div>

      {/* Section Divider */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
      />
    </section>
  );
}