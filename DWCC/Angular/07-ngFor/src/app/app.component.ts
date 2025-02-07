import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '07-ngFor';
  equipos: string[];

  constructor() {
    this.equipos = ["Celta de Vigo", "Real Madrid", "Barcelona", "Valencia", "Athletic Club", "Atlético de Madrid", "Real Betis Balompié"];
  }
}
