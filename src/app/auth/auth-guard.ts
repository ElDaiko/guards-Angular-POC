import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = false; // simula si el usuario está logueado
  console.log('AuthGuard check:', isLoggedIn);
  if (!isLoggedIn) {
    window.alert('No tienes permisos para acceder a esta ruta privada.');
    // También puedes usar console.warn('No tienes permisos...');
  }
  return isLoggedIn; // bloquea si es false
};
