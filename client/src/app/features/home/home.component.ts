import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../core/models/movies.model';
import { setTheme } from 'ngx-bootstrap/utils';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, CarouselModule, RouterModule],
})
export class HomeComponent {
  itemsPerSlide = 6.5;
  singleSlideOffset = true;
  noWrap = false;
  isLoading = true;

  allMovies: Movie[] = [];
  filteredMovies: Movie[] = [];
  comedyMovies: Movie[] = [];
  selectedFilter: 'popular' | 'news' | 'upcoming' = 'popular';
  currentPage = 1;
  totalPages = 0;
  limit = 20;

  constructor(private moviesService: MoviesService) {
    setTheme('bs5');
  }

  ngOnInit(): void {
    this.getMovies();
  }

  trackMovie(index: number, movie: Movie): any {
    return movie._id || movie.title;
  }

  getMovies(): void {
    this.isLoading = true;

    this.moviesService.getMovies(this.currentPage, this.limit).subscribe({
      next: (response) => {
        this.allMovies = response.data;
        this.totalPages = response.totalPages;

        this.comedyMovies = response.data
          .filter((movie) => movie.genres?.includes('Comedy'));

        this.applyFilter();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des films', error);
        this.isLoading = false;
      },
    });
  }

  applyFilter(): void {
    const nowYear = new Date().getFullYear();

    if (this.selectedFilter === 'popular') {
      this.filteredMovies = this.allMovies
        .filter((m) => m.imdb.rating)
        .sort((a, b) => b.imdb.rating - a.imdb.rating);
    } else if (this.selectedFilter === 'news') {
      this.filteredMovies = this.allMovies
        .filter((m) => m.year)
        .sort((a, b) => +b.year - +a.year);
    } else if (this.selectedFilter === 'upcoming') {
      this.filteredMovies = this.allMovies
        .filter((m) => +m.year > nowYear)
        .sort((a, b) => +a.year - +b.year);
    }
  }

  onSelectFilter(filter: 'popular' | 'news' | 'upcoming') {
    this.selectedFilter = filter;
    this.applyFilter();
  }

  handleImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/no-image.png';
  }

  onSlideRangeChange(indexes: number[] | void): void { }
}
