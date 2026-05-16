import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { PackageIcon, SparkleIcon, LocationIcon } from "@/components/Icons";
import products from "@/data/products.json";
import Link from "next/link";

const highlights = [
  {
    icon: PackageIcon,
    title: "Wide Collection",
    desc: "Stationery, accessories, bottles, and more — something for every occasion.",
  },
  {
    icon: SparkleIcon,
    title: "Customization",
    desc: "Personalize hampers, notebooks, mugs, and more with your choice of design.",
  },
  {
    icon: LocationIcon,
    title: "Shop in Saharanpur",
    desc: "Visit our store in Numaish Camp or inquire via WhatsApp from anywhere.",
  },
];

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
            View All &rarr;
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
            View All Products &rarr;
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
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
