import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = false; // simula si el usuario está logueado
  console.log('AuthGuard check:', isLoggedIn);
  return isLoggedIn; // bloquea si es false
};
