import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-probas-a',
  standalone: true,
  imports: [],
  templateUrl: './probas-a.component.html',
  styleUrl: './probas-a.component.css'
})
export class ProbasAComponent implements OnInit {
  cousa: string = "";

  // Creamos unha propiedade de tipo 'ActivatedRoute' que será a que nos permita procesar os parámetros recibidos a través da ruta
  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    // Accedemos á propiedade 'params' da ruta activada, que é un Observable de parámetros, é dicir, que nos permite subscribirnos a ela para ver os parámetros recibidos
    this.ruta.params.subscribe(parametros => {
      this.cousa = parametros['cousa']; // Tomamos o parámetro "cousa" e gardámolo na propiedade homónima
    });
  }
}
