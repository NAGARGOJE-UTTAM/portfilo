"use client";

import CertificationsHeader from "./CertificationsHeader";
import CertificationsGrid from "./CertificationsGrid";

export default function Certifications() {
  return (
    <section
      id="certifications"
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

      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 overflow-hidden"
      >
        <div className="absolute left-0 top-16 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />

        <div className="absolute right-0 bottom-16 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <CertificationsHeader />

        <div className="mt-20">
          <CertificationsGrid />
        </div>

      </div>

      {/* Divider */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
      />
    </section>
  );
}