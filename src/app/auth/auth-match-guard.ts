import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authMatchGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const isLoggedIn = authService.isLoggedIn();

  console.log('🔍 [CANMATCH] AuthMatchGuard ejecutándose...');
  console.log('🔍 [CANMATCH] Usuario autenticado:', isLoggedIn);
  console.log('🔍 [CANMATCH] Ruta:', route.path);
  console.log(
    '🔍 [CANMATCH] Segmentos URL:',
    segments.map((s) => s.path).join('/')
  );

  if (!isLoggedIn) {
    console.log(
      '🔍 [CANMATCH] ❌ Acceso DENEGADO - La ruta no será considerada'
    );
    window.alert(
      '🔍 [CANMATCH] No tienes permisos para acceder a este grupo de rutas.'
    );
  } else {
    console.log('🔍 [CANMATCH] ✅ Acceso PERMITIDO - La ruta será considerada');
  }
  return isLoggedIn; // bloquea si es false
};
