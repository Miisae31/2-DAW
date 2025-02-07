import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contido',
  standalone: true,
  imports: [],
  templateUrl: './contido.component.html',
  styleUrl: './contido.component.css'
})
export class ContidoComponent {
  @Input() compartida : number = 0;
  @Output() emisor = new EventEmitter<number>();

  decrementar(): void {
    this.compartida = this.compartida-1;
    this.emisor.emit(this.compartida);
  }
}
