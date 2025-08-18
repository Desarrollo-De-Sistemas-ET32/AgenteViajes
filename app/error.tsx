"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


export default function NotFoundPage() {
    const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <Card className="border-0 shadow-card bg-gradient-card/10 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center">
              <AlertTriangle className="h-10 w-10 text-destructive" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-destructive">
              Error del servidor
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Algo salió mal en nuestros servidores. Por favor, inténtalo de nuevo.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => router.refresh()}
                className="flex-1 bg-gradient-button hover:shadow-card transition-all duration-300"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Reintentar
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="flex-1 border-2 hover:bg-secondary/50"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Ir al inicio
                </Link>
              </Button>
            </div>
            
            <div className="text-center pt-2">
              <p className="text-xs text-muted-foreground">
                Si el problema persiste, contacta al soporte técnico
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


