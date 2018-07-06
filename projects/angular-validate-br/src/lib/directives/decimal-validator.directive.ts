import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { Decimal } from '../functions/decimal.anotation';

@Directive({
    selector: '[valDecimal][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: DecimalValidatorDirective,
            multi: true
        }
    ]
})
export class DecimalValidatorDirective implements Validator {
    private validator: ValidatorFn;
    private _onChange: () => void;

    @Input()
    get validation(): ValidatorFn | null { return this.validator; }

    set validation(value: ValidatorFn | null) {
        this.validator = value;
        if (this._onChange) { this._onChange(); }
    }

    constructor() {
        this.validator = this.decimalValidator();
    }

    validate(c: AbstractControl) {
        return this.validation ? this.validator(c) : null;
    }

    private decimalValidator(): ValidatorFn {
        return (c: AbstractControl) => {
            const isValid = new Decimal(c.value).validate();
            if (isValid) {
                return null;
            } else {
                return {
                    decimalvalidator: {
                        valid: false
                    }
                };
            }
        };
    }

    registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}
