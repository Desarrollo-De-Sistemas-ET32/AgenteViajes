// src/common/middleware/auth.middleware.ts
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

export const checkJwt = auth({
  audience: 'https://amelie-auth',
  issuerBaseURL: 'https://agustin-oliverio-suarez.us.auth0.com/',
  tokenSigningAlg: 'RS256',
});

export const checkScopes = requiredScopes('read:messages');
