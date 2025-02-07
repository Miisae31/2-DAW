import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContidoComponent } from './contido/contido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03-Compoñentes';
}
