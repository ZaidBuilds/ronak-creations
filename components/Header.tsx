"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/customize", label: "Customize" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl shadow-sm border-b border-stone-200"
          : "bg-cream/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 text-sm font-medium text-stone-500 hover:text-rose rounded-lg hover:bg-rose/5 transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/917988174542"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden p-2.5 rounded-xl hover:bg-stone-200/50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-stone-600 rounded-full transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 w-full bg-stone-600 rounded-full transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-stone-600 rounded-full transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-stone-200 bg-cream overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-stone-500 hover:text-rose rounded-xl hover:bg-rose/5 transition-colors"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="https://wa.me/917988174542"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-xl text-center transition-all"
              >
                Chat on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
