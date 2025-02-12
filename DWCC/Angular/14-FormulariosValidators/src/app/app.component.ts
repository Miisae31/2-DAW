import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { validateHeaderValue } from "node:http";
import { debounceTime } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "13-Formularios-reactivos";
  formularioAccidente: FormGroup;

  // Declaramos unha propiedade de tipo FOrmBUilder (que nos permitirá crear de xeito simple o formulario reactivo )
  constructor(private elaborador: FormBuilder) {
    this.formularioAccidente = this.elaborador.group({
      // Cada control do formulario defínese mediante  un array, no que o primeiro elemento corresponde ao valor por defecto do campo, e o segundo elemento corresponde a un array con todos os validadores qeu se aplican ao campo
      numParte: ["", [Validators.required]],
      matricula: ["", [Validators.required]],
      gravidade: [-1],
      descricion: ["", [Validators.required, Validators.maxLength(300)]],
      data: [new Date().toISOString().split("T")[0], [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      telefono: ["", [Validators.required]],
      numVitimas: [1, [Validators.required]],
    });
    // Definimos que vai facer o comportamento do noso formulario cada vez que sufra un cambio

    this.formularioAccidente.valueChanges
      .pipe(debounceTime(500))
      .subscribe((valor) => {
        console.table(valor);
      });
  }

  rexistrar(evento: Event) {
    evento.preventDefault();

    if (this.formularioAccidente.valid && this.gravidadeValido) {
      console.table(this.formularioAccidente.value);
    } else {
      this.formularioAccidente.markAllAsTouched();
    }
  }

  // GETTERS (para facilitar o traballo cos campos de formulario)

  // ...existing code...

  get numParte() {
    return this.formularioAccidente.get("numParte");
  }

  get matricula() {
    return this.formularioAccidente.get("matricula");
  }

  get gravidade() {
    return this.formularioAccidente.get("gravidade");
  }

  get descricion() {
    return this.formularioAccidente.get("descricion");
  }

  get data() {
    return this.formularioAccidente.get("data");
  }

  get email() {
    return this.formularioAccidente.get("email");
  }

  get telefono() {
    return this.formularioAccidente.get("telefono");
  }

  get numVitimas() {
    return this.formularioAccidente.get("numVitimas");
  }

  get numParteValido(): boolean {
    return this.numParte.valid && this.numParte.touched;
  }

  get numParteInvalido(): boolean {
    return this.numParte.invalid && this.numParte.touched;
  }

  get matriculaValido(): boolean {
    return this.matricula.valid && this.matricula.touched;
  }

  get matriculaInvalido(): boolean {
    return this.matricula.invalid && this.matricula.touched;
  }

  get gravidadeValido(): boolean {
    return this.gravidade.value != -1 && this.gravidade.touched;
  }

  get gravidadeInvalido(): boolean {
    return this.gravidade.value == -1 && this.gravidade.touched;
  }
  get descricionValido(): boolean {
    return this.descricion.valid && this.descricion.touched;
  }

  get descricionInvalido(): boolean {
    return this.descricion.invalid && this.descricion.touched;
  }

  get dataValido(): boolean {
    return this.data.valid && this.data.touched;
  }

  get dataInvalido(): boolean {
    return this.data.invalid && this.data.touched;
  }

  get emailValido(): boolean {
    return this.email.valid && this.email.touched;
  }

  get emailInvalido(): boolean {
    return this.email.invalid && this.email.touched;
  }

  get telefonoValido(): boolean {
    return this.telefono.valid && this.telefono.touched;
  }

  get telefonoInvalido(): boolean {
    return this.telefono.invalid && this.telefono.touched;
  }

  get numVitimasValido(): boolean {
    return this.numVitimas.valid && this.numVitimas.touched;
  }

  get numVitimasInvalido(): boolean {
    return this.numVitimas.invalid && this.numVitimas.touched;
  }
}
