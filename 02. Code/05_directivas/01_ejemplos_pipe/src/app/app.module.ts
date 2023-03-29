import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemplosPipeComponent } from './components/ejemplos-pipe/ejemplos-pipe.component';
import { EuroPipe } from './pipes/euro.pipe';
import { DollarPipe } from './pipes/dollar.pipe';
import { ListadoClaseComponent } from './components/listado-clase/listado-clase.component';
import { ListadoPokemonComponent } from './components/listado-pokemon/listado-pokemon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonImgPipe } from './pipes/pokemon-img.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EjemplosPipeComponent,
    EuroPipe,
    DollarPipe,
    ListadoClaseComponent,
    ListadoPokemonComponent,
    PokemonImgPipe
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [PokemonImgPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
