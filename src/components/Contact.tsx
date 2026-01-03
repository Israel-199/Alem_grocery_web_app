import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import food3 from "@/assets/food-3.webp";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "11108 Evergreen Way, Unit E, Everett, WA 98204",
    link: "https://maps.google.com/?q=11108+Evergreen+Way+Unit+E+Everett+WA+98204",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 425-322-3777",
    link: "tel:+14253223777",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Opens at 11:00 AM",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            Visit Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Contact & Location
          </h2>
          <p className="text-muted-foreground">
            We'd love to welcome you to our restaurant
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-card hover-lift">
            <img
              src={food3}
              alt="Ethiopian food platter"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+14253223777">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://maps.google.com/?q=11108+Evergreen+Way+Unit+E+Everett+WA+98204"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
