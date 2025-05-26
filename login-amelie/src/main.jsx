import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="agustin-oliverio-suarez.us.auth0.com"
    clientId="3zDasnvOgmRMvmc1OUs8NL7ea3pwRM9F"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://amelie-auth', // Este es el "audience" de tu API
    }}
  >
    <App />
  </Auth0Provider>,
)
