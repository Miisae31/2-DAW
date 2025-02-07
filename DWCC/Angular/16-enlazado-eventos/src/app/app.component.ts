import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '16-enlazado-eventos';
  cor: string = "blue";

  mudarTitulo(): void {
    this.title = 'O botón de mudar título foi premido';
  }

  mudarCor(): void {
    if (this.cor == "blue") {
      this.cor = "purple";
    } else {
      this.cor = "blue";
    }
  }
}
