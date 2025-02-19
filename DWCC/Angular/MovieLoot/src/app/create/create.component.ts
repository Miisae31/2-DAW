import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { debounceTime } from "rxjs";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ServizoLoginService } from "../servizo-login.service";
@Component({
  selector: "app-create",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: "./create.component.html",
  styleUrl: "./create.component.css",
})
export class CreateComponent {
  formularioCreate: FormGroup;
  usuarios: any[];
  constructor(private elaborador: FormBuilder, private servicio: ServizoLoginService) {
    this.formularioCreate = this.elaborador.group({
      // Cada control do formulario defínese mediante  un array, no que o primeiro elemento corresponde ao valor por defecto do campo, e o segundo elemento corresponde a un array con todos os validadores qeu se aplican ao campo
      emailUsuario: ["", [Validators.required]],
      contrasenhaUsuario: ["", [Validators.required]],
      rol: ["", [Validators.required]],
    });

  
  }

  registrar(evento: Event) {
    evento.preventDefault();

    if (this.formularioCreate.valid) {
      console.table(this.formularioCreate.value);
      this.servicio.añadirUsuario(this.formularioCreate.value);
    } else {
      this.formularioCreate.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.servicio.subcribirse$().subscribe((usuarios) => {
      this.usuarios = usuarios;
    })
  }

  // GETTERS (para facilitar o traballo cos campos de formulario)

  get emailUsuario() {
    return this.formularioCreate.get("emailUsuario");
  }

  get contrasenha() {
    return this.formularioCreate.get("contrasenha");
  }

  get rol() {
    return this.formularioCreate.get("rol");
  }

  get emailUsuarioValido(): boolean {
    return (this.emailUsuario?.valid && this.emailUsuario?.touched) || false;
  }

  get emailUsuarioInvalido(): boolean {
    return (this.emailUsuario?.invalid && this.emailUsuario?.touched) || false;
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
