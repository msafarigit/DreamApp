import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'jalali'
})
export class JalaliPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const jalaliMoment = moment(value);
    return jalaliMoment.locale('fa').format('YYYY-MM-DD');
  }

}
