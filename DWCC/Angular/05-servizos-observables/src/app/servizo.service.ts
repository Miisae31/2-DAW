import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServizoService {
  texto: string; // Esta propiedade representará os datos compartidos dende o servizo
  texto$: BehaviorSubject<string>; // Definimos un subject que emitirá datos de tipo string (en este caso usarémolo para comunicar os cambios sobre a propiedade "texto")

  constructor() {
    this.texto = "Este é o dato contido no servizo";
    this.texto$ = new BehaviorSubject(this.texto); // Inicialmente non hai subscriptores
  }

  // Este método permite cambiar o valor de "texto" e informar aos subscriptores do cambio
  cambiarTexto(pTexto: string): void {
    this.texto = pTexto; // Actualizamos o valor de "texto"
    this.texto$.next(this.texto); // Informamos aos subscriptores do cambio
  }

  // Este método permite suscribirse aos cambios da propiedade "texto"
  subscribirse$(): Observable<string> {
    return this.texto$.asObservable(); // Devolvemos o BehaviorSubject como Observable para que outros elementos poidan subscribirse ao mesmo
  }

}
