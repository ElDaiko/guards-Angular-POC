import { Injectable } from '@angular/core';

type UserRole = 'guest' | 'user' | 'admin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: UserRole = 'guest';

  constructor() {}

  login(): void {
    this.isAuthenticated = true;
    console.log('Usuario logueado');
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = 'guest';
    console.log('Usuario deslogueado');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  toggleAuth(): void {
    this.isAuthenticated = !this.isAuthenticated;
    if (!this.isAuthenticated) {
      this.userRole = 'guest';
    }
    console.log('Estado de autenticación cambiado:', this.isAuthenticated);
  }

  // Nuevos métodos para roles
  setRole(role: UserRole): void {
    this.userRole = role;
    console.log('Rol cambiado a:', role);
  }

  getRole(): UserRole {
    return this.userRole;
  }

  isAdmin(): boolean {
    return this.isAuthenticated && this.userRole === 'admin';
  }

  isUser(): boolean {
    return this.isAuthenticated && this.userRole === 'user';
  }

  toggleRole(): void {
    if (this.isAuthenticated) {
      this.userRole = this.userRole === 'admin' ? 'user' : 'admin';
      console.log('Rol alternado a:', this.userRole);
    }
  }
}
