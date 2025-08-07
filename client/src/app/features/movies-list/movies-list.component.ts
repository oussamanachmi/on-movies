import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../core/models/movies.model';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-movies-list',
  imports: [NgxPaginationModule, FormsModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
  standalone: true
})
export class MoviesListComponent {
  allMovies: Movie[] = [];
  filteredMovies: Movie[] = [];
  searchTerm: string = '';
  currentPage = 1;
  totalPages = 0;
  limit = 24;

  constructor(private moviesService: MoviesService, private router: Router) { }
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies(this.currentPage, this.limit).subscribe({
      next: (response) => {
        this.allMovies = response.data;
        this.totalPages = response.totalPages;
        this.filterMovies();
      },
      error: (error) => {
        console.error('Erreur lors du chargement des films', error);
      },
    });
  }

  filterMovies(): void {
    if (!this.searchTerm.trim()) {
      this.filteredMovies = this.allMovies;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredMovies = this.allMovies.filter(movie =>
        movie.title.toLowerCase().includes(term)
      );
    }
  }

  handleImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/no-image.png';
  }

  goToMovie(movieId: string): void {
    this.router.navigate(['/movies', movieId]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  pageChanged(event: number): void {
    this.currentPage = event;
    this.getMovies();
  }
}
