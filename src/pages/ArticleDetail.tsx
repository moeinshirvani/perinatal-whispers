import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowLeft } from "lucide-react";

interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  source_name: string;
  source_url: string;
  image_url: string;
  category: string;
  tags: string[] | string;
  slug: string;
  published_at: string;
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const parseTags = (tags: string[] | string): string[] => {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  return tags.split(",").map((t) => t.trim()).filter(Boolean);
};

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("https://api.mooiegeest.com/webhook/care-library-feed");
        if (!res.ok) throw new Error("Failed to load articles");
        const data = await res.json();
        const items: Article[] = Array.isArray(data) ? data : [];
        const found = items.find((a) => a.slug === slug);
        if (!found) {
          setError("Article not found.");
        } else {
          setArticle(found);
        }
      } catch {
        setError("We couldn't load this article right now. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container max-w-3xl mx-auto px-4 pt-28 pb-20 md:pt-32">
        <Link
          to="/library"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Care Library
        </Link>

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">Loading article…</span>
          </div>
        ) : error ? (
          <p className="text-center text-muted-foreground py-12">{error}</p>
        ) : article ? (
          <article className="space-y-6">
            {/* Hero image */}
            <div className="aspect-[2/1] overflow-hidden rounded-xl bg-muted">
              {article.image_url ? (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
              )}
            </div>

            {/* Tags */}
            {article.tags && parseTags(article.tags).length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {parseTags(article.tags).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {article.published_at && <span>{formatDate(article.published_at)}</span>}
              {article.category && (
                <Badge variant="outline" className="text-xs font-normal capitalize">
                  {article.category.replace("-", " ")}
                </Badge>
              )}
            </div>

            {/* Content */}
            <div className="text-foreground leading-relaxed whitespace-pre-line text-base">
              {article.content || article.summary}
            </div>

            {/* Source */}
            {article.source_name && (
              <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                Source:{" "}
                {article.source_url ? (
                  <a
                    href={article.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {article.source_name}
                  </a>
                ) : (
                  article.source_name
                )}
              </p>
            )}
          </article>
        ) : null}
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetailPage;
