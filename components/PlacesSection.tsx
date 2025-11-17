"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import PlaceCard from "./PlaceCard";
import { MapPin, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Place {
  id: number;
  name: string;
  description: string;
  duration: string;
  rating: number;
  image: string;
}

interface CityApiResponse {
  cityName: string;
  country: string;
  description?: string;
  imagePath?: string;
  averageRating?: number;
}

// Ajuste recomendado: usar variable de entorno
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const API_ENDPOINT = `${API_BASE_URL}/city/top-rated?limit=5`;

const PlacesSection = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get<CityApiResponse[]>(API_ENDPOINT);

        const mapped = response.data.map((city, index) => ({
          id: index + 1,
          name: city.cityName,
          description: city.description ?? "Sin descripción",
          duration: "N/A",
          rating: city.averageRating ?? 0,
          image: city.imagePath ?? "/default.jpg",
        }));

        setPlaces(mapped);
      } catch (err) {
        setError("No se pudieron cargar los lugares.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaces();
    return () => {
    };
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg">
        Cargando lugares destacados...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-lg text-red-600">
        Error: {error}
      </div>
    );
  }

  if (places.length === 0) {
    return (
      <div className="text-center py-10 text-lg">
        No se encontraron lugares destacados.
      </div>
    );
  }

  return (
    <div className="mb-16">
      <div className="px-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <MapPin className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Lugares Destacados
          </h2>
          <TrendingUp className="h-5 w-5 text-purple-500" />
        </div>
        <p className="text-muted-foreground">
          Descubre los destinos más populares recomendados por Amélie
        </p>
      </div>

      <div className="px-6">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {places.map((place) => (
              <CarouselItem
                key={place.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
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
