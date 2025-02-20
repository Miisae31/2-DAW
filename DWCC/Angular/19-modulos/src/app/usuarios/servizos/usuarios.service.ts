import { Injectable } from '@angular/core';
import { Usuario } from '../../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios : Usuario[] = [];

  constructor() {
    this.usuarios = [
      {id: 1, nome: 'Ana', email: 'ana@gmail.com'},
      {id: 2, nome: 'Bea', email: 'bea@gmail.com'},
      {id: 3, nome: 'Clara', email: 'clara@gmail.com'}
    ]
  }

  verUsuarios(){
    return this.usuarios;
  }
}
