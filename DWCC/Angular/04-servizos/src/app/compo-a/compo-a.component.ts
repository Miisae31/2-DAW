import { Component } from '@angular/core';
import { ServizoService } from '../servizo.service';

@Component({
  selector: 'app-compo-a',
  standalone: true,
  imports: [],
  templateUrl: './compo-a.component.html',
  styleUrl: './compo-a.component.css'
})
export class CompoAComponent {
  dato: string;

  constructor(private servizo: ServizoService) {
    this.dato = servizo.texto;
  }
}
