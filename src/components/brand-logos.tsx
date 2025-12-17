import { SiBinance } from "react-icons/si";

const brands = [
  { name: "Coinbase", color: "#0052FF" },
  { name: "Kraken", color: "#5741D9" },
  { name: "Binance", color: "#F3BA2F" },
  { name: "Gemini", color: "#00DCFA" },
  { name: "Exmo", color: "#2B77DA" },
];

export function BrandLogos() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm mb-8 font-medium" data-testid="text-brand-title">
          One Place to Trade Cryptocurrency
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              data-testid={`logo-brand-${brand.name.toLowerCase()}`}
            >
              <BrandLogo name={brand.name} color={brand.color} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ name, color }: { name: string; color: string }) {
  const logos: Record<string, JSX.Element> = {
    Coinbase: (
      <div className="flex items-center gap-2 text-lg font-bold">
        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
          <span className="text-white text-sm font-bold">C</span>
        </div>
        <span style={{ color }}>coinbase</span>
      </div>
    ),
    Kraken: (
      <div className="flex items-center gap-2 text-lg font-bold" style={{ color }}>
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8l-7 3.5L5 8l7-3.5zM4 9.5l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z" />
        </svg>
        <span>kraken</span>
      </div>
    ),
    Binance: (
      <div className="flex items-center gap-2 text-lg font-bold" style={{ color }}>
        <SiBinance className="w-6 h-6" />
        <span>BINANCE</span>
      </div>
    ),
    Gemini: (
      <div className="flex items-center gap-2 text-lg font-bold" style={{ color }}>
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="8" cy="12" r="3" />
          <circle cx="16" cy="12" r="3" />
        </svg>
        <span>GEMINI</span>
      </div>
    ),
    Exmo: (
      <div className="flex items-center gap-2 text-lg font-bold" style={{ color }}>
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="4" width="16" height="4" rx="1" />
          <rect x="4" y="10" width="16" height="4" rx="1" />
          <rect x="4" y="16" width="16" height="4" rx="1" />
        </svg>
        <span>EXMO</span>
      </div>
    ),
  };

  return logos[name] || <span className="font-bold">{name}</span>;
}
