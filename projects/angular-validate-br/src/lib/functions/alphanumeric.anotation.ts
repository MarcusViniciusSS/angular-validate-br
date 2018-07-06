import { Anotation } from './anotation';
import { NoAccents } from './noAccents.formatter';

export class AlphaNumeric implements Anotation {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  validate(): boolean {
    const str = new NoAccents(this.value).format();
    if (!str) {
      return true;
    }
    // tslint:disable-next-line:quotemark
    const pattern = "^[a-zA-Z0-9'&()ºª°\\-\\/,.\\s]+$";
    const regex = new RegExp(pattern);
    return regex.test(str);
  }
}
