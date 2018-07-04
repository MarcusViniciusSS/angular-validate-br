import { OnlyNumbers } from '../formatters/onlyNumbers';
import { Anotation } from './anotation';

export class Cnpj implements Anotation {
  document: string;

  constructor(value: string) {
    this.document = value;
  }

  validate(): boolean {
    const cnpj = new OnlyNumbers(this.document).format();

    if (cnpj === '' || cnpj === null || cnpj === undefined) { return true; }

    if (cnpj.length !== 14) { return false; }

    if (cnpj === '00000000000000' ||
      cnpj === '11111111111111' ||
      cnpj === '22222222222222' ||
      cnpj === '33333333333333' ||
      cnpj === '44444444444444' ||
      cnpj === '55555555555555' ||
      cnpj === '66666666666666' ||
      cnpj === '77777777777777' ||
      cnpj === '88888888888888' ||
      cnpj === '99999999999999') { return false; }

    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    const digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) { pos = 9; }
    }
    let resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
    // tslint:disable-next-line:triple-equals
    if (resultado != digits.charAt(0)) { return false; }

    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;
    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) { pos = 9; }
    }
    resultado = sum % 11 < 2 ? 0 : 11 - sum % 11;
    // tslint:disable-next-line:triple-equals
    if (resultado != digits.charAt(1)) { return false; }

    return true;
  }
}
