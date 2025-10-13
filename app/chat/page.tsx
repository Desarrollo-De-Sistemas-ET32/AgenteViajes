'use client'
import { ChatInterface, ChatInterfaceProps } from "@/components/ChatInterface"
import { Router, useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Chat(){
    
    const handleBack = () => {
    const router = useRouter()
    router.back();
};
    
    return(
    <div>
      <ChatInterface onBack={handleBack} />
    </div>
)
    
});