import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formularioLogin: FormGroup;
  navegador: boolean = isPlatformBrowser(inject(PLATFORM_ID)); // Creamos unha propiedade que servirá para indicar que a nosa aplicación está a correr sobre un navegador

  constructor(private fb: FormBuilder, private router: Router) {
    this.formularioLogin = fb.group({
      usuario: [],
      contrasinal: []
    });
  }

  // Este método toma os datos do formulario, garda o nome de usuario en sessionStorage e redirixe cara á compoñente "Portada"
  iniciarSesion() {
    // Comprobamos que o campo "usuario" do formulario conteña datos
    if (this.formularioLogin.value.usuario) {
      if (this.navegador) {
        sessionStorage.setItem("usuario", this.formularioLogin.value.usuario); // Gardamos o valor do nome de usuario en sessionStorage coa clave "usuario" para representar que hai unha sesión de usuario iniciado
      }
      this.router.navigate(['/portada']); // Rediriximos á páxina de portada
    }
  }

  entrarConvidado() {
    this.router.navigate(['/portada']); // Rediriximos á páxina de portada
  }
}
