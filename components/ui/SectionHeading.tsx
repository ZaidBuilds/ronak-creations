"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="h-1 bg-secondary rounded-full mb-4"
        style={centered ? { margin: "0 auto 1rem" } : {}}
      />
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted mt-3 max-w-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
