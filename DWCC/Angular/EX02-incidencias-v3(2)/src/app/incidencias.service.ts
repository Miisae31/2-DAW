import { Injectable } from '@angular/core';
import { Incidencia } from './incidencia';
import { BehaviorSubject, Observable } from 'rxjs';
import * as incidenciasDatos from '../../public/data/baseIncidencias.json';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {
  incidencias: Incidencia[]; // Definimos un array que conterá as incidencias que se vaian creando
  incidencias$: BehaviorSubject<Incidencia[]>; // Definimos un subject que emitirá o array de incidencias para todos os subscriptores

  constructor() {
    this.incidencias = (incidenciasDatos as any).default; // Inicializamos o array de incidencias cos datos do ficheiro JSON
    this.incidencias$ = new BehaviorSubject(this.incidencias); // Inicialmente non hai subscriptores
  }

  // Este método permitirá engadir novas incidencias ao array ao tempo que se informa aos subscriptores
  crearIncidencia(novaIncidencia: Incidencia): void {
    this.incidencias.push(novaIncidencia); // Engadimos a nova incidencia ao array
    this.incidencias$.next(this.incidencias); // Informamos aos subscriptores do array actualizado
  }

  // Este método permite subscribirse aos cambios do array
  subscribirse$(): Observable<Incidencia[]> {
    return this.incidencias$.asObservable();
  }
}
