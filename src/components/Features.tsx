import { Card, CardContent } from "@/components/ui/card";
import { Palette, MapPin, Clock, Gift, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Custom Artwork",
    description: "Choose from thousands of designs or upload your own artwork for a truly personal touch."
  },
  {
    icon: MapPin,
    title: "Personalized Star Maps",
    description: "Capture the exact night sky from any date, time, and location that's special to you."
  },
  {
    icon: Clock,
    title: "Meaningful Moments",
    description: "Commemorate anniversaries, birthdays, first dates, or any moment worth remembering."
  },
  {
    icon: Gift,
    title: "Perfect Gifts",
    description: "Thoughtful presents for couples, gamers, car enthusiasts, and anyone you care about."
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Handcrafted wooden frames with high-quality LED lighting for long-lasting beauty."
  },
  {
    icon: Users,
    title: "Versatile Decor",
    description: "Perfect for homes, offices, gaming setups, coffee shops, and any space needing ambiance."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Why Choose</span> <span className="text-premium">Our Light Boxes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every light box is a masterpiece of craftsmanship, combining artistic beauty with personal meaning 
            to create something truly unique for you or your loved ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-background/50 backdrop-blur-sm elegant-shadow group smooth-transition hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full warm-gradient flex items-center justify-center group-hover:animate-glow smooth-transition">
                    <feature.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}