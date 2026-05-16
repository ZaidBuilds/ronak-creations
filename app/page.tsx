import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import Link from "next/link";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
            <p className="text-muted mt-2">Our most popular items</p>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex text-sm font-medium text-primary hover:text-primary-light transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-flex px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            View All Products →
          </Link>
        </div>
      </section>

      <section className="bg-white border-t border-border py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need a Custom Gift?</h2>
          <p className="text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            Birthdays, anniversaries, festivals, or corporate events — we create personalized gift hampers tailored just for you.
          </p>
          <Link
            href="/customize"
            className="inline-flex px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Order a Custom Hamper
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Wide Collection</h3>
            <p className="text-sm text-muted">Stationery, accessories, bottles, and more — something for every occasion.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Customization</h3>
            <p className="text-sm text-muted">Personalize hampers, notebooks, mugs, and more with your choice of design.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Shop in Saharanpur</h3>
            <p className="text-sm text-muted">Visit our store in Numaish Camp or inquire via WhatsApp from anywhere.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
