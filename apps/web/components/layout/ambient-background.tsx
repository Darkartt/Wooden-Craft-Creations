"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const orbs = [
  {
    size: 420,
    className:
      "bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl",
    x: [-50, 80],
    y: [0, -120],
  },
  {
    size: 320,
    className:
      "bg-gradient-to-br from-secondary/25 via-secondary/5 to-transparent blur-3xl",
    x: [100, -60],
    y: [-40, 90],
  },
  {
    size: 260,
    className:
      "bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-2xl",
    x: [-80, 50],
    y: [120, -60],
  },
];

export function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden
        className="ambient-gradient"
        style={{ translateY, scale }}
      />

      <motion.div
        aria-hidden
        className="ambient-grid"
        animate={{ opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="ambient-noise" aria-hidden />

      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          aria-hidden
          className={`absolute rounded-full ${orb.className}`}
          style={{
            width: orb.size,
            height: orb.size,
          }}
          animate={{
            x: orb.x,
            y: orb.y,
          }}
          transition={{
            duration: 20 + index * 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
