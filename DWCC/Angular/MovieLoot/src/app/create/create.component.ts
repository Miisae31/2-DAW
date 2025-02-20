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
      rol: ["", [Validators.required]],
    });
  }

  registrar(evento: Event) {
    evento.preventDefault();

    if (this.formularioCreate.valid) {
      this.servicio.añadirUsuario(this.formularioCreate.value);
      this.router.navigate(['/manage-users']); // Redirige después de añadir el usuario
    } else {
      this.formularioCreate.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.servicio.subcribirse$().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  isAdmin() {
    return this.servicio.isAdmin();
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
