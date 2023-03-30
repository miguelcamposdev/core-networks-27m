import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/films.interface';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  listadoPeliculas: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(respuestaFilms => {
      this.listadoPeliculas = respuestaFilms.results;
    });
  }

  getFilmPoster(film: Film): string {
    var id = film.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;
  }

  getFilmId(film: Film): string {
    return film.url.split('/').reverse()[1];
  }


}
