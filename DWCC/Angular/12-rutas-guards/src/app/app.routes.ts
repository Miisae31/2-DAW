import { Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { RestrinxidoComponent } from './restrinxido/restrinxido.component';
import { LoginComponent } from './login/login.component';
import { restrinxidoGuard } from './guards/restrinxido.guard';

export const routes: Routes = [
    { path: "portada", title: "Portada", component: PortadaComponent },
    { path: "restrinxido", title: "Área Restrinxida", component: RestrinxidoComponent, canActivate: [restrinxidoGuard] },
    { path: "", title: "Inicio de sesión", component: LoginComponent }
];
