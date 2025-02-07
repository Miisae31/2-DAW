import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementoSimpleComponent } from './elemento-simple/elemento-simple.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElementoSimpleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-OlaMundo';
}
