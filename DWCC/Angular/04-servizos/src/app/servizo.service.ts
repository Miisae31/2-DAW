import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizoService {
  texto: string = "Este é o dato contido no servizo";

  constructor() { }
}
