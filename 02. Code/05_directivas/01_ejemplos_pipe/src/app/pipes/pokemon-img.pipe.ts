import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImg'
})
export class PokemonImgPipe implements PipeTransform {

  transform(urlPokemon: string, ...args: unknown[]): unknown {
    // https://pokeapi.co/api/v2/pokemon/1/

    // Split > divide la URL por el separador que yo le indique, en este caso "/"
    // [0] >> https:
    // ...

    const id = urlPokemon.split('/').reverse()[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

}
