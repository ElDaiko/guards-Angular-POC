import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  authService = inject(AuthService);

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userRole(): string {
    return this.authService.getRole();
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  get isUser(): boolean {
    return this.authService.isUser();
  }

  toggleAuth(): void {
    this.authService.toggleAuth();
    // Si se autentica, por defecto le damos rol 'user'
    if (this.authService.isLoggedIn()) {
      this.authService.setRole('user');
    }
  }

  toggleRole(): void {
    this.authService.toggleRole();
  }
}
