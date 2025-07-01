import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '**', redirectTo: '404' },
    {
        path: 'movies',
        loadComponent: () => import('./movies-list/movies-list.component').then(m => m.MoviesListComponent)
    }
];
