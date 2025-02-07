import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncidenciasService } from './incidencias.service';
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component';
import { ListaxeIncidenciasComponent } from './listaxe-incidencias/listaxe-incidencias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormularioAltaComponent,ListaxeIncidenciasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [IncidenciasService]
})
export class AppComponent {
  title = '06-servizos-observables-v2';
}
