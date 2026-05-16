import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Gift Hampers | Ronak Creations",
  description: "Order personalized gift hampers for any occasion — birthdays, anniversaries, festivals, corporate gifting, and more.",
};

const ideas = [
  { title: "Birthday Hampers", desc: "Personalized gifts, chocolates, stationery, and more in a custom hamper." },
  { title: "Anniversary Hampers", desc: "Elegant combos with customized mugs, photo frames, and keepsakes." },
  { title: "Festival Special", desc: "Diwali, Rakhi, Holi — custom hampers for every Indian festival." },
  { title: "Corporate Gifting", desc: "Branded stationery sets, custom notebooks, pen sets for your team or clients." },
  { title: "Return Gifts", desc: "Party favor hampers for weddings, birthdays, or events." },
  { title: "Just Because", desc: "Surprise someone special with a curated hamper made with love." },
];

export default function CustomizePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-accent to-accent-light text-foreground">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Gift Hampers</h1>
          <p className="text-lg max-w-2xl text-foreground/80 leading-relaxed">
            Tell us the occasion, and we&apos;ll create a personalized gift hamper that your loved ones will never forget.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">Ideas for Every Occasion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea) => (
            <div key={idea.title} className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">{idea.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{idea.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-border py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Order?</h2>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            Tell us your requirements — budget, occasion, items — and we&apos;ll design the perfect hamper for you.
          </p>
          <Link
            href="https://wa.me/917988174542?text=Hi!%20I%20want%20to%20order%20a%20custom%20gift%20hamper.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            Order on WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}
