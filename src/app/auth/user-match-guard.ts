import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from './auth.service';

export const userMatchGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const isUser = authService.isUser();

  console.log('🔵 [USER-CANMATCH] ¿Es usuario normal?', isUser);
  console.log('🔵 [USER-CANMATCH] Ruta:', route.path);

  if (isUser) {
    console.log(
      '🔵 [USER-CANMATCH] ✅ SÍ es usuario - Esta ruta SERÁ considerada'
    );
  } else {
    console.log(
      '🔵 [USER-CANMATCH] ❌ NO es usuario - Esta ruta NO será considerada'
    );
  }

  return isUser;
};
