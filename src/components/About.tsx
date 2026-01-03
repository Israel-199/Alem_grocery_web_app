import food1 from "@/assets/food-1.webp";
import food2 from "@/assets/food-2.webp";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-card hover-lift">
                  <img
                    src={food1}
                    alt="Ethiopian veggie platter with injera"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
                <div className="h-24 md:h-32 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-glow">
                  <div className="text-center text-primary-foreground">
                    <p className="text-3xl font-bold">4+</p>
                    <p className="text-sm">Years Serving</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden shadow-card hover-lift">
                  <img
                    src={food2}
                    alt="Ethiopian food with injera rolls"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-primary font-medium tracking-wider uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              About Alem Restaurant and Grocery
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Opened in May 2021, Alem Restaurant and Grocery offers authentic Ethiopian food and a wide selection of Ethiopian and local groceries in Everett, Washington.
              </p>
              <p className="leading-relaxed">
                We provide dine-in and takeout options alongside quality organic products imported directly from Ethiopia. Family-owned, friendly service, fresh food, and fair prices are our priority.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Authentic</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient">Fresh</p>
                <p className="text-sm text-muted-foreground mt-1">Daily Made</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient">Local</p>
                <p className="text-sm text-muted-foreground mt-1">Family-Owned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
