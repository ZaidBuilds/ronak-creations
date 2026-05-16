"use client";

import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&h=300&fit=crop",
    caption: "Restocked beautiful kit 🌈 Designs available",
    likes: 5,
    url: "https://instagram.com/ronakcreations_",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=300&h=300&fit=crop",
    caption: "Baby girl hamper + cosmetic bouquet 💐",
    likes: 8,
    url: "https://instagram.com/ronakcreations_",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop",
    caption: "Birthday party essentials & professional organizers 🎉",
    likes: 12,
    url: "https://instagram.com/ronakcreations_",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=300&fit=crop",
    caption: "100 days 100 products challenge 🏆",
    likes: 21,
    url: "https://instagram.com/ronakcreations_",
  },
];

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-2xl overflow-hidden">
      {posts.map((post, i) => (
        <motion.a
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative aspect-square overflow-hidden bg-stone-100"
        >
          <img
            src={post.img}
            alt={post.caption}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white text-xs leading-tight line-clamp-2">{post.caption}</p>
              <p className="text-white/70 text-xs mt-1">❤ {post.likes}</p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
