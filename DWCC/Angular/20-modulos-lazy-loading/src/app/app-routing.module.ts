import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definimos as rutas principais da aplicacion
const rutas: Routes = [
  {path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(modulo => modulo.UsuariosModule) }, // Cando o usuario acceda a "/usuarios" cargarase o módulo UsuariosModule (lazy loading)
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)], // Importamos ROuterModule.forRoot() porque este é o módulo principal de rutas
  exports: [RouterModule] // Exportamos RouterModule para que o módulo raiz poida usalo
})
export class AppRoutingModule { }
