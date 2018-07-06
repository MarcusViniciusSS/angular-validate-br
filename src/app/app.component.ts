import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidateBrService } from 'projects/angular-validate-br/src/public_api';
@Component({
  selector: 'lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lib';
  sampleForm: FormGroup;

  constructor(private _validateBr: ValidateBrService) {
    this.sampleForm = new FormGroup({
      cpf: new FormControl('', [this._validateBr.cpf]),
      cnpj: new FormControl('', [this._validateBr.cnpj]),
      url: new FormControl('', [this._validateBr.url]),
      decimal: new FormControl('', [this._validateBr.decimal]),
      integer: new FormControl('', [this._validateBr.integer]),
      propName: new FormControl('', [this._validateBr.propName]),
      alphaNumeric: new FormControl('', [this._validateBr.alphaNumeric]),
      alpha: new FormControl('', [this._validateBr.alpha])
    });
  }
}
