import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { siteConfig } from "@/config/site";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Blog Immobilier Antibes | Guides & Conseils d'Experts",
  description:
    "Guides pratiques, analyses de marché et conseils d'experts pour acheter, vendre ou louer à Antibes et sur la Côte d'Azur.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero-eyebrow">Conseils &amp; Actualités</p>
          <h1 className="page-hero-title">Blog Immobilier Antibes</h1>
          <p className="page-hero-subtitle">
            Guides pratiques, analyses du marché local et conseils d&apos;experts pour réussir votre projet immobilier sur la Côte d&apos;Azur.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🏠</div>
              <p className="empty-state-title">Aucun article publié pour le moment.</p>
              <p className="empty-state-desc">
                Notre équipe prépare des guides et conseils immobiliers pour vous accompagner dans votre projet à Antibes.
              </p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/guides" className="btn btn-outline">
              Voir nos guides thématiques →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
