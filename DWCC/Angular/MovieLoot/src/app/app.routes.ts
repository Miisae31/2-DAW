import { PerfilComponent } from './perfil/perfil.component';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { MediaViewComponent } from './media-view/media-view.component';
import { VistaGeneralComponent } from './vista-general/vista-general.component';
import { CreateComponent } from './create/create.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ForosComponent } from './foros/foros.component';
import { CreateForosComponent } from './create-foros/create-foros.component';

// Hacemos las rutas para las redirecciones de la aplicación
export const routes: Routes = [
    { path: 'inicio', title: 'Inicio', component: VistaGeneralComponent, canActivate: [authGuard] }, // Ruta por defecto
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },   // Redirección a la ruta por defecto
    { path: 'login', title: 'Inicio Sesión', component: LogInComponent }, // Ruta para el inicio de sesión
    { path: 'media-view', title: 'Media', component: MediaViewComponent, canActivate: [authGuard] }, // Ruta para la vista de los medios con un guard para usuarios logueados
    { path: 'create', title: 'Crear', component: CreateComponent}, // Ruta para la creación de medios
    { path: 'administracion', title: 'Gestionar Usuarios', component: AdministracionComponent, canActivate: [adminGuard]}, // Ruta para la gestión de usuarios con un guard para administradores
    { path: 'edit-users/:indice', title: 'Editar Usuarios', component: EditUsersComponent, canActivate: [adminGuard]}, // Ruta para la edición de usuarios con un guard para administradores
    { path: 'perfil', title: 'Perfil', component: PerfilComponent, canActivate: [authGuard] }, // Ruta para la creación de medios
    { path: 'foros', title: 'Foros', component: ForosComponent}, // Ruta para la creación de medios
    { path: 'forosCreate', title: 'Crear Post', component: CreateForosComponent, canActivate: [authGuard] }, // Ruta para la creación de medios


];
