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
  title = '14-interpolacion-strings';
  numero1: number = 12;
  numero2: number = 27;
  obxecto: any = {
    nome: 'Pepito Castro',
    idade: 22
  }
  fases: string[] = ["Chea","Menguante","Nova","Crecente"];
}
