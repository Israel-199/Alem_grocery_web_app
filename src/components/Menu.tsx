import food1 from "@/assets/food-1.webp";
import food2 from "@/assets/food-2.webp";
import food3 from "@/assets/food-3.webp";
import food4 from "@/assets/food-4.webp";
import food5 from "@/assets/food-5.webp";

const menuItems = [
  {
    name: "Injera",
    description: "Traditional Ethiopian sourdough flatbread, perfect for scooping up stews",
    image: food3,
  },
  {
    name: "Veggie Combo",
    description: "Colorful assortment of vegetarian dishes served on injera",
    image: food5,
  },
  {
    name: "Beef Tibs",
    description: "Sautéed beef with onions, peppers, and aromatic Ethiopian spices",
    image: food4,
  },
  {
    name: "Doro Wat",
    description: "Slow-cooked chicken in rich berbere spice sauce with eggs",
    image: food1,
  },
  {
    name: "Ethiopian Platters",
    description: "Generous combination platters with meat and vegetable options",
    image: food2,
  },
  {
    name: "Lentil Sambusa",
    description: "Crispy pastry filled with spiced lentils and herbs",
    image: food3,
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            Culinary Delights
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Menu Highlights
          </h2>
          <p className="text-muted-foreground">
            Freshly prepared daily using traditional spices and authentic Ethiopian flavors.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Explore our complete menu with all dishes and prices
          </p>
          <a
            href="/menu"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-all"
          >
            View Full Menu
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
