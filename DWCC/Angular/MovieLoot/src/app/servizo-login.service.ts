import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServizoLoginService {
  usuarios: any[];
  usuarios$: BehaviorSubject<any[]>;
  constructor() {
    this.usuarios = [];
    this.usuarios$ = new BehaviorSubject(this.usuarios);
  }

  añadirUsuario(usuario: any) {
    this.usuarios.push(usuario);
    this.usuarios$.next(this.usuarios);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

   subcribirse$(): Observable<any[]> {
    return this.usuarios$.asObservable();
  }
}
