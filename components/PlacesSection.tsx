import PlaceCard from "./PlaceCard";
import { MapPin, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PlacesSection = () => {

  const places = [
    {
      id: 1,
      name: "París, Francia",
      description: "La ciudad del amor con la Torre Eiffel, el Arco del Triunfo y museos increíbles",
      duration: "3-5 días",
      rating: 4.9,
      image: "photo-1466442929976-97f336a657be"
    },
    {
      id: 2,
      name: "Tokyo, Japón",
      description: "Cultura tradicional y moderna tecnología en perfecta armonía",
      duration: "4-6 días",
      rating: 4.8,
      image: "photo-1500673922987-e212871fec22"
    },
    {
      id: 3,
      name: "Roma, Italia",
      description: "Historia antigua con arquitectura impresionante y gastronomía",
      duration: "2-4 días",
      rating: 4.7,
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 4,
      name: "Bali, Indonesia",
      description: "Paraíso tropical con templos sagrados, clima asombroso y playas hermosas",
      duration: "5-7 días",
      rating: 4.6,
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 5,
      name: "Islandia",
      description: "Paisajes únicos con auroras boreales, glaciares y géiseres naturales",
      duration: "6-8 días",
      rating: 4.8,
      image: "photo-1517022812141-23620dba5c23"
    }
  ];

  return (
    <div className="mb-16">
      <div className="px-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <MapPin className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Lugares Destacados</h2>
          <TrendingUp className="h-5 w-5 text-purple-500" />
        </div>
        <p className="text-muted-foreground">Descubre los destinos más populares recomendados por Amélie</p>
      </div>
      
      <div className="px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {places.map((place) => (
              <CarouselItem key={place.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <PlaceCard place={place} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default PlacesSection;