import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-private-profile',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="profile-container">
      <h2>👤 Perfil Privado</h2>
      <p>
        Esta es otra ruta hija protegida por <strong>canActivateChild</strong>
      </p>
      <div class="info-box">
        <p>Los guards se ejecutaron en este orden:</p>
        <ol>
          <li>🔍 canMatch - Decidió si la ruta debe ser considerada</li>
          <li>🔐 canActivate - Validó el acceso a la ruta padre (/private)</li>
          <li>
            👶 canActivateChild - Validó el acceso a esta ruta hija
            (/private/profile)
          </li>
        </ol>
      </div>
      <a [routerLink]="['/private']" class="back-link">← Volver a Private</a>
    </div>
  `,
  styles: [
    `
      .profile-container {
        padding: 1rem;
        background-color: #fff3cd;
        border-radius: 8px;
        margin: 1rem 0;
      }
      .info-box {
        background-color: #d1ecf1;
        border: 1px solid #bee5eb;
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem 0;
      }
      .back-link {
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: #28a745;
        color: white;
        text-decoration: none;
        border-radius: 4px;
      }
      .back-link:hover {
        background-color: #1e7e34;
      }
    `,
  ],
})
export class PrivateProfile {}
