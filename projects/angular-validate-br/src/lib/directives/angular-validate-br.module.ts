import { NgModule } from '@angular/core';
import { AlphaNumericValidatorDirective } from '../directives/alphanumeric-validator.directive';
import { CnpjValidatorDirective } from '../directives/cnpj-validator.directive';
import { CpfValidatorDirective } from '../directives/cpf-validator.directive';
import { PropNameValidatorDirective } from '../directives/propName-validator-directive';
import { DecimalValidatorDirective } from './decimal-validator.directive';
import { IntegerValidatorDirective } from './integer-validator.directive';
import { UrlValidatorDirective } from './url-validator.directive';
import { AlphaValidatorDirective } from './alpha-validator.directive';

@NgModule({
  imports: [],
  declarations: [
    AlphaNumericValidatorDirective,
    CnpjValidatorDirective,
    CpfValidatorDirective,
    PropNameValidatorDirective,
    AlphaValidatorDirective,
    DecimalValidatorDirective,
    IntegerValidatorDirective,
    UrlValidatorDirective
  ],
  exports: [
    AlphaNumericValidatorDirective,
    CnpjValidatorDirective,
    CpfValidatorDirective,
    PropNameValidatorDirective,
    AlphaValidatorDirective,
    DecimalValidatorDirective,
    IntegerValidatorDirective,
    UrlValidatorDirective
  ]
})
export class AngularValidateBrLibModule { }
