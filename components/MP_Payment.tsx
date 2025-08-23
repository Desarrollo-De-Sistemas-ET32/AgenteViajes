'use client';

import { useEffect, useRef } from 'react';

// Declaramos la interfaz de la ventana para incluir MercadoPago, evitando errores de TypeScript
declare global {
  interface Window {
    MercadoPago: any;
  }
}

const MP_Payment = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMercadoPago = async () => {
      const script = document.createElement('script');
      script.src = 'https://sdk.mercadopago.com/js/v2';
      script.async = true;

      script.onload = async () => {
        try {
          if (!window.MercadoPago) {
            console.error("MercadoPago SDK could not be loaded.");
            return;
          }

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const mp = new window.MercadoPago('YOUR_PUBLIC_KEY', {
            locale: 'es-AR'
          });

          const bricksBuilder = mp.bricks();

          const settings = {
            initialization: {
              amount: 10000,
              preferenceId: '<PREFERENCE_ID>',
            },
            customization: {
              visual: {
                style: {
                  theme: "dark",
                },
              },
            },
            callbacks: {
              onReady: () => {
                console.log('Payment Brick is ready');
              },
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onSubmit: ({ selectedPaymentMethod, formData }) => {
                return new Promise<void>((resolve, reject) => {
                  fetch("/process_payment", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                  })
                    .then((response) => response.json())
                    .then(() => {
                      resolve();
                    })
                    .catch((error) => {
                      console.error(error);
                      reject();
                    });
                });
              },
              onError: (error: any) => {
                console.error(error);
              },
            },
          };
          
          if (containerRef.current) {
            await bricksBuilder.create(
              "payment",
              containerRef.current.id,
              settings
            );
          }
        } catch (error) {
          console.error("Error al cargar el SDK de Mercado Pago:", error);
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadMercadoPago();
  }, []);

  return (
    <div id="paymentBrick_container" ref={containerRef}>
      {/* El brick se montará aquí */}
    </div>
  );
};

export default MP_Payment;
