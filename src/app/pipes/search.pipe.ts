import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../domain/interfaces/course.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return args[0].filter(
      (item: Course) =>
        Boolean(item.name.toUpperCase().match(args[1])) ||
        Boolean(item.description.toUpperCase().match(args[1])) ||
        !value
    );
  }

}
