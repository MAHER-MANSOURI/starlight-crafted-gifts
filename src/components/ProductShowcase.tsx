import { Card, CardContent } from "@/components/ui/card";
import valoLightbox from "@/assets/valo-lightbox.jpg";
import porscheLightbox from "@/assets/porsche-lightbox.jpg";
import animeLightbox from "@/assets/anime-lightbox.jpg";
import coupleLightbox from "@/assets/couple-lightbox.jpg";
import starmapLightbox from "@/assets/starmap-lightbox.jpg";
import romanticLightbox from "@/assets/romantic-lightbox.jpg";

const products = [
  {
    id: 1,
    title: "Gaming Collection",
    description: "Epic artworks for gamers and esports enthusiasts",
    image: valoLightbox,
    category: "Gaming"
  },
  {
    id: 2,
    title: "Automotive Art",
    description: "Stunning car designs with dramatic lighting effects",
    image: porscheLightbox,
    category: "Cars"
  },
  {
    id: 3,
    title: "Anime & Manga",
    description: "Vibrant anime characters and scenes",
    image: animeLightbox,
    category: "Anime"
  },
  {
    id: 4,
    title: "Romantic Moments",
    description: "Perfect for couples and anniversaries",
    image: coupleLightbox,
    category: "Romance"
  },
  {
    id: 5,
    title: "Custom Star Maps",
    description: "Personalized star maps for your special date",
    image: starmapLightbox,
    category: "Star Maps"
  },
  {
    id: 6,
    title: "Wedding Memories",
    description: "Celebrate your special day with custom art",
    image: romanticLightbox,
    category: "Wedding"
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-premium">Our</span> <span className="text-foreground">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From gaming masterpieces to romantic star maps, each light box is meticulously crafted 
            to illuminate your most cherished memories and passions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm smooth-transition hover:scale-105 hover:bg-card/80">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-80 object-cover smooth-transition group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm font-medium bg-primary/90 text-primary-foreground rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}