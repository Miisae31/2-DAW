import { FormsModule } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "../servizos/usuarios.service";
import { Usuario } from "../usuario";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-lista-usuarios",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./lista-usuarios.component.html",
  styleUrl: "./lista-usuarios.component.css",
})
export class ListaUsuariosComponent {
  usuarios: Usuario[];
  nombre: string = "";
  rol: string = "";

  constructor(private servizo: UsuariosService) {}

  ngOnInit(): void {
    this.servizo.obterUsuarios().subscribe({
      next: (usuarios) => (this.usuarios = usuarios),
      error: (erro) => console.error(erro),
    });
  }

  anadirUsuario() {
    this.servizo.anadirUsuario(this.nombre, this.rol).subscribe({
      next: (usuario) => {
        this.usuarios.push(usuario); // Forzamos a actualización do array de usuarios cos datos de usaurio recien creado.
        this.nombre = "";
        this.rol = "";
      },
      error: (erro) => console.error(erro),
    });
  }

  mudarRol(usuario: Usuario) {
    this.servizo.modificarRol(usuario).subscribe({
      next: (usuarioActualizado) => {
        usuario.rol = usuarioActualizado.rol;
      },
      error: (erro) => console.error(erro),
    });
  }

  eliminarUsuario(id: string) {
    this.servizo.eliminarUsuario(id).subscribe({
      next: () => {
        this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
      },
      error: (erro) => console.error
    })
  }
}
