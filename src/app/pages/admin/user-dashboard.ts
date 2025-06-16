import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="user-dashboard">
      <h2>👤 Dashboard de Usuario</h2>
      <p>Esta página se muestra si eres usuario normal (NO admin)</p>
      <div class="user-content">
        <h3>Funciones de Usuario:</h3>
        <ul>
          <li>Ver tu perfil</li>
          <li>Cambiar configuraciones</li>
          <li>Ver historial</li>
        </ul>
      </div>
      <a [routerLink]="['/']" class="back-link">← Volver al Home</a>
    </div>
  `,
  styles: [
    `
      .user-dashboard {
        background-color: #4ecdc4;
        color: white;
        padding: 2rem;
        border-radius: 8px;
        margin: 1rem 0;
      }
      .user-content {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
      }
      .back-link {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        text-decoration: none;
        border-radius: 4px;
      }
    `,
  ],
})
export class UserDashboard {}
