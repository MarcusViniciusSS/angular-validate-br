import { Validator, ValidatorFn, NG_VALIDATORS, FormControl, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { PropName } from '../functions/anotations/propName';

@Directive({
  selector: '[valPropName][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PropNameValidatorDirective,
      multi: true
    }
  ]
})
export class PropNameValidatorDirective implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = this.propNameValidator();
  }

  validate (c: AbstractControl) {
    return this.validator(c);
  }

  propNameValidator (): ValidatorFn {
    return (c: AbstractControl) => {
      const str = <string>c.value;
      if (isNullOrUndefined(str) || str.trim() === '') {
        return null;
      }
      const isValid = new PropName(str).validate();
      if (isValid) {
        return null;
      } else {
        return {
          propnamevalidator: {
            valid: false
          }
        };
      }
    };
  }
}
