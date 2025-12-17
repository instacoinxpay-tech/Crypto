import { useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import type { NewsArticle } from "../../shared/schema";

const categories = ["All", "Bitcoin", "World Crypto News", "Tutorial"];

const articles: NewsArticle[] = [
  {
    id: 1,
    title: "Spot bitcoin ETFs see $195 million exit, largest daily outflow in 2 weeks",
    excerpt: "U.S. spot bitcoin exchange-traded funds saw $194.6 million in net outflows on Thursday, marking the largest negative flow in two weeks.",
    category: "Bitcoin",
    image: "btc-etf",
  },
  {
    id: 2,
    title: "Tokenization debate reveals gaps in perspectives between TradeFi and crypto on decentralization",
    excerpt: "At an SEC meeting, Wall Street and crypto leaders debated how tokenization and DeFi should be regulated.",
    category: "World Crypto News",
    image: "sec",
  },
  {
    id: 3,
    title: "IMF warns stablecoins may accelerate currency substitution, weaken central bank control",
    excerpt: "The International Monetary Fund has raised concerns about the rapid adoption of stablecoins.",
    category: "World Crypto News",
    image: "imf",
  },
  {
    id: 4,
    title: "TON treasury files $420.69 million meme shelf registration to invest in tokens",
    excerpt: "TON Foundation announces major investment initiative in the Telegram AI ecosystem.",
    category: "World Crypto News",
    image: "ton",
  },
  {
    id: 5,
    title: "Coinbase incubated Ethereum L2 Base network rolls out bridge to Solana",
    excerpt: "The popular Layer 2 solution expands cross-chain capabilities with Solana integration.",
    category: "World Crypto News",
    image: "base",
  },
];

export function EducationSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Educate Yourself on Crypto
        </h2>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`block w-full text-left py-2 font-medium transition-colors ${
                  activeCategory === category
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`button-category-${index}-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </button>
            ))}
            <Button className="mt-6" data-testid="button-show-more-articles">
              Show More Articles
            </Button>
          </div>

          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.slice(0, 5).map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  featured={index < 2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article, featured }: { article: NewsArticle; featured: boolean }) {
  const gradients: Record<string, string> = {
    "btc-etf": "from-orange-400 via-amber-500 to-yellow-600",
    "sec": "from-gray-400 via-gray-500 to-gray-600",
    "imf": "from-red-400 via-pink-500 to-purple-600",
    "ton": "from-cyan-400 via-blue-500 to-indigo-600",
    "base": "from-blue-400 via-indigo-500 to-purple-600",
  };

  return (
    <div
      className={`group cursor-pointer ${featured ? "sm:row-span-1" : ""}`}
      data-testid={`card-article-${article.id}`}
    >
      <div className={`aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br ${gradients[article.image] || "from-primary/50 to-primary"}`}>
        <div className="w-full h-full flex items-center justify-center p-4">
          <Badge variant="secondary" className="bg-black/30 text-white border-0">
            {article.category}
          </Badge>
        </div>
      </div>
      <h3 className="font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {article.title}
      </h3>
      {featured && (
        <p className="text-muted-foreground text-xs line-clamp-3">{article.excerpt}</p>
      )}
    </div>
  );
}
