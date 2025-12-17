import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { UserPlus, Building2, TrendingUp, Sparkle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Create an Account",
    description: "Set up a secure account to begin using our platform and keep your information protected.",
    color: "bg-primary/10 text-primary",
    hasButton: true,
  },
  {
    number: 2,
    icon: Building2,
    title: "Link Your Bank Account",
    description: "Securely link your bank account to enable fiat deposits and withdrawals for your crypto trades.",
    color: "bg-purple-500/10 text-purple-500",
    hasButton: false,
  },
  {
    number: 3,
    icon: TrendingUp,
    title: "Start Buying & Selling",
    description: "Start building your crypto portfolio with fast, intuitive, and secure transactions.",
    color: "bg-green-500/10 text-green-500",
    hasButton: false,
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crypters supports a variety of the most popular digital currencies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              We Will <span className="text-primary">Help You to Start</span>
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Crypto Investment</span>
              <Sparkle className="w-5 h-5 text-primary fill-primary" />
            </div>
          </div>
          <Button size="lg" data-testid="button-get-started-how">
            Get Started
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 relative border-border/50"
              data-testid={`card-step-${step.number}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${step.color}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-0.5 bg-border" />
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-bold mb-3">{step.title}</h4>
              <p className="text-muted-foreground text-sm mb-6">{step.description}</p>

              {step.hasButton && (
                <Button variant="outline" size="sm" data-testid="button-create-account">
                  Create New Account
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
