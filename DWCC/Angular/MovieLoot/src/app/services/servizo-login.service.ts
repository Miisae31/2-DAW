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

  añadirUsuario(usuario: any) { // Añadir un usuario
    if(isPlatformBrowser(this.platformId)) {
      const usuarioLogueado = localStorage.getItem("usuarioLogueado");
      if (usuarioLogueado) {
        const usuario = JSON.parse(usuarioLogueado);
        if (usuario.rol !== "administrador") {
        usuario.rol = "usuario";
        }
      }
    }
    this.usuarios.push(usuario); // Añadir el usuario al array
    this.actualizarUsuarios(); // Emitir cambios
    
  }

  private actualizarUsuarios() { // Método para emitir cambios en el array de usuarios
    this.usuarios$.next(this.usuarios); // Emitir cambios
    if(isPlatformBrowser(this.platformId)) { // Si se está ejecutando en el navegador
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios)); // Guardar los usuarios en el almacenamiento local
      }
  }

  loginUsuario(username: string, contrasenha: string): boolean { // Método para loguear un usuario
    const usuario = this.usuarios.find( // Buscar el usuario en el array
      (usuario: any) => 
        usuario.username === username && usuario.contrasenha === contrasenha // Comprobar si el usuario y la contraseña coinciden
    );

    if (usuario) {
      if(isPlatformBrowser(this.platformId)) { // Si se está ejecutando en el navegador
      localStorage.setItem("usuarioLogueado", JSON.stringify(usuario)); // Guardar el usuario logueado en el almacenamiento local
      }
      this.autenticado$.next(true); // Emitir que el usuario está autenticado
      return true;
    } else {
      return false;
    }
  }

  logoutUsuario() { // Método para desloguear un usuario
    if(isPlatformBrowser(this.platformId)) { // Si se está ejecutando en el navegador
    localStorage.removeItem("usuarioLogueado"); // Eliminar el usuario logueado del almacenamiento local
    }
    this.autenticado$.next(false); // Emitir que el usuario no está autenticado
  }

  subcribirse$(): Observable<any[]> { // Método para suscribirse al observable de usuarios
    return this.usuarios$.asObservable(); // Devuelve el observable de usuarios
  }

  obtenerAutenticacion(): Observable<boolean> { // Método para obtener la autenticación
    return this.autenticado$.asObservable(); // Devuelve el observable de autenticación
  }

  isAdmin(): boolean {
    if(isPlatformBrowser(this.platformId)) { // Si se está ejecutando en el navegador
    const usuarioLogueado = localStorage.getItem("usuarioLogueado"); // Obtener el usuario logueado
    
    if (usuarioLogueado) { // Si hay un usuario logueado
      const usuario = JSON.parse(usuarioLogueado); // Convertir el usuario logueado a objeto
      return usuario.rol === "administrador";  // Verifica si el rol es 'administrador'
    }
  }
    return false;  // Devuelve false si no hay usuario logueado o no es administrador
  
  }
  

  isLogged(): boolean { // Método para comprobar si el usuario está autenticado
    return this.autenticado$.value;
  }

  getUsers(): any[] { // Método para obtener los usuarios
    return this.usuarios;
  }

  destroyUser(indice: number) { // Método para eliminar un usuario
    this.usuarios.splice(indice, 1); // Eliminar el usuario en el índice especificado
    this.actualizarUsuarios();  // Emitir cambios
  }

  editUser(indice: number, usuarioEditado: any) { // Método para modificar un usuario

  
    // Modificar el usuario en el índice especificado
    this.usuarios[indice] = { ...this.usuarios[indice], ...usuarioEditado }; // Esto crea un nuevo objeto con las propiedades del usuario original y las propiedades del usuario editado y lo asigna al usuario original
  
    this.actualizarUsuarios(); // Emitir cambios
  }
  
}
