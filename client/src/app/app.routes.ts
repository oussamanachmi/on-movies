import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
    {
        path: 'movies',
        loadComponent: () => import('./movie-details/movie-details.component').then(m => m.movieDetailsComponent)
    },
    {
        path: 'movies/:id',
        loadComponent: () => import('./movie-details/movie-details.component').then(m => m.movieDetailsComponent)
    },
    // { path: '404', loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent) },
    // { path: '**', redirectTo: '404' },
];
