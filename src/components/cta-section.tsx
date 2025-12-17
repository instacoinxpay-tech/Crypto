import { Button } from "../components/ui/button";
import { Sparkle } from "lucide-react";
import { SiBinance } from "react-icons/si";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 via-accent/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Sparkle className="w-6 h-6 text-primary fill-primary" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic leading-tight">
                Let's Start Your
                <br />
                Crypto Investment Now!
              </h2>
              <Sparkle className="w-6 h-6 text-primary fill-primary" />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" data-testid="button-lets-begin">
                Let's Begin
              </Button>
              <Button size="lg" variant="outline" data-testid="button-explore-more">
                Explore More
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent" />
              
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
              >
                <defs>
                  <linearGradient id="ctaGlobeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(199 89% 48%)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(199 89% 48%)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                <circle cx="100" cy="100" r="80" stroke="url(#ctaGlobeGradient)" strokeWidth="2" fill="none" />
                <ellipse cx="100" cy="100" rx="80" ry="30" stroke="url(#ctaGlobeGradient)" strokeWidth="1" fill="none" />
                <ellipse cx="100" cy="100" rx="30" ry="80" stroke="url(#ctaGlobeGradient)" strokeWidth="1" fill="none" />
                <circle cx="100" cy="100" r="60" stroke="url(#ctaGlobeGradient)" strokeWidth="1" fill="none" strokeDasharray="8 4" />
                <circle cx="100" cy="100" r="40" stroke="url(#ctaGlobeGradient)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                <SiBinance className="w-12 h-12 sm:w-14 sm:h-14 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
