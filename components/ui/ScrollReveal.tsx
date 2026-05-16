"use client";

import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const variants = {
  up: { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  down: { hidden: { y: -40, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  left: { hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } },
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
