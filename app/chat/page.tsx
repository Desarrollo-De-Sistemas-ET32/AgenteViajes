'use client'
import { ChatInterface, ChatInterfaceProps } from "@/components/ChatInterface"
import { Router, useRouter } from "next/router";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export default withAuthenticationRequired(function Chat(){
    
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