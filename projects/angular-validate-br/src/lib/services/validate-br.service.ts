import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { PropNameValidatorDirective } from '../directives/propName-validator-directive';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateBrService extends Validators {

  propName(control: AbstractControl): ValidationErrors | null {
    return new PropNameValidatorDirective().validate(control);
  }
}
