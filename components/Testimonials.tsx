"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Got a custom birthday hamper for my friend. She loved it! The quality of stationery and packaging was top-notch.",
  },
  {
    name: "Rahul Verma",
    text: "Best gift shop in Saharanpur. Great collection of sippers and keychains. Highly recommended!",
  },
  {
    name: "Neha Gupta",
    text: "Ordered customized return gifts for my daughter's birthday. Everyone appreciated the personalized touch.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white border-t border-border-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mt-2">What Our Customers Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-dark text-sm">&mdash; {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
