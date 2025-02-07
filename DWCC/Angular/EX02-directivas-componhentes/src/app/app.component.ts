import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarxetaComponent } from './tarxeta/tarxeta.component';

interface Articulo {
  nome: string;
  rebaixa: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TarxetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ex02-directivas-componhentes';
  articulos: Articulo[] = [
    {
      nome: "Calcetíns",
      rebaixa: 0.2
    },
    {
      nome: "Pantalóns",
      rebaixa: 0.1
    },
    {
      nome: "Camisa",
      rebaixa: 0.7
    },
    {
      nome: "Camisola",
      rebaixa: 0.15
    },
    {
      nome: "Xersei",
      rebaixa: 0.3
    }];
}
