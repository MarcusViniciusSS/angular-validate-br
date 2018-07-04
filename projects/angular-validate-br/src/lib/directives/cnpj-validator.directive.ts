import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { Cnpj } from '../functions/anotations/cnpj';

@Directive({
  selector: '[valCnpj][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CnpjValidatorDirective,
      multi: true
    }
  ]
})
export class CnpjValidatorDirective implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = this.cnpjValidator();
  }

  validate (c: AbstractControl) {
    return this.validator(c);
  }

  cnpjValidator (): ValidatorFn {
    return (c: AbstractControl) => {
      const isValid = new Cnpj(c.value).validate();
      if (isValid) {
        return null;
      } else {
        return {
          cnpjvalidator: {
            valid: false
          }
        };
      }
    };
  }
}
