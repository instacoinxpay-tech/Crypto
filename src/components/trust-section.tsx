import { Card } from "../components/ui/card";
import { Lock, Shield, ThumbsUp, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Secure Storage",
    description: "Your assets are secured with advanced protection.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "We securely store your crypto to help keep your assets safe.",
    highlight: true,
  },
  {
    icon: ThumbsUp,
    title: "Protected by Insurance",
    description: "Your funds come with an extra layer of protection through insured coverage.",
    highlight: false,
  },
];

export function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 ${
                  feature.highlight
                    ? "border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 sm:col-span-1 sm:row-span-1"
                    : "border-border/50"
                } ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                data-testid={`card-feature-${index}`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    feature.highlight ? "bg-primary/20 text-primary" : "bg-accent text-accent-foreground"
                  }`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className={`font-semibold text-lg mb-2 ${feature.highlight ? "text-primary" : ""}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              The Most Trusted{" "}
              <span className="text-primary">Cryptocurrency</span>
              <br />
              Platform
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore the top reasons customers trust Demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
