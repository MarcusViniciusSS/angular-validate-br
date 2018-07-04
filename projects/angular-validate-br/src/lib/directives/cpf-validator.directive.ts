import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Cpf } from '../functions/anotations/cpf';
import { Directive } from '@angular/core';

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
