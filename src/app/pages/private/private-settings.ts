import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-private-settings',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="settings-container">
      <h2>🔧 Configuraciones Privadas</h2>
      <p>
        Esta es una ruta hija protegida por <strong>canActivateChild</strong>
      </p>
      <div class="info-box">
        <p>Si puedes ver esta página, significa que:</p>
        <ul>
          <li>✅ canMatch permitió que la ruta fuera considerada</li>
          <li>✅ canActivate permitió el acceso a la ruta padre</li>
          <li>✅ canActivateChild permitió el acceso a esta ruta hija</li>
        </ul>
      </div>
      <a [routerLink]="['/private']" class="back-link">← Volver a Private</a>
    </div>
  `,
  styles: [
    `
      .settings-container {
        padding: 1rem;
        background-color: #f8f9fa;
        border-radius: 8px;
        margin: 1rem 0;
      }
      .info-box {
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem 0;
      }
      .back-link {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
      }
      .back-link:hover {
        background-color: #0056b3;
      }
    `,
  ],
})
export class PrivateSettings {}
