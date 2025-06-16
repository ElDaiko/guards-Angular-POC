import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { authGuard } from './auth/auth-guard';
import { authChildGuard } from './auth/auth-child-guard';
import { authMatchGuard } from './auth/auth-match-guard';
import { privateChildRoutes } from './pages/private/private.routes';

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
];
