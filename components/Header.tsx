"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, CloseIcon } from "@/components/Icons";
import type { NavLink } from "@/types/product";

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/customize", label: "Customize" },
  { href: "/about", label: "About" },
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
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold group-hover:bg-primary-dark transition-colors">
            RC
          </div>
          <div>
            <span className="text-lg font-bold text-dark block leading-tight">Ronak</span>
            <span className="text-xs text-muted-light -mt-1 block">Creations</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 text-sm font-medium text-muted hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://wa.me/917988174542"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            WhatsApp
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-white overflow-hidden"
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
                    className="block px-4 py-3 text-sm font-medium text-muted hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="https://wa.me/917988174542"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 bg-green-500 text-white text-sm font-semibold rounded-lg text-center hover:bg-green-600 transition-colors"
              >
                Chat on WhatsApp
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
