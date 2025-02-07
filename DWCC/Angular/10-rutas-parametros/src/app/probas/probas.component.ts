import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-probas',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './probas.component.html',
  styleUrl: './probas.component.css'
})
export class ProbasComponent {

  constructor(private router: Router) {}
  
  navegar() {
    this.router.navigate(['/probas/probas-b',12,27.95]);
  }
}
