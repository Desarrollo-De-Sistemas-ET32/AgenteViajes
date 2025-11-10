'use client'

import HotelCard from "@/components/HotelCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ArrowLeft, Clock, Star, Users, Camera, Calendar, Hotel } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

 export default function PlaceDetail(){
    const { id } = useParams();
    const router = useRouter();

const places = {
    1: {
      id: 1,
      name: "París, Francia",
      description: "La ciudad del amor con la Torre Eiffel y museos increíbles",
      fullDescription: "París, conocida como la Ciudad de la Luz, es una de las capitales más románticas del mundo. Con sus icónicos monumentos, museos de clase mundial, y su incomparable gastronomía, París ofrece experiencias únicas para todo tipo de viajeros.",
      duration: "3-5 días",
      rating: 4.9,
      image: "photo-1466442929976-97f336a657be",
      highlights: [
        "Torre Eiffel al atardecer",
        "Museo del Louvre",
        "Crucero por el Sena",
        "Barrio de Montmartre"
      ],
      activities: [
        { name: "Visita guiada Torre Eiffel", duration: "2 horas", price: "€25" },
        { name: "Tour gastronómico", duration: "4 horas", price: "€85" },
        { name: "Excursión a Versalles", duration: "8 horas", price: "€120" }
      ],
      hotels: [
        {
          id: 1,
          name: "Hotel Le Marais Boutique",
          rating: 4.8,
          price: "€180/noche",
          image: "photo-1566073771259-6a8506099945",
          location: "Le Marais, París"
        },
        {
          id: 2,
          name: "Grand Hotel des Champs-Élysées",
          rating: 4.9,
          price: "€320/noche",
          image: "photo-1542314831-068cd1dbfeeb",
          location: "Champs-Élysées, París"
        },
        {
          id: 3,
          name: "Hôtel Montmartre Charm",
          rating: 4.6,
          price: "€120/noche",
          image: "photo-1445019980597-93fa8acb246c",
          location: "Montmartre, París"
        }
      ]
    },
    2: {
      id: 2,
      name: "Tokyo, Japón",
      description: "Cultura tradicional y moderna tecnología en perfecta armonía",
      fullDescription: "Tokyo es una metrópolis fascinante donde los rascacielos futuristas conviven con templos tradicionales. Desde la bulliciosa vida nocturna de Shibuya hasta la serenidad de los jardines imperiales.",
      duration: "4-6 días",
      rating: 4.8,
      image: "photo-1500673922987-e212871fec22",
      highlights: [
        "Templo Senso-ji",
        "Cruce de Shibuya",
        "Palacio Imperial",
        "Distrito de Harajuku"
      ],
      activities: [
        { name: "Ceremonia del té tradicional", duration: "3 horas", price: "¥8,000" },
        { name: "Tour nocturno de Tokyo", duration: "5 horas", price: "¥12,000" },
        { name: "Excursión al Monte Fuji", duration: "10 horas", price: "¥18,000" }
      ],
      hotels: [
        {
          id: 1,
          name: "Tokyo Imperial Palace Hotel",
          rating: 4.9,
          price: "¥28,000/noche",
          image: "photo-1551882547-ff40c63fe5fa",
          location: "Chiyoda, Tokyo"
        }
      ]
    }
  };
  
    // Convert string id to number and safely access the place
    const placeId = parseInt(Array.isArray(id) ? id[0] : (id || '0'), 10);
    const place = places[placeId as keyof typeof places];
  
    if (!place) {
      return (
        <div className="min-h-screen bg-background">
          <div className="flex items-center justify-center h-96">
            <p className="text-lg text-muted-foreground">Lugar no encontrado</p>
          </div>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-background">
        
        {}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={`https://images.unsplash.com/${place.image}?auto=format&fit=crop&w=1200&h=600`}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{place.name}</h1>
              <p className="text-xl md:text-2xl opacity-90">{place.description}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
  
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Duración</h3>
              <p className="text-muted-foreground">{place.duration}</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Valoración</h3>
              <p className="text-muted-foreground">{place.rating}/5.0</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Recomendado para</h3>
              <p className="text-muted-foreground">Todos los públicos</p>
            </Card>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre este destino</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {place.fullDescription}
              </p>
  
              {/* Highlights */}
              <h3 className="text-2xl font-bold mb-4">Lo más destacado</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {place.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
                    <Camera className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Activities */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Actividades recomendadas</h2>
              <div className="space-y-4">
                {place.activities.map((activity, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="p-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{activity.name}</h4>
                        <span className="text-lg font-bold text-purple-600">{activity.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{activity.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
  
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
          </div>
        </div>

        {/* Hotels Section */}
        {place.hotels && place.hotels.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <Hotel className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Hoteles recomendados en {place.name}</h2>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {place.hotels.map((hotel) => (
                  <CarouselItem key={hotel.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <HotelCard hotel={hotel} placeId={place.id} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};