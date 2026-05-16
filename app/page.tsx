"use client";

import Hero from "@/components/Hero";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import GalleryGrid from "@/components/GalleryGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

const highlights = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Wide Collection",
    desc: "Stationery, accessories, bottles, and more — something for every occasion.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Full Customization",
    desc: "Personalize hampers, notebooks, mugs, and more with your choice of design.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local Shop",
    desc: "Visit our store in Numaish Camp or inquire via WhatsApp from anywhere.",
    color: "from-pink-500 to-pink-600",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      <Stats />

      <FeaturedCarousel />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Our Gallery"
              subtitle="Take a peek at our collection — every item tells a story."
            />
          </ScrollReveal>
          <GalleryGrid />
        </div>
      </section>

      <section className="bg-white border-t border-border-light py-24">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeading
              title="Why Ronak Creations?"
              subtitle="We make gifting easy, personal, and memorable."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map(({ icon, title, desc, color }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center p-8 rounded-2xl bg-background border border-border-light hover:shadow-xl hover:shadow-primary/5 hover:border-primary/10 transition-all group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-5 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-3">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-24">
        <ScrollReveal>
          <div className="relative bg-gradient-to-br from-primary via-primary-dark to-primary rounded-3xl p-10 md:p-16 text-white text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <span className="text-secondary-light text-sm font-semibold tracking-widest uppercase">Custom Orders</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-4">Need a Custom Gift?</h2>
              <p className="text-white/70 max-w-lg mx-auto mb-8 leading-relaxed">
                Birthdays, anniversaries, festivals, or corporate events — we create personalized gift hampers tailored just for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" href="/customize">
                  Order a Custom Hamper &rarr;
                </Button>
                <Button variant="whatsapp" href="https://wa.me/917988174542">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Testimonials />

      <section className="bg-dark py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-serif text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Get notified about new products, offers, and festival specials.
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}
                className="flex gap-3"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-secondary/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-secondary text-dark font-semibold rounded-xl hover:bg-secondary-light transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {["https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?w=200&h=200&fit=crop", "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=200&h=200&fit=crop", "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=200&h=200&fit=crop", "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&h=200&fit=crop"].map((src, i) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt=""
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl w-full aspect-square object-cover"
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
