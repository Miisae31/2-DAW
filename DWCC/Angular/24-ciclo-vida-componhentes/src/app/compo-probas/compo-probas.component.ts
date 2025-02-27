import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-compo-probas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compo-probas.component.html',
  styleUrl: './compo-probas.component.css'
})
export class CompoProbasComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  
  @Input() texto: string = '';

  rexistroEventos = signal<string[]>([]); // Lista de eventos do ciclo de vida que se amosarán na interface
  
  constructor() {
    this.engadirEvento("O constructor foi chamado");
  }

  // Metodo para engadir eventos ao rexistro
  engadirEvento(evento: string) {
    console.log(evento);
    this.rexistroEventos.update(eventos => [evento, ...eventos]);
  }

  
  // Este metodo executase cando o compoñente é engadido ao DOM
  ngOnInit(): void {
    this.engadirEvento("O ngOnInit foi chamado");
  }

  // Este metodo executase cando o compoñente é eliminado do DOM
  ngOnDestroy(): void {
    this.engadirEvento("O ngOnDestroy foi chamado");
  }

  // Este metodo executase cada vez que se produce un cambio nunha propiedade de entrada
  ngOnChanges(): void {
    this.engadirEvento("O ngOnChange foi chamado");
  }

  // Este metodo ejecutase cada vez que se produce un cambio no DOM
  ngDoCheck(): void {
    this.engadirEvento("O ngDoCheck foi chamado");
  }

  // Este metodo executase cando o contido do compoñente é inicializado
  ngAfterContentInit(): void {
    this.engadirEvento("O ngAfterContentInit foi chamado");
  }

  // Este metodo executase cando o contido do compoñente é actualizado
  ngAfterContentChecked(): void {
    this.engadirEvento("O ngAfterContentChecked foi chamado");
  }

  ngAfterViewInit(): void {
    this.engadirEvento("O ngAfterViewInit foi chamado");
  }

  ngAfterViewChecked(): void {
    this.engadirEvento("O ngAfterViewChecked foi chamado");
  }
}
