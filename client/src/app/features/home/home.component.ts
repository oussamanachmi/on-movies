import { Component } from '@angular/core';
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
  imports: [CarouselModule, RouterModule],
})
export class HomeComponent {
  itemsPerSlide = 6.5;
  singleSlideOffset = true;
  noWrap = false;

  allMovies: Movie[] = [];
  filteredMovies: Movie[] = [];
  fantasyMovies: Movie[] = [];
  selectedFilter: 'populaire' | 'nouveautes' | 'avenir' = 'populaire';

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
    this.moviesService.getMovies().subscribe({
      next: (movies) => {
        this.allMovies = movies;


        this.fantasyMovies = movies
          .filter((movie) => movie.genres?.includes('Fantasy'));

        this.applyFilter();
      },
      error: (error) => {
        console.error('Erreur lors du chargement des films', error);
      },
    });
  }

  applyFilter(): void {
    const nowYear = new Date().getFullYear();

    if (this.selectedFilter === 'populaire') {
      this.filteredMovies = this.allMovies
        .filter((m) => m.imdb.rating)
        .sort((a, b) => b.imdb.rating - a.imdb.rating);
    } else if (this.selectedFilter === 'nouveautes') {
      this.filteredMovies = this.allMovies
        .filter((m) => m.year)
        .sort((a, b) => +b.year - +a.year);
    } else if (this.selectedFilter === 'avenir') {
      this.filteredMovies = this.allMovies
        .filter((m) => +m.year > nowYear)
        .sort((a, b) => +a.year - +b.year);
    }
  }

  onSelectFilter(filter: 'populaire' | 'nouveautes' | 'avenir') {
    this.selectedFilter = filter;
    this.applyFilter();
  }

  handleImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/no-image.png';
  }

  onSlideRangeChange(indexes: number[] | void): void { }
}
