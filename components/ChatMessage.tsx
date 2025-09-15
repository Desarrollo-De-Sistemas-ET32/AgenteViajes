import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownComponents } from "./MarkdownComponents";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex gap-3 mb-4 animate-fade-in",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <Avatar className="h-8 w-8 md:h-9 md:w-9 flex-shrink-0">
          <AvatarFallback className="bg-gradient-dashboard text-white text-xs">
            <Bot className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "max-w-[85%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[60%] px-4 md:px-5 py-3 md:py-3.5 rounded-2xl shadow-sm transition-all duration-300",
        isUser 
          ? "bg-gradient-button text-white rounded-br-md shadow-card" 
          : "bg-card border border-border rounded-bl-md hover:shadow-md"
      )}>
        <div className="text-sm md:text-base leading-relaxed">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={MarkdownComponents}
          >
            {message}
          </ReactMarkdown>
        </div>
        {timestamp && (
          <div className="flex items-center justify-between mt-2">
            <Badge variant="secondary" className={cn(
              "text-xs",
              isUser ? "bg-white/20 text-white border-white/20" : ""
            )}>
              {timestamp}
            </Badge>
          </div>
        )}
      </div>

      {isUser && (
        <Avatar className="h-8 w-8 md:h-9 md:w-9 flex-shrink-0">
          <AvatarFallback className="bg-muted text-muted-foreground text-xs">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};