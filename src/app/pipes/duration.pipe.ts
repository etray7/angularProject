import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const hours = (value / 60).toFixed();
    const minutes = value % 60;
    if (value < 60) {
      return `${value}min`;
    } else if (minutes) {
      return `${hours}h ${minutes}min`;
    } else if (!minutes) {
      return `${hours}h 0min`;
    }
  }

}
