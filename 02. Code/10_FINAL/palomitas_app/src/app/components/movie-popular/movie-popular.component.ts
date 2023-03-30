import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-popular.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.css']
})
export class MoviePopularComponent implements OnInit {

  listadoPeliculas: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopular().subscribe(resp => {
      this.listadoPeliculas = resp.results;
    });
  }

  getPoster(item: Movie) {
    return `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    }

}
