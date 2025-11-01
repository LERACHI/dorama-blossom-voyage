import { useParams, Link } from "react-router-dom";
import { dramas } from "@/data/dramas";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Play, ArrowLeft } from "lucide-react";
import DramaCard from "@/components/DramaCard";

const DramaDetails = () => {
  const { id } = useParams();
  const drama = dramas.find((d) => d.id === id);

  if (!drama) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Dorama não encontrado</h1>
          <Button asChild>
            <Link to="/catalog">Voltar ao catálogo</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedDramas = dramas
    .filter((d) => d.id !== drama.id && d.country === drama.country)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <div className="relative h-[50vh] sm:h-[60vh]">
          <img
            src={drama.image}
            alt={drama.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 -mt-32 relative z-10">
          <div className="max-w-4xl">
            <Button
              asChild
              variant="ghost"
              className="mb-4 hover:bg-accent/50"
            >
              <Link to="/catalog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao catálogo
              </Link>
            </Button>

            <Card className="shadow-elegant border-border backdrop-blur-sm bg-card/95">
              <CardContent className="p-6 sm:p-8">
                <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl mb-2 text-foreground">
                  {drama.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <span>{drama.country}</span>
                  <span>•</span>
                  <span>{drama.year}</span>
                  <span>•</span>
                  <span>{drama.episodes} episódios</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {drama.genre.map((g) => (
                    <span
                      key={g}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {g}
                    </span>
                  ))}
                </div>

                <h2 className="font-playfair font-bold text-xl sm:text-2xl mb-3 text-foreground">
                  Sinopse
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  {drama.synopsis}
                </p>

                <h2 className="font-playfair font-bold text-xl sm:text-2xl mb-4 text-foreground">
                  Elenco Principal
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {drama.cast.map((actor) => (
                    <div
                      key={actor.name}
                      className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-romantic flex items-center justify-center text-white font-bold text-lg">
                        {actor.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{actor.name}</p>
                        <p className="text-sm text-muted-foreground">{actor.role}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {drama.platforms.map((platform) => (
                    <Button
                      key={platform.name}
                      asChild
                      className="flex-1 gradient-romantic hover:opacity-90 shadow-soft"
                    >
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Assistir no {platform.name}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  ))}
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1"
                  >
                    <a
                      href={drama.trailerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Ver Trailer
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Dramas */}
          {relatedDramas.length > 0 && (
            <section className="mt-16 mb-8">
              <h2 className="font-playfair font-bold text-2xl sm:text-3xl mb-6 text-foreground">
                Você também pode gostar de...
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {relatedDramas.map((relatedDrama) => (
                  <DramaCard key={relatedDrama.id} drama={relatedDrama} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DramaDetails;
