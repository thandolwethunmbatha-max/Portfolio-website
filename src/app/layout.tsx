import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thandolwethu-mbatha.vercel.app"),
  title: {
    default: "Thandolwethu Mbatha — Graphic Designer & Visual Storyteller",
    template: "%s — Thandolwethu Mbatha",
  },
  description:
    "Portfolio of Thandolwethu Mbatha, a Johannesburg-based graphic designer creating brand identities, social media graphics, web design, digital assets, and visual storytelling.",
  openGraph: {
    title: "Thandolwethu Mbatha — Graphic Designer & Visual Storyteller",
    description:
      "Portfolio of Thandolwethu Mbatha, a Johannesburg-based graphic designer creating brand identities, social media graphics, web design, digital assets, and visual storytelling.",
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: "Thandolwethu Mbatha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thandolwethu Mbatha — Graphic Designer & Visual Storyteller",
    description:
      "Johannesburg-based graphic designer creating brand identities, social media graphics, web design, digital assets, and visual storytelling.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="noise min-h-screen">
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
