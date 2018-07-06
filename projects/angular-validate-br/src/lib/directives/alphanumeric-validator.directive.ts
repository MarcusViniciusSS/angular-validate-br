import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { AlphaNumeric } from '../functions/alphanumeric.anotation';
import { Input } from '@angular/core';

@Directive({
  selector: '[valAlphaNumeric][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AlphaNumericValidatorDirective,
      multi: true
    }
  ]
})
export class AlphaNumericValidatorDirective implements Validator {
  private validator: ValidatorFn;
  private _onChange: () => void;

  @Input()
  get validation(): ValidatorFn | null { return this.validator; }

  set validation(value: ValidatorFn | null) {
    this.validator =  value;
    if (this._onChange) { this._onChange(); }
  }

  constructor() {
    this.validator = this.alphaNumericValidator();
  }

  validate(c: AbstractControl) {
    return this.validation ? this.validator(c) : null;
  }

  private alphaNumericValidator(): ValidatorFn {
    return (c: AbstractControl) => {
      const isValid = new AlphaNumeric(c.value).validate();
      if (isValid) {
        return null;
      } else {
        return {
          alphanumericvalidator: {
            valid: false
          }
        };
      }
    };
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}
