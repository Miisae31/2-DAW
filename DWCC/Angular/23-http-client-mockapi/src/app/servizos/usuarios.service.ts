import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../usuario";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  private apiUrl = "https://67bcaac3ed4861e07b3b793b.mockapi.io/usuarios";

  constructor(private cliente: HttpClient) {}

  // Metodo para recuperar los datos de todos los usuarios
  obterUsuarios(): Observable<Usuario[]> {
    return this.cliente.get<Usuario[]>(this.apiUrl);
  }

  // Metodo para actualizar los datos de un usuario
  modificarRol(usuario: Usuario): Observable<Usuario> {
    let novoRol = usuario.rol === "administrador" ? "usuario" : "administrador";

    return this.cliente.put<Usuario>(this.apiUrl + "/" + usuario.id, {
      rol: novoRol,
    });
  }

  // Metodo para agregar un usuario
  anadirUsuario(nombre: string, rol: string): Observable<Usuario> {
    return this.cliente.post<Usuario>(this.apiUrl, { nombre, rol });
  }

  // Metodo para eliminar un usuario
  eliminarUsuario(id: string): Observable<Usuario> {
    return this.cliente.delete<Usuario>(this.apiUrl + "/" + id);
  }
}
