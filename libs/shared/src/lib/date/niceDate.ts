import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({ name: 'niceDate' })
export class NiceDatePipe implements PipeTransform {
  transform(date: Date, dataFormat = 'MM-DD-YY @ h:sA') {
    const formattedDated = format(date, dataFormat);
    return formattedDated.substring(0, formattedDated.length - 1);
  }
}
