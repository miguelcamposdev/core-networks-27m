import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListadoPokemonComponent } from './components/listado-pokemon/listado-pokemon.component';
import { PokemonPipe } from './pipes/pokemon.pipe';
import { PokeminItemComponent } from './components/pokemin-item/pokemin-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPokemonComponent,
    PokemonPipe,
    PokeminItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
