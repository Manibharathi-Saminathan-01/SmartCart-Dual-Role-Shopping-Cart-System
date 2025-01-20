import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceTag',
})
export class PriceTagPipePipe implements PipeTransform {
  transform(value: any, priceTag: any) {
    let priceWithTag = value + priceTag;
    return priceWithTag;
  }
}
