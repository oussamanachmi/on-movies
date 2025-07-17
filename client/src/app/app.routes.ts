import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
    {
        path: 'movies',
        loadComponent: () => import('./movies-list/movies-list.component').then(m => m.MoviesListComponent)
    },
    // { path: '404', loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent) },
    // { path: '**', redirectTo: '404' },
];
