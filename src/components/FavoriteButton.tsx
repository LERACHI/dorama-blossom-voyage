import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  dramaId: string;
  className?: string;
}

const FavoriteButton = ({ dramaId, className }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(dramaId);

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90",
        className
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(dramaId);
      }}
    >
      <Heart
        className={cn(
          "w-5 h-5 transition-colors",
          favorite ? "fill-primary text-primary" : "text-muted-foreground"
        )}
      />
    </Button>
  );
};

export default FavoriteButton;
