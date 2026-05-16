import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ronak Creations | Gift Shop in Numaish Camp, Saharanpur",
  description:
    "Ronak Creations — fancy stationery, customized gift hampers, designer keychains, sipper bottles, and more. Visit us in Numaish Camp, Saharanpur.",
  openGraph: {
    title: "Ronak Creations | Gift Shop in Saharanpur",
    description:
      "Fancy stationery, customized gift hampers, and unique gifts in Saharanpur.",
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
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
