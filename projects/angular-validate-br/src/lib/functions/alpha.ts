import { Anotation } from "./anotation";

export class Alpha implements Anotation {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  validate(): boolean {
    const str = this.value;
    if (!str) {
      return true;
    }
    // tslint:disable-next-line:quotemark
    const pattern = "^[a-zA-Z]*$";
    const regex = new RegExp(pattern);
    return regex.test(str);
  }
}
