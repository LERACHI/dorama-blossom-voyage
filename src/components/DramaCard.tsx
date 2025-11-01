import { Link } from "react-router-dom";
import { Drama } from "@/data/dramas";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface DramaCardProps {
  drama: Drama;
}

const DramaCard = ({ drama }: DramaCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      <Link to={`/drama/${drama.id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={drama.image}
            alt={drama.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/drama/${drama.id}`}>
          <h3 className="font-playfair font-bold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {drama.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{drama.country}</p>
        <div className="flex flex-wrap gap-1">
          {drama.genre.slice(0, 2).map((g) => (
            <span
              key={g}
              className="text-xs px-2 py-1 bg-accent/50 text-accent-foreground rounded-full"
            >
              {g}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
          <Link to={`/drama/${drama.id}`}>Ver mais</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DramaCard;
