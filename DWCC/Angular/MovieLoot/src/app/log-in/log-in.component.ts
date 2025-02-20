import { ServizoLoginService } from './../services/servizo-login.service';
import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
@Component({
  selector: "app-log-in",
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: "./log-in.component.html",
  styleUrl: "./log-in.component.css",
})
export class LogInComponent {
  formularioLogin: FormGroup;
  errorMensaje: string = "";

  constructor(
    private elaborador: FormBuilder,
    private servicio: ServizoLoginService,
    private router: Router
  ) {
    this.formularioLogin = this.elaborador.group({
      // Cada control do formulario defínese mediante  un array, no que o primeiro elemento corresponde ao valor por defecto do campo, e o segundo elemento corresponde a un array con todos os validadores qeu se aplican ao campo
      username: ["", [Validators.required]],
      contrasenha: ["", [Validators.required]],
    });
  }

  onLogin() {
    if (this.formularioLogin.valid) {
      const username = this.formularioLogin.value.username;
      const contrasenha = this.formularioLogin.value.contrasenha;

      const usuarioAutenticado = this.servicio.loginUsuario(
        username,
        contrasenha
      );

      if (usuarioAutenticado) {
        this.router.navigate(["inicio"]);
      } else {
        this.errorMensaje = "Usuario o contraseña incorrectos";
      }
    }
  }

  isLogged() {
    return this.servicio.isLogged();
  }
  
}
