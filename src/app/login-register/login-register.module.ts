import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRegisterRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginRegisterModule { }
