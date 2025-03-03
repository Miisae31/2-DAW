import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from "@angular/common";
import { ServizoLoginService } from "../services/servizo-login.service";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-administracion",
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule],
  templateUrl: "./administracion.component.html",
  styleUrl: "./administracion.component.css",
})
export class AdministracionComponent {
  usuarios: any[] = []; // Array de usuarios

  constructor(private servicio: ServizoLoginService, private router: Router) {  // Constructor
    this.usuarios = servicio.getUsers(); // Obtenemos los usuarios
  }

  eliminarUsuario(indice: number) { // Función para eliminar un usuario
    this.servicio.destroyUser(indice);
  }
  editarUsuario(indice: number) { // Función para editar un usuario
    this.router.navigate(["/edit-users", indice]) // Redirige a la página de edición de usuarios con el índice del usuario como parámetro
  }
}
