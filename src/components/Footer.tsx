import { Heart, Instagram, Facebook, Mail } from "lucide-react";
import ghamzaLogo from "@/assets/ghamza-logo.png";

export default function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={ghamzaLogo} 
                alt="GHAMZA Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground">
              <span className="text-primary font-medium">A personal wink between two people.</span><br/>
              Handcrafted wooden light boxes that illuminate your most precious memories.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Products</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary smooth-transition">Custom Star Maps</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Gaming Collection</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Romantic Designs</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Automotive Art</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Anime & Manga</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary smooth-transition">How to Order</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Customization Guide</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Care Instructions</a></li>
              <li><a href="#" className="hover:text-primary smooth-transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary smooth-transition flex items-center justify-center group">
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary smooth-transition flex items-center justify-center group">
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary smooth-transition flex items-center justify-center group">
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              Follow us for inspiration and behind-the-scenes craftsmanship
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 GHAMZA Light Boxes. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with <Heart className="inline h-4 w-4 text-primary mx-1" /> for your special moments
          </p>
        </div>
      </div>
    </footer>
  );
}