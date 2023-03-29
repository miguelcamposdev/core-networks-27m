import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyEuro'
})
export class EuroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} €`;
  }

}
