import { Component, OnInit } from '@angular/core';
import { ServizoService } from '../servizo.service';

@Component({
  selector: 'app-compo-b',
  standalone: true,
  imports: [],
  templateUrl: './compo-b.component.html',
  styleUrl: './compo-b.component.css'
})
export class CompoBComponent implements OnInit {
  dato: string;

  constructor(private servizo: ServizoService) {}

  // Este método é chamado ao premer o botón
  novoTexto() {
    this.servizo.cambiarTexto("Premeuse o botón de B");
  }

  // Este método execútase cando a compoñente está lista para ser cargada. Neste caso usarémola para subscribirnos aos cambios na propiedade "texto" do servizo
  ngOnInit(): void {
    this.servizo.subscribirse$().subscribe((novoDato) => {
      this.dato = novoDato;
    });
  }
}
