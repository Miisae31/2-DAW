import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompOcultaComponent } from './comp-oculta/comp-oculta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CompOcultaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '05-ngIf';
  cargar: boolean; // Declaramos a propiedade de clase de tipo booleano

  constructor() {
    this.cargar = true; // Inicializamos a propiedade "cargar"
  }
}
