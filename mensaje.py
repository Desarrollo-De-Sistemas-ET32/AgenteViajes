import requests

url = "http://127.0.0.1:8000/chat"
data = {"message": "Quiero un viaje a Madrid con enfoque cultural, quiero que cada dia solamente tenga 2 actividades extracurriculares pero que sean extremadamente enfocadas a lo cultural, nada de lugares llenos de gente. luego quiero cada dia comer por lo menos una vez en algun restaurant que sirva comida perteneciente a la cultura madrileña y que sea refinada pero no necesariamente ostentoso."}

response = requests.post(url, json=data)
print(response.json())