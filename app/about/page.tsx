import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ronak Creations",
  description: "Learn about Ronak Creations — a gift shop in Numaish Camp, Saharanpur offering fancy stationery, custom hampers, and more.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-6">About Ronak Creations</h1>

      <div className="prose prose-stone max-w-none">
        <p className="text-lg text-muted leading-relaxed mb-6">
          Ronak Creations is a gift shop based in <strong>Numaish Camp, Saharanpur</strong> — your go-to destination for
          fancy stationery, customized gift hampers, trendy accessories, and unique gift items.
        </p>

        <div className="bg-white border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">What We Offer</h2>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✦</span>
              <span><strong>Fancy Stationery</strong> — Notebooks, pen sets, and more in trendy designs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✦</span>
              <span><strong>Custom Gift Hampers</strong> — Personalized for birthdays, anniversaries, festivals, and corporate events</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✦</span>
              <span><strong>Designer Keychains &amp; Accessories</strong> — Stylish and affordable</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✦</span>
              <span><strong>Bottles &amp; Sippers</strong> — Dual lid stainless steel bottles in eye-catching shades</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✦</span>
              <span><strong>Personalized Items</strong> — Custom mugs, notebooks, and gifts with your name or design</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="space-y-2 text-muted">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✦</span>
              <span>Wide variety of products under one roof</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✦</span>
              <span>Customization options for hampers and gifts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✦</span>
              <span>Affordable prices for every budget</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✦</span>
              <span>Wholesale and retail available</span>
            </li>
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
    </div>
  );
}
