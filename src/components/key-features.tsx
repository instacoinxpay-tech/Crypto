import { Sparkle } from "lucide-react";

const stats = [
  { value: "141,000+", label: "Registered Users" },
  { value: "$280M+", label: "Airdrops Given" },
  { value: "$38M+", label: "Monthly Withdrawals" },
];

export function KeyFeatures() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 via-accent/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Some <span className="text-primary">Key Features</span>
                <br />
                Of Demo <Sparkle className="inline-block w-6 h-6 text-primary fill-primary" />
              </h2>
              <p className="text-muted-foreground text-lg">
                Here are few reasons why you should choose Demo.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2" data-testid={`stat-${index}`}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold" data-testid={`text-stat-value-${index}`}>{stat.value}</div>
                  <div className="text-muted-foreground text-sm" data-testid={`text-stat-label-${index}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 via-accent/30 to-transparent" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/10 via-background/50 to-transparent" />
              
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
              >
                <defs>
                  <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(199 89% 48%)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(199 89% 48%)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                <circle cx="100" cy="100" r="90" stroke="url(#globeGradient)" strokeWidth="2" fill="none" />
                <ellipse cx="100" cy="100" rx="90" ry="35" stroke="url(#globeGradient)" strokeWidth="1" fill="none" />
                <ellipse cx="100" cy="100" rx="35" ry="90" stroke="url(#globeGradient)" strokeWidth="1" fill="none" />
                <ellipse cx="100" cy="100" rx="60" ry="90" stroke="url(#globeGradient)" strokeWidth="1" fill="none" transform="rotate(30 100 100)" />
                <ellipse cx="100" cy="100" rx="60" ry="90" stroke="url(#globeGradient)" strokeWidth="1" fill="none" transform="rotate(-30 100 100)" />
                
                <circle cx="100" cy="100" r="4" fill="hsl(199 89% 48%)" />
                <circle cx="140" cy="80" r="3" fill="hsl(199 89% 48%)" opacity="0.7" />
                <circle cx="60" cy="120" r="3" fill="hsl(199 89% 48%)" opacity="0.7" />
                <circle cx="130" cy="130" r="2" fill="hsl(199 89% 48%)" opacity="0.5" />
                <circle cx="70" cy="70" r="2" fill="hsl(199 89% 48%)" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
