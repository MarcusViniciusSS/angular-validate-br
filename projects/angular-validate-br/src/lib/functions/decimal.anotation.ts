import { Anotation } from './anotation';

export class Decimal implements Anotation {
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    validate(): boolean {
        if (!this.value) {
            return true;
        }
        // tslint:disable-next-line:quotemark
        const pattern = "^[-]?\d*(\.\d+)?$";
        const regex = new RegExp(pattern);
        return regex.test(this.value);
    }
}
