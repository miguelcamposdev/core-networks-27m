import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsRoot } from '../models/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<FilmsRoot> {
    return this.http.get<FilmsRoot>('https://swapi.dev/api/films/');
  }
}
