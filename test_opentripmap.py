import requests
from fastapi import FastAPI
import httpx
import os

app = FastAPI()
API_KEY = os.getenv("OPENTRIPMAP_API_KEY")

@app.get("/lugares/{ciudad}")
async def obtener_lugares_ciudad(ciudad: str):
    async with httpx.AsyncClient() as client:
        # Paso 1: obtener coordenadas
        geo = await client.get(
            "https://api.opentripmap.com/0.1/en/places/geoname",
            params={"name": ciudad, "apikey": API_KEY}
        )
        geo.raise_for_status()
        geo_data = geo.json()
        lat, lon = geo_data["lat"], geo_data["lon"]

        # Paso 2: buscar lugares cerca
        lugares = await client.get(
            "https://api.opentripmap.com/0.1/en/places/radius",
            params={
                "apikey": API_KEY,
                "radius": 2000,
                "lon": lon,
                "lat": lat,
                "format": "json",
                "limit": 10,
                "kinds": "cultural"
            }
        )
        lugares.raise_for_status()
        return lugares.json()


API_KEY = "5ae2e3f221c38a28845f05b66d2194c4ff6ded4c369781c02f39f69f"

def buscar_lugares(lat: float, lon: float, radio: int = 1000, limite: int = 10):
    url = "https://api.opentripmap.com/0.1/en/places/radius"
    params = {
        "apikey": API_KEY,
        "radius": radio,
        "lon": lon,
        "lat": lat,
        "format": "json",
        "limit": limite,
        "kinds": "cultural"

    }

    response = requests.get(url, params = params)
    response.raise_for_status()
    return response.json()

# Ejemplo: Madrid
lugares = buscar_lugares(40.4168, -3.7038)
for lugar in lugares:
    print(f"Nombre: {lugar['name']}, XID: {lugar['xid']}")

def obtener_detalles_lugar(xid: str):
    url = f"https://api.opentripmap.com/0.1/en/places/xid/{xid}"
    params = {
        "apikey": API_KEY
    }

    response = requests.get(url, params=params)
    response.raise_for_status()
    return response.json()

detalles = obtener_detalles_lugar(lugares[0]['xid'])

print("Nombre:", detalles.get("name", "Desconocido"))
print("Dirección:", detalles.get("address", {}).get("road", "Sin dirección"))
print("Categorías:", detalles.get("kinds", "Sin categorías"))
print("Wikipedia URL:", detalles.get("wikipedia", "No hay Wikipedia"))
print("Extracto Wikipedia:", detalles.get("wikipedia_extracts", {}).get("text", "Sin descripción"))
print("Coordenadas:", detalles.get("point", {}))
print("Más info OpenTripMap:", detalles.get("otm", "Sin enlace"))

def buscar_ciudad(ciudad: str):
    url = "https://api.opentripmap.com/0.1/en/places/geoname"
    params = {
        "name": ciudad,
        "apikey": API_KEY
    }

    response = requests.get(url, params=params)
    response.raise_for_status()
    return response.json()

# Ejemplo: obtener coordenadas de Sevilla
ciudad = buscar_ciudad("Madrid")
print(ciudad["lat"], ciudad["lon"])