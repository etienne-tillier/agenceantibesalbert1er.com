import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales | Agence Antibes Albert 1er",
  description: "Mentions légales de l'Agence Immobilière Antibes Albert 1er — éditeur, hébergeur, propriété intellectuelle et conditions d'utilisation.",
  alternates: { canonical: `${siteConfig.url}/mentions-legales` },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-eyebrow">Informations légales</p>
          <h1 className="page-hero-title">Mentions légales</h1>
          <p className="page-hero-subtitle">
            Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">

            <h2 className="legal-section-title">1. Éditeur du site</h2>
            <p>Le site <strong>agenceantibesalbert1er.com</strong> est édité par :</p>
            <ul>
              <li><strong>Raison sociale :</strong> Agence Antibes Albert 1er SARL</li>
              <li><strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)</li>
              <li><strong>Capital social :</strong> 10 000 €</li>
              <li><strong>Siège social :</strong> 30 Boulevard Albert 1er, 06600 Antibes, France</li>
              <li><strong>SIRET :</strong> 842 612 057 00015</li>
              <li><strong>RCS :</strong> Antibes B 842 612 057</li>
              <li><strong>Carte professionnelle :</strong> N° CPI 06062018000050215 — Transactions sur immeubles et fonds de commerce</li>
              <li><strong>Garant financier :</strong> GALIAN Assurances, 89 rue de la Boétie, 75008 Paris</li>
              <li><strong>Directrice de publication :</strong> Sophie Mercier</li>
              <li><strong>Email :</strong> {siteConfig.email}</li>
            </ul>

            <h2 className="legal-section-title">2. Hébergement</h2>
            <p>Ce site est hébergé par :</p>
            <ul>
              <li><strong>Société :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
              <li><strong>Site web :</strong> vercel.com</li>
            </ul>

            <h2 className="legal-section-title">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, vidéos, données, etc.) est la propriété exclusive de l&apos;Agence Antibes Albert 1er ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l&apos;Agence Antibes Albert 1er.
            </p>

            <h2 className="legal-section-title">4. Limitation de responsabilité</h2>
            <p>
              Les informations publiées sur ce site le sont à titre purement informatif. L&apos;Agence Antibes Albert 1er s&apos;efforce de maintenir les informations publiées à jour, mais ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées.
            </p>
            <p>
              Les prix immobiliers affichés sont donnés à titre indicatif et peuvent varier en fonction des conditions du marché, de l&apos;état du bien et d&apos;autres facteurs. L&apos;Agence Antibes Albert 1er décline toute responsabilité pour les décisions prises sur la base de ces informations.
            </p>

            <h2 className="legal-section-title">5. Liens hypertextes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif uniquement. L&apos;Agence Antibes Albert 1er n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>

            <h2 className="legal-section-title">6. Droit applicable et juridiction</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français sont seuls compétents.
            </p>

            <h2 className="legal-section-title">7. Médiation</h2>
            <p>
              Conformément aux articles L.616-1 et R.616-1 du code de la consommation, vous pouvez avoir recours à un service de médiation conventionnel pour tout litige de consommation : médiation FEBCI, 73 bd de Clichy, 75009 Paris.
            </p>

            <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/politique-confidentialite" className="btn btn-outline">
                Politique de confidentialité →
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Nous contacter →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
