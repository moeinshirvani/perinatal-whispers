import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowLeft } from "lucide-react";
import { fetchArticles, formatArticleDate, parseTags, type Article } from "@/lib/article-cache";

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setIsLoading(true);
        setError(null);
        const items = await fetchArticles();
        if (cancelled) return;
        const found = items.find((a) => a.slug === slug);
        if (!found) {
          setError("Article not found.");
        } else {
          console.log("ArticleDetail found article:", found);
          console.log("ArticleDetail content length:", found.content?.length ?? 0);
          setArticle(found);
        }
      } catch {
        if (!cancelled) setError("We couldn't load this article right now. Please try again later.");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [slug]);

  const dateStr = article ? formatArticleDate(article.published_at) : null;

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
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {article.source_name && <span>{article.source_name}</span>}
              {article.source_name && dateStr && <span>•</span>}
              {dateStr && <span>{dateStr}</span>}
              {article.category && (
                <Badge variant="outline" className="text-xs font-normal capitalize ml-1">
                  {article.category.replace("-", " ")}
                </Badge>
              )}
            </div>

            {/* Hero image */}
            <div className="aspect-[2/1] overflow-hidden rounded-xl bg-muted">
              {article.image_url ? (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
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

            {/* Content */}
            {(article.content || article.summary) && (
              <div className="prose max-w-none mt-6">
                <div dangerouslySetInnerHTML={{ __html: article.content || article.summary }} />
              </div>
            )}

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
