import { Package, Leaf, Coffee, ShoppingBag } from "lucide-react";

const groceryItems = [
  {
    icon: Package,
    name: "Ethiopian Spices",
    description: "Berbere, Shiro, Mitmita and traditional spice blends",
  },
  {
    icon: Coffee,
    name: "Injera Packs",
    description: "Fresh and packaged injera for home cooking",
  },
  {
    icon: Leaf,
    name: "Organic Products",
    description: "Quality organic products imported directly from Ethiopia",
  },
  {
    icon: ShoppingBag,
    name: "Grocery Essentials",
    description: "Lentils, grains, and everyday grocery items",
  },
];

export function Grocery() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary font-medium tracking-wider uppercase mb-4">
              Shop With Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Ethiopian & Local Groceries
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Stock your kitchen with authentic Ethiopian ingredients and everyday essentials. From traditional spices to organic products, we have everything you need.
            </p>

            {/* Grocery Items Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {groceryItems.map((item, index) => (
                <div
                  key={item.name}
                  className="bg-card p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Cards */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-secondary rounded-2xl p-6 text-center hover-lift">
                    <p className="text-4xl font-bold text-gradient mb-2">50+</p>
                    <p className="text-sm text-muted-foreground">Ethiopian Products</p>
                  </div>
                  <div className="bg-gradient-accent rounded-2xl p-6 text-center shadow-glow">
                    <p className="text-4xl font-bold text-primary-foreground mb-2">Fresh</p>
                    <p className="text-sm text-primary-foreground/80">Daily Stock</p>
                  </div>
                </div>
                <div className="pt-8">
                  <div className="bg-secondary rounded-2xl p-6 text-center h-full flex flex-col justify-center hover-lift">
                    <p className="text-4xl font-bold text-gradient mb-2">100%</p>
                    <p className="text-sm text-muted-foreground">Authentic Imports</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative blur */}
            <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
