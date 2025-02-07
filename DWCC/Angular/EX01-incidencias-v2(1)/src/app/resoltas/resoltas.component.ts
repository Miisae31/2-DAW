import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Incidencia } from '../incidencia';

@Component({
  selector: 'app-resoltas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resoltas.component.html',
  styleUrl: './resoltas.component.css'
})
export class ResoltasComponent {
  @Input() incidencias : Incidencia[];
}
