import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContidoComponent } from './contido/contido.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContidoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '20-input-output';
  compartida: number = 0;

  incrementar() {
    this.compartida = this.compartida+1;
  }

  recibirDatos(numero: number): void {
    this.compartida = numero;
  }
}
