import { ChatInterface, ChatInterfaceProps } from "@/components/ChatInterface"
import { Router, useRouter } from "next/router";

export default function Chat(){
    
    const handleBack = () => {
    const router = useRouter()
    router.back();
};
    
    return(
    <div>
      <ChatInterface onBack={handleBack} />
    </div>
)
    
    

}