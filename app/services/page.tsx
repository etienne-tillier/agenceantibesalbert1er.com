import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Nos Services Immobiliers | Agence Antibes Albert 1er",
  description:
    "Découvrez tous les services de l'Agence Antibes Albert 1er : achat, vente, location, estimation gratuite, conseil juridique et accompagnement complet.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

const SERVICES = [
  {
    icon: "🔍",
    titre: "Estimation gratuite",
    desc: "Notre service d'estimation s'appuie sur l'analyse de plus de 800 transactions réalisées à Antibes, combinée aux données du marché local en temps réel. Nous vous fournissons une évaluation précise et argumentée, sans engagement.",
    inclus: [
      "Analyse comparative de marché",
      "Visite et évaluation sur site",
      "Rapport d'estimation détaillé",
      "Recommandations personnalisées",
    ],
    cta: "Demander mon estimation",
  },
  {
    icon: "🏠",
    titre: "Accompagnement à l'achat",
    desc: "Acquérir un bien à Antibes est une décision majeure. Notre équipe vous accompagne de la définition de votre projet jusqu'à la signature chez le notaire, en passant par la recherche de biens, les visites et la négociation.",
    inclus: [
      "Définition de vos critères",
      "Sélection de biens exclusifs",
      "Organisation et accompagnement des visites",
      "Négociation et offre d'achat",
    ],
    cta: "Démarrer ma recherche",
  },
  {
    icon: "💶",
    titre: "Mise en vente",
    desc: "Vendre votre bien au meilleur prix nécessite une stratégie précise. Nous gérons l'ensemble du processus : estimation, mise en valeur, diffusion multi-canaux, sélection des acheteurs et accompagnement jusqu'à la signature.",
    inclus: [
      "Estimation précise du marché",
      "Reportage photo professionnel",
      "Diffusion sur 30+ portails immobiliers",
      "Sélection et accompagnement des acheteurs",
    ],
    cta: "Mettre mon bien en vente",
  },
  {
    icon: "🗝️",
    titre: "Location & gestion locative",
    desc: "Que vous soyez propriétaire bailleur ou locataire, nous vous accompagnons pour une mise en location rapide et sécurisée. Gestion complète ou simple mise en relation — vous choisissez le niveau de service.",
    inclus: [
      "Évaluation du loyer de marché",
      "Recherche et sélection de locataires",
      "Rédaction du bail conforme",
      "Gestion locative complète en option",
    ],
    cta: "Gérer ma location",
  },
  {
    icon: "⚖️",
    titre: "Conseil juridique & fiscal",
    desc: "Notre réseau de notaires, avocats et experts-comptables spécialisés en droit immobilier vous protège à chaque étape. Optimisation fiscale (LMNP, SCI, déficit foncier), conformité et sécurisation de vos transactions.",
    inclus: [
      "Mise en relation avec notaires partenaires",
      "Optimisation fiscale immobilière",
      "Vérification des documents juridiques",
      "Conseils en montage SCI/indivision",
    ],
    cta: "Consulter un expert",
  },
  {
    icon: "📋",
    titre: "Bilan patrimonial",
    desc: "Vous souhaitez structurer ou développer votre patrimoine immobilier sur la Côte d'Azur ? Nous réalisons un bilan complet de votre situation et vous proposons des stratégies d'investissement adaptées à vos objectifs.",
    inclus: [
      "Analyse de votre patrimoine actuel",
      "Identification d'opportunités d'investissement",
      "Simulations de rentabilité",
      "Plan d'action pluriannuel",
    ],
    cta: "Prendre rendez-vous",
  },
];

const PROCESS = [
  { num: "01", titre: "Premier contact", desc: "Échangez avec un conseiller pour présenter votre projet. Gratuit, sans engagement." },
  { num: "02", titre: "Analyse & conseil", desc: "Nous analysons votre situation et vous proposons la stratégie la plus adaptée." },
  { num: "03", titre: "Mise en œuvre", desc: "Nous agissons concrètement : recherche de biens, visites, négociation ou mise en vente." },
  { num: "04", titre: "Signature & suivi", desc: "Nous vous accompagnons jusqu'à la signature chez le notaire et au-delà." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-eyebrow">Notre offre</p>
          <h1 className="page-hero-title">Nos services immobiliers</h1>
          <p className="page-hero-subtitle">
            Un accompagnement complet et personnalisé pour tous vos projets immobiliers à Antibes et sur la Côte d&apos;Azur.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
            {SERVICES.map((s) => (
              <div
                key={s.titre}
                style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border)",
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  transition: "all var(--transition)",
                  boxShadow: "var(--shadow-sm)",
                }}
                className="card"
              >
                <div
                  style={{
                    fontSize: "2rem",
                    width: 64,
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--primary-muted)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  {s.icon}
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, color: "var(--text)" }}>
                  {s.titre}
                </h2>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.9375rem" }}>
                  {s.desc}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {s.inclus.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                      <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto", paddingTop: "1.25rem" }}>
                  <Link href="/contact" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                    {s.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image services */}
      <section style={{ position: "relative", height: 360, overflow: "hidden" }}>
        <Image
          src="/images/home-services.jpeg"
          alt="Évaluation et conseil immobilier par l'agence Albert 1er"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "hsl(213 72% 12% / 0.65)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          gap: "1.5rem",
          padding: "2rem",
        }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "white", maxWidth: 600 }}>
            Nous travaillons pour vous,<br />pas pour les statistiques
          </h2>
          <p style={{ fontSize: "1.125rem", color: "hsl(0,0%,88%)", maxWidth: 500 }}>
            Notre rémunération est conditionnée à votre réussite. Pas de vente, pas d&apos;honoraires.
          </p>
        </div>
      </section>

      {/* Processus */}
      <section className="section" style={{ background: "var(--bg-warm)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <p className="section-eyebrow">Comment ça se passe ?</p>
            <h2 className="section-title">Notre processus d&apos;accompagnement</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {PROCESS.map((step) => (
              <div
                key={step.num}
                style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                  border: "1px solid var(--border)",
                  textAlign: "center",
                }}
              >
                <p style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                  opacity: 0.2,
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}>
                  {step.num}
                </p>
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.75rem", color: "var(--text)" }}>
                  {step.titre}
                </p>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section trust-section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Première étape gratuite</p>
          <h2 className="section-title">Démarrez avec une estimation gratuite</h2>
          <p className="section-subtitle" style={{ margin: "1rem auto 2.5rem", color: "hsl(0,0%,88%)" }}>
            Quel que soit votre projet — achat, vente ou location — notre première consultation est toujours gratuite et sans engagement.
          </p>
          <Link href="/contact" className="btn btn-white">
            Obtenir mon estimation gratuite →
          </Link>
        </div>
      </section>
    </>
  );
}
