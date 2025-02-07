import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-OlaMundo';
  usuario: Usuario = {
    uid: 1,
    nome: "Saínza Castro",
    login: "sainzac",
    email: "sainzacastro@empresa.gal",
    contrasinal: "abc123..",
    empresa: "Empresa Galicia",
    cambiarDepartamento: (depto) => {
      this.usuario.departamento = depto;
    }
  }

  clicar() {
    this.usuario.cambiarDepartamento("Desenvolvemento");
  }
}
