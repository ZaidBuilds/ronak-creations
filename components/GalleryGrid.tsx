"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&h=600&fit=crop",
    alt: "Stationery Collection",
    label: "Fancy Stationery",
  },
  {
    src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop",
    alt: "Gift Hampers",
    label: "Custom Hampers",
  },
  {
    src: "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?w=600&h=600&fit=crop",
    alt: "Gift Combos",
    label: "Gift Combos",
  },
  {
    src: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
    alt: "Bottles",
    label: "Sipper Bottles",
  },
  {
    src: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=600&fit=crop",
    alt: "Notebooks",
    label: "Notebooks",
  },
  {
    src: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=600&fit=crop",
    alt: "Candles",
    label: "Designer Candles",
  },
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {gallery.map((img, i) => (
        <motion.button
          key={img.src}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          onClick={() => setSelected(i)}
          className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
            {img.label}
          </span>
        </motion.button>
      ))}

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm"
              >
                Close [ESC]
              </button>
              <img
                src={gallery[selected].src.replace("w=600", "w=1200").replace("h=600", "h=1200")}
                alt={gallery[selected].alt}
                className="w-full rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
