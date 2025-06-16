import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from './auth.service';

export const adminMatchGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const isAdmin = authService.isAdmin();

  console.log('🔴 [ADMIN-CANMATCH] ¿Es admin?', isAdmin);
  console.log('🔴 [ADMIN-CANMATCH] Ruta:', route.path);

  if (isAdmin) {
    console.log(
      '🔴 [ADMIN-CANMATCH] ✅ SÍ es admin - Esta ruta SERÁ considerada'
    );
  } else {
    console.log(
      '🔴 [ADMIN-CANMATCH] ❌ NO es admin - Esta ruta NO será considerada'
    );
  }

  return isAdmin;
};
