import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-probas',
  standalone: true,
  imports: [],
  templateUrl: './probas.component.html',
  styleUrl: './probas.component.css'
})
export class ProbasComponent implements OnInit {
  numero1: number = 0;
  numero2: number = 0;

  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    // Capturamos os parámetros recibidos a través da ruta mediante unha subscrición ao Observable "queryParams"
    this.ruta.queryParams.subscribe((parametros) => {
      this.numero1 = parametros["numero1"];
      this.numero2 = parametros["numero2"];
    });
  }
}
