import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Loader2 } from "lucide-react";


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
  onClick,
}: {
  article: Article;
  onClick: (slug: string) => void;
}) => (
  <Card
    className="overflow-hidden hover:shadow-md transition-shadow border-border/50 bg-card cursor-pointer"
    onClick={() => onClick(article.slug)}
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
      {article.tags && (
        <div className="flex flex-wrap gap-1.5">
          {(Array.isArray(article.tags) ? article.tags : article.tags.split(",").map((t: string) => t.trim()).filter(Boolean)).map((tag: string) => (
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


const Library = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleArticleClick = (slug: string) => {
    navigate(`/care-library/${slug}`);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("https://api.mooiegeest.com/webhook/care-library-feed");
        if (!res.ok) throw new Error("Failed to load articles");
        const data = await res.json();
        console.log("Care Library raw response", data);
        const items: Article[] = Array.isArray(data) ? data : [];
        items.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
        setArticles(items);
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
    if (activeCategory === "learning") {
      return articles.filter((a) => a.category === "learning" || a.category === "resources");
    }
    return articles.filter((a) => a.category === activeCategory);
  }, [activeCategory, articles]);

  console.log("Care Library visible articles", filtered);

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
