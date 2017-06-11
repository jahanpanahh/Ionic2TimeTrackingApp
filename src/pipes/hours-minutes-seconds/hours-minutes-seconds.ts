import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the HoursMinutesSecondsPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'hours-minutes-seconds',
})
export class HoursMinutesSecondsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, ...args) {
    let minutes = Math.floor(value / 60);
    let hours = Math.floor(minutes / 60);
    let seconds = Math.floor(value % 60);
 
    return hours + " hrs, " + minutes + " mins, " + seconds + " secs";
  }
}
