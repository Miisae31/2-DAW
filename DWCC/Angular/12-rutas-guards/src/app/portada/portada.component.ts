import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent implements OnInit {
  usuario: string | null = null; // A propiedade "usuario" pode ter un valor string (se hai sesión iniciada) ou ser nulo (se é usuario convidado)

  constructor(private router: Router) {}

  // Este método pecha a sesión eliminando os datos do usuario de sessionStorage
  pecharSesion() {
    sessionStorage.removeItem("usuario"); // Eliminamos a entrada con clave "usuario"
    this.router.navigate(['/']); // Rediriximos á páxina de login
  }

  ngOnInit(): void {
    this.usuario = sessionStorage.getItem("usuario"); // Recuperamos o dato do usuario actual (se o hai) dende sessionStorage e gardámolo na propiedade "usuario"
  }
}
