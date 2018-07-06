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
        const pattern = '^[0-9]+(\.[0-9]{1,2})?$';
        const regex = new RegExp(pattern);
        return regex.test(this.value);
    }
}
