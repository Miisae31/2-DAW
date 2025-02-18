import { Component } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";

@Component({
  selector: 'app-vista-general',
  standalone: true,
  imports: [InicioComponent], // Importar el componente InicioComponent
  templateUrl: './vista-general.component.html',
  styleUrl: './vista-general.component.css'
})
export class VistaGeneralComponent {

}
