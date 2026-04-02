import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { siteConfig } from "@/config/site";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Agence Immobilière Antibes | Achat, Vente, Location Albert 1er",
  description:
    "Expert immobilier à Antibes depuis Albert 1er. Guides complets pour acheter, vendre ou louer. Conseils pro, évaluation gratuite, accompagnement personnalisé.",
  alternates: { canonical: siteConfig.url },
};

const SERVICES = [
  {
    icon: "🏠",
    titre: "Achat immobilier",
    desc: "Trouvez le bien idéal à Antibes grâce à notre sélection rigoureuse et notre expertise locale du marché côtier.",
  },
  {
    icon: "💶",
    titre: "Vente & estimation",
    desc: "Valorisez votre bien au juste prix. Estimation gratuite, stratégie de vente personnalisée et accompagnement complet.",
  },
  {
    icon: "🗝️",
    titre: "Location",
    desc: "Locataires : accédez à des biens exclusifs. Propriétaires : gestion sereine et revenus optimisés.",
  },
  {
    icon: "⚖️",
    titre: "Conseil juridique",
    desc: "Sécurisez vos transactions avec notre réseau de notaires et experts juridiques spécialisés en droit immobilier.",
  },
];

const SERVICES_CARDS = [
  { icon: "🔍", titre: "Évaluation", desc: "Estimation précise de votre bien par nos experts du marché antibois." },
  { icon: "🏡", titre: "Visite conseil", desc: "Accompagnement lors des visites pour détecter le potentiel et les défauts." },
  { icon: "🤝", titre: "Négociation", desc: "Défense de vos intérêts lors des négociations pour obtenir le meilleur prix." },
  { icon: "📋", titre: "Accompagnement", desc: "Suivi complet du compromis jusqu'à la remise des clés chez le notaire." },
];

const QUARTIERS = [
  {
    icon: "⛵",
    nom: "Cap d'Antibes",
    desc: "Le prestige absolu de la Riviera. Villas d'exception face à la mer.",
    prix: "À partir de 8 000 €/m²",
  },
  {
    icon: "🏰",
    nom: "Vieille Ville",
    desc: "Charme provençal authentique, ruelles historiques et vue sur les remparts.",
    prix: "4 500 – 7 000 €/m²",
  },
  {
    icon: "🌴",
    nom: "Juan-les-Pins",
    desc: "Art de vivre balnéaire, plages animées et appartements lumineux.",
    prix: "4 000 – 6 500 €/m²",
  },
  {
    icon: "💻",
    nom: "Sophia Antipolis",
    desc: "Silicon Valley provençale, cadre verdoyant et valeur locative sûre.",
    prix: "3 500 – 5 500 €/m²",
  },
];

const TEMOIGNAGES = [
  {
    texte:
      "Grâce à l'équipe d'Albert 1er, j'ai vendu mon appartement 12 % au-dessus du prix du marché. Professionnalisme, réactivité et écoute : je recommande vivement !",
    auteur: "Marie-Hélène T.",
    role: "Vente d'appartement, Vieille Ville",
    initiale: "M",
  },
  {
    texte:
      "Primo-accédant, j'étais perdu dans les démarches. L'agence m'a guidé pas à pas, de l'estimation à la signature chez le notaire. Un accompagnement irréprochable.",
    auteur: "Pierre L.",
    role: "Achat maison, Juan-les-Pins",
    initiale: "P",
  },
  {
    texte:
      "En tant qu'investisseur sur le marché antibois depuis 10 ans, j'ai testé plusieurs agences. Albert 1er se distingue par sa connaissance hyperfine du marché local.",
    auteur: "Sophie & Marc D.",
    role: "Investissement locatif, Cap d'Antibes",
    initiale: "S",
  },
];

export default async function HomePage() {
  const latestPosts = await getPublishedBlogPosts(3, 0);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/home-hero.jpeg"
            alt="Vue panoramique d'Antibes et de la Côte d'Azur"
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <div className="hero-eyebrow">
              <span>⭐</span>
              Votre expert immobilier à Antibes
            </div>
            <h1 className="hero-title">
              Trouvez votre bien idéal <span>sur la Côte d&apos;Azur</span>
            </h1>
            <p className="hero-subtitle">
              Depuis le boulevard Albert 1er, nous accompagnons acheteurs, vendeurs et investisseurs avec une expertise unique du marché antibois — du Cap d&apos;Antibes à Sophia Antipolis.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-secondary">
                Estimation gratuite
              </Link>
              <Link href="/guides" className="btn btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.6)" }}>
                Nos guides immobiliers →
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <span className="hero-stat-value">15+</span>
                <p className="hero-stat-label">Années d&apos;expérience</p>
              </div>
              <div>
                <span className="hero-stat-value">800+</span>
                <p className="hero-stat-label">Transactions réalisées</p>
              </div>
              <div>
                <span className="hero-stat-value">98%</span>
                <p className="hero-stat-label">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EXPERTISE ===================== */}
      <section className="section">
        <div className="container">
          <div className="expertise-grid">
            <div className="expertise-image animate-fade-in">
              <Image
                src="/images/home-expertise.jpeg"
                alt="Consultation immobilière personnalisée à Antibes"
                width={640}
                height={480}
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <p className="section-eyebrow">Notre expertise</p>
              <h2 className="section-title">
                Un accompagnement complet pour votre projet immobilier
              </h2>
              <div className="divider" />
              <p className="section-subtitle">
                Implantée au cœur d&apos;Antibes depuis plus de 15 ans, notre agence conjugue connaissance approfondie du terrain et approche humaine pour vous aider à réussir chaque étape de votre projet.
              </p>
              <div className="services-list">
                {SERVICES.map((s) => (
                  <div key={s.titre} className="service-item">
                    <div className="service-icon">{s.icon}</div>
                    <div>
                      <h3>{s.titre}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUARTIERS ===================== */}
      <section className="section quartiers-section">
        <div className="container">
          <div className="text-center">
            <p className="section-eyebrow">Secteurs de prédilection</p>
            <h2 className="section-title">Les quartiers d&apos;Antibes que nous connaissons par cœur</h2>
            <div className="divider" style={{ margin: "1.25rem auto" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Du prestige du Cap d&apos;Antibes à la douceur de Juan-les-Pins, maîtrisez les nuances de chaque secteur pour investir au meilleur endroit.
            </p>
          </div>
          <div className="quartiers-grid">
            {QUARTIERS.map((q) => (
              <div key={q.nom} className="quartier-card">
                <div className="quartier-icon">{q.icon}</div>
                <p className="quartier-name">{q.nom}</p>
                <p className="quartier-desc">{q.desc}</p>
                <span className="quartier-price">{q.prix}</span>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2.5rem" }}>
            <Link href="/quartiers" className="btn btn-outline">
              Découvrir tous les quartiers →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== IMAGE QUARTIER ===================== */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{ position: "relative", height: "420px", overflow: "hidden" }}>
          <Image
            src="/images/home-quartiers.jpeg"
            alt="La vieille ville d'Antibes et les remparts"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, hsl(213 72% 12% / 0.75) 0%, transparent 60%)",
            display: "flex",
            alignItems: "center",
          }}>
            <div className="container">
              <div style={{ maxWidth: 480, color: "white" }}>
                <p style={{ fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(38,52%,72%)", marginBottom: "0.75rem" }}>
                  Antibes — Côte d&apos;Azur
                </p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, marginBottom: "1rem" }}>
                  Un marché immobilier parmi les plus dynamiques de France
                </h2>
                <p style={{ fontSize: "1rem", color: "hsl(0,0%,86%)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                  Antibes et Juan-les-Pins attirent chaque année des milliers d&apos;acquéreurs séduits par le cadre de vie, l&apos;ensoleillement et la proximité de Nice et Monaco.
                </p>
                <Link href="/guides" className="btn btn-secondary">
                  Nos guides d&apos;achat →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="expertise-grid">
            <div className="animate-fade-in-up">
              <p className="section-eyebrow">Ce que nous faisons</p>
              <h2 className="section-title">Des services immobiliers pensés pour votre réussite</h2>
              <div className="divider" />
              <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
                De l&apos;estimation initiale jusqu&apos;à la remise des clés, nous intervenons à chaque étape critique de votre projet immobilier à Antibes.
              </p>
              <Link href="/services" className="btn btn-primary">
                Découvrir nos services →
              </Link>
            </div>
            <div>
              <div className="services-cards-grid" style={{ gridTemplateColumns: "repeat(2,1fr)", marginTop: 0 }}>
                {SERVICES_CARDS.map((s) => (
                  <div key={s.titre} className="service-card">
                    <div className="service-card-icon">{s.icon}</div>
                    <p className="service-card-title">{s.titre}</p>
                    <p className="service-card-desc">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GALLERY ===================== */}
      <section className="section gallery-section">
        <div className="container">
          <div className="text-center">
            <p className="section-eyebrow">Sélection de biens</p>
            <h2 className="section-title">Appartements & Villas à Antibes</h2>
            <div className="divider" style={{ margin: "1.25rem auto" }} />
            <p className="section-subtitle" style={{ margin: "0 auto 1rem", color: "hsl(0,0%,80%)" }}>
              Découvrez notre sélection de biens d&apos;exception sur la Côte d&apos;Azur.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image
                src="/images/gallery-appartement.jpeg"
                alt="Appartement moderne à Antibes avec terrasse"
                width={800}
                height={500}
                className="w-full"
              />
              <div className="gallery-item-overlay">
                <p className="gallery-item-title">Appartements modernes</p>
                <p className="gallery-item-price">Vieille Ville, Juan-les-Pins &amp; Sophia Antipolis</p>
              </div>
            </div>
            <div className="gallery-item">
              <Image
                src="/images/gallery-villa.jpeg"
                alt="Villa de luxe au Cap d'Antibes avec piscine"
                width={800}
                height={500}
                className="w-full"
              />
              <div className="gallery-item-overlay">
                <p className="gallery-item-title">Villas de prestige</p>
                <p className="gallery-item-price">Cap d&apos;Antibes &amp; secteurs exclusifs</p>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: "2.5rem" }}>
            <Link href="/contact" className="btn btn-white">
              Demander une sélection personnalisée →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== TEMOIGNAGES ===================== */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="text-center">
            <p className="section-eyebrow">Avis clients</p>
            <h2 className="section-title">Ce que disent nos clients</h2>
            <div className="divider" style={{ margin: "1.25rem auto" }} />
          </div>
          <div className="testimonials-grid">
            {TEMOIGNAGES.map((t) => (
              <div key={t.auteur} className="testimonial-card">
                <div className="testimonial-quote">&ldquo;</div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">{t.texte}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initiale}</div>
                  <div>
                    <p className="testimonial-name">{t.auteur}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONFIANCE ===================== */}
      <section className="section trust-section">
        <div className="container">
          <p className="section-eyebrow">Notre bilan</p>
          <h2 className="section-title">15 ans d&apos;expertise immobilière à Antibes</h2>
          <div className="trust-stats">
            <div>
              <span className="trust-stat-value">15+</span>
              <p className="trust-stat-label">Années d&apos;expérience</p>
            </div>
            <div>
              <span className="trust-stat-value">800+</span>
              <p className="trust-stat-label">Transactions réalisées</p>
            </div>
            <div>
              <span className="trust-stat-value">98%</span>
              <p className="trust-stat-label">Clients satisfaits</p>
            </div>
            <div>
              <span className="trust-stat-value">4</span>
              <p className="trust-stat-label">Quartiers couverts</p>
            </div>
          </div>
          <p className="section-subtitle" style={{ margin: "0 auto 2.5rem", color: "hsl(0,0%,90%)" }}>
            Faites confiance à une agence ancrée dans le tissu local antibois, avec des conseillers qui vivent et respirent le marché immobilier côtier chaque jour.
          </p>
          <Link href="/contact" className="btn btn-white">
            Obtenir mon estimation gratuite →
          </Link>
        </div>
      </section>

      {/* ===================== BLOG ===================== */}
      {latestPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p className="section-eyebrow">Conseils &amp; guides</p>
                <h2 className="section-title" style={{ marginBottom: 0 }}>
                  Nos derniers articles immobiliers
                </h2>
              </div>
              <Link href="/blog" className="btn btn-outline">
                Voir tous les articles →
              </Link>
            </div>
            <div className="blog-grid">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== SERVICES IMAGE ===================== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }} className="expertise-grid">
            <div>
              <p className="section-eyebrow">Nos engagements</p>
              <h2 className="section-title">Une agence transparente, réactive et ancrée localement</h2>
              <div className="divider" />
              <p className="section-subtitle" style={{ marginBottom: "1.5rem" }}>
                Pas de commissions cachées, pas de promesses irréalistes. Juste un accompagnement honnête, basé sur une connaissance réelle du marché antibois et une relation de confiance durable.
              </p>
              <Link href="/a-propos" className="btn btn-primary">
                En savoir plus sur l&apos;agence →
              </Link>
            </div>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
              <Image
                src="/images/home-services.jpeg"
                alt="Évaluation immobilière par nos experts à Antibes"
                width={640}
                height={440}
                style={{ width: "100%", height: 420, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
