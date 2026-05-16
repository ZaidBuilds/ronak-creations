"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import products from "@/data/products.json";
import Link from "next/link";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const filtered = useMemo(() => {
    let result = category === "All" ? products : products.filter((p) => p.category === category);
    if (sort === "price-asc") result = [...result].sort((a, b) => parseFloat(a.price.replace(/[^0-9]/g, "")) - parseFloat(b.price.replace(/[^0-9]/g, "")));
    if (sort === "price-desc") result = [...result].sort((a, b) => parseFloat(b.price.replace(/[^0-9]/g, "")) - parseFloat(a.price.replace(/[^0-9]/g, "")));
    return result;
  }, [category, sort]);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-rose via-stone-900 to-stone-900 text-white overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-soft/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-soft text-sm font-semibold tracking-widest uppercase">Our Collection</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">All Products</h1>
            <p className="text-lg text-stone-300 max-w-2xl leading-relaxed">
              Browse our full catalog — fancy stationery, customized hampers, party essentials, and unique gifts for every occasion.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                  category === c
                    ? "bg-rose text-white shadow-md"
                    : "bg-white text-stone-500 border border-stone-200 hover:border-rose/30 hover:text-rose"
                }`}
              >
                {c === "All" ? "All Items" : c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 bg-white border border-stone-200 rounded-xl text-sm text-stone-600 focus:outline-none focus:border-rose/30"
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-stone-400 font-medium">No products in this category yet.</p>
            </motion.div>
          ) : (
            <motion.div
              key={`${category}-${sort}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg hover:border-rose/10 transition-all">
                    <div className="aspect-square overflow-hidden bg-stone-50">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 md:p-4">
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">{p.category}</span>
                      <h3 className="font-semibold text-stone-800 text-sm md:text-base mt-0.5 leading-tight">{p.name}</h3>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">{p.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-base md:text-lg font-bold text-rose">{p.price}</span>
                        <a
                          href={`https://wa.me/9368785399?text=Hi!%20I%20want%20to%20buy%20${encodeURIComponent(p.name)}`}
                          target="_blank" rel="noopener noreferrer"
                          className="text-xs px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                        >
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="bg-gradient-to-br from-amber-soft/10 via-rose/5 to-transparent border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-3">Can&apos;t Find What You&apos;re Looking For?</h2>
            <p className="text-stone-500 max-w-md mx-auto mb-8 leading-relaxed">
              We custom-create hampers and gift sets as per your requirements. Share your budget and preferences on WhatsApp.
            </p>
            <Link href="/customize"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose to-amber-deep text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-rose/20 transition-all"
            >
              Request Custom Order <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
