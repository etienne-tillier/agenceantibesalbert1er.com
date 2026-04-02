import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <Image src="/logo.svg" alt="Agence Antibes Albert 1er" width={140} height={40} />
              </Link>
              <p className="footer-description">
                Votre expert immobilier à Antibes. Achat, vente et location sur la Côte d&apos;Azur avec un accompagnement personnalisé et une connaissance approfondie du marché local.
              </p>
              <div>
                <p style={{ fontSize: "0.875rem", color: "hsl(0,0%,72%)", marginBottom: "0.375rem" }}>
                  📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "hsl(38,52%,72%)", fontWeight: 600 }}>
                    {siteConfig.email}
                  </a>
                </p>
                <p style={{ fontSize: "0.875rem", color: "hsl(0,0%,72%)" }}>
                  📍 Avenue Albert 1er, 06600 Antibes
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="footer-col-title">Services</p>
              <ul className="footer-links">
                {siteConfig.footerLinks.services.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quartiers */}
            <div>
              <p className="footer-col-title">Quartiers</p>
              <ul className="footer-links">
                {siteConfig.footerLinks.quartiers.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="footer-col-title">Informations</p>
              <ul className="footer-links">
                {siteConfig.footerLinks.legal.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {year} {siteConfig.name} — Tous droits réservés</p>
            <p>
              <Link href="/mentions-legales" style={{ color: "inherit", marginRight: "1.25rem" }}>
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" style={{ color: "inherit" }}>
                Confidentialité
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
