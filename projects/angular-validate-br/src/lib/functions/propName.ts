import { Anotation } from './anotation';
import { NoAccents } from './noAccents';

export class PropName implements Anotation {
  name: string;
  constructor(value: string) {
    this.name = value;
  }

  validate(): boolean {
    const str = new NoAccents(this.name).format();
    // tslint:disable-next-line:quotemark
    const regex = new RegExp("^[a-zA-Z]+[a-zA-Z'.\\s]*$");
    const result = regex.exec(str);
    if (!result) { return false; }
    return true;
  }
}
