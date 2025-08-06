import { Card } from "@/components/ui/card";
import { MapPin, Download, Type, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="px-6 mb-12">
      <Card className="w-full p-8 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left Side */}
          <div className="flex-1">
            <div className="w-12 h-12 bg-white rounded-full mb-6 shadow-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">Amélie Travel</h2>
              <p className="text-white/90 leading-relaxed">
                Tu asistente de viajes personalizada con IA para crear experiencias inolvidables.
              </p>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="group flex items-center gap-3 text-white hover:text-white/80 transition-colors font-medium">
              <MapPin className="h-4 w-4" />
              <span>Amélie</span>
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-white/70 text-sm ml-7">
              Descubre destinos únicos con recomendaciones personalizadas.
            </p>
            
            <a href="#" className="group flex items-center gap-3 text-white hover:text-white/80 transition-colors font-medium mt-4">
              <Download className="h-4 w-4" />
              <span>Instalación</span>
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-white/70 text-sm ml-7">
              Cómo configurar tu asistente de viajes en minutos.
            </p>
            
            <a href="#" className="group flex items-center gap-3 text-white hover:text-white/80 transition-colors font-medium mt-4">
              <Type className="h-4 w-4" />
              <span>Personalización</span>
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-white/70 text-sm ml-7">
              Adapta Amélie a tus preferencias de viaje.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HeroSection;
