import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of 2",
      image: "👩‍👧‍👦",
      rating: 5,
      content: "KidCare has been a lifesaver! The AI chatbot helped me through my baby's sleep regression at 3 AM when I was completely lost. The vaccination reminders ensure I never miss an appointment.",
      highlight: "The AI chatbot helped me through my baby's sleep regression at 3 AM"
    },
    {
      name: "Michael Chen",
      role: "Father of 3",
      image: "👨‍👧‍👦",
      rating: 5,
      content: "As a busy dad, having everything in one app is amazing. From meal planning to emergency protocols, I feel so much more prepared and confident in my parenting decisions.",
      highlight: "I feel so much more prepared and confident in my parenting decisions"
    },
    {
      name: "Emma Rodriguez",
      role: "New Mom",
      image: "👩‍🍼",
      rating: 5,
      content: "The milestone tracking feature is incredible. I love being able to capture and remember every precious moment. The educational content has also helped me understand child development better.",
      highlight: "I love being able to capture and remember every precious moment"
    },
    {
      name: "David Thompson",
      role: "Father of 1",
      image: "👨‍👶",
      rating: 5,
      content: "The emergency protocols saved us during a choking scare. Having immediate access to step-by-step instructions right on my phone gave me the confidence to act quickly and safely.",
      highlight: "The emergency protocols saved us during a choking scare"
    },
    {
      name: "Lisa Park",
      role: "Mother of twins",
      image: "👩‍👧‍👧",
      rating: 5,
      content: "Managing twins is challenging, but KidCare makes it so much easier. The app helps me track both children separately while keeping everything organized in one place.",
      highlight: "KidCare makes managing twins so much easier"
    },
    {
      name: "James Wilson",
      role: "Single Dad",
      image: "👨‍👧",
      rating: 5,
      content: "As a single parent, I don't have anyone to ask for advice. The AI assistant and educational content have become my parenting support system. It's like having an expert friend available 24/7.",
      highlight: "It's like having an expert friend available 24/7"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">What</span>
            <span className="hero-text"> Parents </span>
            <span className="text-foreground">Are Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what real parents are saying about 
            how KidCare has transformed their parenting journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-primary/10 transition-all duration-500 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Highlight */}
              <div className="bg-accent/50 rounded-xl p-4 mb-6 border-l-4 border-primary">
                <p className="text-sm font-medium text-primary">
                  💡 "{testimonial.highlight}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="text-4xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="bg-card rounded-3xl p-12 shadow-soft border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Reviews</div>
                <div className="text-sm text-muted-foreground mt-1">Across all platforms</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Would Recommend</div>
                <div className="text-sm text-muted-foreground mt-1">To other parents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;