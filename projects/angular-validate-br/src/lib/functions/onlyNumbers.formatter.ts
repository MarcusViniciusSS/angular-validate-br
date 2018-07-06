import { Formatter } from './formatter';

export class OnlyNumbers implements Formatter {

  constructor (private value: any) { }

  format(): any {
    if (typeof (this.value) === 'string') {
      return this.value.replace(/[^\d]+/g, '');
    }
    return this.value;
  }

}
