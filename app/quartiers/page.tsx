import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Quartiers d'Antibes | Immobilier par Secteur — Agence Albert 1er",
  description:
    "Découvrez les quartiers d'Antibes pour votre projet immobilier : Cap d'Antibes, Vieille Ville, Juan-les-Pins et Sophia Antipolis. Prix, ambiance et conseils d'experts.",
  alternates: { canonical: `${siteConfig.url}/quartiers` },
};

const QUARTIERS = [
  {
    icon: "⛵",
    nom: "Cap d'Antibes",
    slug: "cap-d-antibes",
    desc: "Le Cap d'Antibes est l'un des territoires immobiliers les plus prestigieux du monde. Cette péninsule verdoyante abrite des villas d'exception, des domaines sécurisés et des panoramas à couper le souffle sur la Méditerranée. Idéal pour des achats premium et des investissements patrimoniaux.",
    prix_min: "8 000",
    prix_max: "25 000+",
    atouts: ["Villas de luxe avec vue mer", "Sécurité et discrétion", "Accès aux plages privées", "Proximité de la marina Gallice"],
    ambiance: "Prestige & exclusivité",
    color: "var(--primary)",
  },
  {
    icon: "🏰",
    nom: "Vieille Ville d'Antibes",
    slug: "vieille-ville",
    desc: "Le cœur historique d'Antibes, avec ses ruelles médiévales, ses remparts romans et son marché Provençal. Ce secteur séduit par son authenticité et son charme méditerranéen unique. Fort attrait touristique garantissant une excellente valeur locative.",
    prix_min: "4 500",
    prix_max: "7 500",
    atouts: ["Appartements de caractère", "Animation culturelle toute l'année", "Fort potentiel locatif saisonnier", "Marché Provençal emblématique"],
    ambiance: "Charme & authenticité",
    color: "var(--accent)",
  },
  {
    icon: "🌴",
    nom: "Juan-les-Pins",
    slug: "juan-les-pins",
    desc: "Réputée pour son festival de jazz et ses plages de sable fin, Juan-les-Pins offre un art de vivre balnéaire incomparable. Les appartements lumineux avec vue mer ou à deux pas de la plage sont très recherchés par résidents permanents et investisseurs.",
    prix_min: "4 000",
    prix_max: "6 500",
    atouts: ["Plages de sable fin", "Festival de Jazz mondialement connu", "Vie nocturne animée", "Appartements lumineux avec terrasses"],
    ambiance: "Vie balnéaire & dynamisme",
    color: "var(--secondary-dark)",
  },
  {
    icon: "💻",
    nom: "Sophia Antipolis",
    slug: "sophia-antipolis",
    desc: "La Silicon Valley de la Côte d'Azur. Ce parc technologique de renommée mondiale attire cadres, ingénieurs et entrepreneurs du monde entier. Le marché immobilier bénéficie d'une demande locative soutenue et stable, idéale pour les investisseurs.",
    prix_min: "3 500",
    prix_max: "5 500",
    atouts: ["Demande locative très forte", "Cadre verdoyant préservé", "Entreprises internationales tier-1", "Excellent rapport rendement/risque"],
    ambiance: "Innovation & cadre de vie",
    color: "hsl(213, 55%, 40%)",
  },
];

const MARCHE_STATS = [
  { label: "Prix médian Antibes", valeur: "5 200 €/m²" },
  { label: "Progression sur 5 ans", valeur: "+18 %" },
  { label: "Délai moyen de vente", valeur: "52 jours" },
  { label: "Taux de rentabilité brute", valeur: "3,5 – 5 %" },
];

export default function QuartiersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-eyebrow">Expertise locale</p>
          <h1 className="page-hero-title">Les quartiers d&apos;Antibes</h1>
          <p className="page-hero-subtitle">
            Chaque quartier d&apos;Antibes a son caractère, ses prix et son potentiel. Découvrez notre analyse détaillée pour faire le meilleur choix.
          </p>
        </div>
      </section>

      {/* Image immersive */}
      <div style={{ position: "relative", height: 320, overflow: "hidden" }}>
        <Image
          src="/images/home-quartiers.jpeg"
          alt="Vue sur les remparts et la vieille ville d'Antibes"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "hsl(213 72% 12% / 0.5)" }} />
      </div>

      {/* Marché */}
      <section className="section" style={{ background: "var(--bg-warm)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <p className="section-eyebrow">Chiffres clés 2025</p>
            <h2 className="section-title">Le marché immobilier antibois en bref</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {MARCHE_STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border)",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>
                  {stat.valeur}
                </p>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quartiers détaillés */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <p className="section-eyebrow">Analyse par secteur</p>
            <h2 className="section-title">Nos 4 quartiers de prédilection</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {QUARTIERS.map((q) => (
              <div
                key={q.nom}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "2rem",
                  background: "var(--surface)",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                }}
                className="expertise-grid"
              >
                {/* Encart coloré */}
                <div
                  style={{
                    background: q.color,
                    padding: "2.5rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{q.icon}</div>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.375rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    {q.nom}
                  </p>
                  <p style={{ fontSize: "0.875rem", opacity: 0.85, marginBottom: "1.5rem" }}>{q.ambiance}</p>
                  <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "var(--radius-md)", padding: "0.875rem 1.25rem" }}>
                    <p style={{ fontSize: "0.8125rem", opacity: 0.8, marginBottom: "0.25rem" }}>Prix au m²</p>
                    <p style={{ fontWeight: 700, fontSize: "1.125rem" }}>{q.prix_min} – {q.prix_max} €</p>
                  </div>
                </div>

                {/* Contenu */}
                <div style={{ padding: "2.5rem 2rem" }}>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                    {q.desc}
                  </p>
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, marginBottom: "0.875rem", color: "var(--text)" }}>
                    Points forts
                  </p>
                  <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "0.625rem" }}>
                    {q.atouts.map((a) => (
                      <li key={a} style={{ fontSize: "0.9375rem", color: "var(--text-muted)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section trust-section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Vous avez choisi votre quartier ?</p>
          <h2 className="section-title">Parlons de votre projet immobilier</h2>
          <p className="section-subtitle" style={{ margin: "1rem auto 2.5rem", color: "hsl(0,0%,88%)" }}>
            Notre équipe connaît chaque rue de ces quartiers. Contactez-nous pour une estimation gratuite ou pour trouver le bien idéal.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-white">
              Estimation gratuite →
            </Link>
            <Link href="/guides" className="btn btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}>
              Nos guides d&apos;achat →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
