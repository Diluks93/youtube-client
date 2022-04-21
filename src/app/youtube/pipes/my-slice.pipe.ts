import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySlice',
})
export class MySlicePipe implements PipeTransform {
  MAX_LEN_STRING = 20;

  transform(value: string | undefined): string {
    if (!value) return '';
    if (value.length > this.MAX_LEN_STRING) {
      return `${value.slice(0, this.MAX_LEN_STRING)}...`;
    } else {
      return value;
    }
  }
}
