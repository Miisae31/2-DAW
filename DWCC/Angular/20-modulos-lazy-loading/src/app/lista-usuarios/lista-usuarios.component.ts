import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuariosService } from '../usuarios/servizos/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
usuarios: Usuario[];

constructor(private servizoUsuarios: UsuariosService){}

ngOnInit(): void {
  this.usuarios = this.servizoUsuarios.verUsuarios();
}

}
