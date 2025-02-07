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
  title = '13-ngClass-ngStyle';
  estado: string = "Activo";
  activo: boolean = true;

  // Esta método conmuta entre os valores do sistema activo e inactivo modificando as propiedades necesarias (activo e estado)
  mudarEstado(): void {
    if (this.activo) {
      this.activo = false;
      this.estado = "Inactivo"
    } else {
      this.activo = true;
      this.estado = "Activo";
    }
  }
}
