import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SolicitudeJsonService {
  constructor(private cliente: HttpClient) {}

  // Este metodo vai ser o que permite facer solicitudes HTTP indicando unha URL
  obterJSON(url: string): Observable<Object> {
    return this.cliente.get(url); // Devólvese o resultado de lanzar unha peticion GET API REST sobre a URL recibida como parámetro
  }
}
