"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "200+", label: "Products Delivered" },
  { value: "50+", label: "Custom Hampers" },
  { value: "4.9", label: "Customer Rating" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold font-serif mb-1">{s.value}</div>
              <div className="text-white/70 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
