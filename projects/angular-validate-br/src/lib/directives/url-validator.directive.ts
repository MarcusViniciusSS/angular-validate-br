import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { Url } from '../functions/url.anotation';

@Directive({
  selector: '[valUrl][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UrlValidatorDirective,
      multi: true
    }
  ]
})
export class UrlValidatorDirective implements Validator {
  private validator: ValidatorFn;
  private _onChange: () => void;

  @Input()
  get validation(): ValidatorFn | null { return this.validator; }

  set validation(value: ValidatorFn | null) {
    this.validator =  value;
    if (this._onChange) { this._onChange(); }
  }

  constructor() {
    this.validator = this.urlValidator();
  }

  validate (c: AbstractControl) {
    return this.validator(c);
  }

  private urlValidator (): ValidatorFn {
    return (c: AbstractControl) => {
      const isValid = new Url(c.value).validate();
      if (isValid) {
        return null;
      } else {
        return {
          urlvalidator: {
            valid: false
          }
        };
      }
    };
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}
