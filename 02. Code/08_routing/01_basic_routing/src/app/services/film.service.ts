import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, FilmsRoot } from '../models/films.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<FilmsRoot> {
    return this.http.get<FilmsRoot>('https://swapi.dev/api/films');
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`https://swapi.dev/api/films/${id}`);
  }
}
