from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel
from together import Together
import os

# Asegúrate de que la API esté en tu entorno o ponla aquí directamente (no recomendado)
os.environ["TOGETHER_API_KEY"] = "26ce9918867389015537f67e5eb62ef6ca4b5965f25979449434f640229319ab"



client = Together()

system_prompt = """
Eres un agente de viajes experto. Tu tarea es crear itinerarios de viaje detallados basados en las preferencias del usuario.
Responde en formato claro y organizado, día por día.
Considera siempre:
- El presupuesto si se indica
- Preferencias como cultura, naturaleza, gastronomía o relajación
- Evita repeticiones en las actividades
"""

chat_story = [
        {"role": "system", "content": system_prompt}
    ]

class ChatRequest(BaseModel):
    message: str

app = FastAPI()

async def chat_ai(req: ChatRequest):
    user_input = req.message
    model = "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"


    messages.append({"role": "user", "content": user_input})

    # Obtener respuesta del modelo
    response = client.chat.completions.create(
        model=model,
        messages=chat_story
        )

    reply = response.choices[0].message.content
    messages.append({"role": "assistant", "content": reply})
    return {"response": reply}
       
