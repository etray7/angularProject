import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return args[0].filter((item) => Boolean(item.title.toUpperCase().match(args[1])) || !value);
  }

}
