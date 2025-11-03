import { useState } from 'react';
import { Star, Trash2 } from 'lucide-react';
import { useReviews } from '@/hooks/useReviews';
import { useAuth } from '@/hooks/useAuth';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ReviewSectionProps {
  dramaId: string;
}

const ReviewSection = ({ dramaId }: ReviewSectionProps) => {
  const { user } = useAuth();
  const { reviews, userReview, averageRating, submitReview, deleteReview } = useReviews(dramaId);
  const [rating, setRating] = useState(userReview?.rating || 0);
  const [comment, setComment] = useState(userReview?.comment || '');
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    await submitReview(rating, comment);
  };

  const renderStars = (value: number, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= (interactive ? hoveredStar || value : value)
                ? 'fill-primary text-primary'
                : 'text-muted-foreground'
            } ${interactive ? 'cursor-pointer transition-colors' : ''}`}
            onClick={() => interactive && setRating(star)}
            onMouseEnter={() => interactive && setHoveredStar(star)}
            onMouseLeave={() => interactive && setHoveredStar(0)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Avaliações</span>
            {reviews.length > 0 && (
              <div className="flex items-center gap-2">
                {renderStars(Math.round(averageRating))}
                <span className="text-sm text-muted-foreground">
                  {averageRating.toFixed(1)} ({reviews.length})
                </span>
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {user ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {userReview ? 'Sua avaliação' : 'Avaliar este dorama'}
                </label>
                {renderStars(rating, true)}
              </div>
              <Textarea
                placeholder="Escreva seu comentário (opcional)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
                maxLength={1000}
              />
              <div className="flex gap-2">
                <Button type="submit" disabled={rating === 0}>
                  {userReview ? 'Atualizar Avaliação' : 'Enviar Avaliação'}
                </Button>
                {userReview && (
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={deleteReview}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remover
                  </Button>
                )}
              </div>
            </form>
          ) : (
            <p className="text-muted-foreground text-center py-4">
              Faça login para avaliar este dorama
            </p>
          )}

          {reviews.length > 0 && (
            <>
              <Separator className="my-6" />
              <div className="space-y-4">
                <h3 className="font-semibold">Comentários da comunidade</h3>
                {reviews
                  .filter((r) => {
                    // Filter out user's own review if they have one
                    if (!userReview) return true;
                    return r.id !== userReview.id;
                  })
                  .map((review) => (
                    <div key={review.id} className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">
                            {review.author_name || 'Usuário'}
                          </p>
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNow(new Date(review.created_at), {
                            addSuffix: true,
                            locale: ptBR,
                          })}
                        </p>
                      </div>
                      {review.comment && (
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      )}
                      <Separator />
                    </div>
                  ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewSection;
