import { useState } from "react";
import { dramas, countries, genres } from "@/data/dramas";
import DramaCard from "@/components/DramaCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filteredDramas = dramas.filter((drama) => {
    const matchesSearch = drama.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCountry = !selectedCountry || drama.country === selectedCountry;
    const matchesGenre = !selectedGenre || drama.genre.includes(selectedGenre);

    return matchesSearch && matchesCountry && matchesGenre;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-foreground">
            Catálogo de Doramas
          </h1>

          {/* Filters */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 shadow-card">
            <div className="space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por título..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 rounded-full"
                />
              </div>

              {/* Country Filter */}
              <div>
                <p className="text-sm font-medium mb-3 text-foreground">País:</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedCountry === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCountry(null)}
                    className="rounded-full"
                  >
                    Todos
                  </Button>
                  {countries.map((country) => (
                    <Button
                      key={country}
                      variant={selectedCountry === country ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCountry(country)}
                      className="rounded-full"
                    >
                      {country}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Genre Filter */}
              <div>
                <p className="text-sm font-medium mb-3 text-foreground">Gênero:</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedGenre === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGenre(null)}
                    className="rounded-full"
                  >
                    Todos
                  </Button>
                  {genres.map((genre) => (
                    <Button
                      key={genre}
                      variant={selectedGenre === genre ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedGenre(genre)}
                      className="rounded-full"
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredDramas.length} {filteredDramas.length === 1 ? "dorama encontrado" : "doramas encontrados"}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredDramas.map((drama) => (
              <DramaCard key={drama.id} drama={drama} />
            ))}
          </div>

          {filteredDramas.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Nenhum dorama encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
