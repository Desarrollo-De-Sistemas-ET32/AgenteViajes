'use client'
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

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
    timestamp: new Date().toLocaleDateString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    })
  },
];

export const ChatInterface = ({ onBack }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const router = useRouter();

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Conectarse al WebSocket de FastAPI
    ws.current = new WebSocket("ws://localhost:8000/ws");

    ws.current.onopen = () => {
      console.log("Conectado al WebSocket");
    };

    ws.current.onmessage = (event) => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: event.data,
        isUser: false,
        timestamp: new Date().toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiResponse]);
    };

    ws.current.onclose = () => {
      console.log("Desconectado del WebSocket");
    };

    return () => {
      ws.current?.close();
    };
    
  }, []);

  const handleSendMessageUser = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(newMessage.text);
    }

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex flex-col dvh md:h-screen w-full max-w-fulenl md-max-w3xl lg:max4xl md:mx-auto bg-card shadow-dashboard border border-border rounded-none md:rounded-xl overflow-hidd">
      {onBack && (
        <div className="p-4 bg-muted/30">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack = () => { router.back() }}
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

      <ChatInput onSendMessage={handleSendMessageUser} />
    </div>
  );
};