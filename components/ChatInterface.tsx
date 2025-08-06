import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface ChatInterfaceProps {
  onBack?: () => void;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "¡Hola! ¿Cómo puedo ayudarte hoy?",
    isUser: false,
    timestamp: "10:00"
  },
  {
    id: "2", 
    text: "Hola, quiero viajar a Viena por...",
    isUser: true,
    timestamp: "10:01"
  },
  {
    id: "3",
    text: "¡Perfecto! Viena es una ciudad maravillosa. ¿Podrías decirme tus preferencias en cuanto a fechas, presupuesto y tipo de experiencias que te interesan?",
    isUser: false,
    timestamp: "10:01"
  }
];

export const ChatInterface = ({ onBack }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };

    setMessages(prev => [...prev, newMessage]);

    setTimeout(() => {
      const responses = [
        "¡Excelente elección! Te ayudo a planificar tu viaje perfecto.",
        "Estoy analizando las mejores opciones para ti...",
        "¿Te interesa más la cultura, gastronomía, o aventura?",
        "Puedo recomendarte hoteles, restaurantes y actividades increíbles.",
      ];
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date().toLocaleTimeString('es-ES', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };

      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto bg-card shadow-dashboard border border-border rounded-lg overflow-hidden">
      {onBack && (
        <div className="p-4 bg-muted/30">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al Dashboard
            </Button>
            <Badge variant="outline" className="text-xs">En línea</Badge>
          </div>
          <Separator className="mt-4" />
        </div>
      )}
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      </ScrollArea>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};