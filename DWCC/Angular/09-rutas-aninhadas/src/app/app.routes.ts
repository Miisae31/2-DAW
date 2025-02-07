import { Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { ProbasComponent } from './probas/probas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProbasAComponent } from './probas/probas-a/probas-a.component';
import { ProbasBComponent } from './probas/probas-b/probas-b.component';

export const routes: Routes = [
    { path: 'portada', title: 'Portada', component: PortadaComponent },
    { path: 'probas', title: 'Probas', component: ProbasComponent },
    { path: 'probas', children: [
        { path: 'probas-a', title: 'Probas - Probas A', component: ProbasAComponent },
        { path: 'probas-b', title: 'Probas - Probas B', component: ProbasBComponent }
    ]},
    { path: '', redirectTo: '/portada', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
