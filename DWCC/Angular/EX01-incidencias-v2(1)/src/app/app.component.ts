import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as incidenciasDatos from '../../public/data/baseIncidencias.json';
import { Incidencia } from './incidencia';
import { PendentesComponent } from './pendentes/pendentes.component';
import { ResoltasComponent } from './resoltas/resoltas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PendentesComponent, ResoltasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EX01-incidencias-v2';
  incidencias: Incidencia[] = (incidenciasDatos as any).default;

  algunhaPendente(): boolean {
    return this.incidencias.some((incidencia) => !incidencia.solucionada);
  }

  algunhaResolta(): boolean {
    return this.incidencias.some((incidencia) => incidencia.solucionada);
  }
}
