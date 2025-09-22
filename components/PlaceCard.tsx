import { Card } from "@/components/ui/card";
import { MapPin, Star, Clock } from "lucide-react";
import Link from "next/link";

interface Place {
  id: number;
  name: string;
  description: string;
  duration: string;
  rating: number;
  image: string;
}

interface PlaceCardProps {
  place: Place;
}

const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <Link href={`/lugar/${place.id}`}>
      <Card className="w-full p-0 overflow-hidden bg-card text-card-foreground border border-border shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
        <div className="w-full h-48 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 relative overflow-hidden">
          <img 
            src={`https://images.unsplash.com/${place.image}?auto=format&fit=crop&w=400&h=300`}
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Star className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-600 transition-colors">
              {place.name}
            </h3>
            <MapPin className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
          </div>
          <p className="text-sm text-muted-foreground mb-3">
              {place.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{place.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-500" />
              <span>{place.rating}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PlaceCard;