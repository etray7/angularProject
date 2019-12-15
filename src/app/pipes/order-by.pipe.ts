import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args[0] === 'date') {
      return value.sort((a, b) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      });
    }
  }

}
