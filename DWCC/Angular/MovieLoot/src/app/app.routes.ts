import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { MediaViewComponent } from './media-view/media-view.component';
import { VistaGeneralComponent } from './vista-general/vista-general.component';
import { CreateComponent } from './create/create.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';

// Hacemos las rutas para las redirecciones de la aplicación
export const routes: Routes = [
    { path: 'inicio', title: 'Inicio', component: VistaGeneralComponent, canActivate: [authGuard] }, // Ruta por defecto
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },   // Redirección a la ruta por defecto
    { path: 'login', title: 'Inicio Sesión', component: LogInComponent }, // Ruta para el inicio de sesión
    { path: 'media-view', title: 'Media', component: MediaViewComponent, canActivate: [authGuard] }, // Ruta para la vista de los medios con un guard para usuarios logueados
    { path: 'create', title: 'Crear', component: CreateComponent}, // Ruta para la creación de medios
    { path: 'manage-users', title: 'Gestionar Usuarios', component: ManageUsersComponent, canActivate: [adminGuard]}, // Ruta para la gestión de usuarios con un guard para administradores
    { path: 'edit-users/:indice', title: 'Editar Usuarios', component: EditUsersComponent, canActivate: [adminGuard]} // Ruta para la edición de usuarios con un guard para administradores
];
