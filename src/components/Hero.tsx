import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Star, Gamepad2 } from "lucide-react";
import heroLightbox from "@/assets/hero-lightbox.jpg";
import ghamzaLogo from "@/assets/ghamza-logo.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-glow-warm/5 via-transparent to-wood-medium/10" />
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Brand Logo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img 
                src={ghamzaLogo} 
                alt="GHAMZA - A personal wink between two people"
                className="h-16 w-auto smooth-transition hover:scale-105"
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-premium">Illuminate</span>
                <br />
                <span className="text-foreground">Your</span>
                <br />
                <span className="text-primary">Memories</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                <span className="text-primary font-medium">A personal wink between two people.</span><br/>
                Handcrafted wooden light boxes featuring customizable artworks and personalized star maps. 
                Perfect gifts for every special moment.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="elegant-shadow smooth-transition group">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary/10 smooth-transition">
                Custom Design
              </Button>
            </div>

            {/* Feature Icons */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="h-5 w-5 text-primary" />
                <span>Love & Romance</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="h-5 w-5 text-accent" />
                <span>Star Maps</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Gamepad2 className="h-5 w-5 text-glow-warm" />
                <span>Gaming Art</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroLightbox} 
                alt="Premium wooden light box with romantic star map design"
                className="w-full max-w-lg mx-auto rounded-3xl premium-shadow smooth-transition hover:scale-105"
              />
            </div>
            
            {/* Decorative glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-glow-warm/20 to-accent/20 rounded-full blur-3xl animate-glow" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}