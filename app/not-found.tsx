"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
    const router = useRouter();
    const pathname = usePathname();
  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-0 shadow-card bg-gradient-card/10 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-dashboard flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">404</span>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-dashboard bg-clip-text text-transparent">
              Página no encontrada
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                asChild 
                className="flex-1 bg-gradient-button hover:shadow-card transition-all duration-300"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Ir al inicio
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => router.back()}
                className="flex-1 border-2 hover:bg-secondary/50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Button>
            </div>
            
            <div className="text-center pt-2">
              <p className="text-sm text-muted-foreground">
                Ruta solicitada: <code className="bg-muted px-2 py-1 rounded text-xs">{pathname}</code>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFoundPage;
