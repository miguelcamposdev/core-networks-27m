import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'login-app', redirectTo: '/login'},
  {path: 'films', component: FilmListComponent},
  {path: 'film/:id', component: FilmDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: '/films' },
  {path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
