import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ForgotPasswordPage, LoginPage, RegisterPage } from './ionic/index';
import { StormpathModule } from 'angular-stormpath';

@NgModule({
  declarations: [
    ForgotPasswordPage,
    LoginPage,
    RegisterPage
  ],
  imports: [IonicModule, StormpathModule],
  exports: [
    ForgotPasswordPage,
    LoginPage,
    RegisterPage
  ],
  providers: []
})
export class StormpathIonicModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StormpathIonicModule
    };
  }

}
