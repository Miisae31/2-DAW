import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '11-rutas-consulta';

  constructor(private router: Router) {}

  navegar() {
    this.router.navigate(['/probas'], { queryParams: { numero1: 17, numero2: -4 }});
  }
}
