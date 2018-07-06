import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './samples/components/contact/contact.component';
import { AngularValidateBrLibModule } from 'projects/angular-validate-br/src/public_api';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, ContactComponent, HeaderComponent, SidebarComponent, FooterComponent, NavBarComponent],
  imports: [BrowserModule, ReactiveFormsModule, AngularValidateBrLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
