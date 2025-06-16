import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Private } from './pages/private/private';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'private',
    component: Private,
    canActivate: [authGuard],
  },
];
