import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '14-enlazado-propiedades';
  documentacion : string = 'https://angular.dev/docs';
  logo : string = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
}
