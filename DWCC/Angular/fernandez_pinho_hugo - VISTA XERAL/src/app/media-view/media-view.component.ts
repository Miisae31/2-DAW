import { Component, Input, OnInit } from '@angular/core';
import { ThumbnailsService } from '../thumbnails.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import * as peliculasDatos from '../../../public/data/peliculas.json'; 
import * as seriesDatos from '../../../public/data/series.json';
import { ActoresComponent } from "./actores/actores.component"; 
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-media-view',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ActoresComponent, CommonModule],
  templateUrl: './media-view.component.html',
  styleUrl: './media-view.component.css'
})
export class MediaViewComponent implements OnInit {
  peliculaSeleccionada: any = null; // Almacena los detalles de la película seleccionada
  jsonPeliculas: any[] = (peliculasDatos as any).default; // Acceder a los datos del JSON
  serieSeleccionada: any = null; // Almacena los detalles de la serie seleccionada
  jsonSeries: any[] = (seriesDatos as any).default; // Acceder a los datos del JSON
  actores: any[] = []; // Almacena los actores
  actoresFilm: any[] = []; // Almacena los actores de la película seleccionada
  constructor() {} // Constructor

  ngOnInit(): void { // Método de ciclo de vida

    let titulo = localStorage.getItem('nombrePelicula'); // Obtener el nombre de la película del almacenamiento local
    
    if (titulo) { // Si se encuentra el nombre de la película
     
        // Ejecutar recibirActores primero, y luego buscarActores
        this.recibirActores(this.actores).then(() => {
          this.buscarPeliculaPorTitulo(titulo); // Buscar la película
          this.buscarSeriePorTitulo(titulo); // Buscar la serie
          this.buscarActores(titulo); // Buscar actores
        });
    } else {
      console.log('No se encontró ninguna película en el almacenamiento local');
    }
  }
 recibirActores(actoresRecibidos: any[]): Promise<void> { // Método para recibir los actores
  return new Promise((resolve, reject) => { // Promesa
    try {
      this.actores = actoresRecibidos; // Almacenar los actores recibidos
      console.log('Actores recibidos: ', this.actores); // Mostrar los actores recibidos
      resolve(); // Resolver la promesa
    } catch (error) { // Capturar errores
      reject(error);  // Rechazar la promesa
    }
  })
    
  }
  // Método para buscar la película por título
  buscarPeliculaPorTitulo(titulo: string): void { // Método para buscar la película por título
    this.peliculaSeleccionada = this.jsonPeliculas.find(pelicula => pelicula.titulo === titulo); // Buscar la película por título
    if (this.peliculaSeleccionada) { // Si se encuentra la película
      console.log('Película encontrada: ', this.peliculaSeleccionada); // Mostrar la película encontrada
    } else {
      console.log('No se encontró ninguna película con el título: ', titulo); // Mostrar mensaje de error
    }
  }

  buscarSeriePorTitulo(titulo: string): void { // Método para buscar la serie por título
    this.serieSeleccionada = this.jsonSeries.find(serie => serie.titulo === titulo); // Buscar la serie por título
    if (this.serieSeleccionada) {
      console.log('Serie encontrada: ', this.serieSeleccionada);
    } else {
      console.log('No se encontró ninguna serie con el título: ', titulo);
    }
  }

  buscarActores(titulo: string): void { // Método para buscar los actores
    this.actoresFilm = this.actores.filter(actor => actor.PeliculasInterpretadas.includes(titulo)); // Filtrar los actores por película

    console.log('Actores encontrados: ', this.actoresFilm);
  }

 
}