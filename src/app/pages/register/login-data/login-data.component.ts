import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginData} from "../../../shared/interfaces/register";

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.scss'],
})
export class LoginDataComponent  implements OnInit {

  @Output() loginD = new EventEmitter<LoginData>();

  loginData: LoginData = {
    email: '',
    password: ''
  }
  emailValid: boolean = true;

  emitValues(){
    this.validateEmail();

    if (this.emailValid){
      this.loginD.emit(this.loginData);
    }
  }

  validateEmail(){
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.emailValid = emailPattern.test(this.loginData.email);
  }


  constructor() { }

  ngOnInit() {}

}
