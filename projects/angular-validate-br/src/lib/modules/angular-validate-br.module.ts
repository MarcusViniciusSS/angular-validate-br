import { NgModule } from '@angular/core';
import { AlphaNumericValidatorDirective } from '../directives/alphanumeric-validator.directive';
import { CnpjValidatorDirective } from '../directives/cnpj-validator.directive';
import { CpfValidatorDirective } from '../directives/cpf-validator.directive';
import { PropNameValidatorDirective } from '../directives/propName-validator-directive';

@NgModule({
  imports: [],
  declarations: [
    AlphaNumericValidatorDirective,
    CnpjValidatorDirective,
    CpfValidatorDirective,
    PropNameValidatorDirective
  ],
  exports: [
    AlphaNumericValidatorDirective,
    CnpjValidatorDirective,
    CpfValidatorDirective,
    PropNameValidatorDirective
  ]
})
export class AngularValidateBrLibModule {}
