'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Heart, MapPin, Utensils, Music, Palette, Camera, Mountain } from "lucide-react";
import Link from "next/link";

 export default function UserPreferences(){
  const interests = [
    { id: 'art', label: 'Arte', icon: '🎨', selected: true },
    { id: 'music', label: 'Música', icon: '🎵', selected: true },
    { id: 'history', label: 'Historia', icon: '🏛️', selected: true },
    { id: 'architecture', label: 'Arquitectura', icon: '🏰', selected: false },
    { id: 'gastronomy', label: 'Gastronomía', icon: '🍽️', selected: true },
    { id: 'nature', label: 'Naturaleza', icon: '🌿', selected: true },
    { id: 'adventure', label: 'Aventura', icon: '🏔️', selected: false },
    { id: 'photography', label: 'Fotografía', icon: '📸', selected: true },
    { id: 'shopping', label: 'Compras', icon: '🛍️', selected: false },
    { id: 'nightlife', label: 'Vida Nocturna', icon: '🌙', selected: false },
    { id: 'sports', label: 'Deportes', icon: '⚽', selected: false },
    { id: 'wellness', label: 'Bienestar', icon: '🧘', selected: true },
    { id: 'beaches', label: 'Playas', icon: '🏖️', selected: true },
    { id: 'museums', label: 'Museos', icon: '🏛️', selected: true },
    { id: 'festivals', label: 'Festivales', icon: '🎪', selected: false },
    { id: 'local-culture', label: 'Cultura Local', icon: '🎭', selected: true }
  ];

  const accommodationTypes = ['Hotel de Lujo', 'Boutique Hotel', 'Apartamento', 'Casa Rural', 'Hostal'];
  const travelStyles = ['Relajado', 'Aventurero', 'Cultural', 'Gastronómico', 'Familiar'];
  const budgetRanges = ['Económico', 'Medio', 'Alto', 'Lujo'];

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
          <h1 className="text-2xl font-bold">Preferencias de Viaje</h1>
        </div>

        {/* Travel Interests */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                   style={{ background: 'var(--gradient-card)' }}>
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle>Intereses de Viaje</CardTitle>
                <CardDescription>Selecciona qué tipo de experiencias te interesan más</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interests.map((interest) => (
                <div
                  key={interest.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    interest.selected ? 'border-primary shadow-sm' : 'border-border'
                  }`}
                  style={interest.selected ? { background: 'linear-gradient(135deg, hsl(var(--pink-light)), hsl(var(--purple-light)))' } : {}}
                >
                  <div className="text-center space-y-2">
                    <div className="text-2xl">{interest.icon}</div>
                    <p className="text-sm font-medium">{interest.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Travel Style & Budget */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                     style={{ background: 'var(--gradient-card)' }}>
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Estilo de Viaje</CardTitle>
                  <CardDescription>¿Cómo prefieres viajar?</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Estilo Preferido</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu estilo" />
                  </SelectTrigger>
                  <SelectContent>
                    {travelStyles.map((style) => (
                      <SelectItem key={style} value={style.toLowerCase()}>
                        {style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Rango de Presupuesto</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu presupuesto" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((budget) => (
                      <SelectItem key={budget} value={budget.toLowerCase()}>
                        {budget}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Viajes Familiares</p>
                  <p className="text-sm text-muted-foreground">Opciones aptas para niños</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                     style={{ background: 'var(--gradient-card)' }}>
                  <Mountain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>Alojamiento</CardTitle>
                  <CardDescription>Tus preferencias de hospedaje</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Tipo de Alojamiento</Label>
                <div className="space-y-2">
                  {accommodationTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-3">
                      <input type="checkbox" id={type} className="rounded" />
                      <Label htmlFor={type} className="text-sm">{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dietary & Accessibility */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" 
                   style={{ background: 'var(--gradient-card)' }}>
                <Utensils className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle>Necesidades Especiales</CardTitle>
                <CardDescription>Restricciones dietéticas y requerimientos de accesibilidad</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label>Restricciones Dietéticas</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="vegetarian" />
                    <Label htmlFor="vegetarian" className="text-sm">Vegetariano</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="vegan" />
                    <Label htmlFor="vegan" className="text-sm">Vegano</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="gluten-free" />
                    <Label htmlFor="gluten-free" className="text-sm">Sin gluten</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="allergies" />
                    <Label htmlFor="allergies" className="text-sm">Alergias alimentarias</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Requerimientos de Accesibilidad</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="wheelchair" />
                    <Label htmlFor="wheelchair" className="text-sm">Acceso para silla de ruedas</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="hearing" />
                    <Label htmlFor="hearing" className="text-sm">Asistencia auditiva</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="visual" />
                    <Label htmlFor="visual" className="text-sm">Asistencia visual</Label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Notes */}
        <Card>
          <CardHeader>
            <CardTitle>Notas Adicionales</CardTitle>
            <CardDescription>Cuéntanos más sobre tus preferencias de viaje</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              placeholder="Comparte cualquier información adicional que nos ayude a personalizar mejor tus recomendaciones de viaje..."
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button 
            className="px-8 text-white border-0"
            style={{ background: 'var(--gradient-primary)' }}
          >
            Guardar Preferencias
          </Button>
        </div>
      </div>
    </div>
  );
};
