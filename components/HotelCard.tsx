'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

interface Hotel {
    id: number;
    name: string;
    rating: number;
    price: string;
    image: string;
    location: string;
}

interface HotelCardProps {
    hotel: Hotel;
    placeId: number;
}

const HotelCard = ({ hotel, placeId }: HotelCardProps) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/lugar/${placeId}/hotel/${hotel.id}`);
    };

    return (
        <Card
            className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
            onClick={handleClick}
        >
            <div className="relative h-56 w-full overflow-hidden">
                <img
                    src={`https://images.unsplash.com/${hotel.image}?auto=format&fit=crop&w=1200&h=600`}
                    alt={`${hotel.name}`}
                    className="w-full h-full object-cover"
                />
            </div>
            <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{hotel.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="line-clamp-1">{hotel.location}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-medium">{hotel.rating}</span>
                    </div>
                    <span className="font-bold text-lg">{hotel.price}</span>
                </div>
            </CardContent>
        </Card>
    );
};

export default HotelCard;