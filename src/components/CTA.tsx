import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-card/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Ready to</span>
              <br />
              <span className="text-premium">Illuminate Your Story?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Whether it's a special anniversary, a gaming passion, or a moment worth celebrating, 
              we'll help you create a light box that captures what matters most to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" className="text-lg px-8 py-6 elegant-shadow smooth-transition group">
                Start Your Custom Design
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-primary/10 smooth-transition group">
                <MessageCircle className="mr-2 h-6 w-6" />
                Get In Touch
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <div className="text-muted-foreground">Designs Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-glow-warm mb-2">24H</div>
                <div className="text-muted-foreground">Fast Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-premium-gold mb-2">5★</div>
                <div className="text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}