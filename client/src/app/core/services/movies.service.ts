import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MoviesService {
    constructor(readonly http: HttpClient) { }

    getMovies(): Observable<any[]> {
        return this.http.get<any[]>('./movies.json');
    }

    getMoviesFromApi(): Observable<any[]> {
        return this.http.get<any[]>(environment.moviesApi);
    }

}