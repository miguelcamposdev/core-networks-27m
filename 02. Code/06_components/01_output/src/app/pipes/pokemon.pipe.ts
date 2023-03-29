import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImg'
})
export class PokemonPipe implements PipeTransform {

  transform(urlPokemon: string, ...args: unknown[]): unknown {
    const id = urlPokemon.split('/').reverse()[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }

}
