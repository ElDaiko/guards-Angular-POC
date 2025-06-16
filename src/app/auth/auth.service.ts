import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  login(): void {
    this.isAuthenticated = true;
    console.log('Usuario logueado');
  }

  logout(): void {
    this.isAuthenticated = false;
    console.log('Usuario deslogueado');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  toggleAuth(): void {
    this.isAuthenticated = !this.isAuthenticated;
    console.log('Estado de autenticación cambiado:', this.isAuthenticated);
  }
}
