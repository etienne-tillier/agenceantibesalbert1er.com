import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "À propos | Agence Immobilière Antibes Albert 1er",
  description:
    "Découvrez l'histoire, la mission et les valeurs de l'Agence Antibes Albert 1er. 15 ans d'expertise immobilière locale au service de vos projets sur la Côte d'Azur.",
  alternates: { canonical: `${siteConfig.url}/a-propos` },
};

const VALEURS = [
  { icon: "🤝", titre: "Confiance", desc: "Transparence totale à chaque étape, sans commissions cachées ni promesses irréalistes." },
  { icon: "🎯", titre: "Expertise locale", desc: "15 ans d'immersion dans le marché antibois pour vous offrir les meilleurs conseils." },
  { icon: "💡", titre: "Innovation", desc: "Outils d'estimation modernes et marketing digital pour valoriser vos biens." },
  { icon: "🌊", titre: "Passion", desc: "Nous aimons Antibes et la Côte d'Azur — cette passion transparaît dans chaque mission." },
];

const EQUIPE = [
  {
    nom: "Sophie Mercier",
    role: "Directrice & Experte en transaction",
    desc: "Née à Antibes, Sophie connaît chaque rue, chaque quartier et chaque dynamique du marché local. Elle dirige l'agence depuis 15 ans avec passion.",
    initiale: "S",
  },
  {
    nom: "Jean-Marc Fabre",
    role: "Négociateur senior — Cap d'Antibes",
    desc: "Spécialiste du marché de luxe, Jean-Marc accompagne les acquéreurs et vendeurs de biens d'exception depuis 10 ans.",
    initiale: "J",
  },
  {
    nom: "Inès Boukhalfa",
    role: "Conseillère — Location & Investissement",
    desc: "Experte en investissement locatif et gestion de patrimoine, Inès vous aide à optimiser la rentabilité de vos biens.",
    initiale: "I",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ position: "relative", overflow: "hidden", minHeight: 360 }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/about-hero.jpeg"
            alt="L'équipe de l'Agence Antibes Albert 1er"
            fill
            style={{ objectFit: "cover", opacity: 0.3 }}
            priority
          />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="page-hero-eyebrow">Notre histoire</p>
          <h1 className="page-hero-title">L&apos;Agence Antibes Albert 1er</h1>
          <p className="page-hero-subtitle">
            Depuis 15 ans, nous accompagnons les Antibois et les amoureux de la Côte d&apos;Azur dans leurs projets immobiliers avec expertise, transparence et passion.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <Image
                src="/images/about-hero.jpeg"
                alt="Équipe de l'agence immobilière Albert 1er"
                width={640}
                height={500}
              />
            </div>
            <div>
              <p className="section-eyebrow">Notre histoire</p>
              <h2 className="section-title">Nés à Antibes, experts de la Côte d&apos;Azur</h2>
              <div className="divider" />
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                L&apos;Agence Antibes Albert 1er a été fondée en 2009 par Sophie Mercier, une Antiboise de naissance passionnée d&apos;architecture provençale et d&apos;urbanisme côtier. Installée au cœur du boulevard Albert 1er, l&apos;agence a rapidement gagné la confiance des habitants grâce à son approche humaine et à sa connaissance fine du marché local.
              </p>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                Au fil des années, nous avons accompagné plus de 800 transactions, des studios en vieille ville aux villas d&apos;exception du Cap d&apos;Antibes. Notre réseau de partenaires — notaires, diagnostiqueurs, architectes, artisans — nous permet de vous offrir un service complet et sans couture.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                Aujourd&apos;hui, notre équipe de 8 conseillers spécialisés par secteur géographique vous garantit une expertise hyperlocale rare sur le marché immobilier de la Riviera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        className="section"
        style={{ background: "var(--bg-warm)" }}
      >
        <div className="container">
          <div className="text-center" style={{ maxWidth: 680, margin: "0 auto" }}>
            <p className="section-eyebrow">Notre mission</p>
            <h2 className="section-title">Rendre l&apos;immobilier antibois accessible et sécurisé</h2>
            <div className="divider" style={{ margin: "1.25rem auto" }} />
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.125rem" }}>
              Notre mission est simple : vous permettre de réaliser votre projet immobilier à Antibes dans les meilleures conditions — au bon prix, avec les bons partenaires, et en toute sérénité.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <p className="section-eyebrow">Ce qui nous définit</p>
            <h2 className="section-title">Nos valeurs fondamentales</h2>
          </div>
          <div className="values-grid" style={{ gridTemplateColumns: "repeat(2,1fr)", maxWidth: 900, margin: "0 auto" }}>
            {VALEURS.map((v) => (
              <div key={v.titre} className="value-item">
                <div className="value-icon">{v.icon}</div>
                <p className="value-title">{v.titre}</p>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="section" style={{ background: "var(--bg-warm)" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <p className="section-eyebrow">Rencontrez l&apos;équipe</p>
            <h2 className="section-title">Des experts à votre service</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {EQUIPE.map((m) => (
              <div
                key={m.nom}
                style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border)",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    color: "white",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  {m.initiale}
                </div>
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.125rem", color: "var(--text)", marginBottom: "0.375rem" }}>
                  {m.nom}
                </p>
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--accent)", marginBottom: "1rem" }}>
                  {m.role}
                </p>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section trust-section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Parlons de votre projet</p>
          <h2 className="section-title">Prêt à concrétiser votre projet immobilier ?</h2>
          <p className="section-subtitle" style={{ margin: "1rem auto 2.5rem", color: "hsl(0,0%,88%)" }}>
            Contactez notre équipe pour une estimation gratuite ou pour discuter de votre projet à Antibes.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-white">
              Nous contacter →
            </Link>
            <Link href="/guides" className="btn btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}>
              Nos guides immobiliers →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
