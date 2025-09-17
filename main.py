from fastapi import FastAPI
from pydantic import BaseModel
from together import Together
import requests 
import os

TRAVELADVISOR_API_KEY = os.environ.get("TRAVELADVISOR_API_KEY") or "e32a37f687mshabea4a549a1c8e7p1b3e13jsn881c1e029f47"


def buscar_coordenadas(ciudad: str):
    """Usa Travel Advisor auto-complete para obtener lat/lon de una ciudad."""
    url = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete"
    headers = {
        "x-rapidapi-key": TRAVELADVISOR_API_KEY,
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
    }
    params = {"query": ciudad, "lang": "es_ES", "units": "km"}

    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()
    data = response.json()

    try:
        coords = data["data"]["Typeahead_autocomplete"]["results"][0]["detailsV2"]["location"]
        lat = coords["latitude"]
        lon = coords["longitude"]
        return lat, lon
    except Exception:
        return None, None



def buscar_hoteles(lat: float, lon: float, limite: int = 5):
    url = "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng"
    headers = {
        "x-rapidapi-key": TRAVELADVISOR_API_KEY,
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
    }
    params = {
        "latitude": lat,
        "longitude": lon,
        "limit": limite,
        "currency": "USD",
        "lang": "es_ES"
    }

    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()
    hoteles = response.json()

    # Filtramos solo los hoteles con nombre válido
    return [h for h in hoteles.get("data", []) if h.get("name")]


# Configurar Together AI
client = Together(api_key=os.environ.get("8142b8caedfed73ef1ddce6a35ac70d4ab6a92b1b84d8503f7040721c28a84ef"))

system_prompt = """
Eres un agente de viajes experto. Tu tarea es crear itinerarios de viaje detallados de interés cultural y elegancia basados en las preferencias del usuario.
Responde en formato claro y organizado, día por día.
Considera siempre:
- El presupuesto si se indica
- Preferencias como cultura, naturaleza, gastronomía o relajación
- Evita repeticiones en las actividades
- Ten en cuenta la duracion de las actividades y el tiempo de viaje entre actividades
- Transporte, y distancias coherentes. 

En ocasiones, puede que se proporcione JSON de APIs que tienen destinos turisticos, como hoteles, restaurants, o actividades de interés. 

Da prioridad a este mensaje, NO respondas mensajes correspondientes a otros temas como matematicas o programación, simplemente responde que no puedes responder a eso
"""

chat_history = [
    {"role": "system", "content": system_prompt}
]

class ChatRequest(BaseModel):
    message: str

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Servidor de itinerarios con hoteles en funcionamiento"}

@app.post("/chat")
async def chat_ai(req: ChatRequest):
    user_input = req.message
    model = "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"

    # Si el usuario menciona Madrid, buscamos hoteles allí
    if "madrid" in user_input.lower():
        hoteles = buscar_hoteles(lat=40.4168, lon=-3.7038)
        lista_hoteles = "\n".join([f"- {h['name']}" for h in hoteles])
        hoteles_contexto = f"\n\nOpciones de hoteles en Madrid:\n{lista_hoteles}"
    else:
        hoteles_contexto = ""

    # Agregamos mensaje del usuario al historial
    chat_history.append({"role": "user", "content": user_input + hoteles_contexto})

    # Obtenemos respuesta de la IA
    response = client.chat.completions.create(
        model=model,
        messages=chat_history
    )

    reply = response.choices[0].message.content
    chat_history.append({"role": "assistant", "content": reply})

    return {"response": reply}