import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DramaCard from '@/components/DramaCard';
import { useAuth } from '@/hooks/useAuth';
import { useFavorites } from '@/hooks/useFavorites';
import { dramas } from '@/data/dramas';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { favorites, loading: favLoading } = useFavorites();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  if (authLoading || favLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  const favoriteDramas = dramas.filter(drama => favorites.includes(drama.id));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <h1 className="font-playfair text-4xl font-bold text-foreground">Meus Favoritos</h1>
          </div>

          {favoriteDramas.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="font-playfair text-2xl font-bold mb-2">Nenhum favorito ainda</h2>
              <p className="text-muted-foreground mb-6">
                Comece a adicionar doramas aos seus favoritos para vê-los aqui
              </p>
              <button
                onClick={() => navigate('/catalog')}
                className="text-primary hover:underline"
              >
                Explorar Catálogo →
              </button>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground mb-6">
                {favoriteDramas.length} {favoriteDramas.length === 1 ? 'dorama' : 'doramas'} favorito{favoriteDramas.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteDramas.map((drama) => (
                  <DramaCard key={drama.id} drama={drama} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
