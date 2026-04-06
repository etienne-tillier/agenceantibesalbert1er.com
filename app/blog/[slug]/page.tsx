import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPostBySlug } from "@/lib/blog";
import { injectDofollowMarker } from "@/lib/dofollow";
import { MarkdownLink } from "@/components/MarkdownLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { siteConfig } from "@/config/site";

export const revalidate = 21600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  const normalizeLocale = (value: string) => value.toLowerCase().split("-")[0];
  const defaultLocale = normalizeLocale(post.default_locale || "fr");
  const languages: Record<string, string> = {
    [defaultLocale]: `${siteConfig.url}/blog/${post.slug}`,
  };

  try {
    const translationsRaw = post.translations;
    const translations =
      typeof translationsRaw === "string"
        ? JSON.parse(translationsRaw)
        : (translationsRaw || {});

    if (translations && typeof translations === "object") {
      Object.entries(translations).forEach(([dbLocale, translation]) => {
        if (!translation || typeof translation !== "object") return;
        const translatedSlug = (translation as { slug?: unknown }).slug;
        if (typeof translatedSlug !== "string" || !translatedSlug) return;
        languages[normalizeLocale(dbLocale)] = `${siteConfig.url}/blog/${translatedSlug}`;
      });
    }
  } catch {
    // noop
  }

  languages["x-default"] = languages[defaultLocale] || `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.seo_title || post.h1,
    description: post.meta_description || post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`,
      languages,
    },
    openGraph: {
      title: post.seo_title || post.h1,
      description: post.meta_description || post.excerpt || "",
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.published_at,
      ...(post.cover?.file_url
        ? { images: [{ url: post.cover.file_url, alt: post.cover.alt || post.h1 }] }
        : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return notFound();

  // Gestion des traductions
  let displayH1 = post.h1;
  let displayBody = post.body_md;
  if (post.slug !== slug && post.translations) {
    for (const val of Object.values(post.translations)) {
      if ((val as { slug?: string }).slug === slug) {
        displayH1 = (val as { h1?: string }).h1 || displayH1;
        displayBody = (val as { body_md?: string }).body_md || displayBody;
        break;
      }
    }
  }

  const bodyMd = injectDofollowMarker(displayBody || "");
  const category = post.categories?.[0];
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article>
      <div className="page-hero" style={{ padding: "4rem 0 3rem", textAlign: "left" }}>
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/blog">Blog</Link>
            {category && (
              <>
                <span className="breadcrumb-sep">/</span>
                <Link href={`/blog/categorie/${category.slug}`}>{category.label}</Link>
              </>
            )}
          </nav>
          {category && <p className="page-hero-eyebrow">{category.label}</p>}
          <h1 className="page-hero-title" style={{ textAlign: "left" }}>{displayH1}</h1>
          <div className="article-meta">
            {date && <span>📅 {date}</span>}
            {post.author?.name && <span>✍️ {post.author.name}</span>}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="article-container">
            <LanguageSwitcher post={post} currentSlug={slug} />

            {post.cover?.file_url && (
              <Image
                src={post.cover.file_url}
                alt={post.cover.alt || displayH1}
                width={1200}
                height={630}
                priority
                className="article-cover"
                style={{ borderRadius: "var(--radius-xl)", marginBottom: "2.5rem", boxShadow: "var(--shadow-lg)" }}
              />
            )}

            {post.excerpt && (
              <p className="article-excerpt">{post.excerpt}</p>
            )}

            <div className="prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
                {bodyMd}
              </ReactMarkdown>
            </div>

            {/* Auteur */}
            {post.author && (
              <div className="author-box">
                {post.author.avatar_url && (
                  <Image
                    src={post.author.avatar_url}
                    alt={post.author.name}
                    width={64}
                    height={64}
                    style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                  />
                )}
                <div>
                  <p style={{ fontWeight: 700, fontFamily: "var(--font-heading)", marginBottom: "0.25rem" }}>
                    {post.author.name}
                  </p>
                  {post.author.bio && (
                    <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* CTA en bas */}
            <div
              style={{
                marginTop: "3rem",
                padding: "2.5rem",
                background: "var(--primary-muted)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid hsl(213,40%,88%)",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--primary)" }}>
                Besoin d&apos;un conseil personnalisé ?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                Contactez notre équipe pour une estimation gratuite ou pour discuter de votre projet immobilier à Antibes.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Demander une consultation gratuite →
              </Link>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Link href="/blog" style={{ color: "var(--primary)", fontWeight: 600 }}>
                ← Retour au blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
