import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { MenuDesplegableComponent } from "../menu-desplegable/menu-desplegable.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, MenuDesplegableComponent], // Importamos los componentes que vamos a usar
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
