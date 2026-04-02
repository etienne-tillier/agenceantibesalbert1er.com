import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { siteConfig } from "@/config/site";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Guides Immobiliers Antibes | Acheter, Vendre, Louer sur la Côte d'Azur",
  description:
    "Guides pratiques et complets pour réussir votre projet immobilier à Antibes : achat, vente, location, inspection, négociation et valorisation de biens.",
  alternates: { canonical: `${siteConfig.url}/guides` },
};

const GUIDES_CATEGORIES = [
  {
    icon: "🏠",
    titre: "Guides d'achat",
    desc: "Tout ce qu'il faut savoir avant d'acheter un bien à Antibes : recherche, financement, visite, offre et signature.",
    items: ["Choisir son quartier à Antibes", "Financer son achat immobilier", "Repérer les défauts lors d'une visite", "Négocier le bon prix"],
  },
  {
    icon: "💶",
    titre: "Guides de vente",
    desc: "Préparez et réalisez la vente de votre bien dans les meilleures conditions : estimation, mise en valeur et marketing.",
    items: ["Estimer la valeur de son bien", "Préparer son bien avant la vente", "10 astuces pour vendre plus cher", "Choisir la bonne agence"],
  },
  {
    icon: "🗝️",
    titre: "Guides location",
    desc: "Location longue durée ou saisonnière à Antibes — droits du bailleur et du locataire, gestion locative.",
    items: ["Louer à Antibes : les règles à connaître", "Fixation du loyer par quartier", "Gestion locative : faire soi-même ou déléguer", "Location saisonnière sur la Côte d'Azur"],
  },
  {
    icon: "📐",
    titre: "Rénovation & valorisation",
    desc: "Travaux, architecture d'intérieur et home staging pour maximiser la valeur de votre bien antibois.",
    items: ["Quels travaux avant de vendre ?", "Home staging méditerranéen", "Extensions et permis de construire à Antibes", "Rénovation énergétique et MaPrimeRénov'"],
  },
  {
    icon: "📈",
    titre: "Investissement locatif",
    desc: "Stratégies et analyses pour rentabiliser un investissement immobilier sur la Côte d'Azur.",
    items: ["Rendement locatif à Antibes : ce qu'il faut savoir", "Investir près de Sophia Antipolis", "LMNP et défiscalisation", "Choisir entre appartement et villa"],
  },
  {
    icon: "⚖️",
    titre: "Droit & procédures",
    desc: "Comprendre les aspects juridiques, fiscaux et administratifs de vos transactions immobilières.",
    items: ["Le compromis de vente expliqué", "Les frais de notaire détaillés", "PLU d'Antibes et règles d'urbanisme", "Succession et transmission immobilière"],
  },
];

export default async function GuidesPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-eyebrow">Ressources immobilières</p>
          <h1 className="page-hero-title">Guides Immobiliers Antibes</h1>
          <p className="page-hero-subtitle">
            Des guides pratiques rédigés par nos experts pour vous accompagner à chaque étape de votre projet immobilier sur la Côte d&apos;Azur.
          </p>
        </div>
      </section>

      {/* Catégories de guides */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <p className="section-eyebrow">Nos thématiques</p>
            <h2 className="section-title">Explorez nos guides par catégorie</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {GUIDES_CATEGORIES.map((cat) => (
              <div key={cat.titre} className="guide-card">
                <div className="guide-card-icon">{cat.icon}</div>
                <p className="guide-card-title">{cat.titre}</p>
                <p className="guide-card-desc">{cat.desc}</p>
                <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
                  {cat.items.map((item) => (
                    <li key={item} style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.375rem", lineHeight: 1.5 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles blog */}
      <section className="section" style={{ background: "var(--bg-warm)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p className="section-eyebrow">Articles récents</p>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Nos derniers conseils immobiliers
              </h2>
            </div>
            <Link href="/blog" className="btn btn-outline">
              Voir tous les articles →
            </Link>
          </div>

          {posts.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📋</div>
              <p className="empty-state-title">Aucun article publié pour le moment.</p>
              <p className="empty-state-desc">
                Nos experts préparent des guides et conseils immobiliers pour votre projet à Antibes.
              </p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.slice(0, 6).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section trust-section">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-eyebrow">Besoin d&apos;un conseil personnalisé ?</p>
          <h2 className="section-title">Nos guides ne suffisent pas ? Parlons-en.</h2>
          <p className="section-subtitle" style={{ margin: "1rem auto 2.5rem", color: "hsl(0,0%,88%)" }}>
            Chaque projet immobilier est unique. Contactez nos experts pour un accompagnement sur mesure et une estimation gratuite de votre bien à Antibes.
          </p>
          <Link href="/contact" className="btn btn-white">
            Demander une consultation gratuite →
          </Link>
        </div>
      </section>
    </>
  );
}
