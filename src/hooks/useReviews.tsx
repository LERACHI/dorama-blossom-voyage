import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export interface Review {
  id: string;
  drama_id: string;
  rating: number;
  comment: string | null;
  created_at: string;
  author_name: string | null;
}

interface UserReview {
  id: string;
  user_id: string;
  drama_id: string;
  rating: number;
  comment: string | null;
  created_at: string;
}

export const useReviews = (dramaId: string) => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReview, setUserReview] = useState<UserReview | null>(null);
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, [dramaId, user]);

  const fetchReviews = async () => {
    try {
      // Fetch public reviews (without user_id exposure)
      const { data: publicReviews, error: publicError } = await supabase
        .from('reviews_public')
        .select('*')
        .eq('drama_id', dramaId)
        .order('created_at', { ascending: false });

      if (publicError) throw publicError;

      setReviews(publicReviews || []);

      // Calculate average rating
      if (publicReviews && publicReviews.length > 0) {
        const avg = publicReviews.reduce((sum, r) => sum + r.rating, 0) / publicReviews.length;
        setAverageRating(Math.round(avg * 10) / 10);
      }

      // Fetch user's own review if authenticated (from main table)
      if (user) {
        const { data: myReview, error: userError } = await supabase
          .from('reviews')
          .select('*')
          .eq('drama_id', dramaId)
          .eq('user_id', user.id)
          .maybeSingle();

        if (userError) throw userError;
        setUserReview(myReview);
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
