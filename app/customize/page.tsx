"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const ideas = [
  { title: "Birthday Hampers", desc: "Personalized gifts, chocolates, stationery, and more in a custom hamper.", icon: "\uD83C\uDF82", color: "from-pink-400 to-pink-600" },
  { title: "Anniversary Hampers", desc: "Elegant combos with customized mugs, photo frames, and keepsakes.", icon: "\uD83D\uDC9D", color: "from-red-400 to-red-600" },
  { title: "Festival Special", desc: "Diwali, Rakhi, Holi \u2014 custom hampers for every Indian festival.", icon: "\uD83C\uDF89", color: "from-amber-400 to-amber-600" },
  { title: "Corporate Gifting", desc: "Branded stationery sets, custom notebooks, pen sets for your team.", icon: "\uD83D\uDCBC", color: "from-blue-400 to-blue-600" },
  { title: "Return Gifts", desc: "Party favor hampers for weddings, birthdays, or events.", icon: "\uD83C\uDF81", color: "from-purple-400 to-purple-600" },
  { title: "Just Because", desc: "Surprise someone special with a curated hamper made with love.", icon: "\u2728", color: "from-teal-400 to-teal-600" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function CustomizePage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary text-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-28">
          <ScrollReveal>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Make It Personal</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">Custom Gift Hampers</h1>
            <p className="text-lg max-w-2xl text-dark/70 leading-relaxed">
              Tell us the occasion, and we&apos;ll create a personalized gift hamper that your loved ones will never forget.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <ScrollReveal>
          <SectionHeading
            title="Ideas for Every Occasion"
            subtitle="Get inspired \u2014 here are some popular hamper ideas our customers love."
          />
        </ScrollReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ideas.map(({ title, desc, icon, color }) => (
            <motion.div
              key={title}
              variants={cardItem}
              whileHover={{ y: -6 }}
              className="bg-white border border-border rounded-2xl p-7 hover:shadow-xl hover:border-primary/10 transition-all group cursor-default"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                {icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-dark mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <ScrollReveal>
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to Order?</h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us your requirements \u2014 budget, occasion, items \u2014 and we&apos;ll design the perfect hamper for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" href="https://wa.me/917988174542?text=Hi!%20I%20want%20to%20order%20a%20custom%20gift%20hamper.">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Order on WhatsApp
              </Button>
              <Button variant="outline" href="/contact" className="!border-white/20 !text-white hover:!bg-white/10">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
