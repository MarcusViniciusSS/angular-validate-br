import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularValidateBrLibModule } from 'angular-validate-br';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularValidateBrLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
