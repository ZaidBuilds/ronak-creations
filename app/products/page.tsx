import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Ronak Creations",
  description: "Browse our collection of fancy stationery, customized gift hampers, keychains, sipper bottles, and more.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground">Our Products</h1>
        <p className="text-muted mt-2 max-w-xl">
          Explore our range of gift items, stationery, accessories, and custom hampers.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
