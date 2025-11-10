'use client';

import { Button } from "@/components/ui/button";
import { Calendar, Hotel } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HotelCard from "@/components/HotelCard";

interface Hotel {
  id: number;
  name: string;
  rating: number;
  price: string;
  image: string;
  location: string;
}

interface Hotels {
  hotels?: Hotel[];
}

const HotelsSection: React.FC<Hotels> = ({ hotels }) => {

  return (
    <section className="mt-16">
      {/* CTA Button */}
      <div className="mt-8">
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Planificar mi viaje con Amélie
        </Button>
      </div>

      {/* Hotels Section */}
      {hotels && hotels.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <Hotel className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              Hoteles recomendados
            </h2>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {hotels.map((hotel) => (
                <CarouselItem
                  key={hotel.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <HotelCard hotel={hotel} placeId={hotel.id} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      )}
    </section>
  );
};

export default HotelsSection;
