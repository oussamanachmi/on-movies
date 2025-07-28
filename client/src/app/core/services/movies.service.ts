import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Movie } from '../models/movies.model';

@Injectable({ providedIn: 'root' })
export class MoviesService {
    constructor(readonly http: HttpClient) { }

    getMovies(): Observable<any[]> {
        return this.http.get<Movie[]>(environment.moviesApi);
    }
    getMovieById(id: string): Observable<Movie> {
        return this.http.get<Movie>(`${environment.moviesApi}/${id}`);
    }
}