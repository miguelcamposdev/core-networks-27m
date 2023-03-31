import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MovieList } from 'src/app/models/created-lists.interface';
import { Movie } from 'src/app/models/movie-popular.interface';
import { MovieService } from 'src/app/services/movie.service';

const MOVIE_LIST_SAMPLE: MovieList[] = [
  {
    "description": "Name pretty much says it all, here's the top 50 grossing films of all time.",
    "favorite_count": 0,
    "id": 1,
    "item_count": 0,
    "iso_639_1": "en",
    "list_type": "movie",
    "name": "Películas Semana Santa",
    "poster_path": null
  },
  {
    "description": "Name pretty much says it all, here's the top 50 grossing films of all time.",
    "favorite_count": 0,
    "id": 2,
    "item_count": 0,
    "iso_639_1": "en",
    "list_type": "movie",
    "name": "Películas de acción",
    "poster_path": null
  }
];

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.css']
})
export class MoviePopularComponent implements OnInit {
  listadoPeliculas: Movie[] = [];
  listasUsuario: MovieList[] = MOVIE_LIST_SAMPLE;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopular().subscribe(resp => {
      this.listadoPeliculas = resp.results;
    });
  }

}
