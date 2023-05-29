import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppWrapperComponent } from './components/layouts/app-wrapper/app-wrapper.component';
import { SignInComponent } from './components/layouts/app-wrapper/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/layouts/app-wrapper/auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
