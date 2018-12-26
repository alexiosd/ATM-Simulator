import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from '@angular/common';

@Pipe({
  name: 'errorCurrency'
})
export class ErrorCurrencyPipe implements PipeTransform {

  transform(error: string, args?: any): string {
    let result = error;

    if (error.indexOf('amount:') > 0) {
      const amount = +error.slice(error.indexOf(':') + 1, error.length) * 1;
      result = error.slice(0, error.indexOf(':') + 2) + formatCurrency(amount, 'en', '$', 'USD', '1.0-0');    }
    return result;
  }

}
