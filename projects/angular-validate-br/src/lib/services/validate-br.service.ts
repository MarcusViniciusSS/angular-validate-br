import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { PropNameValidatorDirective } from '../directives/propName-validator-directive';
import { Injectable } from '@angular/core';
import { AlphaNumericValidatorDirective } from '../directives/alphanumeric-validator.directive';
import { CpfValidatorDirective } from '../directives/cpf-validator.directive';
import { CnpjValidatorDirective } from '../directives/cnpj-validator.directive';
import { AlphaValidatorDirective } from '../directives/alpha-validator.directive';
import { DecimalValidatorDirective } from '../directives/decimal-validator.directive';
import { UrlValidatorDirective } from '../directives/url-validator.directive';
import { IntegerValidatorDirective } from '../directives/integer-validator.directive';

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
   * Validator checking if the control is valid alpha.
  */
  alpha(control: AbstractControl): ValidationErrors | null {
    return new AlphaValidatorDirective().validate(control);
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

  /**
   * Validator checking if control is *decimal* valid.
  */
  decimal(control: AbstractControl): ValidationErrors | null {
    return new DecimalValidatorDirective().validate(control);
  }

  /**
   * Validator checking if control is *integer* valid.
  */
  integer(control: AbstractControl): ValidationErrors | null {
    return new IntegerValidatorDirective().validate(control);
  }

  /**
    * Validator checking if control is *url* valid.
  */
  url(control: AbstractControl): ValidationErrors | null {
    return new UrlValidatorDirective().validate(control);
  }

}
