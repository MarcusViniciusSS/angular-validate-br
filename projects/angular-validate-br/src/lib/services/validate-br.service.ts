import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { PropNameValidatorDirective } from '../directives/propName-validator-directive';
import { Injectable } from '@angular/core';
import { AlphaNumericValidatorDirective } from '../directives/alphanumeric-validator.directive';
import { CpfValidatorDirective } from '../directives/cpf-validator.directive';
import { CnpjValidatorDirective } from '../directives/cnpj-validator.directive';

@Injectable({
  providedIn: 'root'
})
export class ValidateBrService extends Validators {

  /**
   * Validator who checks if the control is a valid proper name.
  */
  propName(control: AbstractControl): ValidationErrors | null {
    return new PropNameValidatorDirective().validate(control);
  }

  /**
   * Validator checking if the control is valid alphanumeric.
  */
  alphaNumeric(control: AbstractControl): ValidationErrors | null {
    return new AlphaNumericValidatorDirective().validate(control);
  }

  /**
   * Validator checking if control is *cpf* valid.
  */
  cpf(control: AbstractControl): ValidationErrors | null {
    return new CpfValidatorDirective().validate(control);
  }

  /**
   * Validator checking if control is *cnpj* valid.
  */
  cnpj(control: AbstractControl): ValidationErrors | null {
    return new CnpjValidatorDirective().validate(control);
  }
}
