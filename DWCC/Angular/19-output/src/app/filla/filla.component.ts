import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filla',
  standalone: true,
  imports: [],
  templateUrl: './filla.component.html',
  styleUrl: './filla.component.css'
})
export class FillaComponent {
  @Output() mensaxe = new EventEmitter<string>; // Esta propiedade actuará como vehículo da mensaxe

  // Este método é o que usará a compoñente filla para enviar un texto á compoñente nai
  enviar() {
    this.mensaxe.emit("Ola mundo!");
  }
}