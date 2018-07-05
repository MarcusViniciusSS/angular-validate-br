import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { Alpha } from '../functions/alpha';
import { Input } from '@angular/core';

@Directive({
    selector: '[valAlpha][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: AlphaValidatorDirective,
            multi: true
        }
    ]
})
export class AlphaValidatorDirective implements Validator {
    private validator: ValidatorFn;
    private _onChange: () => void;

    @Input()
    get validation(): ValidatorFn | null { return this.validator; }

    set validation(value: ValidatorFn | null) {
        this.validator = value;
        if (this._onChange) { this._onChange(); }
    }

    constructor() {
        this.validator = this.alphaValidator();
    }

    validate(c: AbstractControl) {
        return this.validation ? this.validator(c) : null;
    }

    private alphaValidator(): ValidatorFn {
        return (c: AbstractControl) => {
            const isValid = new Alpha(c.value).validate();
            if (isValid) {
                return null;
            } else {
                return {
                    alphavalidator: {
                        valid: false
                    }
                };
            }
        };
    }

    registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}
