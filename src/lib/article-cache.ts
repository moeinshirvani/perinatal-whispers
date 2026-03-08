const FEED_URL = "https://api.mooiegeest.com/webhook/care-library-feed";

export interface Article {
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

let cachedArticles: Article[] | null = null;
let fetchPromise: Promise<Article[]> | null = null;

export async function fetchArticles(): Promise<Article[]> {
  if (cachedArticles) return cachedArticles;
  if (fetchPromise) return fetchPromise;

  fetchPromise = (async () => {
    const res = await fetch(FEED_URL);
    if (!res.ok) throw new Error("Failed to load articles");
    const data = await res.json();
    console.log("Care Library raw response", data);
    const items: Article[] = Array.isArray(data) ? data : [];
    items.sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );
    cachedArticles = items;
    fetchPromise = null;
    return items;
  })();

  return fetchPromise;
}

export function formatArticleDate(dateStr: string | null | undefined): string | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function parseTags(tags: string[] | string): string[] {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  return tags.split(",").map((t) => t.trim()).filter(Boolean);
}
