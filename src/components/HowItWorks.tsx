import { UserPlus, Baby, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Create Your Family Profile",
      description: "Sign up and add your children's basic information. Set up profiles for each child with their age, preferences, and any special considerations.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      number: "02", 
      icon: Baby,
      title: "Start Tracking & Learning",
      description: "Begin logging milestones, meals, and daily activities. Access personalized content, vaccination schedules, and age-appropriate activities.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Get Insights & Guidance",
      description: "View growth patterns, receive AI-powered advice, and get reminders for important appointments and milestones you shouldn't miss.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      number: "04",
      icon: Heart,
      title: "Enjoy Peace of Mind",
      description: "Feel confident in your parenting journey with 24/7 AI support, emergency guides, and a complete toolkit for your child's wellbeing.",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">How</span>
            <span className="hero-text"> KidCare </span>
            <span className="text-foreground">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Getting started with KidCare is simple. Follow these four easy steps to begin 
            your journey toward more confident, organized parenting.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-8 top-20 w-0.5 h-16 bg-gradient-primary opacity-30"></div>
                  )}
                  
                  <div className="relative bg-card rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-primary/10 transition-all duration-500 group">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-primary group-hover:scale-110 transition-smooth">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-subtle rounded-3xl p-12 border border-border/50">
            <h3 className="text-3xl font-bold mb-4">
              Ready to <span className="hero-text">Transform</span> Your Parenting Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of parents who have already discovered the peace of mind 
              that comes with having all their parenting tools in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
              <Button variant="caring" size="lg" className="text-lg px-8">
                Schedule a Demo
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;