import { 
  Heart, 
  Smartphone, 
  Syringe, 
  UtensilsCrossed, 
  AlertTriangle, 
  BookOpen, 
  Bot, 
  ShoppingBag, 
  Calendar,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Child Development Tracker",
      description: "Log milestones, growth metrics, sleep tracking and behavior patterns over time.",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: Smartphone,
      title: "iOS & Android Compatible",
      description: "Works seamlessly on both iOS and Android devices with native performance.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: Syringe,
      title: "Vaccination Scheduler",
      description: "Personalized vaccine timeline with reminders based on your location and guidelines.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: UtensilsCrossed,
      title: "Smart Meal Planner",
      description: "Age-specific meal plans with allergy support and comprehensive nutrition tracking.",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Protocols",
      description: "Quick-access guides for health emergencies like fever, choking, and allergic reactions.",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "Montessori-inspired activities and parenting insights tailored by your child's age.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: Bot,
      title: "AI Parenting Chatbot",
      description: "Ask questions anytime — from sleep regressions to diaper rash concerns and more.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: ShoppingBag,
      title: "Smart Store Integration",
      description: "Buy essentials and toys based on your child's age, development stage and specific needs.",
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/20"
    },
    {
      icon: Calendar,
      title: "Doctor Appointments",
      description: "Book pediatric or developmental specialist consultations directly in-app with ease.",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/20"
    }
  ];

  const stats = [
    { 
      number: "50K+", 
      label: "Active Parents", 
      icon: Heart,
      description: "Trust KidCare daily"
    },
    { 
      number: "2.5M+", 
      label: "Milestones Tracked", 
      icon: TrendingUp,
      description: "Precious moments recorded"
    },
    { 
      number: "99.9%", 
      label: "Uptime", 
      icon: Shield,
      description: "Always available when you need us"
    },
    { 
      number: "<2s", 
      label: "Response Time", 
      icon: Clock,
      description: "Lightning fast AI assistance"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Everything You Need</span>
            <span className="block text-foreground mt-2">for Better Parenting</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From tracking your child's first steps to getting instant advice at 3 AM, 
            KidCare brings all essential parenting tools into one beautiful, easy-to-use platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="feature-card group"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                  <IconComponent className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-soft border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by <span className="hero-text">Thousands</span> of Families
            </h3>
            <p className="text-muted-foreground text-lg">
              Join the growing community of parents who've made parenting easier with KidCare
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8">
            Start Your Free Trial
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;