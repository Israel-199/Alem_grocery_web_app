import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Grocery } from "@/components/Grocery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { OrderOnline } from "@/components/OrderOnline";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Grocery />
        <WhyChooseUs />
        <Reviews />
        <Contact />
        <OrderOnline />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
