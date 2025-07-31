import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../core/services/movies.service';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
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
  currentPage = 1;
  totalPages = 0;
  limit = 20;

  constructor(readonly moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id')!;
      this.getMoviesById(movieId)
    });
    this.fetchrecommendedMovies();
  }

  fetchrecommendedMovies(): void {
    this.moviesService.getMovies(this.currentPage, this.limit).subscribe({
      next: (response) => {
        const recommendedGenres = response.data.map(movie => movie.genres).flat();

        this.totalPages = response.totalPages;
        this.recommendedMovies = response.data.filter((movie) => {
          return (
            movie.imdb?.rating >= 6 &&
            movie.imdb?.votes >= 100 &&
            movie.genres?.some((genre) => recommendedGenres.includes(genre))
          );
        });
        console.log(this.recommendedMovies);

      },
      error: (error) => {
        console.error('Erreur lors du chargement des films', error);
      },
    });
  }


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

  goToMovie(movieId: string): void {
    this.router.navigate(['/movies', movieId]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

}