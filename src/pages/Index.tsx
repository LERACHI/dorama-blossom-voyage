import { dramas } from "@/data/dramas";
import DramaCarousel from "@/components/DramaCarousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Index = () => {
  const featuredDramas = dramas.filter((d) => d.featured);
  const recentDramas = dramas.filter((d) => d.recent);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16 sm:pt-20">
        <Hero />
        
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <DramaCarousel title="Mais Populares" dramas={featuredDramas} />
          
          <DramaCarousel title="Lançamentos Recentes" dramas={recentDramas} />
          
          <section className="py-16 text-center">
            <blockquote className="font-playfair text-2xl sm:text-3xl text-foreground/80 italic max-w-3xl mx-auto">
              "Cada lágrima conta uma história. Cada sorriso, um novo começo."
            </blockquote>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
