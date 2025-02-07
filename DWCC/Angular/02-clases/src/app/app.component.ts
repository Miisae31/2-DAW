import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Grupo } from './grupo';
import { Usuario } from './usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-clases';

  // Inicializamos dous obxectos da clase "Grupo" usando o seu construtor
  administracion = new Grupo(0, 'Administración');
  desenvolvemento = new Grupo(1, 'Desenvolvemento');

  // Inicializamos un obxecto da clase "Usuario" usando o seu construtor
  sainza = new Usuario(0, 'Saínza Castro Deibe', 'sainzacd', 'sainzacd@empresa.gal', 'abc123..', [this.administracion, this.desenvolvemento]);
}
