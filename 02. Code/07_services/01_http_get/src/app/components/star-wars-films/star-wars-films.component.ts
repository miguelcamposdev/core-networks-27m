import { Component, OnInit } from '@angular/core';
import { Film, FilmsRoot } from 'src/app/models/film.interface';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-star-wars-films',
  templateUrl: './star-wars-films.component.html',
  styleUrls: ['./star-wars-films.component.css']
})
export class StarWarsFilmsComponent implements OnInit {
  listadoPeliculas: Film[] = [];
  isLoading = true;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(respuesta => {
      this.isLoading = false;
      this.listadoPeliculas = respuesta.results;
    });
  }
}
