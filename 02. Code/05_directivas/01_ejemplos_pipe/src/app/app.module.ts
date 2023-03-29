import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemplosPipeComponent } from './components/ejemplos-pipe/ejemplos-pipe.component';
import { EuroPipe } from './pipes/euro.pipe';
import { DollarPipe } from './pipes/dollar.pipe';
import { ListadoClaseComponent } from './components/listado-clase/listado-clase.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemplosPipeComponent,
    EuroPipe,
    DollarPipe,
    ListadoClaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
