import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args[0] === 'creationDate') {
      return value.sort((a, b) => {
        return Number(b.creationDate) - Number(a.creationDate);
      });
    }
  }

}
