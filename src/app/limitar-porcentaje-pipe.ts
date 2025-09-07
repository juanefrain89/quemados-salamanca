import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitarPorcentaje',
  standalone: false
})
export class LimitarPorcentajePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
