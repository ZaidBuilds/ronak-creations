"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import InstagramFeed from "@/components/InstagramFeed";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const products = [
  { name: "Fancy Stationery", price: "\u20b9199+", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&h=300&fit=crop", href: "/products" },
  { name: "Gift Hampers", price: "\u20b9499+", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=300&fit=crop", href: "/products" },
  { name: "Party Essentials", price: "\u20b9299+", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop", href: "/services" },
  { name: "Bottles & Sippers", price: "\u20b9349", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop", href: "/products" },
];

export default function Home() {
  return (
    <div>
      {/* HERO — 3D scene + warm gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(225,29,72,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(251,191,36,0.1),transparent_50%)]" />
        <Scene />
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm text-amber-soft mb-6 border border-white/10 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-amber-soft rounded-full" />
                  Premium Gift Shop in Saharanpur
                </span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 font-serif"
              >
                Gifts That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-soft via-gold to-rose-light">
                  Speak
                </span>{" "}
                for Themselves
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-stone-300 mb-10 leading-relaxed max-w-xl"
              >
                Fancy stationery, customized gift hampers, party decorations, and more — all under one roof at Ronak Creations, Numaish Camp.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/products"
                  className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-soft to-amber-deep text-stone-900 font-semibold rounded-xl hover:shadow-xl hover:shadow-amber-soft/25 transition-all"
                >
                  Browse Products
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <a href="https://wa.me/917988174542" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500/80 text-white font-semibold rounded-xl border border-green-400/30 hover:bg-green-500 transition-all backdrop-blur-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* BENTO GRID — Featured Products + About + Instagram + Map */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-rose text-sm font-semibold tracking-widest uppercase">Welcome to</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mt-1">Ronak Creations</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose to-gold rounded-full mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Featured Products — spans 2 cols */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {products.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100"
              >
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{p.name}</p>
                  <p className="text-amber-soft font-semibold text-sm">{p.price}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* About + Instagram + Map — right column */}
          <div className="flex flex-col gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-stone-200"
            >
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">Your Local Gift Shop</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-3">
                Located in Shakti Nagar, near Panchmukhi Hanuman Mandir, Numaish Camp — we&apos;ve been serving Saharanpur with quality gifts since 2020.
              </p>
              <Link href="/about" className="text-rose text-sm font-medium hover:text-rose-light transition-colors inline-flex items-center gap-1">
                Read our story <span>&rarr;</span>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-4 border border-stone-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-lg font-bold text-stone-900">On Instagram</h3>
                <a href="https://instagram.com/ronakcreations_" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-rose font-medium hover:text-rose-light transition-colors"
                >
                  @ronakcreations_
                </a>
              </div>
              <InstagramFeed />
            </motion.div>

            {/* Map preview */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-stone-200 group block"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.8!2d77.571972!3d29.9753092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzMxLjEiTiA3N8KwMzQnMTkuMSJF!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen loading="lazy" title="Location"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white text-stone-900 px-4 py-2 rounded-xl text-sm font-medium">View on map &rarr;</span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION — asymmetric split */}
      <section className="bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-rose text-sm font-semibold tracking-widest uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mt-1 mb-4">
                More Than Just a Gift Shop
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                From fancy stationery and customized gift hampers to full birthday party setups — we bring your celebrations to life.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "\uD83C\uDF89", title: "Birthday Party Setup", desc: "Complete decoration, catering coordination, and professional organizers" },
                  { icon: "\uD83C\uDF81", title: "Custom Gift Hampers", desc: "Personalized hampers for any occasion — tell us your budget and theme" },
                  { icon: "\u270F\uFE0F", title: "Fancy Stationery", desc: "Kits, personalized notebooks, pen sets, and school supplies" },
                  { icon: "\uD83C\uDF08", title: "Wholesale & Retail", desc: "Bulk orders for corporate events, return gifts, and resellers welcome" },
                ].map((s) => (
                  <div key={s.title} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{s.icon}</span>
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{s.title}</p>
                      <p className="text-xs text-stone-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/services"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-rose to-amber-deep text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-rose/20 transition-all text-sm"
              >
                View All Services <span>&rarr;</span>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop",
              ].map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className={`rounded-2xl object-cover w-full h-full ${i === 0 ? "row-span-2 h-full" : "aspect-square"}`}
                  style={{ gridRow: i === 0 ? "span 2" : undefined }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative bg-gradient-to-br from-amber-deep via-rose to-stone-900 rounded-3xl p-10 md:p-16 text-white text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Need a Custom Gift?</h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us the occasion and your budget — we&apos;ll create a personalized hamper or party setup you&apos;ll love.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/917988174542?text=Hi!%20I%20want%20to%20order%20a%20custom%20gift%20hamper."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-stone-900 font-semibold rounded-xl hover:bg-stone-100 transition-all shadow-lg"
              >
                Order on WhatsApp <span>&rarr;</span>
              </a>
              <Link href="/customize"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                See Ideas
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
