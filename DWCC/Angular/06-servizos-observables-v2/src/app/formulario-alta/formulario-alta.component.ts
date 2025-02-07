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
  formulario: FormGroup;

  constructor(private servizo: IncidenciasService) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      descricion: new FormControl(),
      nivel: new FormControl()
    })
  }

  onSubmit() {
    this.servizo.crearIncidencia(this.formulario.value);
  }
}
