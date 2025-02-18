import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  formularioLogin: FormGroup;

  constructor(private elaborador: FormBuilder) {
    this.formularioLogin = this.elaborador.group({
  // Cada control do formulario defínese mediante  un array, no que o primeiro elemento corresponde ao valor por defecto do campo, e o segundo elemento corresponde a un array con todos os validadores qeu se aplican ao campo
      emailUsuario: ["", [Validators.required]],
      contraseña: ["", [Validators.required]]
    })
  }
}
