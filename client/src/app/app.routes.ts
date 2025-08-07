import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
    {
        path: 'movies',
        loadComponent: () => import('./features/movies-list/movies-list.component').then(m => m.MoviesListComponent)
    },
    {
        path: 'movies/:id',
        loadComponent: () => import('./features/movie-details/movie-details.component').then(m => m.movieDetailsComponent)
    },
    // { path: '404', loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent) },
    // { path: '**', redirectTo: '404' },
];
