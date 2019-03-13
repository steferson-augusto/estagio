import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GraficoComponent } from './grafico/grafico.component'
//import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
        //canActivate: [AuthGuard]
    },
    {
        path: 'graficos',
        component: GraficoComponent,
        // children: [
        //     {path: '', redirectTo: 'questionario/1', pathMatch: 'full'},
        //     {path: 'questionario/:id', component: GraficoComponent},
        // ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
