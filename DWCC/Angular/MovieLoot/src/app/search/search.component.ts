import { Component, OnInit } from '@angular/core';
import * as peliculasDatos from '../../../public/data/peliculas.json'; // Importar el JSON
import * as seriesDatos from '../../../public/data/series.json';
import { Peliculaclase } from '../models/peliculaclase';
import { CommonModule } from '@angular/common';
import { Serieclase } from '../models/serieclase';
import { ThumbnailsService } from '../services/thumbnails.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  // Propiedades
  jsonPeliculas: Peliculaclase[] = []; // Array de objetos de tipo Peliculaclase
  jsonSeries: Serieclase[] = []; // Array de objetos de tipo Serieclase
  sugerencias: (Peliculaclase | Serieclase)[] = [];  consulta: string = ''; // Consulta del usuario

    constructor(private servizo: ThumbnailsService) {} // Inyección de dependencias

  ngOnInit(): void {
    this.cargarDatos(); // Cargar los datos del JSON
    
  }

  // Método para cargar datos
  cargarDatos(): void {
    this.jsonPeliculas = (peliculasDatos as any).default.map((peliculaData: any) =>  // Mapear los datos del JSON a objetos de tipo Peliculaclase
      new Peliculaclase(
        peliculaData.idPelicula,
        peliculaData.titulo,
        peliculaData.ano,
        peliculaData.descripcion,
        peliculaData.genero,
        peliculaData.nota,
        peliculaData.rutaTrailer,
        peliculaData.rutaImagen
      )
    );

    this.jsonSeries = (seriesDatos as any).default.map((serieData: any) =>  // Mapear los datos del JSON a objetos de tipo Serieclase
      new Serieclase(
        serieData.idPelicula,
        serieData.titulo,
        serieData.ano,
        serieData.descripcion,
        serieData.genero,
        serieData.nota,
        serieData.rutaTrailer,
        serieData.rutaImagen
      )
    );
  }

  // Método para filtrar sugerencias
  public filtrarSugerencias(consulta: string): (Peliculaclase | Serieclase)[] {
    const palabras = consulta.toLowerCase().split(' '); // Convertir la consulta a minúsculas y dividirla en palabras
  
    const peliculasFiltradas = this.jsonPeliculas.filter((pelicula) => // Filtrar las películas que contienen todas las palabras de la consulta
      palabras.every((palabra: string) =>
        this.datosPeliculas(pelicula).toLowerCase().includes(palabra) // Comprobar si el título de la película contiene la palabra
      )
    );
  // Hacemos lo mismo con las series
    const seriesFiltradas = this.jsonSeries.filter((serie) =>
      palabras.every((palabra: string) =>
        this.datosSeries(serie).toLowerCase().includes(palabra)
      )
    );
  
    return [...peliculasFiltradas, ...seriesFiltradas]; // Esto devuelve un array con todas las películas y series que coinciden con la consulta
  }
  // Método para obtener los datos de una película
  public datosPeliculas(pelicula: Peliculaclase): string {
    return pelicula._titulo + ' (' + pelicula._ano + ')';
  }
    // Método para obtener los datos de una serie

  public datosSeries(serie: Serieclase): string {
    return serie._titulo + ' (' + serie._ano + ')';
  }

  // Método para obtener los datos de una sugerencia
  public datosSugerencia(sugerencia: Peliculaclase | Serieclase): string {
    if (sugerencia.tipo === 'pelicula') {
      return this.datosPeliculas(sugerencia as Peliculaclase);
    } else if (sugerencia.tipo === 'serie') {
      return this.datosSeries(sugerencia as Serieclase);
    }
    return ''; // En caso de que no sea ninguno (aunque no debería pasar)
  }

  // Método para actualizar la lista de sugerencias
  public actualizarListaxe(event: Event): void {
    const target = event.target as HTMLInputElement; // HTMLInputElement sirve para acceder a las propiedades de un input de HTML 
    this.consulta = target.value.trim();
    if (!this.consulta) {
      this.sugerencias = [];
    } else {
      this.sugerencias = this.filtrarSugerencias(this.consulta);
    }
  
  }

  cambiarTitulo(nombrePelicula: string): void {
    this.servizo.cambiarTitulo(nombrePelicula); // Enviamos el nombre de la película al servicio
    localStorage.setItem('nombrePelicula', nombrePelicula); // Almacenar el nombre de la película en localstorage 
  }
}
