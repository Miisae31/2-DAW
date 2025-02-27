import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaUsuariosComponent } from "./lista-usuarios/lista-usuarios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaUsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
}
