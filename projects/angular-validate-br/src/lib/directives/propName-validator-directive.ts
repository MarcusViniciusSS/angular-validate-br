import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { PropName } from '../functions/propName';

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
  private validator: ValidatorFn;
  private _onChange: () => void;

  @Input()
  get validation(): ValidatorFn | null { return this.validator; }

  set validation(value: ValidatorFn | null) {
    this.validator =  value;
    if (this._onChange) { this._onChange(); }
  }

  constructor() {
    this.validator = this.propNameValidator();
  }

  validate(c: AbstractControl) {
    return this.validation ? this.validator(c) : null;
  }

  private propNameValidator(): ValidatorFn {
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

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}
