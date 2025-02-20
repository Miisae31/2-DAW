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
  usuarios: any[] = [];

  constructor(private servicio: ServizoLoginService, private router: Router) {
    this.usuarios = servicio.getUsers();
    console.log(this.usuarios);
  }

  eliminarUsuario(indice: number) {
    this.servicio.destroyUser(indice);
  }
  editarUsuario(indice: number) {
    this.router.navigate(["/edit-users", indice])
  }
}
