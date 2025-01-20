import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
})
export class TrimePipePipe implements PipeTransform {
  transform(description: any, lastvalue: any) {
    if (description.length >= lastvalue) {
      let trimedDescription = description.slice(0, lastvalue) + '...';
      return trimedDescription;
    } else {
      return description;
    }
  }
}
