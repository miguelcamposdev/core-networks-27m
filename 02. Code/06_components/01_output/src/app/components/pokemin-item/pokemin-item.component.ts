import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-pokemin-item',
  templateUrl: './pokemin-item.component.html',
  styleUrls: ['./pokemin-item.component.css']
})
export class PokeminItemComponent {
  @Input() pokemonInput!: Pokemon;
  @Output() pokemonSelected = new EventEmitter<Pokemon>();

  enviarPokemonSeleccionado() {
    this.pokemonSelected.emit(this.pokemonInput);
  }
}
