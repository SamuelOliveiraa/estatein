import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";

import { CTASection } from "@/components/sections";
import { Header, Footer } from "@/components/layout";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estatein | Real Estate Agency",
  description: "Find your dream property with Estatein."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.className}>
      <body className="flex flex-col bg-neutral-900 text-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
