import Image from "next/image";
import type { Product } from "@/types/product";

const WHATSAPP_NUMBER = "917988174542";

export default function ProductCard({ name, description, price, image }: Product) {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(name)}`;

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-square relative bg-stone-50 flex items-center justify-center p-8">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{price}</span>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent font-medium hover:text-accent-light transition-colors"
          >
            Inquire on WhatsApp &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
