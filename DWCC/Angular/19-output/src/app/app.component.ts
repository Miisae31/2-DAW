import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FillaComponent } from "./filla/filla.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FillaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '19-output';
  recibida: string = ""; // Poñemos un valor por defecto á propiedade que recibirá o valor dende a compoñente filla para que se vexa que efectivamente é sobreescrito

  // Este método será invocado dende a compoñente filla para asignar valor sobre a propiedade "recibida"
  amosarMensaxe(texto: string): void {
    this.recibida = texto;
  }
}
