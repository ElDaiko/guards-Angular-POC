import { Routes } from '@angular/router';
import { Private } from './private';
import { PrivateSettings } from './private-settings';
import { PrivateProfile } from './private-profile';

// Definimos las rutas hijas para el componente Private
export const privateChildRoutes: Routes = [
  {
    path: '',
    component: Private,
  },
  {
    path: 'settings',
    component: PrivateSettings,
  },
  {
    path: 'profile',
    component: PrivateProfile,
  },
];
