import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export interface Review {
  id: string;
  user_id: string;
  drama_id: string;
  rating: number;
  comment: string | null;
  created_at: string;
  profiles: {
    display_name: string | null;
  };
}

export const useReviews = (dramaId: string) => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReview, setUserReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, [dramaId, user]);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select(`
          *,
          profiles (
            display_name
          )
        `)
        .eq('drama_id', dramaId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setReviews(data || []);

      // Calculate average rating
      if (data && data.length > 0) {
        const avg = data.reduce((sum, r) => sum + r.rating, 0) / data.length;
        setAverageRating(Math.round(avg * 10) / 10);
      }

      // Find user's review
      if (user) {
        const myReview = data?.find(r => r.user_id === user.id);
        setUserReview(myReview || null);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const submitReview = async (rating: number, comment: string) => {
    if (!user) {
      toast.error('Faça login para avaliar');
      return;
    }

    try {
      const { error } = await supabase
        .from('reviews')
        .upsert({
          user_id: user.id,
          drama_id: dramaId,
          rating,
          comment: comment.trim() || null,
        });

      if (error) throw error;

      toast.success('Avaliação enviada com sucesso! ⭐');
      fetchReviews();
    } catch (error: any) {
      toast.error('Erro ao enviar avaliação');
      console.error('Error submitting review:', error);
    }
  };

  const deleteReview = async () => {
    if (!user || !userReview) return;

    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', userReview.id);

      if (error) throw error;

      toast.success('Avaliação removida');
      fetchReviews();
    } catch (error: any) {
      toast.error('Erro ao remover avaliação');
      console.error('Error deleting review:', error);
    }
  };

  return {
    reviews,
    userReview,
    loading,
    averageRating,
    submitReview,
    deleteReview,
  };
};
