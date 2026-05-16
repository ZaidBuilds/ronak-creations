"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Ronak</span>
          <span className="text-xl font-light text-muted">Creations</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary py-2 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
