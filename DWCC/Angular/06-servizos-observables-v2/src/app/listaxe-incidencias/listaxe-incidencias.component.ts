import { Component, OnInit } from '@angular/core';
import { Incidencia } from '../incidencia';
import { IncidenciasService } from '../incidencias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listaxe-incidencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listaxe-incidencias.component.html',
  styleUrl: './listaxe-incidencias.component.css'
})
export class ListaxeIncidenciasComponent implements OnInit {
  incidencias: Incidencia[];

  constructor(private servizo: IncidenciasService) {}

  ngOnInit(): void {
    this.servizo.subscribirse$().subscribe((incidencias) => {
      this.incidencias = incidencias;
    });
  }
}
