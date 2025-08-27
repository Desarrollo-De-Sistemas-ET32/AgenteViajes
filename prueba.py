from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from together import Together
import requests 
import os

client = Together(api_key="8142b8caedfed73ef1ddce6a35ac70d4ab6a92b1b84d8503f7040721c28a84ef")


# Prompt del sistema
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

app = FastAPI()

# Permitir CORS para frontend en desarrollo (por ejemplo: http://localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especifica tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chat_history = [
    {"role": "system", "content": system_prompt}
]

html = """
<!DOCTYPE html>
<html>
    <head>
        <title>Chat</title>
    </head>
    <body>
        <h1>WebSocket Chat</h1>
        <form action="" onsubmit="sendMessage(event)">
            <input type="text" id="messageText" autocomplete="off"/>
            <button>Send</button>
        </form>
        <ul id='messages'>
        </ul>
        <script>
            var ws = new WebSocket("ws://localhost:8000/ws");
            ws.onmessage = function(event) {
                var messages = document.getElementById('messages')
                var message = document.createElement('li')
                var content = document.createTextNode(event.data)
                message.appendChild(content)
                messages.appendChild(message)
            };
            function sendMessage(event) {
                var input = document.getElementById("messageText")
                ws.send(input.value)
                input.value = ''
                event.preventDefault()
            }
        </script>
    </body>
</html>
"""


@app.get("/")
async def get():
    return HTMLResponse(html)


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            response = await chat_ai(data)
            await websocket.send_text(f"{response}")
    except WebSocketDisconnect:
        print("Cliente desconectado")


async def chat_ai(message: str):
    user_input = message
    model = "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"

    # Agregar mensaje del usuario al historial
    chat_history.append({"role": "user", "content": user_input})

    # Obtener respuesta del modelo
    response = client.chat.completions.create(
        model=model,
        messages=chat_history
    )

    reply = response.choices[0].message.content

    # Agregar respuesta al historial
    chat_history.append({"role": "assistant", "content": reply})

    return reply