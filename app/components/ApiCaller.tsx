// components/ApiCaller.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ApiCaller() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resToken = await fetch('/api/auth/token');
        const { accessToken } = await resToken.json();

        const res = await fetch('http://localhost:3001/api/private', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        console.error('Error al llamar la API:', err);
        setMessage('Error al obtener datos.');
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Resultado desde la API protegida:</h2>
      <p>{message ?? 'Cargando...'}</p>
    </div>
  );
}
