import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Ronak Creations</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Your one-stop shop for fancy stationery, customized gift hampers, and unique gift items in Saharanpur.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/products" className="text-sm text-white/70 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/customize" className="text-sm text-white/70 hover:text-white transition-colors">
                Custom Gift Hampers
              </Link>
              <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Visit Us</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Shakti Nagar, Near Panchmukhi Hanuman Mandir
              <br />
              Numaish Camp, Saharanpur, UP
            </p>
            <a
              href="https://wa.me/917988174542"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-accent-light hover:text-accent transition-colors"
            >
              WhatsApp: +91-7988174542
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Ronak Creations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
