import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shared',
})
export class SharedPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value, args);
    return null;
  }
}
