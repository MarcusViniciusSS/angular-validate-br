import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './samples/components/contact/contact.component';
import { AngularValidateBrLibModule } from 'projects/angular-validate-br/src/public_api';

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [BrowserModule, ReactiveFormsModule, AngularValidateBrLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
