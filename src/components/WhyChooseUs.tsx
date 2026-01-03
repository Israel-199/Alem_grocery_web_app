import { Heart, Utensils, Users, DollarSign, Smile } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Family-Owned",
    description: "A true family business with personal care in every dish",
  },
  {
    icon: Utensils,
    title: "Fresh & Flavorful",
    description: "Made fresh daily with authentic Ethiopian spices",
  },
  {
    icon: Users,
    title: "Generous Portions",
    description: "Satisfying servings that keep you coming back",
  },
  {
    icon: Smile,
    title: "Friendly Service",
    description: "Warm hospitality and welcoming atmosphere",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Quality food at fair, competitive prices",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            Why Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Why Choose Alem?
          </h2>
          <p className="text-muted-foreground">
            Experience the difference of authentic Ethiopian hospitality
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-2xl flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
