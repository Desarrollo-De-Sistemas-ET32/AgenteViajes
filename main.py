from fastapi import FastAPI
from pydantic import BaseModel
from together import Together
import requests 
import os


OPENTRIPMAP_API_KEY = os.environ.get("OPENTRIPMAP_API_KEY") or "5ae2e3f221c38a28845f05b66d2194c4ff6ded4c369781c02f39f69f"

def buscar_lugares_culturales(lat: float, lon: float, radio: int = 1000, limite: int = 10):
    url = "https://api.opentripmap.com/0.1/en/places/radius"
    params = {
        "apikey": OPENTRIPMAP_API_KEY,
        "radius": radio,
        "lon": lon,
        "lat": lat,
        "format": "json",
        "limit": limite,
        "kinds": "cultural"

    }

    response = requests.get(url, params = params)
    response.raise_for_status()
    lugares = response.json()

    #filtramos solo los lugares con nombre válido
    return [lugar for lugar in lugares if lugar.get("name")]




# Configurar la clave de API (mejor usar variables de entorno en producción)
# -> IMPORTANTE os.environ["TOGETHER_API_KEY"] = "api-key"

# Inicializar cliente de Together AI
client = Together(api_key="8142b8caedfed73ef1ddce6a35ac70d4ab6a92b1b84d8503f7040721c28a84ef")


# Prompt del sistema
system_prompt = """
Eres un agente de viajes experto. Tu tarea es crear itinerarios de viaje detallados basados en las preferencias del usuario.
Responde en formato claro y organizado, día por día.
Considera siempre:
- El presupuesto si se indica
- Preferencias como cultura, naturaleza, gastronomía o relajación
- Evita repeticiones en las actividades
"""

# Historial de conversación global (podrías mover esto a una base de datos o por sesión en producción)
chat_history = [
    {"role": "system", "content": system_prompt}
]

# Esquema de entrada con Pydantic
class ChatRequest(BaseModel):
    message: str

# Inicializar FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Servidor de IA de itinerarios en funcionamiento"}

@app.post("/chat")
async def chat_ai(req: ChatRequest):
    user_input = req.message
    model = "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"

    # Buscar lugares si el usuario menciona un destino conocido (ejemplo: Madrid)
    if "madrid" in user_input.lower():
        lugares = buscar_lugares_culturales(lat=40.4168, lon=-3.7038)
        lista_lugares = "\n".join([f"- {l['name']}" for l in lugares])
        lugares_contexto = f"\n\nAquí tienes lugares culturales recomendados en Madrid:\n{lista_lugares}"
    else:
        lugares_contexto = ""

    # Agregar mensaje del usuario al historial
    chat_history.append({"role": "user", "content": user_input + lugares_contexto})

    # Obtener respuesta del modelo
    response = client.chat.completions.create(
        model=model,
        messages=chat_history
    )

    reply = response.choices[0].message.content

    # Agregar respuesta al historial
    chat_history.append({"role": "assistant", "content": reply})

    return {"response": reply}
