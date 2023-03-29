import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StarWarsFilmsComponent } from './components/star-wars-films/star-wars-films.component';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsFilmsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
