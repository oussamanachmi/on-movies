import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MoviesService } from '../../core/services/movies.service';
import { Movie } from '../../core/models/movies.model';


@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  itemsPerSlide = 6.5;
  singleSlideOffset = true;
  noWrap = false;
  topRatedMovies: Movie[] = [];
  recentlyMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovies();
  }

  onSlideRangeChange(indexes: number[] | void): void {
    // console.log(`Slides have been switched: ${indexes}`);
  }

  getMovies(): void {
    this.moviesService.getMoviesFromApi().subscribe({
      next: (movies) => {
        this.topRatedMovies = movies.filter(movie => movie?.imdb?.rating != null)
          .sort((a, b) => b.imdb.rating - a.imdb.rating)
          .slice(0, 20);

        this.recentlyMovies = movies
          .filter(movie => movie?.year)
          .sort((a, b) => +b.year - +a.year)
          .slice(0, 20);
        console.log('Movies fetched successfully:', this.topRatedMovies);
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      }
    });
  }

  handleImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/no-image.png';
  }
}
