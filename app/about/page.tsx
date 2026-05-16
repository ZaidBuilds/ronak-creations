"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-rose via-stone-900 to-stone-900 text-white overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-soft/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/20 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-soft text-sm font-semibold tracking-widest uppercase">Our Story</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">About Ronak Creations</h1>
            <p className="text-lg text-stone-300 max-w-2xl leading-relaxed">
              A local gift shop in Numaish Camp, Saharanpur — built with a passion for making every celebration special.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-4">Our Journey</h2>
            <div className="space-y-4 text-stone-500 leading-relaxed text-sm">
              <p>
                Ronak Creations started in 2020 with a simple idea — to bring quality gifts and stationery to the people of Saharanpur. Founded by Prithvi Sethi, our shop in Shakti Nagar, Numaish Camp has grown from a small stationery store to a go-to destination for customized gift hampers, party essentials, and unique accessories.
              </p>
              <p>
                What sets us apart is our commitment to personalization. We believe every gift should feel special, which is why we offer fully customized hampers — you tell us the occasion and budget, and we handle the rest.
              </p>
              <p>
                Over the years, we&apos;ve served hundreds of happy customers — from birthday parties to corporate events, festivals to weddings. We&apos;ve also expanded into party organization, offering complete decoration and setup services.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="rounded-2xl overflow-hidden bg-stone-100">
              <img src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=500&fit=crop" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-stone-100 mt-8">
              <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-stone-100 -mt-4">
              <img src="https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?w=400&h=300&fit=crop" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-stone-100">
              <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop" alt="" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { number: "2020", label: "Founded", desc: "Started as a small stationery shop in Numaish Camp" },
            { number: "500+", label: "Happy Customers", desc: "Served across Saharanpur and nearby areas" },
            { number: "200+", label: "Products", desc: "From stationery to hampers, bottles to decor" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-stone-200 text-center"
            >
              <p className="text-3xl font-bold text-rose font-serif">{s.number}</p>
              <p className="font-semibold text-stone-800 mt-1">{s.label}</p>
              <p className="text-xs text-stone-400 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-rose/5 to-amber-soft/5 rounded-3xl p-8 md:p-10 border border-rose/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-3">Visit Our Store</h2>
              <p className="text-stone-500 leading-relaxed text-sm">
                Shakti Nagar, Near Panchmukhi Hanuman Mandir
                <br />
                Numaish Camp, Saharanpur, Uttar Pradesh 247001
              </p>
              <p className="text-stone-400 text-sm mt-3">Open: 10:00 AM - 9:00 PM</p>
              <div className="flex flex-wrap gap-3 mt-5">
                <a href="https://wa.me/917988174542" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all"
                >
                  Chat on WhatsApp
                </a>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-100 text-stone-700 text-sm font-semibold rounded-xl border border-stone-200 hover:bg-stone-200 transition-all"
                >
                  Get Directions
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-rose to-amber-deep rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-rose font-serif">RC</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
