import { Button } from '@/components/ui/button';
import { Play, Star, Users, Heart } from 'lucide-react';
import heroFamily from '@/assets/hero-family.jpg';
import appMockup from '@/assets/app-mockup.jpg';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">50K+ Parents Trust Us</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground">Your Child's</span>
                <span className="block hero-text">Journey, Simplified</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                The all-in-one platform that makes parenting easier. Track milestones, 
                get AI guidance, and access everything you need for your child's wellbeing.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Child Development Tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-secondary-foreground" />
                </div>
                <span className="text-sm font-medium">AI Parenting Assistant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="text-base">
                Start Free Trial
              </Button>
              <Button variant="caring" size="lg" className="text-base">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by families worldwide</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-sm font-semibold">Featured in TechCrunch</div>
                <div className="text-sm font-semibold">App Store Editor's Choice</div>
                <div className="text-sm font-semibold">Parenting Magazine #1</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image & App Preview */}
          <div className="relative">
            <div className="relative">
              {/* Background Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft">
                <img 
                  src={heroFamily} 
                  alt="Happy family using KidCare app" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
              </div>
              
              {/* Floating App Mockup */}
              <div className="absolute -bottom-10 -left-10 lg:-left-20">
                <div className="relative gentle-bounce">
                  <img 
                    src={appMockup} 
                    alt="KidCare app interface" 
                    className="w-48 h-auto drop-shadow-2xl rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute top-8 -right-4 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-soft gentle-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2.5M+</div>
                  <div className="text-xs text-muted-foreground">Milestones Tracked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;