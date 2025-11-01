import { Drama } from "@/data/dramas";
import DramaCard from "./DramaCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface DramaCarouselProps {
  title: string;
  dramas: Drama[];
}

const DramaCarousel = ({ title, dramas }: DramaCarouselProps) => {
  return (
    <section className="py-8">
      <h2 className="font-playfair font-bold text-2xl sm:text-3xl mb-6 text-foreground">
        {title}
      </h2>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {dramas.map((drama) => (
            <CarouselItem key={drama.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4">
              <DramaCard drama={drama} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
};

export default DramaCarousel;
