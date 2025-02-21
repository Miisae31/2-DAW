import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from "@angular/common";
import { ServizoLoginService } from "../services/servizo-login.service";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-manage-users",
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule],
  templateUrl: "./manage-users.component.html",
  styleUrl: "./manage-users.component.css",
})
export class ManageUsersComponent {
  usuarios: any[] = []; // Array de usuarios

  constructor(private servicio: ServizoLoginService, private router: Router) {  // Constructor
    this.usuarios = servicio.getUsers(); // Obtenemos los usuarios
  }

  eliminarUsuario(indice: number) { // Función para eliminar un usuario
    this.servicio.destroyUser(indice);
  }
  editarUsuario(indice: number) { // Función para editar un usuario
    this.router.navigate(["/edit-users", indice])
  }
}
