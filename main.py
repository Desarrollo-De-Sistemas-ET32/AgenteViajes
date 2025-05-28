from fastapi import FastAPI
from pydantic import BaseModel
from together import Together
import os

# Configurar la clave de API (mejor usar variables de entorno en producción)
os.environ["TOGETHER_API_KEY"] = "26ce9918867389015537f67e5eb62ef6ca4b5965f25979449434f640229319ab"

# Inicializar cliente de Together AI
client = Together()

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

    # Agregar entrada del usuario al historial
    chat_history.append({"role": "user", "content": user_input})

    # Solicitar respuesta del modelo
    response = client.chat.completions.create(
        model=model,
        messages=chat_history
    )

    # Obtener respuesta generada
    reply = response.choices[0].message.content

    # Agregar respuesta del asistente al historial
    chat_history.append({"role": "assistant", "content": reply})

    return {"response": reply}
