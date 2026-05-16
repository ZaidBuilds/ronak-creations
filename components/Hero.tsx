import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-36">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Unique Gifts &amp; Custom Creations
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Fancy stationery, customized gift hampers, trendy accessories and more — all under one roof at Ronak Creations in Saharanpur.
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
              Customize a Gift
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
