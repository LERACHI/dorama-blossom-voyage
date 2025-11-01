import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 text-primary fill-primary mx-auto mb-6 animate-float" />
              <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground">
                Sobre o MundoDorama
              </h1>
            </div>

            <Card className="shadow-elegant border-border mb-12">
              <CardContent className="p-6 sm:p-10">
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                    MundoDorama nasceu do amor pelas histórias que atravessam fronteiras e conquistam corações.
                    Aqui reunimos dramas asiáticos de diferentes países — <strong>Coreia do Sul</strong>, <strong>Japão</strong>, <strong>China</strong> e <strong>Tailândia</strong> — para que você descubra, sinta e compartilhe emoções únicas.
                  </p>

                  <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                    Nosso objetivo é conectar fãs de doramas com as plataformas oficiais de streaming, oferecendo sinopses, curiosidades e um catálogo organizado com carinho.
                  </p>

                  <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                    Cada drama é uma janela para outra cultura, um convite para rir, chorar e se apaixonar junto com personagens inesquecíveis.
                  </p>

                  <div className="bg-gradient-romantic p-8 rounded-2xl text-center mt-8">
                    <p className="font-playfair text-2xl sm:text-3xl text-foreground italic flex items-center justify-center gap-3">
                      <Heart className="w-8 h-8 fill-current" />
                      MundoDorama — Emoções que atravessam o mundo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center shadow-card border-border hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-romantic rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌸</span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl mb-2 text-foreground">
                    Descobrir
                  </h3>
                  <p className="text-muted-foreground">
                    Explore histórias únicas da Ásia
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card border-border hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-romantic rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💖</span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl mb-2 text-foreground">
                    Sentir
                  </h3>
                  <p className="text-muted-foreground">
                    Conecte-se com emoções autênticas
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card border-border hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-romantic rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl mb-2 text-foreground">
                    Compartilhar
                  </h3>
                  <p className="text-muted-foreground">
                    Divida momentos inesquecíveis
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
