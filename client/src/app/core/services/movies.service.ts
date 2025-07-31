import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Movie } from '../models/movies.model';

@Injectable({ providedIn: 'root' })
export class MoviesService {
    constructor(readonly http: HttpClient) { }

    getMovies(page = 1, limit = 20) {
        return this.http.get<{ data: Movie[], total: number, page: number, totalPages: number }>(
            `${environment.moviesApi}?page=${page}&limit=${limit}`
        );
    }
    getMovieById(id: string): Observable<Movie> {
        return this.http.get<Movie>(`${environment.moviesApi}/${id}`);
    }


}