import { Card, CardContent } from "@/components/ui/card";
import { Search, Palette, Wrench, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Design",
    description: "Browse our extensive collection or upload your own artwork. From gaming themes to romantic star maps, find the perfect design for your vision."
  },
  {
    icon: Palette,
    title: "Customize Details",
    description: "Personalize your light box with custom text, dates, locations for star maps, or any special details that make it uniquely yours."
  },
  {
    icon: Wrench,
    title: "Expert Crafting",
    description: "Our skilled artisans handcraft your light box using premium wood and high-quality LED lighting, ensuring every detail is perfect."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Your custom light box is carefully packaged and shipped to your door, ready to illuminate your space or surprise someone special."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-premium">How It</span> <span className="text-foreground">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creating your perfect light box is simple. Follow these four easy steps to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 bg-card/50 backdrop-blur-sm elegant-shadow group smooth-transition hover:scale-105 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="mb-6 flex justify-center mt-4">
                    <div className="w-16 h-16 rounded-full premium-gradient flex items-center justify-center group-hover:animate-glow smooth-transition">
                      <step.icon className="h-8 w-8 text-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary to-accent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}