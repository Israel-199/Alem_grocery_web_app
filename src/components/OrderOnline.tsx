import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export function OrderOnline() {
  return (
    <section id="order" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-accent rounded-3xl mb-8 shadow-glow">
            <ShoppingBag className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Order your favorite Ethiopian meals for pickup or takeout. Fresh, delicious, and ready when you are.
          </p>

          <Button variant="hero" size="xl" className="min-w-[200px]" asChild>
            <a href="tel:+14253223777">
              Order Online
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Call us at <a href="tel:+14253223777" className="text-primary hover:underline">425-322-3777</a> to place your order
          </p>
        </div>
      </div>
    </section>
  );
}
