export async function fetchCryptoMarket() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?" +
      new URLSearchParams({
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: "10",
        page: "1",
        sparkline: "true",
        price_change_percentage: "24h,7d",
      })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch crypto data");
  }

  return res.json();
}
