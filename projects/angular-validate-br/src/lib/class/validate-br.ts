import { Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { PropNameValidatorDirective } from '../directives/propName-validator-directive';

export class ValidateBr extends Validators {

  static propName(control: AbstractControl): ValidationErrors | null {
    return new PropNameValidatorDirective().validate(control);
  }
}
