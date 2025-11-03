'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MessageSquare, Star, Calendar, MapPin, Edit } from "lucide-react";
import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

 export default withPageAuthRequired(function CommentsPage(){
  const comments = [
    {
      id: 1,
      place: "Hotel Palacio Real",
      location: "Madrid, España",
      rating: 5,
      date: "15 Mar 2024",
      comment: "Excelente hotel con una ubicación perfecta. El servicio fue impecable y las habitaciones muy cómodas. Definitivamente lo recomiendo para una estancia en Madrid.",
      helpful: 12,
      status: "Publicado"
    },

    {
      id: 2,
      place: "Restaurante La Pergola",
      location: "Roma, Italia",
      rating: 4,
      date: "22 Feb 2024",
      comment: "Comida deliciosa y ambiente romántico. Los precios son un poco altos pero vale la pena por la experiencia culinaria.",
      helpful: 8,
      status: "Publicado"
    },
    {
      id: 3,
      place: "Museo del Louvre",
      location: "París, Francia",
      rating: 5,
      date: "10 Feb 2024",
      comment: "Una experiencia increíble. Recomiendo comprar las entradas con anticipación y dedicar al menos medio día para la visita.",
      helpful: 15,
      status: "Publicado"
    },

    {
      id: 4,
      place: "Tour Gastronómico Barcelona",
      location: "Barcelona, España",
      rating: 3,
      date: "5 Jan 2024",
      comment: "El tour estuvo bien pero esperaba más variedad de lugares. El guía fue muy amable y conocedor de la ciudad.",
      helpful: 3,
      status: "Pendiente de revisión"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Mis Comentarios</h1>
        </div>

        {/* Write New Comment */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                   style={{ background: 'var(--gradient-card)' }}>
                <Edit className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle>Escribir Nueva Reseña</CardTitle>
                <CardDescription>Comparte tu experiencia con otros viajeros</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder="Comparte los detalles de tu experiencia..."
              className="min-h-[100px]"
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Calificación:</span>
                <div className="flex space-x-1">
                  {renderStars(0)}
                </div>
              </div>
              <Button 
                className="text-white border-0"
                style={{ background: 'var(--gradient-primary)' }}
                onClick={()=>{} /* Aca mandan el mensaje*/}
              >
                Publicar Comentario

              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Comments List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                     style={{ background: 'var(--gradient-card)' }}>
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Mis Reseñas ({comments.length})</CardTitle>
                  <CardDescription>Historial de comentarios y valoraciones</CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">{comment.place}</h3>
                      <Badge variant={comment.status === 'Publicado' ? 'default' : 'secondary'}>
                        {comment.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {comment.location}
                    </p>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        {renderStars(comment.rating)}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {comment.date}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                
                <p className="text-foreground leading-relaxed">
                  {comment.comment}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{comment.helpful} personas encontraron esto útil</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Editar</Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      Eliminar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: 'hsl(var(--pink-primary))' }}>
                {comments.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Reseñas</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: 'hsl(var(--purple-primary))' }}>
                4.2
              </div>
              <div className="text-sm text-muted-foreground">Calificación Promedio</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: 'hsl(var(--pink-primary))' }}>
                38
              </div>
              <div className="text-sm text-muted-foreground">Votos Útiles</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: 'hsl(var(--purple-primary))' }}>
                3
              </div>
              <div className="text-sm text-muted-foreground">Publicadas</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
});
