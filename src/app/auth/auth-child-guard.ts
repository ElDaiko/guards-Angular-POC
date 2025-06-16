import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService);
  const isLoggedIn = authService.isLoggedIn();

  console.log('👶 [CANACTIVATECHILD] AuthChildGuard ejecutándose...');
  console.log('👶 [CANACTIVATECHILD] Usuario autenticado:', isLoggedIn);
  console.log('👶 [CANACTIVATECHILD] Ruta hija:', childRoute.routeConfig?.path);
  console.log('👶 [CANACTIVATECHILD] URL completa:', state.url);

  if (!isLoggedIn) {
    console.log('👶 [CANACTIVATECHILD] ❌ Acceso DENEGADO a ruta hija');
    window.alert(
      '👶 [CANACTIVATECHILD] No tienes permisos para acceder a rutas hijas privadas.'
    );
  } else {
    console.log('👶 [CANACTIVATECHILD] ✅ Acceso PERMITIDO a ruta hija');
  }
  return isLoggedIn; // bloquea si es false
};
