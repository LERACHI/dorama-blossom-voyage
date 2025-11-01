import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance">
            Emoções que atravessam o mundo
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto text-balance">
            Descubra os doramas que conquistam corações em toda a Ásia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="gradient-romantic hover:opacity-90 transition-opacity shadow-soft text-base sm:text-lg px-8 py-6 rounded-full font-medium"
            >
              <Link to="/catalog">Explorar Catálogo</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating petals decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-8 h-8 text-primary/20 animate-float">
          ✿
        </div>
        <div className="absolute top-32 right-20 w-6 h-6 text-secondary/20 animate-float" style={{ animationDelay: "1s" }}>
          ✿
        </div>
        <div className="absolute bottom-40 left-1/4 w-10 h-10 text-primary/20 animate-float" style={{ animationDelay: "2s" }}>
          ✿
        </div>
      </div>
    </section>
  );
};

export default Hero;
