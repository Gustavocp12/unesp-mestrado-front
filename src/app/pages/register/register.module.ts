import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import {PersonalDataComponent} from "./personal-data/personal-data.component";
import {LoginDataComponent} from "./login-data/login-data.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, PersonalDataComponent, LoginDataComponent]
})
export class RegisterPageModule {}
