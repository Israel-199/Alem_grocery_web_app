import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "The food is amazing and always fresh. Best Ethiopian food I've had outside of Ethiopia!",
    author: "Sarah M.",
  },
  {
    text: "Very kind owners and generous portions. You can taste the love in every bite.",
    author: "Michael T.",
  },
  {
    text: "Best Ethiopian food close to home. The veggie combo is absolutely delicious!",
    author: "Lisa K.",
  },
];

export function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          
          {/* Google Rating */}
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-card">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? "text-primary fill-primary" : "text-primary/50 fill-primary/50"}`}
                />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">4.6</span>
            <span className="text-muted-foreground">/ 5 Google Rating</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 relative shadow-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <p className="text-primary font-semibold">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
