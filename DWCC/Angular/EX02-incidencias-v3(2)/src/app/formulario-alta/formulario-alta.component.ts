import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IncidenciasService } from '../incidencias.service';

@Component({
  selector: 'app-formulario-alta',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-alta.component.html',
  styleUrl: './formulario-alta.component.css'
})
export class FormularioAltaComponent {
  formulario: FormGroup; // Declaramos unha propiedade de tipo FormGroup (que permite acceder a todos os datos do formulario a través dun único obxecto)

  constructor(private servizo: IncidenciasService) {
    // Incializamos o FormGroup "formulario" indicando que campos ten e como corresponden cos distintos controis de formulario no HTML
    this.formulario = new FormGroup({
      data: new FormControl(),
      descricion: new FormControl(),
      usuario: new FormControl(),
      nivel: new FormControl()
    })
  }

  // Este método execútase cando se preme o botón de "Crear" no HTML
  onSubmit() {
    let datos = this.formulario.value; // Extraemos os datos do formulario
    datos.solucionada = false; // Engadimos a propiedade "solucionada" ao obxecto que contén os datos do formulario
    this.servizo.crearIncidencia(datos); // Engadimos a nova incidencia a través do servizo
    this.formulario.reset(); // Limpamos o formulario
  }
}
