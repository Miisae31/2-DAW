import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { ContenidoInicialComponent } from "../contenido-inicial/contenido-inicial.component";
import { ThumbnailsComponent } from "../thumbnails/thumbnails.component";
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, ContenidoInicialComponent, ThumbnailsComponent, FooterComponent, RouterModule], // Importar los componentes que se van a usar
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  
}
