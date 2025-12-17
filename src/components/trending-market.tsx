import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../components/ui/skeleton";
import { fetchCryptoMarket } from "../lib/api/crypto";

export function TrendingMarket() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["crypto-market"],
    queryFn: fetchCryptoMarket,
  });

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Trending in Market
        </h2>

        <Card className="overflow-hidden border border-border/50">
          <div className="p-6 flex justify-between items-center border-b border-border/50">
            <h3 className="text-xl font-bold">Ranking Cryptocurrency</h3>
            <Button>Show More</Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-border/50 text-muted-foreground text-sm">
                  <th className="p-4">#</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">24h %</th>
                  <th className="p-4">7d %</th>
                  <th className="p-4">Market Cap</th>
                  <th className="p-4">Last 7 Days</th>
                </tr>
              </thead>

              <tbody>
                {isLoading &&
                  Array.from({ length: 6 }).map((_, i) => (
                    <tr key={i}>
                      <td className="p-4"><Skeleton className="h-4 w-4" /></td>
                      <td className="p-4"><Skeleton className="h-6 w-32" /></td>
                      <td className="p-4"><Skeleton className="h-4 w-24" /></td>
                      <td className="p-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="p-4"><Skeleton className="h-4 w-16" /></td>
                      <td className="p-4"><Skeleton className="h-4 w-32" /></td>
                      <td className="p-4"><Skeleton className="h-8 w-24" /></td>
                    </tr>
                  ))}

                {isError && (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-muted-foreground">
                      Failed to load data
                    </td>
                  </tr>
                )}

                {data?.map((crypto: any, index: number) => (
                  <tr key={crypto.id} className="border-b hover:bg-accent/30">
                    {/* Rank */}
                    <td className="p-4">{index + 1}</td>

                    {/* Name */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="w-8 h-8"
                        />
                        <div>
                          <span className="font-semibold">{crypto.name}</span>
                          <span className="ml-2 text-sm text-muted-foreground uppercase">
                            {crypto.symbol}
                          </span>
                        </div>
                        <Badge variant="secondary">Buy</Badge>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="p-4 font-medium">
                      ${crypto.current_price.toLocaleString()}
                    </td>

                    {/* 24h */}
                    <td
                      className={`p-4 ${
                        crypto.price_change_percentage_24h >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {crypto.price_change_percentage_24h >= 0 ? (
                        <TrendingUp className="inline w-4 h-4" />
                      ) : (
                        <TrendingDown className="inline w-4 h-4" />
                      )}
                      {crypto.price_change_percentage_24h?.toFixed(2)}%
                    </td>

                    {/* 7d */}
                    <td
                      className={`p-4 ${
                        crypto.price_change_percentage_7d_in_currency >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {crypto.price_change_percentage_7d_in_currency?.toFixed(2)}%
                    </td>

                    {/* Market Cap */}
                    <td className="p-4 font-medium">
                      ${crypto.market_cap.toLocaleString()}
                    </td>

                    {/* Sparkline */}
                    <td className="p-4">
                      <Sparkline
                        data={crypto.sparkline_in_7d.price}
                        positive={crypto.price_change_percentage_7d_in_currency >= 0}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}

/* Sparkline */
function Sparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 30 - ((v - min) / range) * 28;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width="100" height="32">
      <polyline
        points={points}
        fill="none"
        stroke={positive ? "#22c55e" : "#ef4444"}
        strokeWidth="2"
      />
    </svg>
  );
}
