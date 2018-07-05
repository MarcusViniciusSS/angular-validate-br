import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularValidateBrLibModule } from 'projects/angular-validate-br/src/public_api';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './samples/components/contact/contact.component';

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [BrowserModule, ReactiveFormsModule, AngularValidateBrLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
