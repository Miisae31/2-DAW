import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThumbnailsService { // Servicio para cambiar el título de la página

  // Creamos un BehaviorSubject para el título
  private tituloSeleccionado$ = new BehaviorSubject<string>('');

  constructor() { }

  // Método para cambiar el título
  cambiarTitulo(title: string): void {
    this.tituloSeleccionado$.next(title); // Usamos next para emitir un nuevo valor
  }

  // Método para suscribirse al título
  subcribirse$(): Observable<string> {
    return this.tituloSeleccionado$.asObservable();
  }
}