import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
}

export const ChatInput = ({ onSendMessage, placeholder = "¿A dónde te gustaría viajar?" }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border-t border-border p-3 sm:p-4">
      <div className="mx-auto flex w-full max-w-xl sm:max-w-2xl gap-2">
      <div className="flex-1 relative">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className="h-11 md:h-12 pr-12 rounded-full border-2 border-border/50 focus:border-primary transition-all duration-300"
        />
        <Plane className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
      </div>
      <Button 
        type="submit" 
        disabled={!message.trim()}
        className={cn(
          "rounded-full h-10 w-10 md:h-11 md:w-11 p-0 transition-all duration-300",
          "bg-gradient-button hover:shadow-card disabled:opacity-50"
        )}
      aria-label="Enviar mensaje"
      >
        <Send className="h-4 w-4" />
      </Button>
    </div>
    </form>
  );
};