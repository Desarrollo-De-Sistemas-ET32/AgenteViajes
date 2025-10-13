// Ejemplo de uso en un componente del lado del cliente
async function callApi() {
  // 1. Llama a tu endpoint para obtener el token
  const response = await fetch('/api/auth/token');
  const data = await response.json();
  const accessToken = data.accessToken;

  // 2. Usa el token para llamar a tu back-end
  const apiResponse = await fetch('https://tu-backend-api.com/recurso-protegido', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  // ...
}