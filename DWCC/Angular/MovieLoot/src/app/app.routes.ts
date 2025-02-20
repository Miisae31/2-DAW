import { authGuard } from './guards/auth.guard';
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { MediaViewComponent } from './media-view/media-view.component';
import { VistaGeneralComponent } from './vista-general/vista-general.component';
import { CreateComponent } from './create/create.component';

// Hacemos las rutas para las redirecciones de la aplicación
export const routes: Routes = [
    { path: 'inicio', title: 'Inicio', component: VistaGeneralComponent, canActivate: [authGuard] },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },  // Solo redirige, sin guard
    { path: 'login', title: 'Inicio Sesión', component: LogInComponent },
    { path: 'media-view', title: 'Media', component: MediaViewComponent, canActivate: [authGuard] },
    { path: 'create', title: 'Crear', component: CreateComponent},
];
