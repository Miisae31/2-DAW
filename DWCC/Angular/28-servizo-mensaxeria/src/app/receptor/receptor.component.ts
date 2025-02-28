import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Observable, scan } from "rxjs";
import { MensaxeriaService } from "../mensaxeria.service";

@Component({
  selector: "app-receptor",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./receptor.component.html",
  styleUrl: "./receptor.component.css",
})
export class ReceptorComponent {
  ultimaMensaxe: string; // Observable que garda a última mensaxe enviada
  historial: string[] = []; // Observable que garda as últimas 5 mensaxes enviadas

  constructor(private servizo: MensaxeriaService) {
  }

  ngOnInit(): void {
   // Subcribimos a compoñente receptor ao behaviourSubject do servicio
   this.servizo.ultimaMensaxe$.subscribe((mensaxe) => {
    this.ultimaMensaxe = mensaxe;
   });

    // Subcribimos a compoñente receptor ao replaySubject do servicio
    this.servizo.historialMensaxes$.subscribe((mensaxe) => {
      this.historial.push(mensaxe);
    });
  }
}
