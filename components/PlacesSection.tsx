import { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceCard from "./PlaceCard";
import { MapPin, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// 1. Define la interfaz para el tipo de datos 'Place'
interface Place {
  id: number;
  name: string;
  description: string;
  duration: string; // Asumiendo que 'duration' es parte de tu modelo o un campo a añadir
  rating: number;
  image: string; // Asumiendo que 'image' es un campo para la imagen
  // Nota: Asegúrate de que los campos del backend coincidan con esta interfaz
}

// 2. Define la URL base de tu API
// **IMPORTANTE**: Reemplaza esta URL por la dirección real de tu backend.
const API_BASE_URL = 'http://localhost:3000'; 
const API_ENDPOINT = `${API_BASE_URL}/city/top-rated?limit=5`; // Usamos el endpoint top-rated

const PlacesSection = () => {
  // 3. Estado para almacenar los lugares y el estado de carga/error
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 4. Hook useEffect para la llamada a la API
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get<Place[]>(API_ENDPOINT);
        setPlaces(response.data);
      } catch (err) {
        console.error("Error al obtener los lugares:", err);
        setError("No se pudieron cargar los lugares. Inténtalo de nuevo más tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaces();
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  // 5. Manejo de estados de carga y error en la UI
  if (isLoading) {
    return <div className="text-center py-10 text-lg">Cargando lugares destacados...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-lg text-red-600">Error: {error}</div>;
  }
  
  // 6. Si no hay lugares después de cargar
  if (places.length === 0) {
    return <div className="text-center py-10 text-lg">No se encontraron lugares destacados.</div>;
  }

  return (
    <div className="mb-16">
      {/* Sección de encabezado */}
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
      
      {/* Carrusel de Lugares */}
      <div className="px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {/* 7. Mapeo de la lista 'places' obtenida por la API */}
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