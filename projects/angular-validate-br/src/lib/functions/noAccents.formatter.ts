import { Formatter } from './formatter';

export class NoAccents implements Formatter {
  str: string;

  constructor(value: string) {
    this.str = value;
  }

  format(): string {
    if (!this.str) { return ''; }

    let string = this.str;
    const mapAccentsHex = {
      a: /[\xE0-\xE6]/g,
      A: /[\xC0-\xC6]/g,
      e: /[\xE8-\xEB]/g,
      E: /[\xC8-\xCB]/g,
      i: /[\xEC-\xEF]/g,
      I: /[\xCC-\xCF]/g,
      o: /[\xF2-\xF6]/g,
      O: /[\xD2-\xD6]/g,
      u: /[\xF9-\xFC]/g,
      U: /[\xD9-\xDC]/g,
      c: /\xE7/g,
      C: /\xC7/g,
      n: /\xF1/g,
      N: /\xD1/g
    };

    // tslint:disable-next-line:forin
    for (const letters in mapAccentsHex) {
      const expression = mapAccentsHex[letters];
      string = string.replace(expression, letters);
    }

    return string;
  }
}
