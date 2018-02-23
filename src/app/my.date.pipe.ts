import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    /*    const date = new Date();
    return date.getFullYear() + "-" + (this.addZero(date.getMonth() + 1)) + "-" + this.addZero(date.getDate()) + " "
      + this.addZero(date.getHours()) + ":" + this.addZero(date.getMinutes()) + ":" + this.addZero(date.getSeconds());*/
    console.log(args);
    return value.substring(0, 16);
  }

  addZero(digit: number): string {
    // digit 가 문자가 아니라 숫자이다 digit.length로는 안됨.
    if (digit < 10) {
      return "0" + digit;
    } else {
      return "" + digit;
    }
  }
}
