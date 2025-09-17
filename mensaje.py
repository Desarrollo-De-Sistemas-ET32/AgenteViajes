import requests

url = "http://127.0.0.1:8000/chat"
data = {"message": "Quiero un viaje a Madrid con enfoque cultural..."}

response = requests.post(url, json=data)

# Paso 2: imprimir información de depuración
print("Status code:", response.status_code)   # código HTTP
print("Response text:", response.text)       # respuesta cruda

# intentar parsear JSON si existe
try:
    print("JSON:", response.json())
except Exception as e:
    print("No se pudo decodificar JSON:", e)
