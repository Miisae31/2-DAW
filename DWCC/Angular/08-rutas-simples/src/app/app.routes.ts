import { Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { ProbasComponent } from './probas/probas.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'portada', title: 'Portada', component: PortadaComponent },
    { path: 'probas', title: 'Probas', component: ProbasComponent },
    { path: '', redirectTo: '/portada', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
