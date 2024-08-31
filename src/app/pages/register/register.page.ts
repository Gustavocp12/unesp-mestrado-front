import {Component, OnInit, Output} from '@angular/core';
import {LoginData, PersonalData, Register} from "../../shared/interfaces/register";

enum Page {
  PERSONAL_DATA = 1,
  LOGIN_DATA = 2
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  actualPage = Page.PERSONAL_DATA;
  registerData: Register = {
    name: '',
    phone: 0,
    clinic: '',
    crmv: 0,
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  receivePersonalData(event: PersonalData) {
    this.registerData = { ...this.registerData, ...event };
  }

  receiveLoginData(event: LoginData) {
    this.registerData = { ...this.registerData, ...event };
  }

  register(){
    console.log(this.registerData);
  }

  nextPage() {
    this.actualPage = Page.LOGIN_DATA;
  }

  previousPage() {
    this.actualPage = Page.PERSONAL_DATA;
  }



}
