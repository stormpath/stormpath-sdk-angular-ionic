import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ForgotPasswordPage, LoginPage, RegisterPage } from './ionic/index';
import { Stormpath, LoginService } from 'angular-stormpath';

@NgModule({
  declarations: [
    ForgotPasswordPage,
    LoginPage,
    RegisterPage
  ],
  imports: [IonicModule],
  exports: [
    ForgotPasswordPage,
    LoginPage,
    RegisterPage
  ],
  providers: [Stormpath, LoginService]
})
export class StormpathIonicModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StormpathIonicModule
    };
  }

}
