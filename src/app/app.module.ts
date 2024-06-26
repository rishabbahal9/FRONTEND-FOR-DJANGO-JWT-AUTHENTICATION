import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './body/login/login.component';
import { SignupComponent } from './body/signup/signup.component';
import { PageNotFoundComponent } from './body/page-not-found/page-not-found.component';
import { LoginFormComponent } from './body/login/login-form/login-form.component';
import { FormCardComponent } from './template/form-card/form-card.component';
import { SignupFormComponent } from './body/signup/signup-form/signup-form.component';
import { ForgotPasswordComponent } from './body/forgot-password/forgot-password.component';
import { ForgotPasswordFormComponent } from './body/forgot-password/forgot-password-form/forgot-password-form.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HomeComponent } from './body/home/home.component';
import { ProfileComponent } from './body/profile/profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { VerifyUserComponent } from './body/verify-user/verify-user.component';
import { ResetForgotPasswordComponent } from './body/reset-forgot-password/reset-forgot-password.component';
import { ResetForgotPasswordFormComponent } from './body/reset-forgot-password/reset-forgot-password-form/reset-forgot-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    LoginFormComponent,
    FormCardComponent,
    SignupFormComponent,
    ForgotPasswordComponent,
    ForgotPasswordFormComponent,
    HomeComponent,
    ProfileComponent,
    SideNavComponent,
    VerifyUserComponent,
    ResetForgotPasswordComponent,
    ResetForgotPasswordFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
