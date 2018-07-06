
# angular-validate-br

[![Build Status](https://img.shields.io/travis/erickants/angular-validate-br.svg)](https://travis-ci.org/fengyuanchen/cropperjs) [![Downloads](https://img.shields.io/npm/dw/angular-validate-br.svg)](https://www.npmjs.com/package/angular-validate-br) [![Version](https://img.shields.io/npm/v/angular-validate-br.svg)](https://www.npmjs.com/package/angular-validate-br)

> Library to projects on Angular to validate especific inputs with Brazilian rules.

> [Website](https://lowpoc.github.io/angular-validate-br/)

## Installation

```bash
npm install angular-validate-br --save
```

### Basic usage

To use the benefits of the library simply import the dependency in your class or module to have the resources at your disposal.

  * Reactive Forms
```typescript
//Reactive forms
import { ValidateBrService } from 'angular-validate-br';
@Component({
  selector: 'lib-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./samle.component.css']
})  
export class SampleComponent implements OnInit {
  sampleForm: FormGroup;
  
  constructor(private validateBrService: ValidateBrService) {
    this.sampleForm = return new FormGroup({
      personalData: new FormGroup({
        money: new FormControl('', [this.validateBrService.decimal]),
        cpf: new FormControl('', [this.validateBrService.cpf]),
        cnpj: new FormControl('', [ this.validateBrService.cnpj])
      }),
      url: new FormControl('', [this.validateBrService.url]),
      number: new FormControl('', this.validateBrService.integer)
    });
  }
```
* Template-driven forms

```typescript

  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { AppComponent } from './app.component';
  import { FormsModule } from '@angular/forms';
  import { SampleComponent } from './sample.component';
  import { AngularValidateBrLibModule } from 'angular-validate-br';

  @NgModule({
    declarations: [AppComponent, SampleComponent],
    imports: [BrowserModule, FormsModule, AngularValidateBrLibModule],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
```
```html
<form #sampleform="ngForm" novalidate>
  <div>
    <input type="text" required ValCpf [(ngModel)]="sample.cpf" #cpf="ngModel" name="cpf" class="form-control">
    <span *ngIf="cpf.errors.cpfvalidator && (cpf.dirty || cpf.touched)"> Cpf is invalid</span>
  </div>
  <div>
    <input type="text" required ValCnpj [(ngModel)]="sample.cnpj" #cnpj="ngModel" name="cnpj" class="form-control">
    <span *ngIf="cnpj.errors.cpfvalidator && (cnpj.dirty || cnpj.touched)"> Cnpj is invalid</span>
  </div>
  <div>
    <input type="text" required ValUrl [(ngModel)]="sample.url" #url="ngModel" name="url" class="form-control">
    <span *ngIf="url.errors.urlvalidator && (url.dirty || url.touched)"> Url is invalid</span>
  </div>
</form>
```

## Bugs and features

Please, fell free to [open a new issue](https://github.com/Lowpoc/angular-validate-br/issues) on GitHub.


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Marcus Vinicius(@Lowpoc) & Erick Antunes(@erickants)
