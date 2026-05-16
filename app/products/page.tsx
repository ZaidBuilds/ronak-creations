import ProductBrowser from "@/components/ProductBrowser";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <ScrollReveal>
        <div className="flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-2">
          <span className="w-8 h-0.5 bg-accent rounded-full" />
          Our Collection
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mt-2 mb-3">All Products</h1>
        <p className="text-muted max-w-xl leading-relaxed mb-12">
          Browse our full catalog of gift items, stationery, accessories, and custom hampers. Find the perfect gift for every occasion.
        </p>
      </ScrollReveal>

      <ProductBrowser />
    </div>
  );
}
