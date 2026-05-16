import Link from "next/link";
import { InstagramIcon } from "@/components/Icons";

const footerLinks = [
  { heading: "Quick Links", links: [
    { href: "/products", label: "Products" },
    { href: "/customize", label: "Custom Gift Hampers" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]},
  { heading: "Categories", links: [
    { href: "/products", label: "Stationery" },
    { href: "/products", label: "Gift Hampers" },
    { href: "/products", label: "Accessories" },
    { href: "/customize", label: "Custom Orders" },
  ]},
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold">RC</div>
              <span className="text-lg font-bold">Ronak Creations</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Premium gift shop in Numaish Camp, Saharanpur. Fancy stationery, customized hampers & unique gifts.
            </p>
            <a
              href="https://instagram.com/ronakcreations_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-accent-light transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              @ronakcreations_
            </a>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-white/80 mb-4 tracking-wider uppercase">{group.heading}</h3>
              <div className="flex flex-col gap-3">
                {group.links.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-4 tracking-wider uppercase">Visit Us</h3>
            <address className="text-sm text-white/50 leading-relaxed not-italic mb-4">
              Shakti Nagar, Near Panchmukhi<br />Hanuman Mandir
              <br />
              Numaish Camp, Saharanpur, UP
            </address>
            <a
              href="https://wa.me/917988174542"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary-light hover:text-secondary transition-colors"
            >
              +91-7988174542
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} Ronak Creations. All rights reserved.</p>
          <p>Made with care in Saharanpur</p>
        </div>
      </div>
    </footer>
  );
}
