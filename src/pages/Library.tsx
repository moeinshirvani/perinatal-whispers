import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

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

const sampleArticles: Article[] = [
  {
    id: "1",
    title: "Understanding Your First Trimester: What to Expect",
    summary: "A comprehensive guide to the physical and emotional changes during the first twelve weeks of pregnancy, with practical tips for self-care.",
    source: "Mooie Geest Editorial",
    publishedAt: "2025-03-01",
    url: "#",
    image: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=600&h=400&fit=crop",
    category: "Pregnancy",
    tags: ["Pregnancy", "First Trimester"],
    featured: true,
  },
  {
    id: "2",
    title: "Postpartum Recovery: Gentle Movement for New Mothers",
    summary: "Safe, body-aware exercises designed to support your physical recovery and emotional wellbeing in the weeks after birth.",
    source: "Mooie Geest Editorial",
    publishedAt: "2025-02-20",
    url: "#",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop",
    category: "Postpartum",
    tags: ["Postpartum", "Recovery"],
    featured: true,
  },
  {
    id: "3",
    title: "Managing Anxiety During Pregnancy",
    summary: "Evidence-based strategies for coping with prenatal anxiety, including breath techniques, journaling, and when to seek professional help.",
    source: "Perinatal Health Journal",
    publishedAt: "2025-02-15",
    url: "#",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
    category: "Emotional Wellbeing",
    tags: ["Emotional Wellbeing", "Anxiety"],
    featured: false,
  },
  {
    id: "4",
    title: "Sleep Strategies for the Third Trimester",
    summary: "Practical advice for improving sleep quality when comfort becomes a challenge, including positioning tips and relaxation routines.",
    source: "Mooie Geest Editorial",
    publishedAt: "2025-02-10",
    url: "#",
    image: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=600&h=400&fit=crop",
    category: "Sleep",
    tags: ["Sleep", "Pregnancy"],
    featured: false,
  },
  {
    id: "5",
    title: "Building Your Support Network Before Baby Arrives",
    summary: "How to identify, nurture, and lean on your community during pregnancy and early motherhood for lasting emotional resilience.",
    source: "Maternal Wellbeing Institute",
    publishedAt: "2025-01-28",
    url: "#",
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=400&fit=crop",
    category: "Learning Resources",
    tags: ["Learning Resources", "Community"],
    featured: false,
  },
  {
    id: "6",
    title: "Breathwork for Labour Preparation",
    summary: "Simple, effective breathing exercises that can help you feel more calm and prepared as your due date approaches.",
    source: "Mooie Geest Editorial",
    publishedAt: "2025-01-20",
    url: "#",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    category: "Pregnancy",
    tags: ["Pregnancy", "Breathwork"],
    featured: false,
  },
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
    <div className="aspect-[3/2] overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
    <CardContent className="p-5 space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-foreground leading-snug">
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {article.summary}
      </p>
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs text-muted-foreground">
          {article.source} · {formatDate(article.publishedAt)}
        </span>
      </div>
      <a
        href={article.url}
        className="inline-block text-sm font-medium text-primary hover:underline"
      >
        Read more →
      </a>
    </CardContent>
  </Card>
);

const Library = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = useMemo(
    () => sampleArticles.filter((a) => a.featured),
    []
  );

  const filtered = useMemo(() => {
    if (activeCategory === "All") return sampleArticles;
    return sampleArticles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

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
