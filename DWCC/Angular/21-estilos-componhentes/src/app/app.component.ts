import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompoCComponent } from './compo-c/compo-c.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompoCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-OlaMundo';
}
