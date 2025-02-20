import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import usuariosJson from '../../../public/data/usuarios.json';  // Importación directa del JSON
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class ServizoLoginService {
  usuarios: any[];
  usuarios$: BehaviorSubject<any[]>;
  autenticado$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
    this.usuarios = [];
    this.usuarios$ = new BehaviorSubject(this.usuarios);

    if(isPlatformBrowser(this.platformId)) {
      const usuarioLogueado: boolean =
      localStorage.getItem("usuarioLogueado") !== null;
      this.autenticado$ = new BehaviorSubject<boolean>(usuarioLogueado);

      const usuariosLocalStorage = localStorage.getItem("usuarios");
      if (!usuariosLocalStorage || JSON.parse(usuariosLocalStorage).length === 0) {
        this.cargarUsuariosPorDefecto();

      } else {
        this.usuarios = JSON.parse(usuariosLocalStorage);
        this.usuarios$.next(this.usuarios);
      }
    }
    
    
  }

   // Cargar los usuarios desde el archivo JSON importado
   cargarUsuariosPorDefecto() {
    if (usuariosJson) {
      this.usuarios = usuariosJson;
      this.usuarios$.next(this.usuarios);
      if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      }
    }
  }

  añadirUsuario(usuario: any) {
    usuario.rol = "usuario";
    this.usuarios.push(usuario);
    this.actualizarUsuarios();
    
  }

  private actualizarUsuarios() {
    this.usuarios$.next(this.usuarios);
    if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      }
  }

  loginUsuario(username: string, contrasenha: string): boolean {
    const usuario = this.usuarios.find(
      (usuario: any) =>
        usuario.username === username && usuario.contrasenha === contrasenha
    );

    if (usuario) {
      if(isPlatformBrowser(this.platformId)) {
      localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
      }
      this.autenticado$.next(true);
      return true;
    } else {
      return false;
    }
  }

  logoutUsuario() {
    if(isPlatformBrowser(this.platformId)) {
    localStorage.removeItem("usuarioLogueado");
    }
    this.autenticado$.next(false);
  }

  subcribirse$(): Observable<any[]> {
    return this.usuarios$.asObservable();
  }

  obtenerAutenticacion(): Observable<boolean> {
    return this.autenticado$.asObservable();
  }

  isAdmin(): boolean {
    if(isPlatformBrowser(this.platformId)) {
    const usuarioLogueado = localStorage.getItem("usuarioLogueado");
    
    if (usuarioLogueado) {
      const usuario = JSON.parse(usuarioLogueado);
      return usuario.rol === "administrador";  // Verifica si el rol es 'administrador'
    }
  }
    return false;  // Devuelve false si no hay usuario logueado o no es administrador
  
  }
  

  isLogged(): boolean {
    return this.autenticado$.value;
  }

  getUsers(): any[] {
    return this.usuarios;
  }

  destroyUser(indice: number) {
    this.usuarios.splice(indice, 1); // Eliminar el usuario en el índice especificado
    this.actualizarUsuarios(); 
  }

  editUser(indice: number, usuarioEditado: any) {

  
    // Modificar el usuario en el índice especificado
    this.usuarios[indice] = { ...this.usuarios[indice], ...usuarioEditado };
  
    this.actualizarUsuarios(); // Emitir cambios
  }
  
}
