import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Incidencia } from '../incidencia';

@Component({
  selector: 'app-pendentes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pendentes.component.html',
  styleUrl: './pendentes.component.css'
})
export class PendentesComponent {
  @Input() incidencias : Incidencia[];

  resolverIncidencia(incidencia: Incidencia): void {
    incidencia.solucionada = true;
  }
}
