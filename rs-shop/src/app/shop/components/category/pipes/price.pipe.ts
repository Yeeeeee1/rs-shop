import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: any[], flag: boolean = false, term: any = 'price'): any[] {
    function compare(a: any[], b: any[]): number {
      if (a[term] > b[term]) {
        return flag ? -1 : 1;
      }
      if (a[term] < b[term]) {
        return flag ? 1 : -1;
      }
      // a должно быть равным b
      return 0;
    }

    return value.sort((a, b) => compare(a, b));
  }
}
