import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CompoProbasComponent } from "./compo-probas/compo-probas.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CompoProbasComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "24-ciclo-vida-componente";

  amosar: boolean = true;
  texto: string = "Inicial";

  cambiarTexto() {
    this.texto = "Novo texto";
  }
  eliminarComponhente() {
    this.amosar = false;
  }
}
