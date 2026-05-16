"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ideas = [
  { title: "Birthday Hampers", desc: "Personalized gifts, chocolates, stationery, and decor items in a custom hamper.", icon: "\uD83C\uDF82", color: "from-pink-400 to-rose" },
  { title: "Anniversary Hampers", desc: "Elegant combos with customized mugs, photo frames, candles, and keepsakes.", icon: "\uD83D\uDC9D", color: "from-red-400 to-rose" },
  { title: "Festival Special", desc: "Diwali, Rakhi, Holi, Eid — custom hampers for every Indian festival.", icon: "\uD83C\uDF89", color: "from-amber-soft to-amber-deep" },
  { title: "Corporate Gifting", desc: "Branded stationery sets, custom notebooks, pen sets, and sipper bottles for your team.", icon: "\uD83D\uDCBC", color: "from-blue-400 to-blue-600" },
  { title: "Return Gifts", desc: "Party favor hampers for weddings, birthdays, and events. Budget-friendly options available.", icon: "\uD83C\uDF81", color: "from-purple-400 to-purple-600" },
  { title: "Baby Shower / Newborn", desc: "Baby hampers with essentials, soft toys, and cosmetic bouquets. Adorable gifting option.", icon: "\uD83D\uDC76", color: "from-teal-400 to-teal-600" },
];

export default function CustomizePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-amber-soft via-amber-deep to-stone-800 text-white overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-soft/20 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-white/70 text-sm font-semibold tracking-widest uppercase">Make It Personal</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">Custom Gift Hampers</h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              Tell us the occasion and your budget — we&apos;ll create a personalized gift hamper that your loved ones will never forget.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-stone-900">Ideas for Every Occasion</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose to-gold rounded-full mt-3" />
          <p className="text-stone-500 mt-3 max-w-xl text-sm">Get inspired — here are some popular hamper ideas our customers love.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {ideas.map(({ title, desc, icon, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-rose/10 transition-all group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-xl mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                {icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">{title}</h3>
              <p className="text-sm text-stone-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-stone-900">How It Works</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-rose to-gold rounded-full mx-auto mt-3" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Tell Us the Occasion", desc: "Birthday, anniversary, festival, or just because — let us know." },
              { step: "02", title: "Share Your Budget", desc: "We work with all budgets. Tell us your range and we'll suggest options." },
              { step: "03", title: "Pick Your Items", desc: "Choose from our catalog or let us curate a surprise hamper for you." },
              { step: "04", title: "We Deliver", desc: "We package it beautifully and deliver it to your doorstep in Saharanpur." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl font-bold text-rose/20 font-serif">{s.step}</span>
                <h3 className="font-semibold text-stone-800 mt-2 mb-1">{s.title}</h3>
                <p className="text-xs text-stone-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-rose to-stone-900 rounded-3xl p-10 md:p-14 text-center text-white overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-soft/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Ready to Order?</h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
              Tell us your requirements — budget, occasion, and preferred items — and we&apos;ll design the perfect hamper for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917988174542?text=Hi!%20I%20want%20to%20order%20a%20custom%20gift%20hamper."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-stone-900 font-semibold rounded-xl hover:bg-stone-100 transition-all shadow-lg"
              >
                Order on WhatsApp <span>&rarr;</span>
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Visit Our Store
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
