import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { MoviePopularRoot } from '../models/movie-popular.interface';

const MOVIE_BASE_URL = environment.apiUrl + '/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopular(): Observable<MoviePopularRoot> {
    return this.http.get<MoviePopularRoot>(`${MOVIE_BASE_URL}/popular`);
  }

  getLatest(): Observable<MoviePopularRoot> {
    return this.http.get<MoviePopularRoot>(`${MOVIE_BASE_URL}/latest`);
  }
}
