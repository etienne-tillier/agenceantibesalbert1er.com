import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact | Agence Antibes Albert 1er",
  description:
    "Contactez l'agence immobilière Antibes Albert 1er pour votre estimation gratuite, conseil achat/vente ou information sur nos services.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const INFOS = [
  { icon: "📧", titre: "Email", valeur: siteConfig.email, highlight: true },
  { icon: "📍", titre: "Adresse", valeur: "30 Boulevard Albert 1er, 06600 Antibes", highlight: false },
  { icon: "🕘", titre: "Horaires", valeur: "Lun – Sam : 9h00 – 19h00", highlight: false },
  { icon: "🌐", titre: "Zone d'activité", valeur: "Antibes, Juan-les-Pins, Cap d'Antibes, Sophia Antipolis", highlight: false },
];

const SERVICES_CONTACT = [
  { icon: "🏠", titre: "Estimation gratuite", desc: "Recevez une évaluation précise de votre bien sans engagement." },
  { icon: "🔍", titre: "Conseil achat", desc: "Vous cherchez à acheter ? Partagez-nous votre projet, nous trouverons le bien idéal." },
  { icon: "💶", titre: "Mise en vente", desc: "Vous souhaitez vendre ? Nous vous proposons une stratégie de vente optimisée." },
  { icon: "🗝️", titre: "Information location", desc: "Location saisonnière ou longue durée — nos experts vous répondent." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ position: "relative", overflow: "hidden", minHeight: 340 }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/contact-hero.jpeg"
            alt="Bureau de l'agence immobilière Albert 1er à Antibes"
            fill
            style={{ objectFit: "cover", opacity: 0.35 }}
            priority
          />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="page-hero-eyebrow">Parlons de votre projet</p>
          <h1 className="page-hero-title">Contactez-nous</h1>
          <p className="page-hero-subtitle">
            Notre équipe est disponible du lundi au samedi pour répondre à toutes vos questions immobilières à Antibes et sur la Côte d&apos;Azur.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Infos de contact */}
            <div>
              <p className="section-eyebrow">Coordonnées</p>
              <h2 className="section-title" style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
                Nous contacter directement
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Pas de formulaire, pas d&apos;attente. Écrivez-nous directement par email ou venez nous rencontrer à notre agence sur le Boulevard Albert 1er. Notre équipe vous répond sous 24h ouvrées.
              </p>

              {/* Email mis en avant */}
              <div
                style={{
                  padding: "1.75rem",
                  background: "var(--primary-muted)",
                  borderRadius: "var(--radius-xl)",
                  border: "2px solid hsl(213,40%,88%)",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "0.625rem" }}>
                  📧 Adresse email
                </p>
                <p className="contact-email-display">{siteConfig.email}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
                  Copiez-collez cet email dans votre client mail pour nous écrire
                </p>
              </div>

              {INFOS.filter((i) => !i.highlight).map((info) => (
                <div key={info.titre} className="contact-method">
                  <div className="contact-method-icon">{info.icon}</div>
                  <div>
                    <p className="contact-method-title">{info.titre}</p>
                    <p className="contact-method-value">{info.valeur}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Services disponibles */}
            <div>
              <p className="section-eyebrow">Nos services</p>
              <h2 className="section-title" style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
                Comment pouvons-nous vous aider ?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {SERVICES_CONTACT.map((s) => (
                  <div
                    key={s.titre}
                    style={{
                      padding: "1.5rem",
                      background: "var(--surface)",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      gap: "1.25rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.5rem",
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--primary-muted)",
                        borderRadius: "var(--radius-md)",
                        flexShrink: 0,
                      }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text)", marginBottom: "0.375rem" }}>
                        {s.titre}
                      </p>
                      <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info délai réponse */}
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1.25rem 1.5rem",
                  background: "hsl(18,40%,96%)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid hsl(18,40%,88%)",
                }}
              >
                <p style={{ fontSize: "0.9375rem", color: "var(--accent-dark)", lineHeight: 1.6 }}>
                  ⏱️ <strong>Délai de réponse :</strong> Nous nous engageons à répondre à toutes les demandes sous <strong>24h ouvrées</strong>. Pour les urgences, précisez-le en objet de votre email.
                </p>
              </div>
            </div>
          </div>

          {/* Lien guides */}
          <div
            style={{
              marginTop: "4rem",
              padding: "2.5rem",
              background: "var(--bg-warm)",
              borderRadius: "var(--radius-xl)",
              textAlign: "center",
              border: "1px solid var(--border)",
            }}
          >
            <p className="section-eyebrow">Avant de nous contacter</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Consultez nos guides pratiques
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Nos guides répondent aux questions les plus fréquentes sur l&apos;achat, la vente et la location à Antibes.
            </p>
            <Link href="/guides" className="btn btn-primary">
              Voir les guides immobiliers →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
