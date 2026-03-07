import { useState, useEffect, useMemo } from "react";
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
  source: string;
  publishedAt: string;
  url: string;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
}

const categories = [
  "All",
  "Pregnancy",
  "Postpartum",
  "Emotional Wellbeing",
  "Sleep",
  "Learning Resources",
];

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const ArticleCard = ({ article }: { article: Article }) => (
  <Card className="overflow-hidden hover:shadow-md transition-shadow border-border/50 bg-card">
    {article.image && (
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
    )}
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
      <p className="text-sm text-muted-foreground leading-relaxed">
        {article.summary}
      </p>
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs text-muted-foreground">
          {article.source}{article.publishedAt ? ` · ${formatDate(article.publishedAt)}` : ""}
        </span>
      </div>
      {article.url && article.url !== "#" && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-primary hover:underline"
        >
          Read more →
        </a>
      )}
    </CardContent>
  </Card>
);

const Library = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("https://api.mooiegeest.com/webhook/care-library-feed");
        if (!res.ok) throw new Error("Failed to load articles");
        const data = await res.json();
        const items: Article[] = (Array.isArray(data) ? data : []).map((item: any, index: number) => ({
          id: item.id || String(index),
          title: item.title || "",
          summary: item.summary || "",
          source: item.source || "",
          publishedAt: item.publishedAt || "",
          url: item.url || "#",
          image: item.image || "",
          category: item.category || "",
          tags: item.tags || [],
          featured: item.featured || false,
        }));
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
    () => articles.filter((a) => a.featured),
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
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="container px-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Listing */}
      <section className="container px-4 pb-20">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No articles found in this category yet.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Library;
