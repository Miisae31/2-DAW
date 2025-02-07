import { Component } from '@angular/core';
import { ServizoService } from '../servizo.service';

@Component({
  selector: 'app-compo-b',
  standalone: true,
  imports: [],
  templateUrl: './compo-b.component.html',
  styleUrl: './compo-b.component.css'
})
export class CompoBComponent {
  dato: string;

  constructor(private servizo: ServizoService) {
    this.dato = servizo.texto;
  }
}
