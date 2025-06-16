import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { authGuard } from './auth/auth-guard';
import { authChildGuard } from './auth/auth-child-guard';
import { authMatchGuard } from './auth/auth-match-guard';
import { adminMatchGuard } from './auth/admin-match-guard';
import { userMatchGuard } from './auth/user-match-guard';
import { privateChildRoutes } from './pages/private/private.routes';
import { AdminPanel } from './pages/admin/admin-panel';
import { UserDashboard } from './pages/admin/user-dashboard';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'private',
    canActivate: [authGuard],
    canActivateChild: [authChildGuard],
    canMatch: [authMatchGuard],
    children: privateChildRoutes,
  },
  // ⭐ AQUÍ ESTÁ LA MAGIA DE canMatch ⭐
  // Dos configuraciones DIFERENTES para la misma ruta '/dashboard'
  // canMatch decide cuál usar
  {
    path: 'dashboard',
    component: AdminPanel,
    canMatch: [adminMatchGuard], // Solo si es ADMIN
  },
  {
    path: 'dashboard',
    component: UserDashboard,
    canMatch: [userMatchGuard], // Solo si es USER normal
  },
  // Ruta wildcard para páginas no encontradas
  {
    path: '**',
    component: NotFound,
  },
];
