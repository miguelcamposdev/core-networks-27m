import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/films.interface';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  id: string = '';
  film: Film | undefined;

  constructor(private route: ActivatedRoute, private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.filmService.getFilm(this.id).subscribe(film => {
      this.film = film;
    });
  }

  goBack() {
    // history.back();
    this.router.navigate(['..']);
  }
}
