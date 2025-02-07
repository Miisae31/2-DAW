import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-TypeScript';

  // Declaramos unha propiedade de clase (variable) de tipo numérico inicializada a un valor
  numero1: number = 5;
  /* Declaramos unha propiedade de clase de tipo numérico non inicializada (engadimos nas opcións de compilador do tsconfig.json a seguinte clave
    "strictPropertyInitialization": false,)
  */
  numero2: number;
}
