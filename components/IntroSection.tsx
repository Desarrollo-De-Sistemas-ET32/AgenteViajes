
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Sparkles } from "lucide-react";

const IntroSection = () => {
  return (
    <div className="px-6 mb-16">
      <Card className="w-full p-12 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            ¿Quiere comenzar a charlar con su nueva asistente turística?
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Charle con Amélie, su nueva organizadora de experiencias inolvidables.
          </p>
          <Button 
            size="lg" 
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Comenzar Chat
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default IntroSection;