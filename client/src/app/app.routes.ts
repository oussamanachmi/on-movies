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
    // {
    //     path: 'movies/:id',
    //     // loadComponent: () => import('./features/movie-details/movie-details.component').then(m => m.movieDetailsComponent),
    //     component: movieDetailsComponent,
    //     data: { renderMode: 'server' }  // ou 'client', pour désactiver prerendering

    // },
    // { path: '404', loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent) },
    // { path: '**', redirectTo: '404' },
];


export async function getPrerenderParams() {
    const movies = await fetch('https://on-movies.onrender.com/movies').then(res => res.json());
    return movies.map((movie: Movie) => ({ id: movie._id }));
}

export const serverRoutes: ServerRoute[] = [
    {
        path: 'movies/:id',
        renderMode: RenderMode.Prerender,
        getPrerenderParams
    },
    {
        path: '**',
        renderMode: RenderMode.Prerender
    }
];
