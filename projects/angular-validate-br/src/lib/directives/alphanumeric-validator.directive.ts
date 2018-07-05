import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { AlphaNumeric } from '../functions/alphanumeric';

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
  validator: ValidatorFn;

  constructor() {
    this.validator = this.alphaNumericValidator();
  }

  validate(c: AbstractControl) {
    return this.validator(c);
  }

  alphaNumericValidator(): ValidatorFn {
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
}
