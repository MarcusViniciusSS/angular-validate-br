import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { Integer } from '../functions/integer.anotation';

@Directive({
  selector: '[valInteger][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IntegerValidatorDirective,
      multi: true
    }
  ]
})
export class IntegerValidatorDirective implements Validator {
  private validator: ValidatorFn;
  private _onChange: () => void;

  @Input()
  get validation(): ValidatorFn | null { return this.validator; }

  set validation(value: ValidatorFn | null) {
    this.validator =  value;
    if (this._onChange) { this._onChange(); }
  }

  constructor() {
    this.validator = this.integerValidator();
  }

  validate (c: AbstractControl) {
    return this.validator(c);
  }

  private integerValidator (): ValidatorFn {
    return (c: AbstractControl) => {
      const isValid = new Integer(c.value).validate();
      if (isValid) {
        return null;
      } else {
        return {
          integervalidator: {
            valid: false
          }
        };
      }
    };
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}
