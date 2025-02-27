import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TruncarTextoPipe } from "./truncar-texto.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TruncarTextoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  textoLongo: string = 'Marcos magister optimus est, sapiens et iustus. Discipulos suos amore doctrinae ducit, patientia et ingenio clarus. Scientiam largitur, semper adiuvat, numquam deserit. Virtus et sapientia in eo fulgent.';
}
