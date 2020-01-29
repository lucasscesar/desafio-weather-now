import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureFormat'
})
export class TemperatureFormatPipe implements PipeTransform {

  transform = (value: number, ...args: any[]): number => Math.floor(((value - 32) * (5 / 9)));

}
