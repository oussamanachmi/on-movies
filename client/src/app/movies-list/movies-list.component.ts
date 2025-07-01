import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../core/services/movies.service';

@Component({
  selector: 'app-movies-list',
  imports: [],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];

  constructor(readonly moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data;
      console.log('fdf' + this.movies);

    });
  }
}