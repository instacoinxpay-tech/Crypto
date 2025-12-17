import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Sparkle, Loader2 } from "lucide-react";
import { SiBitcoin, SiEthereum, SiBinance } from "react-icons/si";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";
import { useToast } from "../hooks/use-toast";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      const message = error?.message?.includes("409") 
        ? "This email is already subscribed." 
        : "Failed to subscribe. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeMutation.mutate(email);
    }
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-background via-accent/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <span>Sign Up Now!</span>
                <Sparkle className="w-4 h-4 fill-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Buy, Sell & Swap{" "}
                <span className="text-primary">Cryptocurrency</span>
                <br />
                in Minutes
              </h1>
            </div>

            <p className="text-muted-foreground text-lg max-w-lg">
              Trade <span className="text-primary font-medium">Bitcoin</span>,{" "}
              <span className="text-primary font-medium">Ethereum</span>,{" "}
              <span className="text-primary font-medium">Binance</span>, and the top altcoins on the legendary
              crypto asset exchange.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-background border-border"
                data-testid="input-hero-email"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="h-12 px-8" 
                data-testid="button-get-started"
                disabled={subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Get Started"
                )}
              </Button>
            </form>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
              
              <div className="absolute top-4 right-4 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce" style={{ animationDuration: "3s" }}>
                <SiBitcoin className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
              
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
                <SiEthereum className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
              
              <div className="absolute bottom-4 right-12 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
                <SiBinance className="w-10 h-10 sm:w-14 sm:h-14 text-foreground" />
              </div>

              <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-primary/60 to-primary rounded-full opacity-60 blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
