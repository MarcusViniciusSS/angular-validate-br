import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { Cnpj } from '../functions/cnpj.anotation';
import { Input } from '@angular/core';

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
  private validator: ValidatorFn;
  private _onChange: () => void;

  @Input()
  get validation(): ValidatorFn | null { return this.validator; }

  set validation(value: ValidatorFn | null) {
    this.validator =  value;
    if (this._onChange) { this._onChange(); }
  }

  constructor() {
    this.validator = this.cnpjValidator();
  }

  validate (c: AbstractControl) {
    return this.validator(c);
  }

  private cnpjValidator (): ValidatorFn {
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

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}
