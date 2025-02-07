import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompoAComponent } from './compo-a/compo-a.component';
import { CompoBComponent } from './compo-b/compo-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompoAComponent, CompoBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '04-Servizos';
}
