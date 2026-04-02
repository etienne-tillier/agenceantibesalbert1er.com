import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByCategory, getCategoryBySlug } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { siteConfig } from "@/config/site";

export const revalidate = 21600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return { title: "Catégorie introuvable" };

  return {
    title: `${category.label} | Blog Immobilier Antibes`,
    description: category.description || `Articles et guides sur le thème : ${category.label} — immobilier à Antibes.`,
    alternates: { canonical: `${siteConfig.url}/blog/categorie/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const [category, posts] = await Promise.all([
    getCategoryBySlug(slug),
    getPostsByCategory(slug),
  ]);

  if (!category) return notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: "hsl(0,0%,80%)" }}>{category.label}</span>
          </nav>
          <p className="page-hero-eyebrow">Catégorie</p>
          <h1 className="page-hero-title">{category.label}</h1>
          {category.description && (
            <p className="page-hero-subtitle">{category.description}</p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📋</div>
              <p className="empty-state-title">Aucun article publié pour le moment.</p>
              <p className="empty-state-desc">
                Des articles sur &ldquo;{category.label}&rdquo; seront bientôt disponibles.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/blog" className="btn btn-primary">
                  Voir tous les articles →
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="blog-grid">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                <Link href="/blog" className="btn btn-outline">
                  ← Retour au blog
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
