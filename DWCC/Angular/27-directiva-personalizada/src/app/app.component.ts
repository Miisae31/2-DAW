import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResaltarDirective } from './resaltar.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResaltarDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
}
