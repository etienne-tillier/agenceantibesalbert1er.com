import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const category = post.categories?.[0];
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className="blog-card-image-wrapper" tabIndex={-1} aria-hidden>
        {post.cover?.file_url ? (
          <Image
            src={post.cover.file_url}
            alt={post.cover.alt || post.h1}
            width={600}
            height={340}
            className="blog-card-image"
          />
        ) : (
          <div
            className="blog-card-image"
            style={{
              background: "linear-gradient(135deg, hsl(213,72%,28%) 0%, hsl(213,72%,18%) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
            }}
          >
            🏠
          </div>
        )}
      </Link>
      <div className="blog-card-body">
        {category && (
          <p className="blog-card-category">{category.label}</p>
        )}
        <h2 className="blog-card-title">
          <Link href={`/blog/${post.slug}`}>{post.h1}</Link>
        </h2>
        {post.excerpt && (
          <p className="blog-card-excerpt">{post.excerpt}</p>
        )}
        <div className="blog-card-meta">
          {date && <span>{date}</span>}
          <Link href={`/blog/${post.slug}`} className="blog-card-read-more">
            Lire l&apos;article →
          </Link>
        </div>
      </div>
    </article>
  );
}
