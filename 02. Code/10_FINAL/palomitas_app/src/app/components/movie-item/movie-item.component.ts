import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieList } from 'src/app/models/created-lists.interface';
import { Movie } from 'src/app/models/movie-popular.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie: Movie = {} as Movie;
  @Input() listasUsuario: MovieList[] = [];

  addToListForm = new FormGroup(
    {
      listaSeleccionada: new FormControl('', Validators.required)
    });

  getPoster(item: Movie) {
    return `https://image.tmdb.org/t/p/w500${item.poster_path}`;
  }

  addMovieToList(idPelicula: number) {
    console.log(idPelicula, this.addToListForm.controls.listaSeleccionada.value);
  }
}
