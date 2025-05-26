import { useAuth0 } from '@auth0/auth0-react'

function LlamarApi() {
  const { getAccessTokenSilently } = useAuth0()

  const llamarBackend = async () => {
    try {
      const token = await getAccessTokenSilently()
      const response = await fetch('http://localhost:3000/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()
      console.log('Respuesta del backend:', data)
    } catch (err) {
      console.error('Error al llamar al backend:', err)
    }
  }

  return <button onClick={llamarBackend}>Llamar a la API protegida</button>
}
