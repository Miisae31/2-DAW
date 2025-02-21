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
    this.formularioLogin = this.elaborador.group({ // Se crea el formulario de login
      // Se establecen los campos del formulario
      username: ["", [Validators.required]], 
      contrasenha: ["", [Validators.required]],
    });
  }

  onLogin() { // Función que se ejecuta al hacer click en el botón de login
    if (this.formularioLogin.valid) { // Si el formulario es válido
      const username = this.formularioLogin.value.username; // Se obtiene el valor del campo username
      const contrasenha = this.formularioLogin.value.contrasenha; // Se obtiene el valor del campo contraseña

      const usuarioAutenticado = this.servicio.loginUsuario( // Se intenta loguear al usuario
        username,
        contrasenha
      );

      if (usuarioAutenticado) { // Si el usuario se loguea correctamente
        this.router.navigate(["inicio"]); // Se redirige al usuario a la página de inicio
      } else {  // Si el usuario no se loguea correctamente
        this.errorMensaje = "Usuario o contraseña incorrectos"; // Se muestra un mensaje de error
      }
    }
  }

  isLogged() { // Función que devuelve si el usuario está logueado
    return this.servicio.isLogged();
  }

  ngOnInit() { // Función que se ejecuta al iniciar el componente
    this.servicio.subcribirse$().subscribe((usuarios) => { // Se suscribe al servicio de login
      console.log("Usuarios actualizados", usuarios);
    })
  }
  
}
