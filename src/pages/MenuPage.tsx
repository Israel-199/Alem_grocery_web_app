import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import food1 from "@/assets/food-1.webp";
import food2 from "@/assets/food-2.webp";
import food3 from "@/assets/food-3.webp";
import food4 from "@/assets/food-4.webp";
import food5 from "@/assets/food-5.webp";
import ethiopianCoffee from "@/assets/ethiopian-coffee.jpg";
import softDrinks from "@/assets/soft-drinks.jpg";
import spicedTea from "@/assets/spiced-tea.jpg";
import freshJuice from "@/assets/fresh-juice.jpg";
import tejHoneyWine from "@/assets/tej-honey-wine.jpg";
import ethiopianBeer from "@/assets/ethiopian-beer.jpg";

const categories = [
  { id: "meat", name: "Meat Dishes" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "sides", name: "Sides & Appetizers" },
  { id: "beverages", name: "Beverages" },
];

const menuItems = {
  meat: [
    {
      name: "Doro Wat",
      description: "Ethiopia's national dish - slow-cooked chicken drumsticks in rich berbere spice sauce with hard-boiled eggs, served on fresh injera",
      price: 640.99,
      image: food1,
      popular: true,
    },
    {
      name: "Beef Tibs",
      description: "Tender cubes of beef sautéed with onions, jalapeños, tomatoes, and aromatic Ethiopian spices",
      price: 300,
      image: food4,
      popular: true,
    },
    {
      name: "Kitfo",
      description: "Ethiopian steak tartare - premium minced beef seasoned with mitmita spice and clarified butter, served with ayib cheese",
      price: 250,
      image: food4,
    },
    {
      name: "Lamb Tibs",
      description: "Succulent lamb pieces pan-fried with rosemary, garlic, onions, and green peppers",
      price: 350,
      image: food4,
    },
    {
      name: "Zilzil Tibs",
      description: "Strips of lean beef sautéed with onions, peppers, and mild spices - a milder option",
      price: 250,
      image: food4,
    },
    {
      name: "Awaze Tibs",
      description: "Beef or lamb cubes marinated in awaze sauce, sautéed with vegetables and Ethiopian herbs",
      price: 250,
      image: food4,
    },
    {
      name: "Meat Combo Platter",
      description: "A generous sampling of our signature meat dishes including Doro Wat, Beef Tibs, and Lamb Tibs on a bed of injera",
      price: 500,
      image: food2,
      popular: true,
    },
  ],
  vegetarian: [
    {
      name: "Veggie Combo",
      description: "Chef's selection of five vegetarian dishes including lentils, collard greens, cabbage, and beets on injera",
      price: 190,
      image: food5,
      popular: true,
    },
    {
      name: "Misir Wat",
      description: "Red lentils slow-cooked in berbere spice sauce until perfectly tender and flavorful",
      price: 120,
      image: food3,
    },
    {
      name: "Gomen",
      description: "Ethiopian-style collard greens sautéed with garlic, ginger, and aromatic spices",
      price: 100,
      image: food1,
    },
    {
      name: "Shiro",
      description: "Creamy chickpea flour stew seasoned with berbere and slow-cooked with onions and garlic",
      price: 90,
      image: food3,
      popular: true,
    },
    {
      name: "Tikil Gomen",
      description: "Cabbage, carrots, and potatoes gently cooked with turmeric and mild spices",
      price: 120,
      image: food5,
    },
    {
      name: "Yatakilt Alicha",
      description: "Mixed vegetables including potatoes, carrots, and green beans in a mild turmeric sauce",
      price: 110,
      image: food3,
    },
    {
      name: "Azifa",
      description: "Cold green lentil salad with mustard, jalapeños, onions, and fresh herbs",
      price: 130,
      image: food1,
    },
    {
      name: "Kik Alicha",
      description: "Yellow split peas cooked in a mild, turmeric-based sauce with onions and garlic",
      price: 110,
      image: food3,
    },
  ],
  sides: [
    {
      name: "Injera (3 pieces)",
      description: "Traditional Ethiopian sourdough flatbread made from teff flour - naturally gluten-free",
      price: 150,
      image: food3,
    },
    {
      name: "Lentil Sambusa (3 pieces)",
      description: "Crispy triangular pastries filled with spiced lentils and herbs",
      price: 60,
      image: food2,
      popular: true,
    },
    {
      name: "Meat Sambusa (3 pieces)",
      description: "Golden fried pastries stuffed with seasoned ground beef and onions",
      price: 110,
      image: food2,
    },
    {
      name: "Ayib",
      description: "Fresh Ethiopian cottage cheese, mild and creamy, perfect for cooling spicy dishes",
      price: 90,
      image: food5,
    },
    {
      name: "Ethiopian Salad",
      description: "Fresh tomatoes, onions, jalapeños, and lettuce with house lemon dressing",
      price: 80,
      image: food1,
    },
    {
      name: "Kategna",
      description: "Crispy injera pieces topped with berbere-infused butter and spices",
      price: 70,
      image: food3,
    },
  ],
  beverages: [
    {
      name: "Ethiopian Coffee (Buna)",
      description: "Traditional Ethiopian coffee ceremony - freshly roasted and brewed, served with popcorn",
      price: 30,
      image: ethiopianCoffee,
      popular: true,
    },
    {
      name: "Spiced Tea",
      description: "Black tea infused with cinnamon, cloves, and cardamom - Ethiopian style",
      price: 20,
      image: spicedTea,
    },
    {
      name: "Fresh Juice",
      description: "Freshly squeezed mango, papaya, or mixed tropical fruit juice",
      price: 90,
      image: freshJuice,
    },
    {
      name: "Tej (Honey Wine)",
      description: "Traditional Ethiopian honey wine with hints of gesho leaves - sweet and unique",
      price: 75,
      image: tejHoneyWine,
    },
    {
      name: "Soft Drinks",
      description: "Coca-Cola, Sprite, Fanta, or bottled water",
      price: 80,
      image: softDrinks,
    },
    {
      name: "Ethiopian Beer",
      description: "Imported St. George or Harar beer from Ethiopia",
      price:70,
      image: ethiopianBeer,
    },
  ],
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("meat");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">
              Our Menu
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Authentic Ethiopian Cuisine
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Every dish is prepared fresh daily using traditional recipes and imported Ethiopian spices. Experience the rich flavors of Ethiopia.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+14253223777">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Order Now
              </a>
            </Button>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-accent text-primary-foreground shadow-glow"
                      : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Category Title */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                {categories.find((c) => c.id === activeCategory)?.name}
              </h2>
              <div className="w-20 h-1 bg-gradient-accent rounded-full mt-4" />
            </div>

            {/* Items Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <div
                  key={item.name}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift flex flex-col sm:flex-row"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="relative w-full sm:w-40 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.popular && (
                      <div className="absolute top-3 left-3 bg-gradient-accent text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl font-serif font-bold text-foreground">
                          {item.name}
                        </h3>
                        <span className="text-xl font-bold text-primary whitespace-nowrap">
                          {item.price.toFixed(2)}ETB
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Order CTA */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground mb-8">
              Call us to place your order for pickup or dine-in
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+14253223777">Call 425-322-3777</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#contact">Visit Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
