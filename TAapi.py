import http.client

conn = http.client.HTTPSConnection("travel-advisor.p.rapidapi.com")

headers = {
    'x-rapidapi-key': "e32a37f687mshabea4a549a1c8e7p1b3e13jsn881c1e029f47",
    'x-rapidapi-host': "travel-advisor.p.rapidapi.com"
}

conn.request("GET", "/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))