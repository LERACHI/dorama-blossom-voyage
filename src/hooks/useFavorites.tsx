import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export const useFavorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchFavorites();
    } else {
      setFavorites([]);
      setLoading(false);
    }
  }, [user]);

  const fetchFavorites = async () => {
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('drama_id')
        .eq('user_id', user?.id);

      if (error) throw error;

      setFavorites(data?.map(f => f.drama_id) || []);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (dramaId: string) => {
    if (!user) {
      toast.error('Faça login para adicionar favoritos');
      return;
    }

    const isFavorite = favorites.includes(dramaId);

    try {
      if (isFavorite) {
        const { error } = await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('drama_id', dramaId);

        if (error) throw error;

        setFavorites(prev => prev.filter(id => id !== dramaId));
        toast.success('Removido dos favoritos');
      } else {
        const { error } = await supabase
          .from('favorites')
          .insert({ user_id: user.id, drama_id: dramaId });

        if (error) throw error;

        setFavorites(prev => [...prev, dramaId]);
        toast.success('Adicionado aos favoritos 💖');
      }
    } catch (error: any) {
      toast.error('Erro ao atualizar favoritos');
      console.error('Error toggling favorite:', error);
    }
  };

  const isFavorite = (dramaId: string) => favorites.includes(dramaId);

  return { favorites, loading, toggleFavorite, isFavorite };
};
