import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  texto: string = "Hola Mundo"
  hoxe: Date = new Date();
  numero: number = 3.14159265359;
  porcentaxe = 0.457;
  cartos = 1800;
}
