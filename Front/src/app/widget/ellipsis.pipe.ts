import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  public transform(value: string | undefined, maxlength: number = 10): string {
    if (!value) {
      return '';
    }
    if (value.length > maxlength) {
      return value.substr(0, maxlength) + '...';
    }
    return value;
  }
}
