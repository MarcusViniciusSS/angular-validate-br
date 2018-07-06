import { Validator, ValidatorFn, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { Cpf } from '../functions/cpf.anotation';
import { Input } from '@angular/core';

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
  private validator: ValidatorFn;
  private _onChange: () => void;

  @Input()
  get validation(): ValidatorFn | null { return this.validator; }

  set validation(value: ValidatorFn | null) {
    this.validator =  value;
    if (this._onChange) { this._onChange(); }
  }

  constructor() {
    this.validator = this.cpfValidator();
  }

  validate (c: AbstractControl) {
    return this.validator(c);
  }

  private cpfValidator (): ValidatorFn {
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

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
}
