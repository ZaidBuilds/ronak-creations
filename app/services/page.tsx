"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Birthday Party Organization",
    tagline: "Stress-free celebrations",
    desc: "From decorations to catering coordination, we handle everything. Balloon arches, themed backdrops, return gifts, and professional party organizers — all in one place.",
    price: "\u20b9999+",
    features: ["Themed decoration setup", "Balloon arrangements", "Return gift packaging", "Catering coordination", "Professional organizers on site"],
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop",
  },
  {
    title: "Custom Gift Hampers",
    tagline: "Personalized for every occasion",
    desc: "Birthdays, anniversaries, festivals, or corporate events — we curate hampers tailored to your budget and theme. Choose from premium stationery, accessories, bottles, and more.",
    price: "\u20b9499+",
    features: ["Any theme or occasion", "Budget-friendly options", "Premium packaging", "Personalized message cards", "Home delivery available"],
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=400&fit=crop",
  },
  {
    title: "Wholesale & Bulk Orders",
    tagline: "For businesses & events",
    desc: "Planning a corporate event, wedding, or school function? We supply stationery, return gifts, and party essentials at wholesale prices across Saharanpur.",
    price: "Custom pricing",
    features: ["Bulk stationery orders", "Corporate gift sets", "Wedding return gifts", "School supply kits", "Free local delivery"],
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&h=400&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-rose via-stone-900 to-stone-900 text-white overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-soft/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/20 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-soft text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">What We Offer</h1>
            <p className="text-lg text-stone-300 max-w-2xl leading-relaxed">
              More than just a gift shop — we help you celebrate life&apos;s moments with customized hampers, party setups, and wholesale supplies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="space-y-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-xs text-rose font-semibold tracking-widest uppercase">{s.tagline}</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-1 mb-3">{s.title}</h2>
                <p className="text-stone-500 leading-relaxed mb-4 text-sm">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 bg-rose rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-rose">{s.price}</span>
                  <a
                    href={`https://wa.me/9368785399?text=Hi!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(s.title)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-3">Not Sure What You Need?</h2>
            <p className="text-stone-500 max-w-md mx-auto mb-8 leading-relaxed">
              Describe your requirement on WhatsApp and we&apos;ll suggest the best options within your budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/9368785399" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all"
              >
                Chat on WhatsApp <span>&rarr;</span>
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-700 font-semibold rounded-xl border border-stone-200 hover:bg-stone-200 transition-all"
              >
                Visit Our Store
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
