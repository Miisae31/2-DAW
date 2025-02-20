import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { MenuDesplegableComponent } from "../menu-desplegable/menu-desplegable.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, MenuDesplegableComponent, RouterModule], // Importamos los componentes que vamos a usar
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
