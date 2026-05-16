import Link from "next/link";
import type { Metadata } from "next";
import { WhatsAppIcon, InstagramIcon, LocationIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact | Ronak Creations",
  description: "Get in touch with Ronak Creations. Visit our store in Numaish Camp, Saharanpur or contact us on WhatsApp.",
};

const contacts = [
  {
    label: "WhatsApp",
    value: "+91-7988174542",
    href: "https://wa.me/917988174542",
    icon: WhatsAppIcon,
  },
  {
    label: "Instagram",
    value: "@ronakcreations_",
    href: "https://instagram.com/ronakcreations_",
    icon: InstagramIcon,
  },
  {
    label: "Address",
    value: "Shakti Nagar, Near Panchmukhi Hanuman Mandir, Numaish Camp, Saharanpur, UP",
    href: "https://maps.google.com/?q=Panchmukhi+Hanuman+Mandir+Numaish+Camp+Saharanpur",
    icon: LocationIcon,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
      <p className="text-muted mb-12 max-w-xl">
        Have a question or want to place an order? Reach out to us through any of the channels below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted">{label}</p>
                <p className="font-medium text-foreground">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-white border border-border rounded-xl overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.0!2d77.543!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiA3N8KwMzInMzQuOCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ronak Creations Location"
          />
        </div>
      </div>

      <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Prefer WhatsApp?</h2>
        <p className="text-muted mb-6">
          Most of our customers reach us on WhatsApp. Send us a message and we&apos;ll get back to you right away.
        </p>
        <Link
          href="https://wa.me/917988174542"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
        >
          Chat on WhatsApp
        </Link>
      </div>
    </div>
  );
}
