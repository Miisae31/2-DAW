import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ServizoLoginService } from "../services/servizo-login.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: "app-edit-users",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, RouterModule],
  templateUrl: "./edit-users.component.html",
  styleUrl: "./edit-users.component.css",
})
export class EditUsersComponent {
  formularioCreate: FormGroup; // Formulario de creación de usuario
  usuarios: any[]; // Array de usuarios
  usuarioEditado: any;   // Usuario a editar
  indice: number; // Índice del usuario a editar
  constructor(
    private elaborador: FormBuilder,
    private servicio: ServizoLoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formularioCreate = this.elaborador.group({ // Inicialización del formulario
      // Campos del formulario
      username: ["", [Validators.required]], 
      contrasenha: ["", [Validators.required]], 
      rol: ["", [Validators.required]], 
    });
  }

 


  
  editar(evento: Event) { // Método para editar un usuario
    evento.preventDefault();
    if (this.formularioCreate.valid) {
      const usuarioModificado = this.formularioCreate.value; // Obtiene los valores del formulario
      this.servicio.editUser(this.indice, usuarioModificado); // Llamada al servicio para editar
      this.router.navigate(['/administracion']); // Redirige después de editar el usuario
    } else {
      this.formularioCreate.markAllAsTouched(); // Marca los campos como tocados
    }
  }

  ngOnInit(): void { // Método que se ejecuta al iniciar el componente
    this.servicio.subcribirse$().subscribe((usuarios) => { // Obtiene los usuarios
      this.usuarios = usuarios; // Guarda los usuarios

      this.route.params.subscribe((params: any) => { // Obtiene los parámetros de la URL
        this.indice = params["indice"]; // Obtiene el índice del usuario a editar
        this.usuarioEditado = this.usuarios[this.indice]; // Obtiene el usuario a editar
  
        if (this.usuarioEditado) { // Si el usuario a editar existe
          this.formularioCreate.patchValue({ // Rellena el formulario con los datos del usuario
            username: this.usuarioEditado.username, 
            contrasenha: this.usuarioEditado.contrasenha,
            rol: this.usuarioEditado.rol,
          });
        }
      });
    });
    
  }



  // GETTERS (para facilitar o traballo cos campos de formulario)

  get username() {
    return this.formularioCreate.get("username");
  }

  get contrasenha() {
    return this.formularioCreate.get("contrasenha");
  }

  get rol() {
    return this.formularioCreate.get("rol");
  }

  get usernameValido(): boolean {
    return (this.username?.valid && this.username?.touched) || false;
  }

  get usernameInvalido(): boolean {
    return (this.username?.invalid && this.username?.touched) || false;
  }

  get contrasenhaUsuarioValida(): boolean {
    return (this.contrasenha?.valid && this.contrasenha?.touched) || false;
  }

  get contrasenhaUsuarioInvalida(): boolean {
    return (this.contrasenha?.invalid && this.contrasenha?.touched) || false;
  }

  get rolValido(): boolean {
    return (this.rol?.valid && this.rol?.touched) || false;
  }

  get rolInvalido(): boolean {
    return (this.rol?.invalid && this.rol?.touched) || false;
  }

  // this.formulario.patchValue(____); (Meter objeto dentro y ya rellena el formulario)
}
