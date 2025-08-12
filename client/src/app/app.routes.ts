import { Routes } from '@angular/router';
import { movieDetailsComponent } from './features/movie-details/movie-details.component';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { Movie } from './core/models/movies.model';

export const routes: Routes = [

    { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
    {
        path: 'movies',
        loadComponent: () => import('./features/movies-list/movies-list.component').then(m => m.MoviesListComponent)
    },
    {
        path: 'movie/:id',
        loadComponent: () => import('./features/movie-details/movie-details.component').then(m => m.movieDetailsComponent),


    },
    { path: '**', redirectTo: '' },
];
