import { Anotation } from './anotation';

export class Integer implements Anotation {
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
        const pattern = "^-?[0-9]*$";
        const regex = new RegExp(pattern);
        return regex.test(str);
    }
}
