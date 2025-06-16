import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="not-found-container">
      <h1>🚫 404 - Página No Encontrada</h1>
      <div class="explanation">
        <p>Esta página aparece cuando:</p>
        <ul>
          <li>La ruta no existe</li>
          <li>
            <strong>canMatch</strong> de todas las configuraciones retornó
            <code>false</code>
          </li>
          <li>Angular no encontró ninguna ruta que coincida</li>
        </ul>
      </div>
      <a [routerLink]="['/']" class="home-link">🏠 Volver al Home</a>
    </div>
  `,
  styles: [
    `
      .not-found-container {
        text-align: center;
        padding: 3rem;
        background-color: #fff3cd;
        border: 2px solid #ffc107;
        border-radius: 8px;
        margin: 2rem;
      }
      .explanation {
        background-color: #f8f9fa;
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
        text-align: left;
      }
      .home-link {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        margin-top: 1rem;
      }
    `,
  ],
})
export class NotFound {}
