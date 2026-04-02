import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Agence Immobilière Antibes | Achat, Vente, Location Albert 1er",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Agence Antibes Albert 1er - Votre Expert Immobilier Local",
    description: "Découvrez nos guides immobiliers, conseils d'experts et services d'accompagnement pour vos projets à Antibes.",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
