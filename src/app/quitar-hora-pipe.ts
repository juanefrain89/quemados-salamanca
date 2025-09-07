import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quitarHora',
  standalone: false
})
export class QuitarHoraPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
