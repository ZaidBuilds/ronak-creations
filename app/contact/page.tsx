"use client";

import { motion } from "framer-motion";
import InstagramFeed from "@/components/InstagramFeed";

const contacts = [
  {
    label: "WhatsApp",
    value: "+91-7988174542",
    href: "https://wa.me/917988174542",
    desc: "Quickest way to reach us — we respond in minutes",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    ),
  },
  {
    label: "Instagram",
    value: "@ronakcreations_",
    href: "https://instagram.com/ronakcreations_",
    desc: "Follow us for new products, offers, and updates",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-rose via-stone-900 to-stone-900 text-white overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-soft/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-soft text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">Contact Us</h1>
            <p className="text-lg text-stone-300 max-w-2xl leading-relaxed">
              Visit our store, send a message on WhatsApp, or follow us on Instagram.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contacts.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-stone-200 hover:border-rose/20 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-rose to-amber-deep rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-stone-400 uppercase tracking-wider font-semibold">{c.label}</p>
                  <p className="text-stone-800 font-semibold mt-0.5">{c.value}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{c.desc}</p>
                </div>
              </motion.a>
            ))}

            {/* Address card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-5 border border-stone-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-soft to-amber-deep rounded-xl flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider font-semibold">Address</p>
                  <p className="text-stone-800 font-semibold mt-0.5 text-sm">
                    Shakti Nagar, Near Panchmukhi<br />Hanuman Mandir
                  </p>
                  <p className="text-stone-500 text-sm">Numaish Camp, Saharanpur, UP 247001</p>
                  <p className="text-stone-400 text-xs mt-2">Open: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Quick inquiry form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-rose/5 to-amber-soft/5 rounded-2xl p-5 border border-rose/10"
            >
              <p className="font-semibold text-stone-800 text-sm mb-3">Quick Inquiry</p>
              <a
                href="https://wa.me/917988174542?text=Hi!%20I%20have%20a%20question%20about%20your%20products."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all w-full justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Send Message
              </a>
            </motion.div>
          </div>

          {/* Right — Google Maps + Instagram */}
          <div className="lg:col-span-3 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.8!2d77.571972!3d29.9753092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39070e8a5c1b2a3d%3A0x3d9f8e7c5b4a1c2f!2sNumaish%20Camp!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" title="Ronak Creations Location"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-5 border border-stone-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">Latest from Instagram</h3>
                  <p className="text-xs text-stone-400">Follow us @ronakcreations_ for new arrivals</p>
                </div>
                <a href="https://instagram.com/ronakcreations_" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                >
                  Follow
                </a>
              </div>
              <InstagramFeed />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
