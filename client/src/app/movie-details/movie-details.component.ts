import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../core/services/movies.service';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { Router } from 'express';
import { Movie } from '../core/models/movies.model';
import { NgStyle } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-movies-list',
  imports: [NgStyle, CarouselModule, RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
  standalone: true,
})
export class movieDetailsComponent implements OnInit {
  movieDetail: Movie[] = [];
  recommendedMovies: Movie[] = [];

  constructor(readonly moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id')!;
      this.getMoviesById(movieId)
    });
    // this.fetchrecommendedMovies();
  }

  // fetchrecommendedMovies(): void {
  //   this.moviesService.getMovies().subscribe({
  //     next: (movies) => {
  //       const recommendedGenres = ['Drama', 'Mystery', 'Crime'];

  //       this.recommendedMovies = movies.filter((movie) => {
  //         return (
  //           movie.imdb?.rating >= 7 &&
  //           movie.imdb?.votes >= 500
  //           // movie.genres?.some((genre) => recommendedGenres.includes(genre))
  //         );
  //       });
  //       console.log(this.recommendedMovies);

  //     },
  //     error: (error) => {
  //       console.error('Erreur lors du chargement des films', error);
  //     },
  //   });
  // }


  getMoviesById(id: string): void {
    this.moviesService.getMovieById(id).subscribe({
      next: (movie) => {
        this.movieDetail = [movie].map(movie => ({
          ...movie,
          imageUrl: this.getRandomUnsplashImage()
        }))

        console.log(this.movieDetail);

      },
      error: (error) => {
        console.error('Error fetching movie by ID:', error);
      }
    });
  }

  handleImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/no-image.png';
  }

  getRandomUnsplashImage(): string {
    const width = 600;
    const height = 400;
    const query = 'movie';
    const uniqueParam = Math.floor(Math.random() * 10000);
    return `https://source.unsplash.com/random/${width}x${height}/?${query}&sig=${uniqueParam}`;
  }
}