import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ronak Creations",
  description: "Learn about Ronak Creations — a gift shop in Numaish Camp, Saharanpur offering fancy stationery, custom hampers, and more.",
};

const offerings = [
  { label: "Fancy Stationery", desc: "Notebooks, pen sets, and more in trendy designs" },
  { label: "Custom Gift Hampers", desc: "Personalized for birthdays, anniversaries, festivals, and corporate events" },
  { label: "Designer Keychains & Accessories", desc: "Stylish and affordable" },
  { label: "Bottles & Sippers", desc: "Dual lid stainless steel bottles in eye-catching shades" },
  { label: "Personalized Items", desc: "Custom mugs, notebooks, and gifts with your name or design" },
];

const reasons = [
  "Wide variety of products under one roof",
  "Customization options for hampers and gifts",
  "Affordable prices for every budget",
  "Wholesale and retail available",
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-6">About Ronak Creations</h1>

      <p className="text-lg text-muted leading-relaxed mb-8">
        Ronak Creations is a gift shop based in <strong>Numaish Camp, Saharanpur</strong> — your go-to destination for
        fancy stationery, customized gift hampers, trendy accessories, and unique gift items.
      </p>

      <div className="bg-white border border-border rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
        <ul className="space-y-3">
          {offerings.map(({ label, desc }) => (
            <li key={label} className="flex items-start gap-2 text-muted">
              <span className="text-primary mt-1 shrink-0">&#10022;</span>
              <span><strong>{label}</strong> &mdash; {desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border border-border rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="space-y-3">
          {reasons.map((r) => (
            <li key={r} className="flex items-start gap-2 text-muted">
              <span className="text-primary mt-1 shrink-0">&#10022;</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Visit Our Store</h2>
        <p className="text-muted mb-2">
          Shakti Nagar, Near Panchmukhi Hanuman Mandir
          <br />
          Numaish Camp, Saharanpur, Uttar Pradesh
        </p>
        <p className="text-muted">Or reach out to us on WhatsApp for inquiries and orders.</p>
      </div>
    </div>
  );
}
