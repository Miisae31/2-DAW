import { Injectable, signal } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MensaxeriaService {
  private ultimoMensaxe = new BehaviorSubject<string>("Benvid@ ao chat"); // Este observable garda únicamente a última mensaxe enviada

  ultimaMensaxe$ = this.ultimoMensaxe.asObservable(); // Este observable garda as últimas 5 mensaxes recibidas

  private historialMensaxes = new ReplaySubject<string>(5); // Este observable garda as ultimas 5 mensaxes recibidas

  historialMensaxes$ = this.historialMensaxes.asObservable(); // Este observable garda as últimas 5 mensaxes recibidas

  private contador = signal(1); // Contador de mensaxes (servirá para representar os novos envíos)

  enviarMensaxe(texto: string) {
    let mensaxe = this.contador + ': ' + texto;
    this.contador.update(n => n + 1); // Incrementamos o contador
    this.ultimoMensaxe.next(mensaxe); // Informamos aos subscritores do BehaviorSubject (actualizar ultima mensaxe)
    this.historialMensaxes.next(mensaxe); // Informamos aos subscritores do ReplaySubject (engadir mensaxe ao historial)
  }
}
