import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Loader2, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  source_name: string;
  source_url: string;
  image_url: string;
  category: string;
  tags: string[];
  slug: string;
  published_at: string;
  featured?: boolean;
}

const categories: { label: string; value: string }[] = [
  { label: "All", value: "All" },
  { label: "Pregnancy", value: "pregnancy" },
  { label: "Postpartum", value: "postpartum" },
  { label: "Emotional Wellbeing", value: "emotional-wellbeing" },
  { label: "Sleep", value: "sleep" },
  { label: "Learning Resources", value: "learning" },
];

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ArticleCard = ({
  article,
  onSelect,
}: {
  article: Article;
  onSelect: (article: Article) => void;
}) => (
  <Card
    className="overflow-hidden hover:shadow-md transition-shadow border-border/50 bg-card cursor-pointer"
    onClick={() => onSelect(article)}
  >
    <div className="aspect-[3/2] overflow-hidden bg-muted">
      {article.image_url ? (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-muted-foreground/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
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
    <CardContent className="p-5 space-y-3">
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground leading-snug">
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {article.summary}
      </p>
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs text-muted-foreground">
          {article.source_name}
          {article.published_at ? ` · ${formatDate(article.published_at)}` : ""}
        </span>
      </div>
    </CardContent>
  </Card>
);

const ArticleDetail = ({
  article,
  onClose,
}: {
  article: Article;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto pt-20 pb-10 px-4">
    <div className="bg-card border border-border rounded-xl shadow-lg max-w-2xl w-full relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors"
      >
        <X className="h-5 w-5 text-muted-foreground" />
      </button>
      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full aspect-[2/1] object-cover rounded-t-xl"
        />
      )}
      <div className="p-6 md:p-8 space-y-4">
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <h2 className="text-2xl font-semibold text-foreground">{article.title}</h2>
        <p className="text-sm text-muted-foreground">
          {article.published_at && formatDate(article.published_at)}
        </p>
        <div className="text-foreground leading-relaxed whitespace-pre-line">
          {article.content || article.summary}
        </div>
        {article.source_name && (
          <p className="text-sm text-muted-foreground pt-2">
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
      </div>
    </div>
  </div>
);

const Library = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data, error: dbError } = await supabase
          .from("care_library_items")
          .select(
            "id,title,summary,content,source_name,source_url,image_url,category,tags,slug,published_at"
          )
          .order("published_at", { ascending: false });

        if (dbError) throw dbError;
        setArticles((data as Article[]) || []);
      } catch {
        setError("We couldn't load the articles right now. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const featured = useMemo(
    () => articles.filter((a) => (a as any).featured),
    [articles]
  );

  const filtered = useMemo(() => {
    if (activeCategory === "All") return articles;
    return articles.filter((a) => a.category === activeCategory);
  }, [activeCategory, articles]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 text-center px-4">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Care Library
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A gentle space for trusted knowledge, practical guidance, and
            supportive learning through pregnancy and motherhood.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="container px-4 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="h-5 w-5 text-secondary" />
            <h2 className="text-xl font-semibold text-foreground">
              Featured by Mooie Geest
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={setSelectedArticle}
              />
            ))}
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="container px-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={activeCategory === cat.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.value)}
              className="rounded-full"
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Listing */}
      <section className="container px-4 pb-20">
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">Loading articles…</span>
          </div>
        ) : error ? (
          <p className="text-center text-muted-foreground py-12">{error}</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No articles found in this category yet.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={setSelectedArticle}
              />
            ))}
          </div>
        )}
      </section>

      {/* Detail overlay */}
      {selectedArticle && (
        <ArticleDetail
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Library;
