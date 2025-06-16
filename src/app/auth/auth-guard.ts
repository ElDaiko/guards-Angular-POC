import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const isLoggedIn = authService.isLoggedIn();

  console.log('🔐 [CANACTIVATE] AuthGuard ejecutándose...');
  console.log('🔐 [CANACTIVATE] Usuario autenticado:', isLoggedIn);
  console.log('🔐 [CANACTIVATE] URL:', state.url);

  if (!isLoggedIn) {
    console.log('🔐 [CANACTIVATE] ❌ Acceso DENEGADO');
    window.alert(
      '🔐 [CANACTIVATE] No tienes permisos para acceder a esta ruta privada.'
    );
  } else {
    console.log('🔐 [CANACTIVATE] ✅ Acceso PERMITIDO');
  }
  return isLoggedIn; // bloquea si es false
};
