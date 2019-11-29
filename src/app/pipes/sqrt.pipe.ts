import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'sqrt',
  pure: false // true: singleton
})
export class SqrtPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   const showText = args && args[0];
  //   if (showText) {
  //     return `Sqrt ${value} is ` + Math.sqrt(value);
  //   }
  //   return Math.sqrt(value);
  // }

  constructor() {
    console.log(this);
  }

  transform(value: number, showText?: boolean, digit?: string): any {
    console.log('transform');
    const numberPipe = new DecimalPipe('en');

    if (showText) {
      return `Sqrt ${value} is ` + numberPipe.transform(Math.sqrt(value), digit);
    }
    return numberPipe.transform(Math.sqrt(value), digit);
  }

}
