"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary text-white min-h-[600px]">
      <Scene />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 md:py-36">
        <div className="max-w-2xl">
          <p className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm text-accent-light mb-6 border border-white/20">
            &#127873; Unique Gift Shop in Saharanpur
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Unique Gifts &amp;{" "}
            <span className="text-accent-light">Custom Creations</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Fancy stationery, customized gift hampers, trendy accessories and more — all under one roof at Ronak Creations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-accent text-foreground font-semibold rounded-lg hover:bg-accent-light transition-colors"
            >
              Browse Products
            </Link>
            <Link
              href="/customize"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Customize a Gift &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
