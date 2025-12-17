
import { HeroSection } from "../components/hero-section";
import { BrandLogos } from "../components/brand-logos";
import { TrendingMarket } from "../components/trending-market";
import { TrustSection } from "../components/trust-section";
import { KeyFeatures } from "../components/key-features";
import { TestimonialSection } from "../components/testimonial-section";
import { HowItWorks } from "../components/how-it-works";
import { EducationSection } from "../components/education-section";
import { CTASection } from "../components/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <BrandLogos />
        <TrendingMarket />
        <TrustSection />
        <KeyFeatures />
        <TestimonialSection />
        <HowItWorks />
        <EducationSection />
        <CTASection />
      </main>
    </div>
  );
}
