import { Heart } from "lucide-react";

const Footer = () => {
  const platforms = [
    { name: "Netflix", url: "https://netflix.com" },
    { name: "Viki", url: "https://viki.com" },
    { name: "Prime Video", url: "https://primevideo.com" },
    { name: "WeTV", url: "https://wetv.vip" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-accent/20 border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-poppins font-semibold text-foreground">
                Mundo
              </span>
              <span className="text-xl font-playfair font-bold text-primary -mt-1">
                Dorama
              </span>
            </div>
          </div>

          {/* Platforms */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Assista nas plataformas oficiais:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-1 rounded-full bg-accent/50 hover:bg-accent"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <p className="text-center text-muted-foreground text-sm max-w-md">
            Todos os links direcionam a plataformas de streaming oficiais.
          </p>

          {/* Copyright */}
          <div className="text-center border-t border-border pt-6 w-full">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              MundoDorama — Emoções que atravessam o mundo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
