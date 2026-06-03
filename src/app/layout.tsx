import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Fight Secrets | James Wilks — Prepare. Protect. Prevail.",
  description:
    "Elite self-defense training from UFC Ultimate Fighter champion and Special Forces combatives instructor James Wilks. Real-world protection skills for civilians, law enforcement, and military.",
  keywords: ["James Wilks", "self defense", "fight secrets", "UFC", "special forces", "combatives", "martial arts"],
  openGraph: {
    title: "Fight Secrets | James Wilks",
    description: "Elite self-defense training forged through combat experience.",
    images: ["/images/james-hero.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
