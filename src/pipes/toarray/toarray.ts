import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ToarrayPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'toarray',
})
export class ToarrayPipe implements PipeTransform {
  transform(inputObj: any, arg: any) {
    if (!inputObj) { return [] }

    let arr = [];
    for(let key in inputObj) {

      let obj = {};
      obj[key] = inputObj[key];
      arr.push(obj);
    }
    return arr;
  }
}
