import { Component } from '@angular/core';
import { ThumbnailsService } from '../thumbnails.service';

@Component({
  selector: 'app-thumbnails',
  standalone: true,
  imports: [], 
  templateUrl: './thumbnails.component.html',
  styleUrl: './thumbnails.component.css'
})
export class ThumbnailsComponent {

  tituloActual: string = ''; // Variable para mostrar el título actual
  constructor(private servizo: ThumbnailsService) {} // Inyectar el servicio

  ngOnInit(): void {
    // Suscribirse al título seleccionado para verificar que se está actualizando
    this.servizo.subcribirse$().subscribe((titulo: string) => {
      this.tituloActual = titulo; // Actualizar el título actual
    });
  }
  // Método que se ejecuta cuando el usuario hace clic en el poster de una película
  cambiarTitulo(nombrePelicula: string): void {
    this.servizo.cambiarTitulo(nombrePelicula); // Enviamos el nombre de la película al servicio
    localStorage.setItem('nombrePelicula', nombrePelicula); // Almacenar el nombre de la película en el almacenamiento local  
  }
}