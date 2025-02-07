import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-probas-b',
  standalone: true,
  imports: [],
  templateUrl: './probas-b.component.html',
  styleUrl: './probas-b.component.css'
})
export class ProbasBComponent implements OnInit {
  numero1: number = 0;
  numero2: number = 0;

  // Creamos unha propiedade de tipo 'ActivatedRoute' que será a que nos permita procesar os parámetros recibidos a través da ruta
  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    // Accedemos á propiedade 'params' da ruta activada, que é un Observable de parámetros, é dicir, que nos permite subscribirnos a ela para ver os parámetros recibidos
    this.ruta.params.subscribe(parametros => {
      this.numero1 = parseFloat(parametros['numero1']);
      this.numero2 = parseFloat(parametros['numero2']);
    });
  }
}
