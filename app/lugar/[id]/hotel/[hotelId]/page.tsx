'use client'
import { ArrowLeft, Star, MapPin, Wifi, Coffee, Car, Utensils, Dumbbell, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useParams, useRouter } from "next/navigation";

const HotelDetail = () => {
    const { id: placeId, hotelId } = useParams();
    const router = useRouter();

    // Mock data de hoteles
    const hotelsData: Record<number, Record<number, any>> = {
        1: { // París
            1: {
                id: 1,
                name: "Hotel Le Marais Boutique",
                rating: 4.8,
                price: "€180/noche",
                location: "Le Marais, París",
                description: "Hotel boutique de lujo en el corazón del histórico barrio Le Marais. Con vistas espectaculares a la ciudad y una decoración elegante que combina el estilo parisino clásico con comodidades modernas.",
                images: [
                    "photo-1566073771259-6a8506099945",
                    "photo-1582719508461-905c673771fd",
                    "photo-1564501049412-61c2a3083791"
                ],
                amenities: [
                    { icon: Wifi, name: "WiFi gratuito" },
                    { icon: Coffee, name: "Desayuno incluido" },
                    { icon: Car, name: "Parking" },
                    { icon: Utensils, name: "Restaurante" },
                    { icon: Dumbbell, name: "Gimnasio" }
                ],
                rooms: [
                    { type: "Habitación Standard", price: "€150/noche", capacity: "2 personas" },
                    { type: "Suite Deluxe", price: "€250/noche", capacity: "4 personas" },
                    { type: "Suite Presidencial", price: "€450/noche", capacity: "6 personas" }
                ],
                contact: {
                    phone: "+33 1 23 45 67 89",
                    email: "info@lemaraishotel.fr"
                }
            },
            2: {
                id: 2,
                name: "Grand Hotel des Champs-Élysées",
                rating: 4.9,
                price: "€320/noche",
                location: "Champs-Élysées, París",
                description: "Hotel de 5 estrellas ubicado en la prestigiosa avenida Champs-Élysées. Ofrece habitaciones lujosas con vistas panorámicas de la Torre Eiffel y el Arco de Triunfo.",
                images: [
                    "photo-1542314831-068cd1dbfeeb",
                    "photo-1571896349842-33c89424de2d",
                    "photo-1578683010236-d716f9a3f461"
                ],
                amenities: [
                    { icon: Wifi, name: "WiFi gratuito" },
                    { icon: Coffee, name: "Desayuno gourmet" },
                    { icon: Car, name: "Valet parking" },
                    { icon: Utensils, name: "Restaurante Michelin" },
                    { icon: Dumbbell, name: "Spa & Gimnasio" }
                ],
                rooms: [
                    { type: "Habitación Deluxe", price: "€280/noche", capacity: "2 personas" },
                    { type: "Junior Suite", price: "€420/noche", capacity: "3 personas" },
                    { type: "Suite Royal", price: "€800/noche", capacity: "4 personas" }
                ],
                contact: {
                    phone: "+33 1 98 76 54 32",
                    email: "reservations@grandhotel-paris.fr"
                }
            },
            3: {
                id: 3,
                name: "Hôtel Montmartre Charm",
                rating: 4.6,
                price: "€120/noche",
                location: "Montmartre, París",
                description: "Encantador hotel boutique situado en las pintorescas calles de Montmartre. Perfecto para explorar el París artístico y bohemio, cerca del Sacré-Cœur.",
                images: [
                    "photo-1445019980597-93fa8acb246c",
                    "photo-1596436889106-be35e843f974",
                    "photo-1590490360182-c33d57733427"
                ],
                amenities: [
                    { icon: Wifi, name: "WiFi gratuito" },
                    { icon: Coffee, name: "Café parisino" },
                    { icon: Utensils, name: "Bar lounge" }
                ],
                rooms: [
                    { type: "Habitación Cozy", price: "€100/noche", capacity: "2 personas" },
                    { type: "Habitación Superior", price: "€140/noche", capacity: "3 personas" }
                ],
                contact: {
                    phone: "+33 1 45 67 89 12",
                    email: "contact@montmartrecharm.fr"
                }
            }
        },
        2: { // Tokyo
            1: {
                id: 1,
                name: "Tokyo Imperial Palace Hotel",
                rating: 4.9,
                price: "¥28,000/noche",
                location: "Chiyoda, Tokyo",
                description: "Hotel de lujo ubicado cerca del Palacio Imperial de Tokyo. Combina la elegancia tradicional japonesa con servicios modernos de clase mundial.",
                images: [
                    "photo-1551882547-ff40c63fe5fa",
                    "photo-1555041469-a586c61ea9bc",
                    "photo-1584132967334-10e028bd69f7"
                ],
                amenities: [
                    { icon: Wifi, name: "WiFi gratuito" },
                    { icon: Coffee, name: "Desayuno japonés" },
                    { icon: Car, name: "Parking" },
                    { icon: Utensils, name: "Restaurante kaiseki" },
                    { icon: Dumbbell, name: "Onsen & Spa" }
                ],
                rooms: [
                    { type: "Habitación Tradicional", price: "¥25,000/noche", capacity: "2 personas" },
                    { type: "Suite con jardín", price: "¥45,000/noche", capacity: "4 personas" }
                ],
                contact: {
                    phone: "+81 3-1234-5678",
                    email: "info@tokyoimperial.jp"
                }
            }
        }
    };

    const numPlaceId = parseInt(Array.isArray(placeId) ? placeId[0] : placeId || '0', 10);
    const numHotelId = parseInt(Array.isArray(hotelId) ? hotelId[0] : hotelId || '0', 10);

    const hotel = hotelsData[numPlaceId]?.[numHotelId];

    if (!hotel) {
        return (
            <div className="min-h-screen bg-background">
                <div className="flex items-center justify-center h-96">
                    <p className="text-lg text-muted-foreground">Hotel no encontrado</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section with Image Carousel */}
            <div className="relative h-96 overflow-hidden bg-muted">
                <Carousel className="w-full h-full">
                    <CarouselContent>
                        {hotel.images.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                                <div className="relative h-96 w-full">
                                    <img
                                        src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=1200&h=600`}
                                        alt={`${hotel.name} - ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30"></div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>

                <div className="absolute inset-0 flex items-end pointer-events-none">
                    <div className="w-full bg-gradient-to-t from-black/60 to-transparent p-8">
                        <div className="max-w-6xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{hotel.name}</h1>
                            <div className="flex items-center gap-4 text-white/90">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5" />
                                    <span>{hotel.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold">{hotel.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.push(`/lugar/${placeId}`)}
                    className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 z-10"
                >
                    <ArrowLeft className="h-5 w-5" />
                </Button>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4">Sobre el hotel</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {hotel.description}
                            </p>
                        </section>

                        {/* Amenities */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4">Comodidades</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {hotel.amenities.map((amenity: any, index: number) => {
                                    const Icon = amenity.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border">
                                            <Icon className="h-5 w-5 text-primary" />
                                            <span className="font-medium">{amenity.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Rooms */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4">Tipos de habitaciones</h2>
                            <div className="space-y-4">
                                {hotel.rooms.map((room: any, index: number) => (
                                    <Card key={index}>
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold text-xl mb-2">{room.type}</h4>
                                                    <p className="text-muted-foreground">Capacidad: {room.capacity}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-2xl font-bold text-primary">{room.price}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Price Card */}
                        <Card className="sticky top-6">
                            <CardContent className="p-6">
                                <div className="text-center mb-6">
                                    <p className="text-sm text-muted-foreground mb-2">Desde</p>
                                    <p className="text-4xl font-bold text-primary">{hotel.price}</p>
                                </div>

                                <Button className="w-full mb-4" size="lg">
                                    Reservar ahora
                                </Button>

                                <div className="space-y-3 pt-4 border-t">
                                    <h3 className="font-semibold mb-3">Contacto</h3>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Phone className="h-4 w-4 text-muted-foreground" />
                                        <span>{hotel.contact.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                        <span className="truncate">{hotel.contact.email}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;