import { useState } from "react";
import { Button } from "../components/ui/button";
import { ArrowLeft, ArrowRight, Sparkle } from "lucide-react";
import type { Testimonial } from "../../shared/schema";
import img from "../../attached_assets/download.png";

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "It is inevitable — crypto will be the future currency of Earth.",
    author: "Elon Musk",
    role: "Businessman and former Senior Advisor to the President of the United States",
    image: img,
  },
  {
    id: 2,
    quote: "Bitcoin is a technological tour de force.",
    author: "Bill Gates",
    role: "Co-founder of Microsoft",
    image: img,
  },
  {
    id: 3,
    quote: "Cryptocurrency is such a powerful concept that it can almost overturn governments.",
    author: "Charlie Lee",
    role: "Creator of Litecoin",
    image: img,
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 border-4 border-primary/30 rounded-lg transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-accent rounded-lg overflow-hidden">
                <img
  src={testimonial.image}
  alt={testimonial.author}
  className="w-full h-full object-cover rounded-lg"
/>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed" data-testid="text-testimonial-quote">
              "{testimonial.quote}"
            </blockquote>

            <div className="space-y-2">
              <div className="text-primary font-semibold text-lg" data-testid="text-testimonial-author">{testimonial.author}</div>
              <div className="text-muted-foreground" data-testid="text-testimonial-role">{testimonial.role}</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={prev}
                  data-testid="button-testimonial-prev"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={next}
                  data-testid="button-testimonial-next"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <Sparkle className="w-8 h-8 text-primary fill-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
