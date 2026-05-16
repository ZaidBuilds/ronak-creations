import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Ronak Creations | Premium Gift Shop in Numaish Camp, Saharanpur",
  description:
    "Fancy stationery, customized gift hampers, party decorations & more. Visit Ronak Creations in Shakti Nagar, Numaish Camp, Saharanpur. Call +91-7988174542.",
  openGraph: {
    title: "Ronak Creations | Gift Shop in Saharanpur",
    description:
      "Premium gift shop offering fancy stationery, customized hampers, and party essentials in Saharanpur.",
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
      <body className="min-h-full flex flex-col bg-cream text-stone-800 antialiased noise-bg">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
