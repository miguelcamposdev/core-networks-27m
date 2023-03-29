import { Component } from '@angular/core';
import { PokemonImgPipe } from 'src/app/pipes/pokemon-img.pipe';

const POKEMON_LIST = [
  {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
    "name": "ivysaur",
    "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
    "name": "venusaur",
    "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
    "name": "charmander",
    "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
    "name": "charmeleon",
    "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
    "name": "charizard",
    "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
    "name": "squirtle",
    "url": "https://pokeapi.co/api/v2/pokemon/7/"
    }
];

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.css']
})
export class ListadoPokemonComponent {
  listadoPokemon = POKEMON_LIST;

  constructor(private pokemonImgPipe: PokemonImgPipe) { }

  getPokemonImageUrl(url: string) {
    return this.pokemonImgPipe.transform(url);
  }
}
