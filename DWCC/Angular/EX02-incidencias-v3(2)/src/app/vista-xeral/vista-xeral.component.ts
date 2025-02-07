import { Component, OnInit } from '@angular/core';
import { FormularioAltaComponent } from "../formulario-alta/formulario-alta.component";
import { PendentesComponent } from '../pendentes/pendentes.component';
import { ResoltasComponent } from '../resoltas/resoltas.component';
import { CommonModule } from '@angular/common';
import { Incidencia } from '../incidencia';
import { IncidenciasService } from '../incidencias.service';

@Component({
  selector: 'app-vista-xeral',
  standalone: true,
  imports: [FormularioAltaComponent, PendentesComponent, ResoltasComponent, CommonModule],
  templateUrl: './vista-xeral.component.html',
  styleUrl: './vista-xeral.component.css'
})
export class VistaXeralComponent implements OnInit {
  incidencias: Incidencia[]; // Non inicializamos o array porque os datos vanse tomar do servizo a través da subscrición

  constructor(private servizo: IncidenciasService) {}

  algunhaPendente(): boolean {
    return this.incidencias.some((incidencia) => !incidencia.solucionada);
  }

  algunhaResolta(): boolean {
    return this.incidencias.some((incidencia) => incidencia.solucionada);
  }

  // Este método execútase cando a compoñente está lista para ser cargada na vista
  ngOnInit(): void {
    // Subscribimos a compoñente ao servizo para que o seu array de incidencias estea sempre actualizado
    this.servizo.subscribirse$().subscribe((incidencias) => {
      this.incidencias = incidencias;
    });
  }
}
