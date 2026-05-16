import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Ronak Creations | Premium Gift Shop in Numaish Camp, Saharanpur",
  description:
    "Fancy stationery, customized gift hampers, designer keychains, sipper bottles & more. Visit Ronak Creations in Saharanpur or inquire on WhatsApp.",
  openGraph: {
    title: "Ronak Creations | Gift Shop in Saharanpur",
    description:
      "Premium gift shop offering fancy stationery, customized hampers, and unique gifts in Saharanpur.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-dark antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
