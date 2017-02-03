import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ForgotPasswordPage, LoginPage, RegisterPage } from './ionic/index';

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
  providers: []
})
export class StormpathIonicModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StormpathIonicModule
    };
  }

}
