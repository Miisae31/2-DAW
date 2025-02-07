import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContidoComponent } from './contido/contido.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContidoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '18-input';
  compartida: number = 0; // Esta propiedade da compoñente nai vai almacenar o valor que iremos pasando á compoñente filla
}
