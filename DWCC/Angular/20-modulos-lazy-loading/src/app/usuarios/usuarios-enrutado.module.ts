import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';
                                                                        //(Le indicamos la ubicacion y el nombre)
// Para crear este archivo usamos este comando no terminal: ng generate module  usuarios-enrutado --module=app.module <-(nombre del modulo)


// Definimos as rutas especificas para os elementos contidos no módulo de usaurios
const rutas: Routes = [
  {path: '', component: ListaUsuariosComponent } // Se o usuario accede a "/usuarios" vaise cargar a compoñente 'ListaUsuarios (ademais é a ruta por defecto do módulo)
 ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas), // Engadimos as rutas ao módulo
  ],

  exports: [
    RouterModule // Exportamos o módulo de rutas para que poida ser utilizado polo módulo principal
  ]
})
export class UsuariosEnrutadoModule { }
