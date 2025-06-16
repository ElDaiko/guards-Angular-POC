import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="admin-panel">
      <h2>🔐 Panel de Administrador</h2>
      <p>Esta página solo se muestra si eres ADMIN</p>
      <div class="admin-content">
        <h3>Funciones de Admin:</h3>
        <ul>
          <li>Gestionar usuarios</li>
          <li>Ver estadísticas</li>
          <li>Configurar sistema</li>
        </ul>
      </div>
      <a [routerLink]="['/']" class="back-link">← Volver al Home</a>
    </div>
  `,
  styles: [
    `
      .admin-panel {
        background-color: #ff6b6b;
        color: white;
        padding: 2rem;
        border-radius: 8px;
        margin: 1rem 0;
      }
      .admin-content {
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
export class AdminPanel {}
