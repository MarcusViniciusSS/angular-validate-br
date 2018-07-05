import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { Cpf } from '../functions/cpf';

@Directive({
  selector: '[valCpf][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CpfValidatorDirective,
      multi: true
    }
  ]
})
export class CpfValidatorDirective implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = this.cpfValidator();
  }

  validate (c: AbstractControl) {
    return this.validator(c);
  }

  cpfValidator (): ValidatorFn {
    return (c: AbstractControl) => {
      const isValid = new Cpf(c.value).validate();
      if (isValid) {
        return null;
      } else {
        return {
          cpfvalidator: {
            valid: false
          }
        };
      }
    };
  }
}
