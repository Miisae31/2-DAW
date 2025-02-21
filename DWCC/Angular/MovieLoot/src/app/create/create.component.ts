import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { HeaderComponent } from "../header/header.component";
import { ServizoLoginService } from "../services/servizo-login.service";
import { Router } from "@angular/router";
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-create",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent, RouterModule],
  templateUrl: "./create.component.html",
  styleUrl: "./create.component.css",
})
export class CreateComponent {
  formularioCreate: FormGroup;
  usuarios: any[];
  constructor(
    private elaborador: FormBuilder,
    private servicio: ServizoLoginService,
    private router: Router
  ) {
    this.formularioCreate = this.elaborador.group({
      // Cada control do formulario defínese mediante  un array, no que o primeiro elemento corresponde ao valor por defecto do campo, e o segundo elemento corresponde a un array con todos os validadores qeu se aplican ao campo
      username: ["", [Validators.required]],
      contrasenha: ["", [Validators.required]],
      rol: ["usuario", [Validators.required]],
    });
  }

  registrar(evento: Event) { // Método para añadir un usuario
    evento.preventDefault(); // Evita que se recargue la página

    if (this.formularioCreate.valid) { // Si el formulario es válido
      this.servicio.añadirUsuario(this.formularioCreate.value); // Añade el usuario
      this.router.navigate(['/manage-users']); // Redirige después de añadir el usuario
    } else {
      this.formularioCreate.markAllAsTouched(); // Marca todos los campos como tocados
    }
  }

  ngOnInit(): void { // Método que se ejecuta al iniciar el componente
    this.servicio.subcribirse$().subscribe((usuarios) => { // Se suscribe al observable de usuarios
      this.usuarios = usuarios;  // Asigna los usuarios a la variable usuarios
    });
  }

  isAdmin() {
    return this.servicio.isAdmin(); // Comprueba si el usuario es administrador
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
}
